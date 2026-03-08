```
Request sent: {
  method: 'get',
  url: 'http://192.168.100.41:80/iclock/cdata?SN=ZK-MOCK-001&options=all&language=69&pushver=2.4.1&DeviceType=middle%20east&PushOptionsFlag=1',
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
    'User-Agent': 'iClock Proxy/1.09',
    MAC: '00:17:61:08:22:4B',
    Connection: 'close',
    'X-Forwarded-For': '192.168.100.42'
  },
  timeout: 5000
}
Response received: {
  status: 200,
  data: 'GET OPTION FROM: ZK-MOCK-001\n' +
    'TransFlag=TransData AttLog\tOpLog\tAttPhoto\tEnrollFP\tEnrollUser\tFPImag\tChgUser\tChgFP\tFACE\tUserPic\tFVEIN\tBioPhoto\n' +
    'ServerVer=2.4.1\n' +
    'PushProtVer=2.4.1\n' +
    'Encrypt=0\n' +
    'EncryptFlag=1000000000\n' +
    'SupportPing=1\n' +
    'PushOptionsFlag=1\n' +
    'MaxPostSize=1048576\n' +
    'PushOptions=UserCount,TransactionCount,FingerFunOn,FPVersion,FPCount,FaceFunOn,FaceVersion,FaceCount,FvFunOn,FvVersion,FvCount,PvFunOn,PvVersion,PvCount,BioPhotoFun,BioDataFun,PhotoFunOn,~LockFunOn,CardProtFormat,~Platform,MultiBioPhotoSupport,MultiBioDataSupport,MultiBioVersion\n' +
    'MultiBioDataSupport=0:1:1:0:0:0:0:1:1:1\n' +
    'MultiBioPhotoSupport=0:0:0:0:0:0:0:0:0:1\n' +
    'TimeZone=3\n' +
    'TransTimes=00:00;14:05\n' +
    'TransInterval=1\n' +
    'ErrorDelay=60\n' +
    'Delay=10\n' +
    'Realtime=1\n' +
    'Stamp=0\n' +
    'OpStamp=0\n' +
    'PhotoStamp=0\n'
}
```


```
FP PIN=1 FID=6 Size=1640 Valid=1 TMP=TY9TUzIxAAAEzM4ECAUHCc7QAAAczWkBAAAAhHEnaMwZAIcPoQDqAIfCTwAwAPEOQAA0zIAPQQAyALEOo8w+ACEOJQCVAGXDtgBVACkPMABgzK8PhgBlAFcPsMxtADIPAAGwAL3CHgCEAEoPpQCNzBIOaACSAOIOtsyYADcPAAFbALDDNACjAD0PZwCrzLcOYgC0APYPksy2AK0OAAF9ALPDXQDIADUPJgDNzDQPvwDMAIYP+8zQALgPlgARAL3CJQDfADkPOwDrzLoPmgD2ABsPV8z4ACcPxADEAWPDRwARASIPpgASzagPxgAkARoPlswpAYMPRQDuAa3DpQAzAXgPpQA/zZcPGglemqIVNah8BypfCH+zbvNd/AOi/RJhwYdq2vrtEaCF+zeh+iIGcWcZnfo4CwZn/PUP/1+HMmDLveJpFQqS/xKgdcELBgsHXg466T/3ke+u49vZORemOc7upYOqjssHCTOP/g/96vaWDCvhNAilgxr+XAESwQ8jvfgV93d6Cc6IBzaFGQVSEes2WH82gcr1/xHaQrePiQJVh8/8jcMH3ZYGXxa2Gz/LiwRviIsGmyWqt+pdrQeGgOb1XkWni9cloXvw/2G3YIuGhEIBp3kWpSJdFQ2P3QKlnUfvFMIBofU/meffg+yu7Zd0M7m1c28gVgEC1dteAMy4ABBABQCpAQIzZwQAiQEJhwUEgwB6w8T9BcVcDMwzAwCXFww4BwSQDAzAVv0KxaUQ38E9TP0EAP0V8+EFAB4j90fCAEzS/EtUBQBU4XdKyAHSJRc7B8W7I9s/NwQAZCc/JwLM5l40f/4ExT00sYYEAHcufQXBAMykMRpEBAAtdy8MwQYBEDNMmcAAzHY1ACIGAHVcLwzBUQMA2KfxwAHMOjd3w/3CwACv8h//VwUA5EErxIoEAClO7f/0BATtTmmDBQAkkWDESQUAu1cgLMMA2kEoQ8AJAAec4vswwzXABQCvtzRgygHFujpH/8AAspUowEIHANxZMMQMwEIFARZZg/6bwAAPkkNrWjjD+A0CAINil8PGADOpYcEFALRv9cDEDA0Azbg6XgT9+TL/JxYAZHS0xMcPwmpZxE3DBsHGXgUAhVKTwwQKBJdIfYjCwcEEwwDMYoUA+f4GxRuDnHbADAAhiIxp+wxxjAMAZIzJ+xXMXI1JwoBnUMPAD6QFAIuNqQfCx8MBW21tn8K6/3RdBACWgKeRyQBTk3XDkYNiBMWinPj8wgwAqMOG//g2+f38wP7BOw0EpJo0ZMLDyAyjxsgBkIepkBPFV2K8xY5qwXJrXgUEe8VGwSAKABetMwxOwfz//gXFdK/8wcDFDwA1Yj1SvMPDeokLAMKwwjP+/sD//v84/wLMYU8G//4iwQCjXzVDBQCwxIPA+TEGAIWPpMIDtADMUZxAdw0Ak8g5RIPDwpcHAKe4Nb6hDgBcyzSwwcBsxcKlGADnDi37Mf///8D5/gXAxTP+/8D9wMA7/voyCQDizTdBO8D+zwEN1EDCCsUi54zDacPDhgbFKOf7wXQLAP7zg8D7M/vA/MFyCNVIEevCwMPDjwTVZx3biAUQojd0Oj4A3OI+d1cEEPZBHg7FBRCcT30FRwfcu1N3/lJCxQtHzQEAC0VSAA==

```

```
C:13:DATA UPDATE USERINFO PIN=1 Name=Ali Pri=0 Passwd= Card=  Grp=1 Verify=0
C:14:DATA UPDATE FINGERTMP PIN=1 FID=6 Size=1640 Valid=1   TMP=TY9TUzIxAAAEzM4ECAUHCc7QAAAczWkBAAAAhHEnaMwZAIcPoQDqAIfCTwAwAPEOQAA0zIAPQQAyALEOo8w+ACEOJQCVAGXDtgBVACkPMABgzK8PhgBlAFcPsMxtADIPAAGwAL3CHgCEAEoPpQCNzBIOaACSAOIOtsyYADcPAAFbALDDNACjAD0PZwCrzLcOYgC0APYPksy2AK0OAAF9ALPDXQDIADUPJgDNzDQPvwDMAIYP+8zQALgPlgARAL3CJQDfADkPOwDrzLoPmgD2ABsPV8z4ACcPxADEAWPDRwARASIPpgASzagPxgAkARoPlswpAYMPRQDuAa3DpQAzAXgPpQA/zZcPGglemqIVNah8BypfCH+zbvNd/AOi/RJhwYdq2vrtEaCF+zeh+iIGcWcZnfo4CwZn/PUP/1+HMmDLveJpFQqS/xKgdcELBgsHXg466T/3ke+u49vZORemOc7upYOqjssHCTOP/g/96vaWDCvhNAilgxr+XAESwQ8jvfgV93d6Cc6IBzaFGQVSEes2WH82gcr1/xHaQrePiQJVh8/8jcMH3ZYGXxa2Gz/LiwRviIsGmyWqt+pdrQeGgOb1XkWni9cloXvw/2G3YIuGhEIBp3kWpSJdFQ2P3QKlnUfvFMIBofU/meffg+yu7Zd0M7m1c28gVgEC1dteAMy4ABBABQCpAQIzZwQAiQEJhwUEgwB6w8T9BcVcDMwzAwCXFww4BwSQDAzAVv0KxaUQ38E9TP0EAP0V8+EFAB4j90fCAEzS/EtUBQBU4XdKyAHSJRc7B8W7I9s/NwQAZCc/JwLM5l40f/4ExT00sYYEAHcufQXBAMykMRpEBAAtdy8MwQYBEDNMmcAAzHY1ACIGAHVcLwzBUQMA2KfxwAHMOjd3w/3CwACv8h//VwUA5EErxIoEAClO7f/0BATtTmmDBQAkkWDESQUAu1cgLMMA2kEoQ8AJAAec4vswwzXABQCvtzRgygHFujpH/8AAspUowEIHANxZMMQMwEIFARZZg/6bwAAPkkNrWjjD+A0CAINil8PGADOpYcEFALRv9cDEDA0Azbg6XgT9+TL/JxYAZHS0xMcPwmpZxE3DBsHGXgUAhVKTwwQKBJdIfYjCwcEEwwDMYoUA+f4GxRuDnHbADAAhiIxp+wxxjAMAZIzJ+xXMXI1JwoBnUMPAD6QFAIuNqQfCx8MBW21tn8K6/3RdBACWgKeRyQBTk3XDkYNiBMWinPj8wgwAqMOG//g2+f38wP7BOw0EpJo0ZMLDyAyjxsgBkIepkBPFV2K8xY5qwXJrXgUEe8VGwSAKABetMwxOwfz//gXFdK/8wcDFDwA1Yj1SvMPDeokLAMKwwjP+/sD//v84/wLMYU8G//4iwQCjXzVDBQCwxIPA+TEGAIWPpMIDtADMUZxAdw0Ak8g5RIPDwpcHAKe4Nb6hDgBcyzSwwcBsxcKlGADnDi37Mf///8D5/gXAxTP+/8D9wMA7/voyCQDizTdBO8D+zwEN1EDCCsUi54zDacPDhgbFKOf7wXQLAP7zg8D7M/vA/MFyCNVIEevCwMPDjwTVZx3biAUQojd0Oj4A3OI+d1cEEPZBHg7FBRCcT30FRwfcu1N3/lJCxQtHzQEAC0VSAA==

```


/iclock/cdata?SN=CQZ7231360296&options=all&language=69&pushver=2.4.1&DeviceType=middle%20east&PushOptionsFlag=1


USER PIN=1\tName=Ali\tPri=0\tPasswd=\tCard=\tGrp=1\tTZ=0000000100000000\tVerify=0\tViceCard=\tStartDatetime=0\tEndDatetime=0\n

FP PIN=1 FID=7 Size=1792 Valid=1 TMP=TH1TUzIxAAAFPj0ECAUHCc7QAAAdP2kBAAAAheMwdz4dAHwPRACMAGUx/ABNAK4PqwBZPm0POgBfAJAPKj5gAN8PtwCvAC8x7ABrAKsOTgCEPogPpQCKAGMP+T6LALgMBAFQALEykwCXAIoPswCfPk4ORACmAIAPgD6oACUOawBoANcwuwC0ACwPxgG+PrUOYADNAPkPRz7PAEcP0gAVAKgxAgHTALUPBwDRPjcPqADeAOsPxT7lALgPBAEhALYwUgD0ADYPKwDwPqANRwD5AIMPcD7/ADYPIADBAVkw9AAKAacOsQAWP7sPIwAUAZgNZD4VAbUO/gDaAa4xTQAkAT4OPwAgP5EPsAArAWAP3z4zAZoPNAD7AekyugBCAZcPWwBOP5oPhgBMAVkPdD5MAZIPPgCXAXozIABWAWELjhNiIWIrcQ5+gPb0LzsW+xP/pwz+5JYnpXv99ivpXY+Hvp53roXHoZ6Cr8MH9QP4LQLA51MCQB5pH7J9NARzMwYEdfwOAr4IVFjc5qkCUS1Mfij5R3Z+AmMIONkwoNRXhYaprzuZi8Z7gacADQJLAgs8x/QSbZIK/wz7OGsTSXgx97+BDDqMAiIWkYCEiLg1XHpF+0aDSIRQsKgPjQA1F9sOuc17gVYBFf4A87PQLRNekbLuSH2vvtcBXQAaGt4piDQI/hEbRQVMhTNB3AA2IwobDP00RauALB6FBocSLLWjVf77yOZs62fHCBIyDeIPHw1TO9fywW7yjLOxnMhf/Nb9ZQIfBLvHZA3lAsv5KPnrxW4VsZZ9IwpAHNn/dP8nZR2CDD1FIUIBAtokGwQFpwAMOwQAssQQLDoB2BseWQXFyQQkVQMA2AEWOBQFHhne/DDASzpBxsD+/m8IAG7dfYG7DwB2HAYw+FNJNAFuHnrAw6LBgCgBHSTk/sA7/0XBOcD+U8D/PMMCPxUtVsXAwfoOBSY34P8wwP37OAE+00QgwfsDxf9UBPwGAGlddAGTCD4yX+LBKio7//v+CwA4YlrDp1XHOQEsZVZ+ScAAvlIl/sH/CwBzbi7+wcHB/cLApA4FN3bJ/UHA/jpBKTIBkCsQ//46wMUGbhkAD3fTgzNEDf7+/1X+wTrAxTMBiX2WxcQDxMX/wFbADgCHRo/B9sWLwGaAB8QVhn7BwP9VCQBKhSXBN08XAKSGYsDB/8LExMPDwQfAxMHBwMDA/sAF/Qs+RI1JZVhrPlEOPhCQzEz//jjAPSwBcDUD/yg6TERBVg4AkJKXAcXNrP7C/3sFAEuYlfvHyAMBBZn//gs+lJonQ1LBBcLHUA4Ah5wc/TpaxVjDwZgKAIdjIvh6aMEMAEKvhf77/P7B///A/D4YBYmxrcHAwv8Hw8aOw8HAbcBmlw4FVbA9wHjCWEzBAz6/tivAwWzNALyGMcHBbsQgxdLIlVpbgMSCxAbCxPr8wMDB/sEE/sXAw/0LAF/Q+Hh/VAoAQdFGwJH+xcX8+AcAwtfxw8W3BACp4TBw5AAX2chVZWj//u8n+MH+/sDAW20FwgA/EexGcyQAM/ai/8H9alHAwAfBiv7DxcHCwsIF/8X+wcDAwMD+BQgFb/k9lsJZCtV2BA7+k8HBmQXVRwd9/yoHEGMY4cH7/IQHEMsZGkf8+jgRUCccwMAE/xkurSiiQEdGO9nN/3fCwHfAw6sMFegyk//9/0Q6VQs+h7g6wH5yB//HqgUQLTlwKcEQNQFs//sFEDiF6fnE/wUQNUn0OCkALkNS/cD7wMYQP2uBxwQQOl7Gdld8AQtDAQAAzkVXPg==


ID=66
SN=CQZ7231360296
Return=0
CMD=Shell
FILENAME=shellout.txt
Content=ACC_ATT_LOG                 MESSAGE_QUEUE             
ACC_AUXIN_INFO              MulCardUser               
ACC_AUXOUT_INFO             Nation_LIST               
ACC_DAT_OTHERNAME           OPTION_INFO               
ACC_FIRST_OPEN              OP_LOGS                   
ACC_HOLIDAY_TAB             Options                   
ACC_INOUT_FUN               OutRelaySetting           
ACC_MULTI_USER              PERMISSION                
ACC_OP_LOG                  PERSONAL_PERDAY_SCHEDULING
ACC_RULE_NAME               PERSONAL_SCHEDULING       
ACC_RULE_TIME               PHOTO_INDEX               
ACC_TIME_ZONE               PRINT_OPTIONS             
ACC_TIME_ZONE_RULE          PRINT_TIMEZONE            
ACC_USER_AUTHORIZE          PersonalVSTimezone        
APN_LIST                    RES_LIST                  
APP_FUNC                    ROLE                      
APP_INFO                    ROLE_INFO                 
APP_PERMISSION              ROLE_PERMISSION           
ATT_LOG                     SHORT_STATE               
BELL_INFO                   SMS_INFO                  
CLASS_INFO                  STATE_TIME_ZONE           
DEPARTMENT                  TIMEGREETING_INFO         
DEPARTMENT_SCHEDULING       TIME_ZONE                 
DiffTimezoneVS              TIME_ZONE_EX              
DoorVSTimezone              USER_INFO                 
ExtUser                     USER_SMS                  
FACE_TEMPLATE_7             WAV_INFO                  
FINGER_VEIN_TEMPLATE        WGFormat                  
FUNC_LIST                   WIFI_INFO                 
FUNC_PERMISSION             WORK_CODE                 
HID_FORMAT                  acc_group                 
IMSI_LIST                   acc_holiday               
InputIOSetting              acc_timezone              
KEY_CODE                    acc_unlockcomb            
KEY_FUNC                    fptemplate09              
LANGUAGE_INFO               fptemplate10              
LARGE_MQ                  

CREATE TABLE [ATT_LOG] ( 
  [ID] integer PRIMARY KEY AUTOINCREMENT,  
  [User_PIN] varchar(24),  
  [Verify_Type] INT,  
  [Verify_Time] varchar(24),  
  [Status] INT,  
  [Work_Code_ID] INT,  
  [Sensor_NO] INT,  
  [Att_Flag] INT,  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT (0), 
  Temperature VARCHAR(24),  
  Mask_Flag INT);

ID=68
SN=CQZ7231360296
Return=0
CMD=Shell
FILENAME=shellout.txt
Content=1|1|1|2025-07-10T22:38:47|1|0|||2025-07-10T22:38:48||1||

ID=67
SN=CQZ7231360296
Return=0
CMD=Shell
FILENAME=shellout.txt
Content=CREATE TABLE [ACC_ATT_LOG] (  
[ID] integer PRIMARY KEY AUTOINCREMENT,  
[MainCard] varchar(24),  
[UserPIN] varchar(24),  
[Verified] INT,  
[DoorID] INT,  
[EventType] INT,  
[InOutState] INT,  
[TimeSecond] INT, 
[CREATE_ID] VARCHAR(24),  
[MODIFY_TIME] VARCHAR(24),  
[SEND_FLAG] INTEGER DEFAULT (0), 
Temperature VARCHAR(24),  
Mask_Flag INT);
CREATE TABLE [ACC_AUXIN_INFO] ( 
 [ID] integer PRIMARY KEY AUTOINCREMENT, 
 [num] INT, [inType] INT, 
 [timeZoneID] INT, 
 [CREATE_ID] VARCHAR(24), 
 [MODIFY_TIME] VARCHAR(24), 
 [SEND_FLAG] INTEGER DEFAULT 0 );
CREATE TABLE [ACC_AUXOUT_INFO] ( 
 [ID] integer PRIMARY KEY AUTOINCREMENT, 
 [num] INT, 
 [outType] INT, 
 [actionType] INT, 
 [reserve] INT, 
 [timeZoneID] INT, 
 [CREATE_ID] VARCHAR(24), 
 [MODIFY_TIME] VARCHAR(24), 
 [SEND_FLAG] INTEGER DEFAULT 0 );
CREATE TABLE [ACC_DAT_OTHERNAME] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Name] VARCHAR(64));
CREATE TABLE [ACC_FIRST_OPEN] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [UserPIN] varchar(24) UNIQUE, [DoorID] INT DEFAULT 1, [Timezone] INT);
CREATE TABLE [ACC_HOLIDAY_TAB] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [HolidayDay] INT, [HolidayType] INT, [Loop] INT);
CREATE TABLE [ACC_INOUT_FUN] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [Number] INT, [EventType] INT, [InAddr] INT, [OutType] INT, [OutAddr] INT, [OutTime] INT, [Reserved] INT);
CREATE TABLE [ACC_MULTI_USER] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [Number] INT, [DoorID] INT DEFAULT 1, [Group1] INT DEFAULT 0, [Group2] INT DEFAULT 0, [Group3] INT DEFAULT 0, [Group4] INT DEFAULT 0, [Group5] INT DEFAULT 0);
CREATE TABLE [ACC_OP_LOG] (  
[ID] integer PRIMARY KEY AUTOINCREMENT,  
[Admin] INT,  
[OP] INT,  
[time_second] INT,  
[Objs1] INT,  
[Objs2] INT,  
[Objs3] INT,  
[Objs4] INT,  
[Objs5] INT, 
[CREATE_ID] VARCHAR(24),  
[MODIFY_TIME] VARCHAR(24),  
[SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [ACC_RULE_NAME] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Rule_ID] INTEGER NOT NULL, [Name_ID] INTEGER NOT NULL);
CREATE TABLE [ACC_RULE_TIME] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Rule_Name_ID] INTEGER NOT NULL, [Time_ID] INTEGER NOT NULL);
CREATE TABLE [ACC_TIME_ZONE] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Start_Time] INTEGER DEFAULT (0), [End_Time] INTEGER DEFAULT (0));
CREATE TABLE [ACC_TIME_ZONE_RULE] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Type] INTEGER DEFAULT (0), [Time_Zone_ID] INTEGER NOT NULL);
CREATE TABLE [ACC_USER_AUTHORIZE] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [UserPIN] varchar(24), [AuthorizeTimezone] INT, [AuthorizeDoor] INT DEFAULT 1);
CREATE TABLE [APN_LIST] ( 
  [ID] INTEGER,  
  [Country] VARCHAR(32),  
  [Network] VARCHAR(64),  
  [APN] VARCHAR(64),  
  [Username] VARCHAR(64),  
  [Password] VARCHAR(64),  
  [OperatorAlias] VARCHAR(32),  
  [DialNumber] VARCHAR(32));
CREATE TABLE [APP_FUNC] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [App_Name] VARCHAR(64), 
  [Func_Name] VARCHAR(64));
CREATE TABLE [APP_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [App_Name] VARCHAR(64), 
  [App_Path] VARCHAR(128), 
  [Res_ID] INT, 
  [Flag] INT);
CREATE TABLE [APP_PERMISSION] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [App_Name] VARCHAR(64),  
  [Permission] INT);
CREATE TABLE [ATT_LOG] ( 
  [ID] integer PRIMARY KEY AUTOINCREMENT,  
  [User_PIN] varchar(24),  
  [Verify_Type] INT,  
  [Verify_Time] varchar(24),  
  [Status] INT,  
  [Work_Code_ID] INT,  
  [Sensor_NO] INT,  
  [Att_Flag] INT,  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT (0), 
  Temperature VARCHAR(24),  
  Mask_Flag INT);
CREATE TABLE [BELL_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Valid] INTEGER, 
  [Time] INTEGER, 
  [Wav_Index] INTEGER, 
  [Times] INTEGER, 
  [Way] INTEGER, 
  [Volume] INTEGER, 
  [Mon] INTEGER, 
  [Tue] INTEGER, 
  [Wed] INTEGER, 
  [Thu] INTEGER, 
  [Fri] INTEGER, 
  [Sat] INTEGER, 
  [Sun] INTEGER, 
  [ExtbellDelay] INTEGER);
CREATE TABLE [CLASS_INFO] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Class_No] INTEGER,  
  [Class_Name] VARCHAR(24),  
  [TimeStart1] INTEGER,  
  [TimeEnd1] INTEGER,  
  [TimeStart2] INTEGER,  
  [TimeEnd2] INTEGER,  
  [OvertimeStart] INTEGER,  
  [OvertimeEnd] INTEGER);
CREATE TABLE [DEPARTMENT] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Department_No] INTEGER DEFAULT 0,  
  [Department_Name] VARCHAR(24));
CREATE TABLE [DEPARTMENT_SCHEDULING] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Department_No] INTEGER,  
  [Class_No] INTEGER);
CREATE TABLE DiffTimezoneVS ( 
 ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
 SunTime1 int4 default 0, SunTime1VSUser int1 default 255, SunTime1VSDoor int1 default 255, 
 SunTime2 int4 default 0, SunTime2VSUser int1 default 255, SunTime2VSDoor int1 default 255, 
 SunTime3 int4 default 0, SunTime3VSUser int1 default 255, SunTime3VSDoor int1 default 255, 
 MonTime1 int4 default 0, MonTime1VSUser int1 default 255, MonTime1VSDoor int1 default 255, 
 MonTime2 int4 default 0, MonTime2VSUser int1 default 255, MonTime2VSDoor int1 default 255, 
 MonTime3 int4 default 0, MonTime3VSUser int1 default 255, MonTime3VSDoor int1 default 255, 
 TueTime1 int4 default 0, TueTime1VSUser int1 default 255, TueTime1VSDoor int1 default 255, 
 TueTime2 int4 default 0, TueTime2VSUser int1 default 255, TueTime2VSDoor int1 default 255, 
 TueTime3 int4 default 0, TueTime3VSUser int1 default 255, TueTime3VSDoor int1 default 255, 
 WedTime1 int4 default 0, WedTime1VSUser int1 default 255, WedTime1VSDoor int1 default 255, 
 WedTime2 int4 default 0, WedTime2VSUser int1 default 255, WedTime2VSDoor int1 default 255, 
 WedTime3 int4 default 0, WedTime3VSUser int1 default 255, WedTime3VSDoor int1 default 255, 
 ThuTime1 int4 default 0, ThuTime1VSUser int1 default 255, ThuTime1VSDoor int1 default 255, 
 ThuTime2 int4 default 0, ThuTime2VSUser int1 default 255, ThuTime2VSDoor int1 default 255, 
 ThuTime3 int4 default 0, ThuTime3VSUser int1 default 255, ThuTime3VSDoor int1 default 255, 
 FriTime1 int4 default 0, FriTime1VSUser int1 default 255, FriTime1VSDoor int1 default 255, 
 FriTime2 int4 default 0, FriTime2VSUser int1 default 255, FriTime2VSDoor int1 default 255, 
 FriTime3 int4 default 0, FriTime3VSUser int1 default 255, FriTime3VSDoor int1 default 255, 
 SatTime1 int4 default 0, SatTime1VSUser int1 default 255, SatTime1VSDoor int1 default 255, 
 SatTime2 int4 default 0, SatTime2VSUser int1 default 255, SatTime2VSDoor int1 default 255, 
 SatTime3 int4 default 0, SatTime3VSUser int1 default 255, SatTime3VSDoor int1 default 255, 
 Hol1Time1 int4 default 0, Hol1Time1VSUser int1 default 255, Hol1Time1VSDoor int1 default 255, 
 Hol1Time2 int4 default 0, Hol1Time2VSUser int1 default 255, Hol1Time2VSDoor int1 default 255, 
 Hol1Time3 int4 default 0, Hol1Time3VSUser int1 default 255, Hol1Time3VSDoor int1 default 255, 
 Hol2Time1 int4 default 0, Hol2Time1VSUser int1 default 255, Hol2Time1VSDoor int1 default 255, 
 Hol2Time2 int4 default 0, Hol2Time2VSUser int1 default 255, Hol2Time2VSDoor int1 default 255, 
 Hol2Time3 int4 default 0, Hol2Time3VSUser int1 default 255, Hol2Time3VSDoor int1 default 255, 
 Hol3Time1 int4 default 0, Hol3Time1VSUser int1 default 255, Hol3Time1VSDoor int1 default 255, 
 Hol3Time2 int4 default 0, Hol3Time2VSUser int1 default 255, Hol3Time2VSDoor int1 default 255, 
 Hol3Time3 int4 default 0, Hol3Time3VSUser int1 default 255, Hol3Time3VSDoor int1 default 255, 
 CREATE_ID varchar(24), MODIFY_TIME varchar(24), SEND_FLAG int4 default 0);
CREATE TABLE DoorVSTimezone ( 
 ID int4 default 0, 
 DoorID int1 default 0, 
 DevID int4 default 0, 
 TZVSID int4 default 0, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE ExtUser ( 
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
 Pin varchar(24), FunSwitch int4 default 0, 
 FirstName varchar(64), LastName varchar(64), 
 PersonalVS int1 default 255, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE [FACE_TEMPLATE_7] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [User_PIN] VARCHAR(64) NOT NULL,  
  [Face_ID] INTEGER,  
  [Valid] INTEGER,  
  [Size] INTEGER,  
  [Template] BLOB,  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [FINGER_VEIN_TEMPLATE] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [User_PIN] VARCHAR(64) NOT NULL,  
  [Fv_ID] INTEGER,  
  [Valid] INTEGER,  
  [Size] INTEGER,  
  [Template] BLOB,  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT (0), Fv_ID_Index INT);
CREATE TABLE [FUNC_LIST] ( 
  [ID] integer PRIMARY KEY AUTOINCREMENT,  
  [Func_Name] varchar(64) UNIQUE,  
  [Res_ID] INT,  
  [Type] INT,  
  [Path_Name] varchar(128),  
  [Function] varchar(64),  
  [Param] varchar(64),  
  [Flag] INT,  
  [Func_ID] INTEGER);
CREATE TABLE [FUNC_PERMISSION] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Func_Name] VARCHAR(64),  
  [Permission] INT);
CREATE TABLE [HID_FORMAT] ( 
  [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  
  [Card_Bit] INTEGER NOT NULL,  
  [Format_Name] VARCHAR(24),  
  [Card_Format] VARCHAR(64),  
  [First_Even] VARCHAR(64),  
  [Second_Even] VARCHAR(64),  
  [First_Odd] VARCHAR(64),  
  [Second_Odd] VARCHAR(64),  
  [Format_Type] INT,  
  [Status] INT, SiteCode INTEGER);
CREATE TABLE [IMSI_LIST] (
  [IMSI] INTEGER, 
  [Network] VARCHAR(64), 
  [country] VARCHAR(64));
CREATE TABLE InputIOSetting ( 
 ID int4 default 0, 
 Number int1 default 0, 
 InType int1 default 0, 
 TimezoneID int4 default 0, 
 DevID int4 default 0, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE [KEY_CODE] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [Key_Name] varchar(64), 
  [Res_ID] INT, 
  [Key_Value] INT);
CREATE TABLE [KEY_FUNC] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Key_Name] varchar(64), 
  [Func_Name] varchar(64), 
  [Flag] int);
CREATE TABLE [LANGUAGE_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Language_Flag] INTEGER, 
  [Language_Name] VARCHAR(24));
CREATE TABLE [LARGE_MQ] (
  [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
  [TABLE_NAME] VARCHAR(64), 
  [START_KEY] INTEGER DEFAULT (0), 
  [END_KEY] INTEGER DEFAULT (0), 
  [SEND_KEY] INTEGER DEFAULT (0), 
  [CONDITION] VARCHAR(2048) DEFAULT ('1=1'), 
  [TYPE] INTEGER DEFAULT (0), FIELD_LIST VARCHAR(256), PACK_SIZE INT, CMD_ID VARCHAR(32), CMD_DESC VARCHAR(64), ATTACH_INFO VARCHAR(2048));
CREATE TABLE [MESSAGE_QUEUE] (
  [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
  [TABLE_NAME] VARCHAR(24), 
  [TABLE_KEY] VARCHAR(64), 
  [OPERATE] VARCHAR(16), 
  [POST_DATA] BLOB, 
  [CREATE_TIME] VARCHAR(24), 
  [ERROR_CODE] INT, 
  [ERROR_MSG] VARCHAR(256), 
  [TRAIL_TIMES] INT);
CREATE TABLE MulCardUser ( 
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  
CardNo varchar(48),  
Pin varchar(24),  
LossCardFlag int1 default 0,  
CardType int1 default 0,  
CREATE_ID varchar(24),  
MODIFY_TIME varchar(24),  
SEND_FLAG int4 default 0);
CREATE TABLE [Nation_LIST] (
  [Name] VARCHAR(64), 
  [Short] VARCHAR(32));
CREATE TABLE [OPTION_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Option_Name] VARCHAR(128), 
  [Option_Value] VARCHAR(128), 
  [Encrypt_Flag] INTEGER DEFAULT (0), 
  [Factory_Set_Value] VARCHAR(128) DEFAULT (0), 
  [Is_Recovery_Factory_Set] INTEGER DEFAULT (0), 
  [Max_Value] INTEGER DEFAULT (0), 
  [Min_Value] INTEGER DEFAULT (0));
CREATE TABLE [OP_LOGS] ( 
  [ID] integer NOT NULL PRIMARY KEY AUTOINCREMENT,  
  [OpType] INT NOT NULL DEFAULT 0,  
  [Operator] varchar(24) DEFAULT 0,  
  [OpTime] varchar(24) NOT NULL DEFAULT 0,  
  [OpWho] varchar(24) DEFAULT 0,  
  [Value1] INT DEFAULT 0,  
  [Value2] INT DEFAULT 0,  
  [Value3] INT DEFAULT 0,  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT 0);
CREATE TABLE Options( ID integer primary key, optionsname varchar(24) unique, optionsvalue varchar(24));
CREATE TABLE OutRelaySetting ( 
 ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
 Num int1 default 0, 
 OutType int1 default 0, 
 ActionType int1 default 0, 
 TimezoneId int4 default 0, 
 DevID int4 default 0, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE [PERMISSION] (
  [ID] INTEGER PRIMARY KEY, 
  [Permission] INT);
CREATE TABLE [PERSONAL_PERDAY_SCHEDULING] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Pin] INTEGER,  
  [Date] VARCHAR(8),  
  [Class_No] INTEGER);
CREATE TABLE [PERSONAL_SCHEDULING] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Pin] INTEGER,  
  [Class_No] INTEGER);
CREATE TABLE [PHOTO_INDEX] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [Photo_Type] INT, 
  [Photo_Time] varchar(24), 
  [User_PIN] varchar(24), 
  [Create_ID] varchar(24), 
  [Modify_Time] varchar(24), 
  [Send_Flag] INTEGER DEFAULT (0));
CREATE TABLE [PRINT_OPTIONS](
 [User_PIN] varchar(64) NOT NULL,
 [Print_Flag] integer,
 [Print_Times] integer);
CREATE TABLE [PRINT_TIMEZONE](
 [Name] varchar(24) unique,
 [StartTime] integer,
 [EndTime] integer,
 [Valid] integer);
CREATE TABLE PersonalVSTimezone ( 
 ID int4 default 0, 
 Pin varchar(24), 
 DoorID int4 default 0, 
 DevID int4 default 0, 
 TZVSID int4 default 0, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE [RES_LIST] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Res_ID] int,  
  [Lang_ID] INT,  
  [Lang_Name] VARCHAR(128),  
  [Voice_Name] VARCHAR(128),  
  [Pic_Name] VARCHAR(128),  
  [Flag] INT DEFAULT (0));
CREATE TABLE [ROLE] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Role_Name] VARCHAR(64),  
  [Res_ID] INT,  
  [Description] VARCHAR(64),  
  [Using_Status] INT,  
  [Flag] INT);
CREATE TABLE ROLE_INFO( ID integer primary key, Role_Id INT unique, Role_Name varchar(24), Permissions_Value INT);
CREATE TABLE [ROLE_PERMISSION] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Role_Name] VARCHAR(64),  
  [Permission] INT);
CREATE TABLE [SHORT_STATE] ( 
  [ID] integer PRIMARY KEY AUTOINCREMENT,  
  [State_No] INT DEFAULT (0),  
  [State_Name] varchar(64),  
  [Description] varchar(64),  
  [Res_ID] INT,  
  [Auto_Change] INT,  
  [Mon] INTEGER,  
  [Tue] INTEGER,  
  [Wed] INTEGER,  
  [Thu] INTEGER,  
  [Fri] INTEGER,  
  [Sat] INTEGER,  
  [Sun] INTEGER);
CREATE TABLE [SMS_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Start_Time] VARCHAR(24), 
  [Valid_Time] INTEGER, 
  [Type] INTEGER, 
  [Content] VARCHAR(320), 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [STATE_TIME_ZONE] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [State_Name] varchar(64), 
  [Timezone_Name] varchar(64));
CREATE TABLE [TIMEGREETING_INFO] ( 
  [ttsID] INTEGER,  
  [startTime] INTEGER,  
  [endTime] INTEGER,  
  [Content] VARCHAR(24));
CREATE TABLE [TIME_ZONE] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [Timezone_Name] varchar(64), 
  [Mon_Time] INT, 
  [Tue_Time] INT, 
  [Wed_Time] INT, 
  [Thu_Time] INT, 
  [Fri_Time] INT, 
  [Sat_Time] INT, 
  [Sun_Time] INT);
CREATE TABLE TIME_ZONE_EX( ID INTEGER, Timezone_Name VARCHAR(64), Mon_Time1 INT, Mon_Time2 INT, Mon_Time3 INT, Mon_Time4 INT, Mon_Time5 INT, Mon_Time6 INT, Mon_Time7 INT, Tue_Time1 INT, Tue_Time2 INT, Tue_Time3 INT, Tue_Time4 INT, Tue_Time5 INT, Tue_Time6 INT, Tue_Time7 INT, Wed_Time1 INT, Wed_Time2 INT, Wed_Time3 INT, Wed_Time4 INT, Wed_Time5 INT, Wed_Time6 INT, Wed_Time7 INT, Thu_Time1 INT, Thu_Time2 INT, Thu_Time3 INT, Thu_Time4 INT, Thu_Time5 INT, Thu_Time6 INT, Thu_Time7 INT, Fri_Time1 INT, Fri_Time2 INT, Fri_Time3 INT, Fri_Time4 INT, Fri_Time5 INT, Fri_Time6 INT, Fri_Time7 INT, Sat_Time1 INT, Sat_Time2 INT, Sat_Time3 INT, Sat_Time4 INT, Sat_Time5 INT, Sat_Time6 INT, Sat_Time7 INT, Sun_Time1 INT, Sun_Time2 INT, Sun_Time3 INT, Sun_Time4 INT, Sun_Time5 INT, Sun_Time6 INT, Sun_Time7 INT);
CREATE TABLE [USER_INFO] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [User_PIN] varchar(24) UNIQUE, 
  [Privilege] INT, 
  [Name] varchar(48), 
  [Password] varchar(16), 
  [Face_Group_ID] INT, 
  [Acc_Group_ID] INT DEFAULT 1, 
  [Dept_ID] INT DEFAULT 1, 
  [Is_Group_TZ] INT DEFAULT 1, 
  [Verify_Type] INT DEFAULT 0, 
  [Main_Card] varchar(24), 
  [Vice_Card] varchar(24), 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT 0, 
  [Expires] INTEGER DEFAULT 0, 
  [StartDatetime] VARCHAR(24) DEFAULT 0, 
  [EndDatetime] VARCHAR(24) DEFAULT 0, 
  [VaildCount] INTEGER DEFAULT 0, 
  [Timezone1] INT DEFAULT 1, 
  [Timezone2] INT DEFAULT 0, 
  [Timezone3] INT DEFAULT 0);
CREATE TABLE [USER_SMS] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Sms_ID] INTEGER, 
  [User_PIN] VARCHAR(24), 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [WAV_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Wav_Name] VARCHAR(24), 
  [Wav_Path] VARCHAR(128), 
  [Type] INTEGER);
CREATE TABLE WGFormat ( 
 ID int4 default 0, 
 CardBit int4 default 0, 
 SiteCode int4 default 0, 
 FormatName varchar(32), 
 CardFormat varchar(520), 
 primary key(ID,CardBit) );
CREATE TABLE [WIFI_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [MAC] VARCHAR(20), 
  [ESSID] VARCHAR(64), 
  [Auth_Type] INTEGER, 
  [Auth_Key] VARCHAR(128), 
  [Connect_Time] VARCHAR(24));
CREATE TABLE [WORK_CODE] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Work_Code_Num] VARCHAR(24) UNIQUE,  
  [Work_Code_Name] VARCHAR(24),  
  [Flag] INTEGER DEFAULT 0, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [acc_group] (
  [ID] INTEGER NOT NULL DEFAULT 0, 
  [Verification] INTEGER DEFAULT 0, 
  [VaildHoliday] INTEGER DEFAULT 0, 
  [Timezone1] INTEGER DEFAULT 1, 
  [Timezone2] INTEGER DEFAULT 0, 
  [Timezone3] INTEGER DEFAULT 0, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT 0);
CREATE TABLE [acc_holiday] ( 
  [ID] INT NOT NULL DEFAULT (0),  
  [Holiday_Name] VARCHAR(24),  
  [StartDate] INTEGER DEFAULT (0),  
  [EndDate] INTEGER DEFAULT (0),  
  [Timezone] INTEGER DEFAULT (0),  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [acc_timezone] (
  [ID] INTEGER NOT NULL DEFAULT 0, 
  [SunStart] INTEGER DEFAULT 0, 
  [SunEnd] INTEGER DEFAULT 2359, 
  [MonStart] INTEGER DEFAULT 0, 
  [MonEnd] INTEGER DEFAULT 2359, 
  [TuesStart] INTEGER DEFAULT 0, 
  [TuesEnd] INTEGER DEFAULT 2359, 
  [WedStart] INTEGER DEFAULT 0, 
  [WedEnd] INTEGER DEFAULT 2359, 
  [ThursStart] INTEGER DEFAULT 0, 
  [ThursEnd] INTEGER DEFAULT 2359, 
  [FriStart] INTEGER DEFAULT 0, 
  [FriEnd] INTEGER DEFAULT 2359, 
  [SatStart] INTEGER DEFAULT 0, 
  [SatEnd] INTEGER DEFAULT 2359, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT 0);
CREATE TABLE [acc_unlockcomb] (
  [ID] INTEGER NOT NULL DEFAULT 0, 
  [Group1] INTEGER DEFAULT 0, 
  [Group2] INTEGER DEFAULT 0, 
  [Group3] INTEGER DEFAULT 0, 
  [Group4] INTEGER DEFAULT 0, 
  [Group5] INTEGER DEFAULT 0, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT 0);
CREATE TABLE [fptemplate09] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [pin] INT, 
  [fingerid] INT, 
  [valid] INT, 
  [size] INT, 
  [template] blob, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [fptemplate10] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [pin] INT, 
  [fingerid] INT, 
  [valid] INT, 
  [size] INT, 
  [template] blob, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE INDEX [AccLog_timeSecond_index] ON [ACC_ATT_LOG] ([TimeSecond]);
CREATE INDEX [AccLog_userPin_index] ON [ACC_ATT_LOG] ([UserPIN]);
CREATE INDEX [Verify_Time_Index] ON [ATT_LOG] ([Verify_Time]);
CREATE UNIQUE INDEX [app_func_index] ON [APP_FUNC] ([App_Name], [Func_Name]);
CREATE INDEX [face7_pin_index] ON [FACE_TEMPLATE_7] ([User_PIN]);
CREATE INDEX [finger_vein_pin_index] ON [FINGER_VEIN_TEMPLATE] ([User_PIN]);
CREATE INDEX [first_card_pin_index] ON [ACC_FIRST_OPEN] ([UserPIN]);
CREATE INDEX [idx_pin] ON [fptemplate09] ([pin]);
CREATE INDEX [idxpin] ON [fptemplate10] ([pin]);
CREATE INDEX [inout_fun_index] ON [ACC_INOUT_FUN] ([EventType]);
CREATE UNIQUE INDEX [key_func_index] ON [KEY_FUNC] ([Key_Name], [Func_Name]);
CREATE UNIQUE INDEX [option_name_index] ON [OPTION_INFO] ([Option_Name]);
CREATE INDEX [user_authorize_index] ON [ACC_USER_AUTHORIZE] ([UserPIN]);



FP PIN=1 FID=1 Size=1588 Valid=1 TMP=TeVTUzIxAAAEpqkECAUHCc7QAAAcp2kBAAAAhEsrfqYdAIIOBgGQALCowQBZACcPwAFkprINlwB7AFEP/KaHAKcPxABCADKpeACMAGkP6gCXpkwPdwCdAI0OvqaiALUPmABhAKKpegCpACQOjAC0pkIPrAC0APIO36a6ADgPbQADADOosQDHALcOZADXprIMZADUAPwPkKbVADsNlgAlALyrwwDqAEcPLADupjcPngDsAHsOKKbsAD8PkAA0ALeoDAAHAb8OWwAXp+UPXAAUAe4OwKYXAWQPSADmASGoYwAnAbEOygAvpz0OQwA7AWsOJaZHAaENxACCAeCpMABJAZYNpABNp5oPIABOAcgNo6ZSAX0PMwCRAYirJABaAZAO2l8zVUIbEAMbDY6Pk1a+lV93kAPbDlcpWy0u8vtgb/ajU1pxmoALEBKkWYZURwbVVg7+BzdBbSf94EKl7IKeJksR9XNVh6NhFHkYv1WD4vqTD2KpgIElhuWTJ4a6JdIAoQAeFJ/+KaOAgTp8THvs/LVbIATu+0sARYdALXR/gH/x/GAEvi87EuaSzvLGAK9wbAg1DIkOY4JruTILwfSd/VB7BiOngtefTjFnglqMiH29Cq98Z4LauV6ApXpB/qR3gS9UjxIZbpzHfXaUOBqdiiok4ZbtqhgRDmhfgIIDIKlw9GGJeuxv7YrdOW6kf2l5M5i7PdYbrPtl/ESBpCHgBKnxq/VDA4WkIT8BAn4egQQEYwETwP4IAGoBCFhNUwUAXgPMwjWsAZwUFlvABT4ApqEFDE4IAHcWE/HBSQQAVw3FNwCmhhUTXAQAGkga7QUAdhmJqMYAersRwQMA52jh/wemXiN6wgYAVS0L7f8IAIc0CfD+xVgFAOd+KVrGAHea/P0IAJhB1v/5WUUHANufMaXAx6MB3lEiVAfFp1K6MFcGALNw7P750B4Ayrg9VgX+P1zB/MD8/v45wcRb/8D/wf/AO/3/WgQAYVMDwPQEBAh2KzMMARedSfpi+8b////DqQcEz1oD//79L8YAryYxwAYAN16owYO+AXVjCf8hBC/7Zv87+/34/Tj+TqMBN2ZpwYPKAF/AdcN1wMLABHhpogFxaAwwBcVfaNaJCQA1cWIEwYDKBADjhzBbwwDbNTHATxMA0HU6XGb/wf4s//3sKgOmfI4a/v5A0QBxKWzFxH7AwUPApWfDw8MLACtTU8ZZw27+WxsA9JdIZ1PAwk5sxKl1bWdUDwB2oFABfsU+xsfDfAoAXaGvPcfEwsTAB8V6oLH6RP0nAHhpQMbMwsXLrH7/AcGlZJ7Bwv/Bwb3AdgQGAH6sK/86/6yyAauwt4DES52m1YEPAEWzSbN3xGXDhsIKAEt2QF1mwHoJALy0hcL6Z/3//vwTAAe4PmZV/yD+/vw4KjyjAX21NEkWxdm7nMFHPMD8/jr9+WX//v/8/sDBANoZMT8YAJ3QccJqbcbFwv/E/wXBxmXDxcHGw5/DAAJMQsJXCQDnKDrEWPzA//z9D8Uo9OV/wsPBw8EEwsTRBwAv8D3AB2UAthQkNJoDEPJXF2YFEBNdDMQ5UkamCkMBAAALgFI=


USER PIN=1 Name=Ali Pri=0 Passwd=123 Card=123 Grp=1 TZ=0000000100000000 Verify=-1 ViceCard= StartDatetime=0 EndDatetime=0

DATA QUERY ATTLOG StartTime=2025-07-08 00:00:00	EndTime=2025-07-09 00:00:00

GET OPTION FROM: CQZ7231360296
TransFlag=TransData AttLog OpLog AttPhoto EnrollFP EnrollUser FPImag ChgUser ChgFP FACE UserPic FVEIN BioPhoto
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
Delay=60
Realtime=1
Stamp=1752444282
OpStamp=1753136766
PhotoStamp=0


GET OPTION FROM: CQZ7231360296
TransFlag=TransData AttLog OpLog AttPhoto EnrollFP EnrollUser FPImag ChgUser ChgFP FACE UserPic FVEIN BioPhoto
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
Delay=60
Realtime=1
Stamp=0
OpStamp=0
PhotoStamp=0

abc123\t2025-07-21 23:25:15\t0\t1\t0\t0\t0\t0\t0\t0\t6\n

SET OPTION AlarmReRec=1

USER PIN=1\tName=Ali\tPri=0\tPasswd=\tCard=\tGrp=1\tTZ=0000000100000000\tVerify=-1\tViceCard=\tStartDatetime=0\tEndDatetime=0\n

FP PIN=1\tFID=6\tSize=1832\tValid=1 TMP=TB9TUzIxAAAFXGMECAUHCc7QAAAdXWkBAAAAhYE0mFwWAIYPWgDaAPlTlAAhABYOggAhXHAPMgBBAKUPxFxQADEPtgCnAKxTBQFzALkOXABxXKAPKgB3AIwPcVx2AEUOsQC4ADtT/gCNALIPggCXXD8PrgCTAHkPa1ycADUPAwFmAL9TngCkALAO1wCiXE4PkgCoAOkOYFyqADYP9gBxADFTzQC1AEMPYQDFXLgNEADOAIUPKFzZADgPzwAmAFhTpADkAOAOpQDuXCcPdQAGAWAPBV0IAUgNGADOAVhRWwAOAR0P4wAVXUYN6gAYASMN01wcAekPoQDlAYRTDwAiAd0NcQAnXXAP8wAiAbANSFwiAa0P/ADgAe9RMwAwAZMNtAA0XZcPuQA+ASsPP1xDAYoOFwCGAQBRKABGAX8NkQBUXYwPPgBaAcYOKlxdASkOIQCaAXVRVXN3jydXPI3uwYbrRJPvH0rnAClrEQ9f+vHCZW5GqImf9LORdHkkM0MJEQsLANaH6DvL+V5dVg5K/vq2O6WCEqcJTIbUwwiXCfqV+9+CZ1bj9k4KiYLkDi/NpABaChLy5ImEVooARYSt9sz7c04GCl8aSXy/dD8tIADq+koP7H0T2s/zto4+EyeLhFdvjArZTgjD8nq71/hbFpveY3/mQMKmYimih84/h92jCevyUYtHgSdPoGeN131j9Bhw3k/PuXJZe+/5zLCjbG61vHPU/bCijAWhdxJ5wBEjynLtdYKKmB/ZkK1IhwqJGI5pk+RzqJJCHCol4XY0WlynHQk9Fhvof7aXe67zTX//bndbbAyl+TGKRImryGd0+fSJffxaYNKLBGpm+dyoejwm0LhRKA2uzEjYrwhvyyLNyat7DHxLAQLHIVDBAKpcFjsEAN0n52ABXJUBCS4HAAwfJQ/D/AQAwAHKNgFchQYG//4Kxa4QRkZTQwQA4eUiXlgBVxNwSgTFXxasIgQAoRkTiwYFgksn/2AEAK0gBXMKAJkrGjA4wfqhfwUAtTcnBUUIXN+BLThgO+MFBbtqLVcOACeF8Mej/Eb9My4FxS9HPsCACADjd+jARwACAB9FXsHBAJUVlqEGAF9BtJHEWgHCVDDA/z7DGVzQozdG//84/Pui///8/v3ABfz6nf/AwcD8/joLBT1i7RYwMAbFsVrxw8GVDwBz9YDH15L/iT0MAHJmNKP8wkvA/P8/BgXLc6vEmAUAnF5fn4AEAQV3OoYRBS15RpZnw8UCxsaeagwAJnlPB8B1nHLBDgEPevT9R6P+xP/9wF3eACknR8BqwMH/QXqXnsHCfMJfBMV9hHtDGwDZoTcF/zuh//79/v/+OvzEov3//sD/wDrB+lsBd4I9wnEEBgUgiTHAZw0AGpUynFX/MyoFAGuQv9oCAIZLkMPBAFIQZsLCDwA7rUx+ncF5//98D8VDkxxqeIzCwZrNAGv8NcDBgsUaxZ+k6ILCw8nHlgVik5zFw5fCDADWosOjRzX/KgQAtTcGofwLAKhcLYTAxG3/AwAUqkYFAwXNrS3AEABmajfF0MPBrMTBxAH/DVz0tzD/MT7fAMzlQsD8/vz8OPz7ov///8H+/zr89KH8///C+wnFpsmMwn1CBgCYpqCXmhUAW1JkkrXBbD59w8AFABQXPUxaAS7cN8BvwQEDgDwsCBBdEuXDxcP+DRApFDAHiMedw8DAw/0F1e0nLXMGELMmaTj/NV8RUScXwgbV+C0swcDAwA4QOzB1nMHAwMA7wQU/Ckz7PHBi/8DqPXNZETo+l8bAAAYVqUZtWsAFEN5P/6P9wgQQHFXGJ1ceAQtDAQAAzkVXXA==\n


/iclock/cdata?SN=CQZ7231360296&table=ATTLOG&Stamp=9999&Count=1&PackCnt=1&PackIdx=1&CmdId=239


SN=CQZ7231360296&table=ATTLOG&Stamp=9999&Count=2&PackCnt=1&PackIdx=1&CmdId=240



C:245:DATA UPDATE USERINFO PIN=1 Name=Ali Pri=0 Passwd= Card=
C:246:DATA UPDATE FINGERTMP PIN=1 FID=5 Size=1934 Valid=1 TMP=TOlTUzIxAAAFqqoECAUHCc7QAAAdq2kBAAAAhVcvQaoUAIgP7QDcABOlTQAqAIoPMwA2qpcP6gBrAFEPf6qBAAQPvABHAI+lKQCIAPgPsACIqn4PSwCOADsPsaqVAAsPGABSAHakbgCuAHgPqwDDqnEPPgDPACsP96rYACYPzwAeAJelPgDcAF0P3QDlqloPqQDiAEUP46riACoPuQA+AI6lWgACAU4PHAALq50ODQESAekOnqoVAT4OKgDSAU2lFgAYAUwPbgAdqxQOZAAfAYUPeaoeATwOjwDlATykxAAhAZENPgAmqzoOqwAoAeUOgaooATMONwDuAUWlbQAvAToPEAAqq6kO8wAwAYMPlqo3AbkO3wD9Ab6lRQBRATkPrgBUq7oOjgBVAWoPJapXAUAOWgCSATCkKAJDkyeHWIOqLb6PqQYni/6PmCk2BkcPWw1yAlYhzITHjPMIjIHiU3qL6YaS/XoP1NZLCYKDCglHg6YiSIEHC/uPNH4O3zaHSQrS+RZ01FCKhIMV0JPHl4oqvPzala+POGrrx2sW4HOiBo4QJ6gXb2cSKvQ/8krvOATlmqaTWwxP0g/xZhBSFx7wQKUr9H4RtfJ36t47TCilBGkjfP1koCr9NQVODTLyqF702HmHbQmEBvNeaQtJBaUGaAgsVsj9Dellc7h/mF4oEq6BIQzA51A58fsx/G19LPrfX3cK9f0pAvgK/UV0GdpkEQxojrsKZImBgrGboRew3GctUQbC+Y+CPCOLgcoNmviT9Y/VPwkXAEMP+H3QVB//wV8fZ0UiJcYAA1IibgbFxQW6wFEEAOYAzCoAqkwBCf9SBMWIE6Y6CADCLhMFSUiuAWwBDEcKxagdpUbBwP94BMWMBKZKCgCsARCgNnmjATEDBjZdBAMF4hcMwAQAkeoJ+msGADAaDFagBgUqMw9twQUAIVUTalcEAPEbF54DBYIgDMEHABntCcRVwzgFAJlDzEoAquliGmgGANwwCdr+AwCwUgk7BgVzRxBRwQYA3DwG/8AFABpEDAdbBqqxWwzABQAtcBWVBQAZTBPEBQQFwlcGaQQAcKQAOKkBtGUMwAXF6H+5/kYDABZqP/8GqkFpA8IEALFp+JQCALBtDMDAAO0pFv9eAwB3qwD6qQGwdBDABcXkjr3+XQMAFnPFwgGqdXMDSgMAtXsFagcA3pEXwIAGBeKH/cL9UAPFcY8pwwYA35sak/8BqkaPemcDALSPeGoCAH6VgMLDAE89e8CEBwDYbhP6VMFZBgDcpNNExakBhJyAwQbFT6XXecIKAGusuMJ90sAFAIeq/Ts9DKrCshP/Rf6LBgWUsHTCgQgArrJyasLAwXEGAMPG5VT+LwQAmKLGTA2q1bITNkEExWrC2mgJAD/L6f5exKABvrkTPjWhBwXo0O08cwQAecMWnQkAOtJpljpXAarO15qSCgBGx3LdwMHDZAUAMdshVVgLADrcZFXB+WvHfAUAy9xTwnu6AYfPdGnCRcLExHIHANPeIDr9xZoRAKXfhsJUwYdrf8P/CwA+JV7HasNmeAkArSYJ+FbA//z//QTFGeH8bwUA6uQi9w8FD+SDwsKNxDvDxGvAgwcA5+foSjinAbX5icDEB8We1cMFAKj9iQCuA7qxAQz8whvOEJqoccfBxsJ7ZAgV8AdTw8CD/8kQ1qahwMHEwsEGw8QIAhEMFTHAzRCSvULCw4DBDNWdEpfAwsT/qMMDxAC6JxpMgAcQ6RpDxl4FEBUcUAZ6C7rKIaTCxssCwcFowMbCyMUE1awYgcLCGRDsIXLBx2vAw8HCjHUHwcRrnFYGEGEjhsL6b/4EEGcjQLYGFdMiQJHABBC6I0U/BBD7KDf/OvoDuoUsNMHBwQQGFQctKcTCxMnAEDOEQcF6BRBs9zrFJwQQ9jQ6IJdCBaFCAQAAC0WXAA
C:247:DATA UPDATE FINGERTMP PIN=1 FID=6 Size=1830 Valid=1 TMP=TB9TUzIxAAAFXGMECAUHCc7QAAAdXWkBAAAAhYE0mFwWAIYPWgDaAPlTlAAhABYOggAhXHAPMgBBAKUPxFxQADEPtgCnAKxTBQFzALkOXABxXKAPKgB3AIwPcVx2AEUOsQC4ADtT/gCNALIPggCXXD8PrgCTAHkPa1ycADUPAwFmAL9TngCkALAO1wCiXE4PkgCoAOkOYFyqADYP9gBxADFTzQC1AEMPYQDFXLgNEADOAIUPKFzZADgPzwAmAFhTpADkAOAOpQDuXCcPdQAGAWAPBV0IAUgNGADOAVhRWwAOAR0P4wAVXUYN6gAYASMN01wcAekPoQDlAYRTDwAiAd0NcQAnXXAP8wAiAbANSFwiAa0P/ADgAe9RMwAwAZMNtAA0XZcPuQA+ASsPP1xDAYoOFwCGAQBRKABGAX8NkQBUXYwPPgBaAcYOKlxdASkOIQCaAXVRVXN3jydXPI3uwYbrRJPvH0rnAClrEQ9f+vHCZW5GqImf9LORdHkkM0MJEQsLANaH6DvL+V5dVg5K/vq2O6WCEqcJTIbUwwiXCfqV+9+CZ1bj9k4KiYLkDi/NpABaChLy5ImEVooARYSt9sz7c04GCl8aSXy/dD8tIADq+koP7H0T2s/zto4+EyeLhFdvjArZTgjD8nq71/hbFpveY3/mQMKmYimih84/h92jCevyUYtHgSdPoGeN131j9Bhw3k/PuXJZe+/5zLCjbG61vHPU/bCijAWhdxJ5wBEjynLtdYKKmB/ZkK1IhwqJGI5pk+RzqJJCHCol4XY0WlynHQk9Fhvof7aXe67zTX//bndbbAyl+TGKRImryGd0+fSJffxaYNKLBGpm+dyoejwm0LhRKA2uzEjYrwhvyyLNyat7DHxLAQLHIVDBAKpcFjsEAN0n52ABXJUBCS4HAAwfJQ/D/AQAwAHKNgFchQYG//4Kxa4QRkZTQwQA4eUiXlgBVxNwSgTFXxasIgQAoRkTiwYFgksn/2AEAK0gBXMKAJkrGjA4wfqhfwUAtTcnBUUIXN+BLThgO+MFBbtqLVcOACeF8Mej/Eb9My4FxS9HPsCACADjd+jARwACAB9FXsHBAJUVlqEGAF9BtJHEWgHCVDDA/z7DGVzQozdG//84/Pui///8/v3ABfz6nf/AwcD8/joLBT1i7RYwMAbFsVrxw8GVDwBz9YDH15L/iT0MAHJmNKP8wkvA/P8/BgXLc6vEmAUAnF5fn4AEAQV3OoYRBS15RpZnw8UCxsaeagwAJnlPB8B1nHLBDgEPevT9R6P+xP/9wF3eACknR8BqwMH/QXqXnsHCfMJfBMV9hHtDGwDZoTcF/zuh//79/v/+OvzEov3//sD/wDrB+lsBd4I9wnEEBgUgiTHAZw0AGpUynFX/MyoFAGuQv9oCAIZLkMPBAFIQZsLCDwA7rUx+ncF5//98D8VDkxxqeIzCwZrNAGv8NcDBgsUaxZ+k6ILCw8nHlgVik5zFw5fCDADWosOjRzX/KgQAtTcGofwLAKhcLYTAxG3/AwAUqkYFAwXNrS3AEABmajfF0MPBrMTBxAH/DVz0tzD/MT7fAMzlQsD8/vz8OPz7ov///8H+/zr89KH8///C+wnFpsmMwn1CBgCYpqCXmhUAW1JkkrXBbD59w8AFABQXPUxaAS7cN8BvwQEDgDwsCBBdEuXDxcP+DRApFDAHiMedw8DAw/0F1e0nLXMGELMmaTj/NV8RUScXwgbV+C0swcDAwA4QOzB1nMHAwMA7wQU/Ckz7PHBi/8DqPXNZETo+l8bAAAYVqUZtWsAFEN5P/6P9wgQQHFXGJ1ceAQtDAQAAzkVXXA




C:248:DATA UPDATE USERINFO PIN=1 Name=Ali Pri=0 Passwd= Card=  Grp=1 Verify=0
C:249:DATA UPDATE FINGERTMP PIN=1 FID=5 Size=1936 Valid=1 TMP=TOlTUzIxAAAFqqoECAUHCc7QAAAdq2kBAAAAhVcvQaoUAIgP7QDcABOlTQAqAIoPMwA2qpcP6gBrAFEPf6qBAAQPvABHAI+lKQCIAPgPsACIqn4PSwCOADsPsaqVAAsPGABSAHakbgCuAHgPqwDDqnEPPgDPACsP96rYACYPzwAeAJelPgDcAF0P3QDlqloPqQDiAEUP46riACoPuQA+AI6lWgACAU4PHAALq50ODQESAekOnqoVAT4OKgDSAU2lFgAYAUwPbgAdqxQOZAAfAYUPeaoeATwOjwDlATykxAAhAZENPgAmqzoOqwAoAeUOgaooATMONwDuAUWlbQAvAToPEAAqq6kO8wAwAYMPlqo3AbkO3wD9Ab6lRQBRATkPrgBUq7oOjgBVAWoPJapXAUAOWgCSATCkKAJDkyeHWIOqLb6PqQYni/6PmCk2BkcPWw1yAlYhzITHjPMIjIHiU3qL6YaS/XoP1NZLCYKDCglHg6YiSIEHC/uPNH4O3zaHSQrS+RZ01FCKhIMV0JPHl4oqvPzala+POGrrx2sW4HOiBo4QJ6gXb2cSKvQ/8krvOATlmqaTWwxP0g/xZhBSFx7wQKUr9H4RtfJ36t47TCilBGkjfP1koCr9NQVODTLyqF702HmHbQmEBvNeaQtJBaUGaAgsVsj9Dellc7h/mF4oEq6BIQzA51A58fsx/G19LPrfX3cK9f0pAvgK/UV0GdpkEQxojrsKZImBgrGboRew3GctUQbC+Y+CPCOLgcoNmviT9Y/VPwkXAEMP+H3QVB//wV8fZ0UiJcYAA1IibgbFxQW6wFEEAOYAzCoAqkwBCf9SBMWIE6Y6CADCLhMFSUiuAWwBDEcKxagdpUbBwP94BMWMBKZKCgCsARCgNnmjATEDBjZdBAMF4hcMwAQAkeoJ+msGADAaDFagBgUqMw9twQUAIVUTalcEAPEbF54DBYIgDMEHABntCcRVwzgFAJlDzEoAquliGmgGANwwCdr+AwCwUgk7BgVzRxBRwQYA3DwG/8AFABpEDAdbBqqxWwzABQAtcBWVBQAZTBPEBQQFwlcGaQQAcKQAOKkBtGUMwAXF6H+5/kYDABZqP/8GqkFpA8IEALFp+JQCALBtDMDAAO0pFv9eAwB3qwD6qQGwdBDABcXkjr3+XQMAFnPFwgGqdXMDSgMAtXsFagcA3pEXwIAGBeKH/cL9UAPFcY8pwwYA35sak/8BqkaPemcDALSPeGoCAH6VgMLDAE89e8CEBwDYbhP6VMFZBgDcpNNExakBhJyAwQbFT6XXecIKAGusuMJ90sAFAIeq/Ts9DKrCshP/Rf6LBgWUsHTCgQgArrJyasLAwXEGAMPG5VT+LwQAmKLGTA2q1bITNkEExWrC2mgJAD/L6f5exKABvrkTPjWhBwXo0O08cwQAecMWnQkAOtJpljpXAarO15qSCgBGx3LdwMHDZAUAMdshVVgLADrcZFXB+WvHfAUAy9xTwnu6AYfPdGnCRcLExHIHANPeIDr9xZoRAKXfhsJUwYdrf8P/CwA+JV7HasNmeAkArSYJ+FbA//z//QTFGeH8bwUA6uQi9w8FD+SDwsKNxDvDxGvAgwcA5+foSjinAbX5icDEB8We1cMFAKj9iQCuA7qxAQz8whvOEJqoccfBxsJ7ZAgV8AdTw8CD/8kQ1qahwMHEwsEGw8QIAhEMFTHAzRCSvULCw4DBDNWdEpfAwsT/qMMDxAC6JxpMgAcQ6RpDxl4FEBUcUAZ6C7rKIaTCxssCwcFowMbCyMUE1awYgcLCGRDsIXLBx2vAw8HCjHUHwcRrnFYGEGEjhsL6b/4EEGcjQLYGFdMiQJHABBC6I0U/BBD7KDf/OvoDuoUsNMHBwQQGFQctKcTCxMnAEDOEQcF6BRBs9zrFJwQQ9jQ6IJdCBaFCAQAAC0WXAA==
C:250:DATA UPDATE FINGERTMP PIN=1 FID=6 Size=1832 Valid=1 TMP=TB9TUzIxAAAFXGMECAUHCc7QAAAdXWkBAAAAhYE0mFwWAIYPWgDaAPlTlAAhABYOggAhXHAPMgBBAKUPxFxQADEPtgCnAKxTBQFzALkOXABxXKAPKgB3AIwPcVx2AEUOsQC4ADtT/gCNALIPggCXXD8PrgCTAHkPa1ycADUPAwFmAL9TngCkALAO1wCiXE4PkgCoAOkOYFyqADYP9gBxADFTzQC1AEMPYQDFXLgNEADOAIUPKFzZADgPzwAmAFhTpADkAOAOpQDuXCcPdQAGAWAPBV0IAUgNGADOAVhRWwAOAR0P4wAVXUYN6gAYASMN01wcAekPoQDlAYRTDwAiAd0NcQAnXXAP8wAiAbANSFwiAa0P/ADgAe9RMwAwAZMNtAA0XZcPuQA+ASsPP1xDAYoOFwCGAQBRKABGAX8NkQBUXYwPPgBaAcYOKlxdASkOIQCaAXVRVXN3jydXPI3uwYbrRJPvH0rnAClrEQ9f+vHCZW5GqImf9LORdHkkM0MJEQsLANaH6DvL+V5dVg5K/vq2O6WCEqcJTIbUwwiXCfqV+9+CZ1bj9k4KiYLkDi/NpABaChLy5ImEVooARYSt9sz7c04GCl8aSXy/dD8tIADq+koP7H0T2s/zto4+EyeLhFdvjArZTgjD8nq71/hbFpveY3/mQMKmYimih84/h92jCevyUYtHgSdPoGeN131j9Bhw3k/PuXJZe+/5zLCjbG61vHPU/bCijAWhdxJ5wBEjynLtdYKKmB/ZkK1IhwqJGI5pk+RzqJJCHCol4XY0WlynHQk9Fhvof7aXe67zTX//bndbbAyl+TGKRImryGd0+fSJffxaYNKLBGpm+dyoejwm0LhRKA2uzEjYrwhvyyLNyat7DHxLAQLHIVDBAKpcFjsEAN0n52ABXJUBCS4HAAwfJQ/D/AQAwAHKNgFchQYG//4Kxa4QRkZTQwQA4eUiXlgBVxNwSgTFXxasIgQAoRkTiwYFgksn/2AEAK0gBXMKAJkrGjA4wfqhfwUAtTcnBUUIXN+BLThgO+MFBbtqLVcOACeF8Mej/Eb9My4FxS9HPsCACADjd+jARwACAB9FXsHBAJUVlqEGAF9BtJHEWgHCVDDA/z7DGVzQozdG//84/Pui///8/v3ABfz6nf/AwcD8/joLBT1i7RYwMAbFsVrxw8GVDwBz9YDH15L/iT0MAHJmNKP8wkvA/P8/BgXLc6vEmAUAnF5fn4AEAQV3OoYRBS15RpZnw8UCxsaeagwAJnlPB8B1nHLBDgEPevT9R6P+xP/9wF3eACknR8BqwMH/QXqXnsHCfMJfBMV9hHtDGwDZoTcF/zuh//79/v/+OvzEov3//sD/wDrB+lsBd4I9wnEEBgUgiTHAZw0AGpUynFX/MyoFAGuQv9oCAIZLkMPBAFIQZsLCDwA7rUx+ncF5//98D8VDkxxqeIzCwZrNAGv8NcDBgsUaxZ+k6ILCw8nHlgVik5zFw5fCDADWosOjRzX/KgQAtTcGofwLAKhcLYTAxG3/AwAUqkYFAwXNrS3AEABmajfF0MPBrMTBxAH/DVz0tzD/MT7fAMzlQsD8/vz8OPz7ov///8H+/zr89KH8///C+wnFpsmMwn1CBgCYpqCXmhUAW1JkkrXBbD59w8AFABQXPUxaAS7cN8BvwQEDgDwsCBBdEuXDxcP+DRApFDAHiMedw8DAw/0F1e0nLXMGELMmaTj/NV8RUScXwgbV+C0swcDAwA4QOzB1nMHAwMA7wQU/Ckz7PHBi/8DqPXNZETo+l8bAAAYVqUZtWsAFEN5P/6P9wgQQHFXGJ1ceAQtDAQAAzkVXXA==



ID=26&Return=0&CMD=INFO
~DeviceName=Biopro SA40
MAC=00:17:61:11:cd:3b
TransactionCount=1
~MaxAttLogCount=3
UserCount=1
~MaxUserCount=50
PhotoFunOn=0
~MaxUserPhotoCount=0
UserPicURLFunOn=1
FingerFunOn=1
~AlgVer=10
FPVersion=10
~MaxFingerCount=30
FPCount=2
FaceFunOn=0
FaceVersion=7
~MaxFaceCount=400
FaceCount=0
FvFunOn=0
FvVersion=3
~MaxFvCount=10
FvCount=0
PvFunOn=0
PvVersion=0
~MaxPvCount=0
PvCount=-1
MainTime=1970-01-01 00:00:00
FlashSize=100736
FreeFlashSize=34996
Language=69
VOLUME=70
DtFmt=9
IPAddress=192.168.100.196
IsTFT=1
~Platform=ZLM60_TFT
Brightness=0
BackupDev=0
~OEMVendor=ZKTECO CO., LTD.
FWVersion=Ver 8.0.4.3-20220708
PushVersion=Ver 2.0.33S-20220623
CardProtFormat=1
UserPhotoCount=0
ATTPhotoCount=0
UserCardCount=0
~ZKFPVersion=10
~SerialNumber=CQZ7231360296
IsSupportNFC=0
AccSupportFunList=
~DSTF=1
Reader1IOState=1
MultiCardInterTimeFunOn=1
MachineTZFunOn=1
MaxMCUCardBits=
authKey=
BioPhotoFun=
BioDataFun=
VisilightFun=
~MaxBioPhotoCount=
RegDeviceType=0
AutoServerFunOn=1
MultiBioDataSupport=
MultiBioPhotoSupport=
MultiBioVersion=
MaxMultiBioPhotoCount=
MaxMultiBioDataCount=
IRTempDetectionFunOn=
MaskDetectionFunOn=
SubcontractingUpgradeFunOn=
VisualIntercomFunOn=
VideoTID=
QRCodeDecryptFunList=
VideoProtocol=
IsSupportQRcode=
QRCodeEnable=


ID=27
SN=CQZ7231360296
Return=0
CMD=Shell
FILENAME=shellout.txt
Content=1|Ali|0


ID=28&Return=0&CMD=DATA


ID=260
SN=CL5T205160554
Return=0
CMD=Shell
FILENAME=shellout.txt
Content=CREATE TABLE [ATT_LOG] ( 
[ID] integer PRIMARY KEY AUTOINCREMENT,  
[User_PIN] varchar(24),  
[Verify_Type] INT,  
[Verify_Time] varchar(24),  
[Status] INT,  
[Work_Code_ID] INT,  
[Sensor_NO] INT,  
[Att_Flag] INT,  
[CREATE_ID] VARCHAR(24),  
[MODIFY_TIME] VARCHAR(24),  
[SEND_FLAG] INTEGER DEFAULT (0),  
[Mask_Flag] INTEGER, 
[Temperature] VARCHAR(24));
CREATE INDEX [Verify_Time_Index] ON [ATT_LOG] ([Verify_Time]);



ID=264
SN=CL5T205160554
Return=0
CMD=Shell
FILENAME=shellout.txt
Content=ACC_ATT_LOG                 MulCardUser               
ACC_AUXIN_INFO              Nation_LIST               
ACC_AUXOUT_INFO             OPERATOR_INFO             
ACC_DAT_OTHERNAME           OPTION_INFO               
ACC_FIRST_OPEN              OP_LOGS                   
ACC_HOLIDAY_TAB             Options                   
ACC_INOUT_FUN               OutRelaySetting           
ACC_MULTI_USER              PERMISSION                
ACC_OP_LOG                  PERSONAL_PERDAY_SCHEDULING
ACC_RULE_NAME               PERSONAL_SCHEDULING       
ACC_RULE_TIME               PHOTO_INDEX               
ACC_TIME_ZONE               PRINT_OPTIONS             
ACC_TIME_ZONE_RULE          PRINT_TIMEZONE            
ACC_USER_AUTHORIZE          Pers_BioTemplate          
APN_LIST                    Pers_BioTemplateData      
APP_FUNC                    PersonalVSTimezone        
APP_INFO                    RES_LIST                  
APP_PERMISSION              ROLE                      
ATT_LOG                     ROLE_INFO                 
BELL_INFO                   ROLE_PERMISSION           
CLASS_INFO                  SHORT_STATE               
CUSTOMIZE_TZ                SMS_INFO                  
DEPARTMENT                  STATE_TIME_ZONE           
DEPARTMENT_SCHEDULING       TIMEGREETING_INFO         
DiffTimezoneVS              TIME_ZONE                 
DoorVSTimezone              TIME_ZONE_EX              
ERROR_LOG                   USER_INFO                 
ExtUser                     USER_SMS                  
FACE_TEMPLATE_7             VISITOR_INFO              
FINGER_VEIN_TEMPLATE        VISITOR_LOG               
FUNC_LIST                   WAV_INFO                  
FUNC_PERMISSION             WGFormat                  
HID_FORMAT                  WIFI_INFO                 
IMSI_LIST                   WORK_CODE                 
InputIOSetting              acc_group                 
KEY_CODE                    acc_holiday               
KEY_FUNC                    acc_timezone              
LANGUAGE_INFO               acc_unlockcomb            
LARGE_MQ                    fptemplate09              
LINPHONE_INFO               fptemplate10              
MESSAGE_QUEUE             


ID=268
SN=CL5T205160554
Return=0
CMD=Shell
FILENAME=shellout.txt
Content=CREATE TABLE [APP_FUNC] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [App_Name] VARCHAR(64), 
  [Func_Name] VARCHAR(64));
CREATE TABLE [APP_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [App_Name] VARCHAR(64), 
  [App_Path] VARCHAR(128), 
  [Res_ID] INT, 
  [Flag] INT);
CREATE TABLE [APP_PERMISSION] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [App_Name] VARCHAR(64), 
  [Permission] INT);
CREATE TABLE [FUNC_PERMISSION] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Func_Name] VARCHAR(64), 
  [Permission] INT);
CREATE TABLE [KEY_CODE] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [Key_Name] varchar(64), 
  [Res_ID] INT, 
  [Key_Value] INT);
CREATE TABLE [KEY_FUNC] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Key_Name] varchar(64), 
  [Func_Name] varchar(64), 
  [Flag] int);
CREATE TABLE [PERMISSION] (
  [ID] INTEGER PRIMARY KEY, 
  [Permission] INT);
CREATE TABLE [RES_LIST] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Res_ID] int, 
  [Lang_ID] INT, 
  [Lang_Name] VARCHAR(128), 
  [Voice_Name] VARCHAR(128), 
  [Pic_Name] VARCHAR(128), 
  [Flag] INT DEFAULT (0));
CREATE TABLE [ROLE] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Role_Name] VARCHAR(64), 
  [Res_ID] INT, 
  [Description] VARCHAR(64), 
  [Using_Status] INT, 
  [Flag] INT);
CREATE TABLE [ROLE_PERMISSION] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Role_Name] VARCHAR(64), 
  [Permission] INT);
CREATE TABLE [STATE_TIME_ZONE] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [State_Name] varchar(64), 
  [Timezone_Name] varchar(64));
CREATE TABLE [TIME_ZONE] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [Timezone_Name] varchar(64), 
  [Mon_Time] INT, 
  [Tue_Time] INT, 
  [Wed_Time] INT, 
  [Thu_Time] INT, 
  [Fri_Time] INT, 
  [Sat_Time] INT, 
  [Sun_Time] INT, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [LANGUAGE_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Language_Flag] INTEGER, 
  [Language_Name] VARCHAR(24));
CREATE TABLE [WAV_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Wav_Name] VARCHAR(24), 
  [Wav_Path] VARCHAR(128), 
  [Type] INTEGER);
CREATE TABLE [fptemplate09] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [pin] INT, 
  [fingerid] INT, 
  [valid] INT, 
  [size] INT, 
  [template] blob, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [fptemplate10] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [pin] INT, 
  [fingerid] INT, 
  [valid] INT, 
  [size] INT, 
  [template] blob, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [MESSAGE_QUEUE] (
  [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
  [TABLE_NAME] VARCHAR(24), 
  [TABLE_KEY] VARCHAR(64), 
  [OPERATE] VARCHAR(16), 
  [POST_DATA] BLOB, 
  [CREATE_TIME] VARCHAR(24), 
  [ERROR_CODE] INT, 
  [ERROR_MSG] VARCHAR(256), 
  [TRAIL_TIMES] INT, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [OPTION_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Option_Name] VARCHAR(128), 
  [Option_Value] VARCHAR(128), 
  [Encrypt_Flag] INTEGER DEFAULT (0), 
  [Factory_Set_Value] VARCHAR(128) DEFAULT (0), 
  [Is_Recovery_Factory_Set] INTEGER DEFAULT (0), 
  [Max_Value] INTEGER DEFAULT (0), 
  [Min_Value] INTEGER DEFAULT (0));
CREATE TABLE [WIFI_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [MAC] VARCHAR(20), 
  [ESSID] VARCHAR(64), 
  [Auth_Type] INTEGER, 
  [Auth_Key] VARCHAR(128), 
  [Connect_Time] VARCHAR(24));
CREATE TABLE [FUNC_LIST] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [Func_Name] varchar(64) UNIQUE, 
  [Res_ID] INT, 
  [Type] INT, 
  [Path_Name] varchar(128), 
  [Function] varchar(64), 
  [Param] varchar(64), 
  [Flag] INT, 
  [Func_ID] INTEGER);
CREATE TABLE Options( ID integer primary key, optionsname varchar(24) unique, optionsvalue varchar(24));
CREATE TABLE ROLE_INFO( ID integer primary key, Role_Id INT unique, Role_Name varchar(24), Permissions_Value INT);
CREATE TABLE [LARGE_MQ] (
  [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
  [TABLE_NAME] VARCHAR(64), 
  [START_KEY] INTEGER DEFAULT (0), 
  [END_KEY] INTEGER DEFAULT (0), 
  [SEND_KEY] INTEGER DEFAULT (0), 
  [CONDITION] VARCHAR(2048) DEFAULT ('1=1'), 
  [TYPE] INTEGER DEFAULT (0), FIELD_LIST VARCHAR(256), PACK_SIZE INT, CMD_ID VARCHAR(32), CMD_DESC VARCHAR(64), CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0, ATTACH_INFO VARCHAR(2048));
CREATE TABLE [PHOTO_INDEX] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [Photo_Type] INT, 
  [Photo_Time] varchar(24), 
  [User_PIN] varchar(24), 
  [Create_ID] varchar(24), 
  [Modify_Time] varchar(24), 
  [Send_Flag] INTEGER DEFAULT (0));
CREATE TABLE [BELL_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Valid] INTEGER, 
  [Time] INTEGER, 
  [Wav_Index] INTEGER, 
  [Times] INTEGER, 
  [Way] INTEGER, 
  [Volume] INTEGER, 
  [Mon] INTEGER, 
  [Tue] INTEGER, 
  [Wed] INTEGER, 
  [Thu] INTEGER, 
  [Fri] INTEGER, 
  [Sat] INTEGER, 
  [Sun] INTEGER, 
  [ExtbellDelay] INTEGER);
CREATE TABLE [acc_group] (
  [ID] INTEGER NOT NULL DEFAULT 0, 
  [Verification] INTEGER DEFAULT 0, 
  [VaildHoliday] INTEGER DEFAULT 0, 
  [Timezone1] INTEGER DEFAULT 1, 
  [Timezone2] INTEGER DEFAULT 0, 
  [Timezone3] INTEGER DEFAULT 0, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT 0);
CREATE TABLE [acc_timezone] (
  [ID] INTEGER NOT NULL DEFAULT 0, 
  [SunStart] INTEGER DEFAULT 0, 
  [SunEnd] INTEGER DEFAULT 2359, 
  [MonStart] INTEGER DEFAULT 0, 
  [MonEnd] INTEGER DEFAULT 2359, 
  [TuesStart] INTEGER DEFAULT 0, 
  [TuesEnd] INTEGER DEFAULT 2359, 
  [WedStart] INTEGER DEFAULT 0, 
  [WedEnd] INTEGER DEFAULT 2359, 
  [ThursStart] INTEGER DEFAULT 0, 
  [ThursEnd] INTEGER DEFAULT 2359, 
  [FriStart] INTEGER DEFAULT 0, 
  [FriEnd] INTEGER DEFAULT 2359, 
  [SatStart] INTEGER DEFAULT 0, 
  [SatEnd] INTEGER DEFAULT 2359, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT 0);
CREATE TABLE [acc_unlockcomb] (
  [ID] INTEGER NOT NULL DEFAULT 0, 
  [Group1] INTEGER DEFAULT 0, 
  [Group2] INTEGER DEFAULT 0, 
  [Group3] INTEGER DEFAULT 0, 
  [Group4] INTEGER DEFAULT 0, 
  [Group5] INTEGER DEFAULT 0, 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT 0);
CREATE TABLE [Nation_LIST] (
  [Name] VARCHAR(64), 
  [Short] VARCHAR(32));
CREATE TABLE [IMSI_LIST] (
  [IMSI] INTEGER, 
  [Network] VARCHAR(64), 
  [country] VARCHAR(64));
CREATE TABLE [SMS_INFO] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Start_Time] VARCHAR(24), 
  [Valid_Time] INTEGER, 
  [Type] INTEGER, 
  [Content] VARCHAR(320), 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [USER_SMS] (
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [Sms_ID] INTEGER, 
  [User_PIN] VARCHAR(24), 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [USER_INFO] (
  [ID] integer PRIMARY KEY AUTOINCREMENT, 
  [User_PIN] varchar(24) UNIQUE, 
  [Privilege] INT, 
  [Name] varchar(48), 
  [Password] varchar(16), 
  [Face_Group_ID] INT, 
  [Acc_Group_ID] INT DEFAULT 1, 
  [Dept_ID] INT DEFAULT 1, 
  [Is_Group_TZ] INT DEFAULT 1, 
  [Verify_Type] INT DEFAULT 0, 
  [Main_Card] varchar(24), 
  [Vice_Card] varchar(24), 
  [CREATE_ID] VARCHAR(24), 
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER DEFAULT 0, 
  [Expires] INTEGER DEFAULT 0, 
  [StartDatetime] VARCHAR(24) DEFAULT 0, 
  [EndDatetime] VARCHAR(24) DEFAULT 0, 
  [VaildCount] INTEGER DEFAULT 0, 
  [Timezone1] INT DEFAULT 1, 
  [Timezone2] INT DEFAULT 0, 
  [Timezone3] INT DEFAULT 0, Disable_User INTEGER DEFAULT 0);
CREATE TABLE [HID_FORMAT] ( 
  [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  
  [Card_Bit] INTEGER NOT NULL,  
  [Format_Name] VARCHAR(24),  
  [Card_Format] VARCHAR(64),  
  [First_Even] VARCHAR(64),  
  [Second_Even] VARCHAR(64),  
  [First_Odd] VARCHAR(64),  
  [Second_Odd] VARCHAR(64),  
  [Format_Type] INT,  
  [Status] INT, SiteCode INTEGER, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [APN_LIST] ( 
  [ID] INTEGER,  
  [Country] VARCHAR(32),  
  [Network] VARCHAR(64),  
  [APN] VARCHAR(64),  
  [Username] VARCHAR(64),  
  [Password] VARCHAR(64),  
  [OperatorAlias] VARCHAR(32),  
  [DialNumber] VARCHAR(32));
CREATE TABLE [WORK_CODE] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Work_Code_Num] VARCHAR(24) UNIQUE,  
  [Work_Code_Name] VARCHAR(24),  
  [Flag] INTEGER DEFAULT 0, SEND_FLAG INTEGER DEFAULT 0, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24));
CREATE TABLE [SHORT_STATE] ( 
  [ID] integer PRIMARY KEY AUTOINCREMENT,  
  [State_No] INT DEFAULT (0),  
  [State_Name] varchar(64),  
  [Description] varchar(64),  
  [Res_ID] INT,  
  [Auto_Change] INT,  
  [Mon] INTEGER,  
  [Tue] INTEGER,  
  [Wed] INTEGER,  
  [Thu] INTEGER,  
  [Fri] INTEGER,  
  [Sat] INTEGER,  
  [Sun] INTEGER);
CREATE TABLE [acc_holiday] ( 
  [ID] INT NOT NULL DEFAULT (0),  
  [Holiday_Name] VARCHAR(24),  
  [StartDate] INTEGER DEFAULT (0),  
  [EndDate] INTEGER DEFAULT (0),  
  [Timezone] INTEGER DEFAULT (0),  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [ACC_FIRST_OPEN] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [UserPIN] varchar(24) UNIQUE, [DoorID] INT DEFAULT 1, [Timezone] INT, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [ACC_HOLIDAY_TAB] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [HolidayDay] INT, [HolidayType] INT, [Loop] INT, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [ACC_USER_AUTHORIZE] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [UserPIN] varchar(24), [AuthorizeTimezone] INT, [AuthorizeDoor] INT DEFAULT 1, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [ACC_MULTI_USER] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [Number] INT, [DoorID] INT DEFAULT 1, [Group1] INT DEFAULT 0, [Group2] INT DEFAULT 0, [Group3] INT DEFAULT 0, [Group4] INT DEFAULT 0, [Group5] INT DEFAULT 0, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [ACC_INOUT_FUN] ( [ID] integer PRIMARY KEY AUTOINCREMENT, [Number] INT, [EventType] INT, [InAddr] INT, [OutType] INT, [OutAddr] INT, [OutTime] INT, [Reserved] INT, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [ACC_TIME_ZONE_RULE] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Type] INTEGER DEFAULT (0), [Time_Zone_ID] INTEGER NOT NULL, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [ACC_DAT_OTHERNAME] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Name] VARCHAR(64), CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [ACC_RULE_NAME] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Rule_ID] INTEGER NOT NULL, [Name_ID] INTEGER NOT NULL, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [ACC_RULE_TIME] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Rule_Name_ID] INTEGER NOT NULL, [Time_ID] INTEGER NOT NULL, CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [ACC_TIME_ZONE] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Start_Time] INTEGER DEFAULT (0), [End_Time] INTEGER DEFAULT (0), CREATE_ID VARCHAR(24), MODIFY_TIME VARCHAR(24), SEND_FLAG INTEGER DEFAULT 0);
CREATE TABLE [FINGER_VEIN_TEMPLATE] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [User_PIN] VARCHAR(64) NOT NULL,  
  [Fv_ID] INTEGER,  
  [Valid] INTEGER,  
  [Size] INTEGER,  
  [Template] BLOB,  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT (0), Fv_ID_Index INT);
CREATE TABLE [ACC_OP_LOG] (  
[ID] integer PRIMARY KEY AUTOINCREMENT,  
[Admin] INT,  
[OP] INT,  
[time_second] INT,  
[Objs1] INT,  
[Objs2] INT,  
[Objs3] INT,  
[Objs4] INT,  
[Objs5] INT, 
[CREATE_ID] VARCHAR(24),  
[MODIFY_TIME] VARCHAR(24),  
[SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [FACE_TEMPLATE_7] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [User_PIN] VARCHAR(64) NOT NULL,  
  [Face_ID] INTEGER,  
  [Valid] INTEGER,  
  [Size] INTEGER,  
  [Template] BLOB,  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [DEPARTMENT_SCHEDULING] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Department_No] INTEGER,  
  [Class_No] INTEGER);
CREATE TABLE [CLASS_INFO] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Class_No] INTEGER,  
  [Class_Name] VARCHAR(24),  
  [TimeStart1] INTEGER,  
  [TimeEnd1] INTEGER,  
  [TimeStart2] INTEGER,  
  [TimeEnd2] INTEGER,  
  [OvertimeStart] INTEGER,  
  [OvertimeEnd] INTEGER);
CREATE TABLE [DEPARTMENT] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Department_No] INTEGER DEFAULT 0,  
  [Department_Name] VARCHAR(24));
CREATE TABLE [PERSONAL_SCHEDULING] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Pin] INTEGER,  
  [Class_No] INTEGER);
CREATE TABLE [PERSONAL_PERDAY_SCHEDULING] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [Pin] INTEGER,  
  [Date] VARCHAR(8),  
  [Class_No] INTEGER);
CREATE TABLE [TIMEGREETING_INFO] ( 
  [ttsID] INTEGER,  
  [startTime] INTEGER,  
  [endTime] INTEGER,  
  [Content] VARCHAR(24));
CREATE TABLE [PRINT_TIMEZONE](
 [Name] varchar(24) unique,
 [StartTime] integer,
 [EndTime] integer,
 [Valid] integer);
CREATE TABLE [PRINT_OPTIONS](
 [User_PIN] varchar(64) NOT NULL,
 [Print_Flag] integer,
 [Print_Times] integer);
CREATE TABLE [OPERATOR_INFO] (  
[ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
[Operator_PIN] VARCHAR(24),  
[Password] VARCHAR(24), 
[Locktime] VARCHAR(24) DEFAULT 0);
CREATE TABLE [OP_LOGS] ( 
  [ID] integer NOT NULL PRIMARY KEY AUTOINCREMENT,  
  [OpType] INT NOT NULL DEFAULT 0,  
  [Operator] varchar(24) DEFAULT 0,  
  [OpTime] varchar(24) NOT NULL DEFAULT 0,  
  [OpWho] varchar(24) DEFAULT 0,  
  [sRet] VARCHAR(16) DEFAULT 0,  
  [sOri] VARCHAR(256) DEFAULT 0,  
  [sDest] VARCHAR(256) DEFAULT 0,  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT 0,  
  [Value1] INT DEFAULT 0,  
  [Value2] INT DEFAULT 0,  
  [Value3] INT DEFAULT 0);
CREATE TABLE WGFormat ( 
 ID int4 default 0, 
 CardBit int4 default 0, 
 SiteCode int4 default 0, 
 FormatName varchar(32), 
 CardFormat varchar(520), 
 primary key(ID,CardBit) );
CREATE TABLE ExtUser ( 
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
 Pin varchar(24), FunSwitch int4 default 0, 
 FirstName varchar(64), LastName varchar(64), 
 PersonalVS int1 default 255, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE MulCardUser ( 
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  
CardNo varchar(48),  
Pin varchar(24),  
LossCardFlag int1 default 0,  
CardType int1 default 0,  
CREATE_ID varchar(24),  
MODIFY_TIME varchar(24),  
SEND_FLAG int4 default 0);
CREATE TABLE [ACC_AUXIN_INFO] ( 
 [ID] integer PRIMARY KEY AUTOINCREMENT, 
 [num] INT, [inType] INT, 
 [timeZoneID] INT, 
 [CREATE_ID] VARCHAR(24), 
 [MODIFY_TIME] VARCHAR(24), 
 [SEND_FLAG] INTEGER DEFAULT 0 );
CREATE TABLE [ACC_AUXOUT_INFO] ( 
 [ID] integer PRIMARY KEY AUTOINCREMENT, 
 [num] INT, 
 [outType] INT, 
 [actionType] INT, 
 [reserve] INT, 
 [timeZoneID] INT, 
 [CREATE_ID] VARCHAR(24), 
 [MODIFY_TIME] VARCHAR(24), 
 [SEND_FLAG] INTEGER DEFAULT 0 );
CREATE TABLE OutRelaySetting ( 
 ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
 Num int1 default 0, 
 OutType int1 default 0, 
 ActionType int1 default 0, 
 TimezoneId int4 default 0, 
 DevID int4 default 0, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE InputIOSetting ( 
 ID int4 default 0, 
 Number int1 default 0, 
 InType int1 default 0, 
 TimezoneID int4 default 0, 
 DevID int4 default 0, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE PersonalVSTimezone ( 
 ID int4 default 0, 
 Pin varchar(24), 
 DoorID int4 default 0, 
 DevID int4 default 0, 
 TZVSID int4 default 0, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE DoorVSTimezone ( 
 ID int4 default 0, 
 DoorID int1 default 0, 
 DevID int4 default 0, 
 TZVSID int4 default 0, 
 CREATE_ID varchar(24), 
 MODIFY_TIME varchar(24), 
 SEND_FLAG int4 default 0);
CREATE TABLE DiffTimezoneVS ( 
 ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
 SunTime1 int4 default 0, SunTime1VSUser int1 default 255, SunTime1VSDoor int1 default 255, 
 SunTime2 int4 default 0, SunTime2VSUser int1 default 255, SunTime2VSDoor int1 default 255, 
 SunTime3 int4 default 0, SunTime3VSUser int1 default 255, SunTime3VSDoor int1 default 255, 
 MonTime1 int4 default 0, MonTime1VSUser int1 default 255, MonTime1VSDoor int1 default 255, 
 MonTime2 int4 default 0, MonTime2VSUser int1 default 255, MonTime2VSDoor int1 default 255, 
 MonTime3 int4 default 0, MonTime3VSUser int1 default 255, MonTime3VSDoor int1 default 255, 
 TueTime1 int4 default 0, TueTime1VSUser int1 default 255, TueTime1VSDoor int1 default 255, 
 TueTime2 int4 default 0, TueTime2VSUser int1 default 255, TueTime2VSDoor int1 default 255, 
 TueTime3 int4 default 0, TueTime3VSUser int1 default 255, TueTime3VSDoor int1 default 255, 
 WedTime1 int4 default 0, WedTime1VSUser int1 default 255, WedTime1VSDoor int1 default 255, 
 WedTime2 int4 default 0, WedTime2VSUser int1 default 255, WedTime2VSDoor int1 default 255, 
 WedTime3 int4 default 0, WedTime3VSUser int1 default 255, WedTime3VSDoor int1 default 255, 
 ThuTime1 int4 default 0, ThuTime1VSUser int1 default 255, ThuTime1VSDoor int1 default 255, 
 ThuTime2 int4 default 0, ThuTime2VSUser int1 default 255, ThuTime2VSDoor int1 default 255, 
 ThuTime3 int4 default 0, ThuTime3VSUser int1 default 255, ThuTime3VSDoor int1 default 255, 
 FriTime1 int4 default 0, FriTime1VSUser int1 default 255, FriTime1VSDoor int1 default 255, 
 FriTime2 int4 default 0, FriTime2VSUser int1 default 255, FriTime2VSDoor int1 default 255, 
 FriTime3 int4 default 0, FriTime3VSUser int1 default 255, FriTime3VSDoor int1 default 255, SatTime1 int4 default 0, SatTime1VSUser int1 default 255, SatTime1VSDoor int1 default 255, SatTime2 int4 default 0, SatTime2VSUser int1 default 255, SatTime2VSDoor int1 default 255, SatTime3 int4 default 0, SatTime3VSUser int1 default 255, SatTime3VSDoor int1 default 255, Hol1Time1 int4 default 0, Hol1Time1VSUser int1 default 255, Hol1Time1VSDoor int1 default 255, Hol1Time2 int4 default 0, Hol1Time2VSUser int1 default 255, Hol1Time2VSDoor int1 default 255, Hol1Time3 int4 default 0, Hol1Time3VSUser int1 default 255, Hol1Time3VSDoor int1 default 255, Hol2Time1 int4 default 0, Hol2Time1VSUser int1 default 255, Hol2Time1VSDoor int1 default 255, Hol2Time2 int4 default 0, Hol2Time2VSUser int1 default 255, Hol2Time2VSDoor int1 default 255, Hol2Time3 int4 default 0, Hol2Time3VSUser int1 default 255, Hol2Time3VSDoor int1 default 255, Hol3Time1 int4 default 0, Hol3Time1VSUser int1 default 255, Hol3Time1VSDoor int1 default 255, Hol3Time2 int4 default 0, Hol3Time2VSUser int1 default 255, Hol3Time2VSDoor int1 default 255, Hol3Time3 int4 default 0, Hol3Time3VSUser int1 default 255, Hol3Time3VSDoor int1 default 255, CREATE_ID varchar(24), MODIFY_TIME varchar(24), SEND_FLAG int4 default 0);
CREATE TABLE [ERROR_LOG] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [CmdID] VARCHAR(24),  
  [ErrorCode] VARCHAR(24),  
  [dataorigin] VARCHAR(24),  
  [ErrorMsg] VARCHAR(1024),  
  [additional] VARCHAR(2048),  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [ACC_ATT_LOG] (  
[ID] integer PRIMARY KEY AUTOINCREMENT,  
[MainCard] varchar(24),  
[UserPIN] varchar(24),  
[Verified] INT,  
[DoorID] INT,  
[EventType] INT,  
[InOutState] INT,  
[TimeSecond] INT, 
[CREATE_ID] VARCHAR(24),  
[MODIFY_TIME] VARCHAR(24),  
[SEND_FLAG] INTEGER DEFAULT (0), 
[Mask_Flag] INTEGER,  
[Temperature] VARCHAR(24));
CREATE TABLE [ATT_LOG] ( 
[ID] integer PRIMARY KEY AUTOINCREMENT,  
[User_PIN] varchar(24),  
[Verify_Type] INT,  
[Verify_Time] varchar(24),  
[Status] INT,  
[Work_Code_ID] INT,  
[Sensor_NO] INT,  
[Att_Flag] INT,  
[CREATE_ID] VARCHAR(24),  
[MODIFY_TIME] VARCHAR(24),  
[SEND_FLAG] INTEGER DEFAULT (0),  
[Mask_Flag] INTEGER, 
[Temperature] VARCHAR(24));
CREATE TABLE [CUSTOMIZE_TZ] ( 
  [User_PIN] varchar(24) UNIQUE,   
  [SunStart] INTEGER DEFAULT 0,  
  [SunEnd] INTEGER DEFAULT 2359,  
  [MonStart] INTEGER DEFAULT 0,  
  [MonEnd] INTEGER DEFAULT 2359,  
  [TuesStart] INTEGER DEFAULT 0,  
  [TuesEnd] INTEGER DEFAULT 2359,  
  [WedStart] INTEGER DEFAULT 0,  
  [WedEnd] INTEGER DEFAULT 2359,  
  [ThursStart] INTEGER DEFAULT 0,  
  [ThursEnd] INTEGER DEFAULT 2359,  
  [FriStart] INTEGER DEFAULT 0,  
  [FriEnd] INTEGER DEFAULT 2359,  
  [SatStart] INTEGER DEFAULT 0,  
  [SatEnd] INTEGER DEFAULT 2359,  
  [CREATE_ID] VARCHAR(24),  
  [MODIFY_TIME] VARCHAR(24),  
  [SEND_FLAG] INTEGER DEFAULT 0 
 );
CREATE TABLE [VISITOR_LOG] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [User_PIN] VARCHAR(24),  
  [Verify_Type] INTEGER,  
  [Verify_Time] varchar(24),  
  [CREATE_ID] varchar(24),  
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER 
);
CREATE TABLE [VISITOR_INFO] ( 
  [ID] INTEGER PRIMARY KEY AUTOINCREMENT,  
  [User_PIN] VARCHAR(24),  
  [Name] VARCHAR(48),  
  [Password] varchar(16),  
  [Verify_Type] INTEGER,  
  [Main_Card] varchar(24),  
  [Vice_Card] varchar(24),  
  [CREATE_ID] varchar(24),  
  [MODIFY_TIME] VARCHAR(24), 
  [SEND_FLAG] INTEGER,  
  [StartDate] varchar(24),  
  [EndDate] varchar(24),  
  [StartTime] VARCHAR(24), 
  [EndTime] VARCHAR(24) 
);
CREATE TABLE TIME_ZONE_EX( ID INTEGER, Timezone_Name VARCHAR(64), Mon_Time1 INT, Mon_Time2 INT, Mon_Time3 INT, Mon_Time4 INT, Mon_Time5 INT, Mon_Time6 INT, Mon_Time7 INT, Tue_Time1 INT, Tue_Time2 INT, Tue_Time3 INT, Tue_Time4 INT, Tue_Time5 INT, Tue_Time6 INT, Tue_Time7 INT, Wed_Time1 INT, Wed_Time2 INT, Wed_Time3 INT, Wed_Time4 INT, Wed_Time5 INT, Wed_Time6 INT, Wed_Time7 INT, Thu_Time1 INT, Thu_Time2 INT, Thu_Time3 INT, Thu_Time4 INT, Thu_Time5 INT, Thu_Time6 INT, Thu_Time7 INT, Fri_Time1 INT, Fri_Time2 INT, Fri_Time3 INT, Fri_Time4 INT, Fri_Time5 INT, Fri_Time6 INT, Fri_Time7 INT, Sat_Time1 INT, Sat_Time2 INT, Sat_Time3 INT, Sat_Time4 INT, Sat_Time5 INT, Sat_Time6 INT, Sat_Time7 INT, Sun_Time1 INT, Sun_Time2 INT, Sun_Time3 INT, Sun_Time4 INT, Sun_Time5 INT, Sun_Time6 INT, Sun_Time7 INT);
CREATE TABLE [Pers_BioTemplate] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [user_pin] VARCHAR(64) NOT NULL, [create_operator] varchar(30), [create_time] varchar(24), [valid_flag] INTEGER DEFAULT (1), [is_duress] INTEGER DEFAULT (0), [bio_type] INTEGER DEFAULT (0), [major_ver] INTEGER DEFAULT (0), [minor_ver] INTEGER DEFAULT (0), [data_format] INTEGER DEFAULT (0), [template_no] INTEGER, [template_no_index] INTEGER, [template_id] INTEGER, [CREATE_ID] VARCHAR(24), [MODIFY_TIME] VARCHAR(24), [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [Pers_BioTemplateData] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [template_data] BLOB, [CREATE_ID] VARCHAR(24), [MODIFY_TIME] VARCHAR(24), [SEND_FLAG] INTEGER DEFAULT (0));
CREATE TABLE [LINPHONE_INFO] ( [ID] INTEGER PRIMARY KEY AUTOINCREMENT, [Unit] INTEGER DEFAULT (0), [RoomNo] INTEGER DEFAULT (0), [UserName] VARCHAR(64), [IP_Address] VARCHAR(32), [Telephone] VARCHAR(32), [Mobile] VARCHAR(32), [E_mail] VARCHAR(64));
CREATE INDEX [role_permission_index] ON [ROLE_PERMISSION] ([Role_Name], [Permission]);
CREATE INDEX [idxpin] ON [fptemplate10] ([pin]);
CREATE INDEX [idx_pin] ON [fptemplate09] ([pin]);
CREATE INDEX [first_card_pin_index] ON [ACC_FIRST_OPEN] ([UserPIN]);
CREATE INDEX [user_authorize_index] ON [ACC_USER_AUTHORIZE] ([UserPIN]);
CREATE INDEX [inout_fun_index] ON [ACC_INOUT_FUN] ([EventType]);
CREATE INDEX [finger_vein_pin_index] ON [FINGER_VEIN_TEMPLATE] ([User_PIN]);
CREATE INDEX [face7_pin_index] ON [FACE_TEMPLATE_7] ([User_PIN]);
CREATE INDEX ExtUser_Pin on ExtUser (Pin);
CREATE INDEX MulCardUser_join_index on MulCardUser (CardNo,Pin);
CREATE INDEX [AccLog_timeSecond_index] ON [ACC_ATT_LOG] ([TimeSecond]);
CREATE INDEX [AccLog_userPin_index] ON [ACC_ATT_LOG] ([UserPIN]);
CREATE INDEX [Verify_Time_Index] ON [ATT_LOG] ([Verify_Time]);
CREATE INDEX [bio_pin_index] ON [Pers_BioTemplate] ([user_pin]);
CREATE INDEX linphone_join_index on LINPHONE_INFO (Unit,RoomNo);
CREATE UNIQUE INDEX [app_func_index] ON [APP_FUNC] ([App_Name], [Func_Name]);
CREATE UNIQUE INDEX [app_permission_index] ON [APP_PERMISSION] ([App_Name], [Permission]);
CREATE UNIQUE INDEX [func_permission_index] ON [FUNC_PERMISSION] ([Func_Name], [Permission]);
CREATE UNIQUE INDEX [key_func_index] ON [KEY_FUNC] ([Key_Name], [Func_Name]);
CREATE UNIQUE INDEX [option_name_index] ON [OPTION_INFO] ([Option_Name]);
