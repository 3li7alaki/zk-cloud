# 🔐 ZK Cloud - Reverse Engineering ZK Biometric Protocol

> **Open-source ZK device management server for learning and integration.** Reverse engineer and replicate ZK device communication protocols, giving developers control over biometric devices and enabling custom integrations.

![NestJS](https://img.shields.io/badge/Backend-NestJS-red)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791)
![Reverse Engineering](https://img.shields.io/badge/Purpose-Reverse%20Engineering-orange)
![Python](https://img.shields.io/badge/Emulator-Python-green)

## 🚀 What This Does

ZK Cloud provides a device management server that ZK devices can connect to, offering:

1. **🔍 Device Management Server** - Controllable alternative to proprietary management software
2. **📡 Device Communication** - Handle heartbeat requests and command responses  
3. **🔗 Custom Integration** - Learn how to integrate ZK functionality into your applications
4. **📊 Protocol Documentation** - Understand and replicate device communication patterns

## 🏗️ Architecture

Simple single-application architecture for learning:

```
┌─────────────────┐    HTTP     ┌─────────────────┐
│    ZK Device    │────────────>│   NestJS App    │
│ (Real/Emulated) │             │   Port: 3000    │
│                 │             │                 │
│ • Fingerprint   │<────────────│ • Protocol      │
│ • Face recog    │  Commands   │   decoding      │
│ • Access events │  via        │ • HTTP endpoints│
│ • Heartbeat     │  heartbeat  │ • Command queue │
│   requests      │  response   │                 │
└─────────────────┘             └─────────────────┘
                                         │
                                         ▼
                                ┌─────────────────┐
                                │   PostgreSQL    │
                                │                 │
                                │ • Device Mgmt   │
                                │ • Raw packets   │
                                │ • Decoded data  │
                                │ • Access logs   │
                                └─────────────────┘
```

## 🛠️ Tech Stack

**Backend**
- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL 
- **Communication**: HTTP-based endpoints
- **Protocol**: Custom ZK device protocol (reverse engineered)

**Device Emulator**
- **Language**: Python
- **Config**: JSON-based device simulation
- **Interface**: Terminal commands for testing
- **Purpose**: Validate protocol understanding

## 🎯 Why This Matters

Instead of being locked into proprietary device management software, developers can:

- **Take control** - Run your own server that ZK devices connect to
- **Learn the protocol** - Understand how devices communicate and behave
- **Build integrations** - Connect biometric access to your existing systems
- **Customize functionality** - Implement features that proprietary software doesn't offer

ZK devices expect to communicate with a management server. This project replicates that server behavior while documenting the undocumented protocol.

## 🔧 How It Works

ZK devices are designed to connect to management servers. This project replicates that behavior:

- **Device Registration** - Accept new ZK devices trying to connect
- **Heartbeat Handling** - Respond to periodic device status checks
- **Command Delivery** - Send management commands (add/delete users, etc.) via heartbeat responses
- **Event Collection** - Receive and process access events from devices
- **Protocol Documentation** - Document findings as the protocol is reverse engineered

## 📝 Protocol Documentation

As we decode the ZK protocol, findings are documented in:
- `docs/protocol-analysis.md` - Packet structure breakdown
- `docs/command-reference.md` - Available device commands
- `docs/integration-guide.md` - SaaS integration examples

## 🤝 Contributing

This is a learning project! Contributions welcome for:
- Protocol analysis and documentation
- Device emulation improvements
- Integration examples
- Reverse engineering techniques

## 📄 License

MIT - Learn, decode, and document.

---

**🎉 Reverse engineering proprietary protocols, one packet at a time. Alhamdulillah!**
