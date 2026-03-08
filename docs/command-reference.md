# Command Reference - ZK Device Commands

> **Complete reference of device commands and database schemas for ZK device management.**

## 📋 Overview

This document catalogs all available commands that can be sent to ZK devices, along with database schemas for raw SQL operations. Commands are built using the CommanderService and sent to devices via the iClock protocol.

## 🔧 Command Categories

### Data Operations
- **Query Commands** - Retrieve data from device
- **Update Commands** - Modify existing data
- **Delete Commands** - Remove data from device

### Biometric Operations
- **Fingerprint Enrollment** - Enroll new fingerprints
- **Fingerprint Management** - Update/delete fingerprint data

### Device Management
- **System Commands** - Reboot, clear data, check status
- **Raw SQL** - Direct database operations

---

## 📊 Available Command Methods

### DATA QUERY
Retrieve data from device database tables.

**Syntax:**
```
DATA QUERY <TABLE> [WHERE_CONDITIONS]
```

📝 **Formatting Rules:**
- WHERE conditions are separated by **spaces**

**Tables:**
```
- ATTLOG: Attendance records
- USERINFO: User account data
- FINGERTMP: Fingerprint templates
- BIODATA: Biometric data (face/palm templates)
```

**Examples:**
```bash
# Get all attendance records
DATA QUERY ATTLOG

# Get attendance for specific user
DATA QUERY ATTLOG PIN=123

# Get attendance within date range
DATA QUERY ATTLOG StartTime=2025-01-01 EndTime=2025-01-31

# Get specific user info
DATA QUERY USERINFO PIN=123

# Get all fingerprints
DATA QUERY FINGERTMP

# Get fingerprints for specific user
DATA QUERY FINGERTMP PIN=123

# Get all biometric data
DATA QUERY BIODATA

# Get biometric data for specific user
DATA QUERY BIODATA Pin=123
```

**Response:**

Query results are returned via device data push to the server:
```
POST /iclock/cdata?SN=<device_serial>&table=<table_name>
```
The device sends the requested data in multiple lines as tab-separated values in the request body.
```
Attendance: (Table: ATTLOG)
<User_PIN>\t<Date_Time>\t...

User Info: (Table: OPERLOG)
User Pin=<User_PIN>\tName=<Name>\t...

Fingerprint: (Table: OPERLOG)
FP Pin=<User_PIN>\tFID=<Finger_ID>\t...
```

### DATA UPDATE
Update existing records in device database.

**Syntax:**
```
DATA UPDATE <TABLE> <WHERE_CONDITIONS>	<UPDATE_DATA>
```

📝 **Formatting Rules:**
- WHERE conditions are separated by **spaces**
- UPDATE_DATA parameters use **tab** (`\t`) separation

**Examples:**
```bash
# Update user information
DATA UPDATE USERINFO PIN=123	Name=John Doe	Pri=0	Passwd=1234	Card=123456789

# Update fingerprint template
DATA UPDATE FINGERTMP PIN=123	FID=1	Size=1640	Valid=1	TMP=<base64_template>

# Update biometric template (face/palm)
DATA UPDATE BIODATA Pin=123	No=0	Index=4	Valid=1	Duress=0	Type=9	MajorVer=12	MinorVer=0	Size=2048	Tmp=<base64_template>
```

📝 **Biometric Template Notes:**
- **Fingerprints**: Use `FINGERTMP` table with single template per finger
- **Face/Palm**: Use `BIODATA` table with multiple index entries per biometric
- **Device Compatibility**: Templates are only sent to devices with matching biometric versions (device version must equal template's major version)
- **JSON Templates**: Face/palm templates stored as JSON are automatically split into multiple commands, one per index

**Biometric Type Values:**
- `1` - Fingerprint (use FINGERTMP table instead)
- `8` - Palm print
- `9` - Face recognition

**Response:**

Update operations return the standard command confirmation.

### DATA DELETE
Remove records from device database.

**Syntax:**
```
DATA DELETE <TABLE> <WHERE_CONDITIONS>
```

📝 **Formatting Rules:**
- WHERE conditions are separated by **spaces**

**Examples:**
```bash
# Delete specific user
DATA DELETE USERINFO PIN=123

# Delete user's fingerprints
DATA DELETE FINGERTMP PIN=123

# Delete specific fingerprint
DATA DELETE FINGERTMP PIN=123 FID=1

# Delete attendance records for user
DATA DELETE ATTLOG PIN=123
```

**Response:**

Delete operations return the standard command confirmation.

### ENROLL FP
Initiate fingerprint enrollment process on device.

**Syntax:**
```
ENROLL_FP PIN=<user_pin>	FID=<finger_id>	RETRY=<attempts>	OVERWRITE=<1|0>
```

📝 **Formatting Rules:**
- Use **tab** (`\t`) separation between parameters

**Examples:**
```bash
# Enroll fingerprint for user
ENROLL_FP PIN=123	FID=1	RETRY=3	OVERWRITE=1

# Enroll multiple fingerprints
ENROLL_FP PIN=123	FID=2	RETRY=3	OVERWRITE=1
```

**Response:**

Enrollment results (fingerprint templates) are sent by the device via data push:
```
POST /iclock/cdata?SN=<device_serial>&table=OPERLOG

FP Pin=<User_PIN>\tFID=<Finger_ID>\t...
```

### System Commands

#### CHECK
Command device reconnect to check latest configuration and update if needed.

**Syntax:**
```
CHECK
```

#### INFO
Get device information and statistics.

**Syntax:**
```
INFO
```

#### REBOOT
Restart the device.

**Syntax:**
```
REBOOT
```

#### CLEAR LOG
Clear attendance log data.

**Syntax:**
```
CLEAR LOG
```

#### CLEAR DATA
Clear all user data including fingerprints and attendance logs.

**Syntax:**
```
CLEAR DATA
```

---

## 🛠️ Raw SQL Commands

### Direct Database Access
For advanced operations, you can send raw SQL commands to the device database.

**⚠️ Important Limitations:**
- **Device Model Variations**: Newer device models may have firmware restrictions on direct database access
- **Schema Differences**: Table structures and names may vary between firmware versions
- **Access Restrictions**: Some devices block SELECT statements while allowing schema viewing only
- **Security Protection**: Newer firmware may return errors for protected tables (USER_INFO, fptemplate)

**Syntax:**
```bash
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "SQL_QUERY"
```

**Examples:**

#### Query Operations
```sql
-- Get all users with their privileges
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "SELECT User_PIN, Name, Privilege FROM USER_INFO;"

-- Get attendance count by user
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "SELECT User_PIN, COUNT(*) FROM ATTLOG GROUP BY User_PIN;"

-- Get recent attendance records
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "SELECT * FROM ATTLOG WHERE Date_Time > datetime('now', '-7 days');"

-- Get fingerprint count by user
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "SELECT pin, COUNT(*) as finger_count FROM fptemplate10 GROUP BY pin;"
```

#### Update Operations
```sql
-- Update user privilege
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "UPDATE USER_INFO SET Privilege=14 WHERE User_PIN='123';"

-- Update user name
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "UPDATE USER_INFO SET Name='John Smith' WHERE User_PIN='123';"

-- Reset user password
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "UPDATE USER_INFO SET Password='0000' WHERE User_PIN='123';"
```

#### Delete Operations
```sql
-- Delete specific user
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "DELETE FROM USER_INFO WHERE User_PIN='123';"

-- Delete old attendance records
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "DELETE FROM ATTLOG WHERE Date_Time < datetime('now', '-30 days');"

-- Delete all fingerprints for user
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "DELETE FROM fptemplate10 WHERE pin=123;"
```

#### Schema Operations
```sql
-- List all tables
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db ".tables"

-- Get table schema
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db ".schema USER_INFO"

-- Get database info
shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "PRAGMA database_list;"
```

**Response:**

Raw SQL command results are returned via the default command confirmation with the SQL output in the `Content` field of the response body.

## 📊 Database Schema Reference

### ATTLOG (Attendance Log)
Stores attendance/access records.

**Schema:**
```sql
CREATE TABLE [ATTLOG] (
  [ID] integer PRIMARY KEY AUTOINCREMENT,
  [User_PIN] varchar(24),
  [Verify_Type] INT,
  [Date_Time] datetime,
  [Work_Code] INT,
  [Status] INT,
  [Reserved] INT
);
```

**Field Descriptions:**
- `ID`: Auto-increment record ID
- `User_PIN`: User identifier (pin)
- `Verify_Type`: Verification method (1=Fingerprint, 15=Face+Fingerprint)
- `Date_Time`: Timestamp of attendance
- `Work_Code`: Work code (usually 0)
- `Status`: Status code (usually 0)
- `Reserved`: Reserved field (usually 0)

**Sample Data:**
```
1	123	2025-01-15 09:30:00	1	0	0	0
2	456	2025-01-15 10:15:00	15	0	0	0
```

### USERINFO (User Information)
Stores user account data.

**Schema:**
```sql
CREATE TABLE [USER_INFO] (
  [ID] integer PRIMARY KEY AUTOINCREMENT,
  [User_PIN] varchar(24) UNIQUE,
  [Privilege] INT,
  [Password] varchar(24),
  [Name] varchar(24),
  [Card_Number] varchar(24),
  [Timezone1] INT DEFAULT 1,
  [Timezone2] INT DEFAULT 0,
  [Timezone3] INT DEFAULT 0
);
```

**Field Descriptions:**
- `User_PIN`: Unique user identifier
- `Privilege`: User privilege level (0=User, 14=Admin)
- `Password`: User password/PIN
- `Name`: Display name
- `Card_Number`: RFID card number
- `Timezone1/2/3`: Access timezone settings

**Sample Data:**
```
123	John Doe	0	1234	123456789	1	0	0
456	Jane Smith	14	5678	987654321	1	0	0
```

### FINGERTMP (Fingerprint Templates)
Stores biometric fingerprint data.

**Schema:**
```sql
CREATE TABLE [fptemplate10] (
  [ID] integer PRIMARY KEY AUTOINCREMENT,
  [pin] INT,
  [fingerid] INT,
  [template] TEXT,
  [size] INT,
  [valid] INT DEFAULT 1
);
```

**Field Descriptions:**
- `pin`: User PIN (foreign key to User_PIN)
- `fingerid`: Finger index (1-10)
- `template`: Base64 encoded fingerprint template
- `size`: Template size in bytes
- `valid`: Template validity (1=Valid, 0=Invalid)

**Sample Data:**
```
123	1	1640	1	TY9TUzIxAAAEzM4ECAUHCc7QAAAczWkBAAAAhHEnaMwZAIc...
123	2	1620	1	UZ8VUzIxBBBFzN5FDBVICd8RAAAdzXkCAAAAiIFobNxaAJd...
```

---

## 🔄 Command Response System

### Command Confirmation Formats

All commands return a confirmation response via the `/iclock/devicecmd` endpoint. The format varies depending on the command type:

#### Standard Commands (DATA, ENROLL, System Commands)
**Format:** Fields separated by `&` (URL-encoded style)
```
ID=<command_id>&Return=<status_code>&CMD=<command_type>
```

**Example:**
```
ID=28&Return=0&CMD=DATA
```

#### INFO Command
**Format:** Fields separated by `&` with additional device info on new lines
```
ID=<command_id>&Return=<status_code>&CMD=INFO
<DeviceInfo1>=<Value1>
<DeviceInfo2>=<Value2>
...
```

**Example:**
```
ID=26&Return=0&CMD=INFO
~DeviceName=Biopro SA40
MAC=00:17:61:11:cd:3b
TransactionCount=1
UserCount=1
FingerFunOn=1
FPCount=2
FWVersion=Ver 8.0.4.3-20220708
~SerialNumber=CQZ7231360296
```

#### Raw SQL Commands (Shell)
**Format:** Fields separated by new lines with `FILENAME` and `Content`
```
ID=<command_id>
SN=<device_serial>
Return=<status_code>
CMD=Shell
FILENAME=shellout.txt
Content=<sql_output>
```

**Example:**
```
ID=27
SN=CQZ7231360296
Return=0
CMD=Shell
FILENAME=shellout.txt
Content=1|Ali|0
```

### Response Fields

**Common Fields:**
- `ID`: Command execution ID
- `Return`: Status code (0=Success, non-zero=Error)  
- `CMD`: Command type executed

**Shell Command Specific:**
- `SN`: Device serial number
- `FILENAME`: Output filename (usually "shellout.txt")
- `Content`: SQL query results (pipe-separated values)

**INFO Command Specific:**
- Device information fields with `~` prefix for system info
- MAC address, user counts, version info, etc.
- Each field on a new line in `Key=Value` format

---

## 📝 Command Examples by Use Case

### User Management
```bash
# Add new user
DATA UPDATE USERINFO PIN=999	Name=New User	Pri=0	Passwd=1234	Card=999999999

# Promote user to admin
DATA UPDATE USERINFO PIN=999	Pri=14

# Change user password
DATA UPDATE USERINFO PIN=999	Passwd=5678

# Delete user completely
DATA DELETE USERINFO PIN=999
DATA DELETE FINGERTMP PIN=999
DATA DELETE ATTLOG PIN=999
```

### Biometric Management
```bash
# Enroll new fingerprint
ENROLL_FP PIN=123	FID=1	RETRY=3	OVERWRITE=1

# Update fingerprint template
DATA UPDATE FINGERTMP PIN=123	FID=1	Size=1640	Valid=1	TMP=<template_data>

# Update face biometric template (per index)
DATA UPDATE BIODATA Pin=123	No=0	Index=4	Valid=1	Duress=0	Type=9	MajorVer=12	MinorVer=0	Size=2048	Tmp=<template_data>

# Update palm biometric template (per index)
DATA UPDATE BIODATA Pin=123	No=0	Index=4	Valid=1	Duress=0	Type=8	MajorVer=12	MinorVer=0	Size=2048	Tmp=<template_data>

# Delete specific fingerprint
DATA DELETE FINGERTMP PIN=123 FID=1

# Delete specific biometric data
DATA DELETE BIODATA Pin=123 No=0

# Delete all fingerprints for user
DATA DELETE FINGERTMP PIN=123

# Delete all biometric data for user
DATA DELETE BIODATA Pin=123
```

### Attendance Management
```bash
# Get today's attendance
DATA QUERY ATTLOG StartTime=2025-01-26 EndTime=2025-01-26

# Get user's attendance this month
DATA QUERY ATTLOG PIN=123 StartTime=2025-01-01 EndTime=2025-01-31

# Clear old attendance data
DATA DELETE ATTLOG PIN=123
```

### Device Maintenance
```bash
# Check device status
CHECK

# Get device information
INFO

# Clear all attendance logs
CLEAR LOG

# Clear all user data (DANGER!)
CLEAR DATA

# Restart device
REBOOT
```

---

## 📝 Notes

### Command Format
- Commands are case-sensitive
- Parameters are separated by spaces for WHERE conditions
- Data updates use tab (`\t`) separation between parameter sets
- String values don't need quotes unless they contain spaces

### Table Names
- `ATTLOG` - Attendance/access logs
- `USERINFO` - User account information
- `FINGERTMP` - Fingerprint template data
- `BIODATA` - Biometric template data (face/palm)

### Common Parameters
- `PIN`/`Pin` - User identifier (string/number)
- `FID` - Finger ID (1-10) for fingerprint data
- `No` - Biometric number for face/palm data
- `Index` - Template index for face/palm data
- `Type` - Biometric type (1=Fingerprint, 8=Palm, 9=Face)
- `MajorVer`/`MinorVer` - Template version numbers
- `StartTime`/`EndTime` - Date filters (YYYY-MM-DD format)
- `Size` - Template size in bytes
- `Valid` - Template validity flag (1=valid, 0=invalid)
- `Duress` - Duress flag (0=normal, 1=duress)

### Best Practices
- Always test commands on a development device or emulator first
- Backup device data before bulk operations
- Use specific PIN filters to avoid affecting all users
- Monitor device responses for error messages
