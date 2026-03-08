# Protocol Analysis - ZK Device HTTP Communication

> **Deep dive into ZK device HTTP request/response patterns and data formats based on completed implementation.**

## 📋 Overview

This document contains comprehensive analysis of HTTP communication between ZK biometric devices and the backend server. All information is derived from the actual implemented iClock protocol handler and verified device behavior.

## 🔍 HTTP Communication Patterns

### Base Communication
- **Protocol**: HTTP/1.1
- **Method**: GET/POST  
- **Content-Type**: text/plain;charset=UTF-8 (for device communication)
- **User-Agent**: iClock Proxy/1.09 (ZK devices)

### Request Structure
```
[HTTP Method] [Endpoint] HTTP/1.1
Host: [Server IP:Port]
User-Agent: iClock Proxy/1.09
MAC: [Device MAC Address]
Content-Type: text/plain;charset=UTF-8

[Request Body]
```

## 📡 Communication Flow

### Device Registration & Connection
**Initial Connection Sequence:**
1. Device sends: `GET /iclock/cdata?SN=[serial]&options=all&pushver=[version]` - Initial connection request
2. Server responds: Device configuration options with protocol parameters
3. Device establishes communication session and begins heartbeat cycle
4. Optional: `POST /iclock/registry` for device registration

### Active Communication Cycle
**Primary Heartbeat & Command Polling:**
The main communication mechanism is the `/iclock/getrequest` endpoint where devices:
- Poll for pending commands
- Maintain connection heartbeat  
- Receive command queues for execution

```
GET /iclock/getrequest?SN=[serial]&INFO=[device_info] HTTP/1.1
Host: [server]
User-Agent: iClock Proxy/1.09
```

**Response:**
```
HTTP/1.1 200 OK
Content-Type: text/plain

C:[command_id]:[command_data]
C:[command_id2]:[command_data2]
```

**Frequency:** Configurable via `Delay` field in connection response (default: 10 seconds)

## 🛠️ Request/Response Formats

### Device Connection Options
**Request:**
```
Method: GET
Endpoint: /iclock/cdata
Query Parameters:
  - SN: Device serial number (e.g., "CXQW123456789")
  - options: "all" (request all options)
  - language: Language ID (e.g., "69" for English)
  - pushver: Push protocol version (e.g., "2.4.1", "3.1.2")
  - DeviceType: Device type identifier
  - PushOptionsFlag: Options flag (e.g., "1")
```

**Server Response:**
```
Status: 200
Content-Type: text/plain
Body:
GET OPTION FROM: CXQW123456789
TransFlag=TransData AttLog	OpLog	AttPhoto	EnrollFP	EnrollUser	FPImag	ChgUser	ChgFP	FACE	UserPic	FVEIN	BioPhoto
ServerVer=2.4.1
PushProtVer=2.4.1
Encrypt=0
EncryptFlag=1000000000
SupportPing=1
PushOptionsFlag=1
MaxPostSize=1048576
PushOptions=UserCount,TransactionCount,FingerFunOn,FPVersion,FPCount,FaceFunOn,FaceVersion,FaceCount,FvFunOn,FvVersion,FvCount,PvFunOn,PvVersion,PvCount,BioPhotoFun,BioDataFun,PhotoFunOn,~LockFunOn,CardProtFormat,~Platform,MultiBioPhotoSupport,MultiBioDataSupport,MultiBioVersion
MultiBioDataSupport=0:1:1:0:0:0:0:1:1:1
MultiBioPhotoSupport=0:0:0:0:0:0:0:0:0:1
TimeZone=3
TransTimes=00:00;14:05
TransInterval=1
ErrorDelay=60
Delay=10
Realtime=1
Stamp=[timestamp]
OpStamp=[timestamp]
PhotoStamp=0
```

### Data Push Operations

#### Attendance Records Push
**Request:**
```
Method: POST
Endpoint: /iclock/cdata
Query Parameters:
  - SN: Device serial number
  - table: "ATTLOG" (attendance logs)
  - Stamp: Timestamp (optional)
Content-Type: text/plain

Body Formats:
```

**Push Version Variations:**
The attendance data format varies based on the device's `pushver` parameter:

- **Version 3.1.2+** (Key-Value Format):
```
Time=2025-01-15 09:30:00\tPIN=123
Time=2025-01-15 10:15:00\tPIN=456
```

- **Version 2.4.x and below** (Tab-Delimited Format):
```
1\t123\t2025-01-15 09:30:00\t1\t0\t0\t0
2\t456\t2025-01-15 10:15:00\t1\t0\t0\t0
```

**Tab-Delimited Field Structure:**
```
[ID]\t[User_PIN]\t[DateTime]\t[Verify_Type]\t[Work_Code]\t[Reserved1]\t[Reserved2]
```

**Response:**
```
Status: 200
Body: OK
```

#### User Data Operations Push
**Request:**
```
Method: POST
Endpoint: /iclock/cdata
Query Parameters:
  - SN: Device serial number
  - table: "OPERLOG"

Body Format:
USER PIN=123	Name=John Doe	Pri=0	Passwd=1234	Card=123456789
FP Pin=123	FID=1	Size=1640	Valid=1	TMP=<base64_template>
BIODATA Pin=123	No=0	Index=4	Type=9	MajorVer=12	MinorVer=0	Size=2048	Tmp=<template>
```

#### Options Configuration Push
**Request:**
```
Method: POST
Endpoint: /iclock/cdata
Query Parameters:
  - SN: Device serial number
  - table: "options"

Body: Device capability and configuration data
~DeviceName=Biopro SA40
MAC=00:17:61:11:cd:3b
TransactionCount=150
UserCount=25
FingerFunOn=1
FPCount=45
FPVersion=10
FaceFunOn=1
FaceVersion=12
FaceCount=8
FvFunOn=0
FvVersion=0
FvCount=0
PvFunOn=1
PvVersion=12
PvCount=5
~SerialNumber=CXQW123456789
```

### Command System

#### Device Command Polling
**Device Request:**
```
Method: GET
Endpoint: /iclock/getrequest
Query: SN=[serial_number]&INFO=[comma_separated_info]
```

**Server Response Format:**
```
Status: 200
Content-Type: text/plain

C:[command_id]:[command_string]
C:[command_id2]:[command_string2]
```

**Examples:**
```
C:28:DATA UPDATE USERINFO PIN=123	Name=John Doe	Pri=0
C:29:DATA QUERY ATTLOG StartTime=2025-01-01 EndTime=2025-01-31
C:30:ENROLL_FP PIN=456	FID=1	RETRY=3	OVERWRITE=1
```

#### Command Confirmation
**Device Request:**
```
Method: POST
Endpoint: /iclock/devicecmd
Content-Type: text/plain

Body Format:
ID=[command_id]&Return=[status_code]&CMD=[command_type]
Additional device-specific response data
```

**Examples:**
```
Standard Command Confirmation:
ID=28&Return=0&CMD=DATA

INFO Command Response:
ID=26&Return=0&CMD=INFO
~DeviceName=Biopro SA40
MAC=00:17:61:11:cd:3b
TransactionCount=1
UserCount=1
FPCount=2
~SerialNumber=CXQW123456789

Shell Command Response:
ID=27
SN=CXQW123456789
Return=0
CMD=Shell
FILENAME=shellout.txt
Content=123|John Doe|0
```

## 📊 Data Processing Implementation

### Attendance Data Processing
**Multi-Version Format Support:**
The system automatically detects and processes different attendance formats:

```typescript
// Key-value format detection
if (body.includes('=')) {
    // Parse: Time=value\tPIN=value format  
    const time = line.match(/\w*time\w*=([^&\t\n]+)/i)?.[1];
    const pin = line.match(/\w*pin\w*=([^&\t\n]+)/i)?.[1];
} else {
    // Parse: id\tuser_pin\ttime\tverify_type\twork_code\treserved1\treserved2 format
    const parts = line.split('\t');
    if (parts.length >= 3) {
        const user_pin = parts[1];  // User PIN is second field
        const time = parts[2];      // Time is third field
    }
}
```

**Processing Pipeline:**
1. **Format Detection**: Automatic detection of push version format
2. **Data Parsing**: Extract user_pin and timestamp from various formats
3. **User Validation**: Batch validation of user existence
4. **Attendance Creation**: Bulk insert of valid attendance records
5. **Device Update**: Update device stamp and heartbeat

### User & Biometric Data Processing
**Operations Processing:**
The system handles multiple operation types in a single push:

- **USER Operations**: User account creation/updates
- **FP Operations**: Fingerprint template processing  
- **BIODATA Operations**: Face/palm biometric data processing
- **OPLOG Operations**: Operational log entries

**Biometric Template Handling:**
- **Fingerprints**: Stored directly in biodata entity with type=1
- **Face/Palm**: JSON templates automatically split into multiple device commands
- **Version Compatibility**: Templates only sent to compatible device versions

### Command Transaction Processing
**Command Lifecycle:**
1. **Command Creation**: Commands created via REST API or automated processes
2. **Queue Management**: Commands queued per device with priority handling
3. **Delivery**: Commands delivered during device getrequest polling
4. **Execution Tracking**: Command execution status tracked via devicecmd confirmations
5. **Result Processing**: Command results parsed and stored

## 🔢 Device Authentication & Security

### Authentication Method
- **Primary**: Serial number (SN) parameter validation
- **Secondary**: MAC address header verification (optional)
- **Database Lookup**: Device registration validation
- **Context Guard**: Automatic device context injection

### Device Context System
**Implementation:**
```typescript
@UseGuards(DeviceContextGuard)
export class IclockController {
  async getOptions(@CurrentDevice() device: Device) {
    // Device automatically authenticated and injected
  }
}
```

**Security Features:**
- Device registration requirement
- Serial number uniqueness enforcement
- IP address tracking and validation
- Last activity monitoring for device health

## 🎛️ Advanced Features

### Biometric Version Compatibility
**Template Version Matching:**
```typescript
deviceSupportsBiometricTemplate(device: Device, type: BiometricType, majorVersion: number): boolean {
    switch (type) {
        case BiometricType.FINGERPRINT:
            return device.fingerprint_version <= majorVersion;
        case BiometricType.FACE:
            return device.face_version <= majorVersion;
        case BiometricType.PALM:
            return device.palm_version <= majorVersion;
    }
}
```

### Device Health Monitoring
**Automatic Heartbeat Management:**
- **Online Status**: Updated on every device communication
- **Last Heartbeat**: Tracked per device interaction
- **Offline Detection**: Automatic offline marking after missed heartbeats (5+ minutes)
- **Health Checks**: Periodic device connectivity validation

### Command System Features
**Advanced Command Capabilities:**
- **Raw SQL Execution**: Direct database queries on device
- **Batch Operations**: Multiple commands in single delivery
- **Priority Queuing**: High/medium/low priority command processing
- **Result Tracking**: Full command execution audit trail

## 📝 Protocol Compliance & Error Handling

### Response Standards
- **Success Response**: "OK" for successful data operations
- **Error Response**: "Terminal Not Authorized" for unknown devices
- **HTTP Status**: Always 200 OK (ZK devices expect 200 regardless of error)
- **Content-Type**: text/plain for all device communication

### Error Conditions
- **Unknown Device**: Serial number not found in device registry
- **Malformed Data**: Data parsing errors logged but acknowledged
- **Command Failures**: Command execution failures tracked per device
- **Network Issues**: Automatic retry handling by devices

### Implementation Error Handling
```typescript
// Global exception filter for device communication  
if (request.url.startsWith('/iclock/')) {
    // Always return 200 for device endpoints
    response.status(200).send('Terminal Not Authorized');
} else {
    // Standard HTTP error codes for REST API
    response.status(error.status).json(error.response);
}
```

## 🧪 Testing & Validation

### Protocol Testing
- **Device Emulator**: Complete ZK device emulator for testing
- **Real Device Validation**: Tested with actual ZK hardware
- **Format Compatibility**: Multi-version push format support verified
- **Command Execution**: Full command cycle testing

### Performance Characteristics
- **Concurrent Devices**: Supports multiple simultaneous device connections
- **Data Processing**: Bulk operations for attendance and user data
- **Memory Usage**: Efficient streaming processing for large datasets
- **Response Times**: Sub-100ms response times for device operations

---

## 📊 Sample Protocol Captures

### Complete Device Registration Flow
**Initial Connection:**
```
GET /iclock/cdata?SN=CXQW123456789&options=all&language=69&pushver=2.4.1&DeviceType=middle%20east&PushOptionsFlag=1 HTTP/1.1
Host: 192.168.1.100:3000
User-Agent: iClock Proxy/1.09
MAC: 00:17:61:11:cd:3b
```

**Server Configuration Response:**
```
HTTP/1.1 200 OK
Content-Type: text/plain

GET OPTION FROM: CXQW123456789
TransFlag=TransData AttLog	OpLog	AttPhoto	EnrollFP	EnrollUser	FPImag	ChgUser	ChgFP	FACE	UserPic	FVEIN	BioPhoto
ServerVer=2.4.1
PushProtVer=2.4.1
TimeZone=3
Delay=10
Realtime=1
Stamp=1737927542000
OpStamp=1737927542000
```

### Attendance Data Push (Tab-Delimited Format)
**Device Push:**
```
POST /iclock/cdata?SN=CXQW123456789&table=ATTLOG HTTP/1.1
Content-Type: text/plain

1\t123\t2025-01-26 14:30:15\t1\t0\t0\t0
2\t456\t2025-01-26 14:35:22\t1\t0\t0\t0
```

### Attendance Data Push (Key-Value Format)
**Device Push (v3.1.2+):**
```
POST /iclock/cdata?SN=CXQW123456789&table=ATTLOG HTTP/1.1
Content-Type: text/plain

Time=2025-01-26 14:30:15\tPIN=123
Time=2025-01-26 14:35:22\tPIN=456
```

### Command Delivery & Execution
**Command Request:**
```
GET /iclock/getrequest?SN=CXQW123456789&INFO=,1,2,1,192.168.1.101 HTTP/1.1
```

**Command Response:**
```
HTTP/1.1 200 OK

C:28:DATA UPDATE USERINFO PIN=789	Name=New Employee	Pri=0	Passwd=1234
C:29:ENROLL_FP PIN=789	FID=1	RETRY=3	OVERWRITE=1
```

**Command Confirmation:**
```
POST /iclock/devicecmd HTTP/1.1
Content-Type: text/plain

ID=28&Return=0&CMD=DATA
ID=29&Return=0&CMD=ENROLL_FP
```

---

**Note**: This analysis reflects the actual implemented iClock protocol handler. All examples and formats are verified against the production system.