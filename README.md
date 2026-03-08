# ZK Cloud

Open-source ZK biometric device management server. Reverse-engineered iClock protocol implementation that lets you run your own server for ZK fingerprint, face, and palm recognition devices.

![NestJS](https://img.shields.io/badge/Backend-NestJS_11-red)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791)
![License](https://img.shields.io/badge/License-MIT-green)

## What This Does

ZK biometric devices (fingerprint scanners, face recognition terminals) are designed to connect to a management server. This project replicates that server, giving you full control over your devices without proprietary software.

```
┌─────────────────┐    HTTP     ┌─────────────────┐
│    ZK Device    │────────────>│   ZK Cloud      │
│                 │             │   (NestJS)      │
│ • Fingerprint   │<────────────│                 │
│ • Face recog    │  Commands   │ • iClock proto  │
│ • Palm print    │  via poll   │ • REST API      │
│ • Attendance    │  response   │ • Swagger docs  │
└─────────────────┘             └────────┬────────┘
                                         │
                                         ▼
                                ┌─────────────────┐
                                │   PostgreSQL    │
                                │                 │
                                │ • Devices       │
                                │ • Users         │
                                │ • Biometrics    │
                                │ • Attendance    │
                                │ • Commands      │
                                └─────────────────┘
```

### Features

- **Device Management** — Register, monitor, and control ZK biometric devices
- **iClock Protocol** — Full reverse-engineered implementation of the ZK device HTTP protocol
- **User Management** — Create and sync users with role-based access (Employee, Enroller, Admin)
- **Biometric Support** — Fingerprint, face, and palm template storage and device synchronization
- **Command System** — Queue and deliver commands to devices (query, sync, enroll, delete, reboot)
- **Attendance Tracking** — Collect and store access events from devices in real time
- **API Documentation** — Interactive Swagger UI at the server root

## Tech Stack

- **Runtime**: Node.js 20+
- **Framework**: NestJS 11
- **Language**: TypeScript (strict mode)
- **Database**: PostgreSQL with TypeORM
- **Docs**: Swagger / OpenAPI

## Quick Start

### With Docker (recommended)

```bash
git clone https://github.com/3li7alaki/zk-cloud.git
cd zk-cloud
docker compose up
```

The API will be available at `http://localhost:3000`.

### Manual Setup

**Prerequisites**: Node.js 20+, PostgreSQL

```bash
git clone https://github.com/3li7alaki/zk-cloud.git
cd zk-cloud/backend

# Configure database
cp .env.example .env
# Edit .env with your PostgreSQL credentials

# Install and run
npm install
npm run migration:run
npm run start:dev
```

### Connecting a Device

1. Register the device via the API: `POST /devices` with the device's serial number
2. Configure the device to point to your server's IP on port 3000
3. The device will connect automatically via the iClock protocol

## API Documentation

### Interactive Docs

Start the server and open `http://localhost:3000` for the Swagger UI.

### Authentication

Management endpoints (devices, users, commands, attendance) support API key authentication. Set `API_KEY` in your `.env` file, then pass it as a Bearer token or `x-api-key` header. When `API_KEY` is not set, endpoints are open.

Device protocol endpoints (`/iclock/*`) use serial number authentication and do not require an API key.

### Protocol Documentation

The `docs/` directory contains detailed reverse-engineering documentation:

- **[Protocol Analysis](docs/protocol-analysis.md)** — HTTP communication patterns, data formats, device lifecycle
- **[Command Reference](docs/command-reference.md)** — Complete command syntax for device operations
- **[Integration Guide](docs/integration-guide.md)** — Guide for building your own ZK device server

## Project Structure

```
backend/src/
├── device/        # Device registration and health monitoring
├── user/          # User management and biometric data
├── command/       # Command queue and protocol command builder
├── attendance/    # Attendance event recording
├── iclock/        # iClock protocol handler (device communication)
├── common/        # Shared guards, filters, DTOs
└── migrations/    # Database migrations
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on setting up your development environment, running tests, and submitting pull requests.

## License

MIT — see [LICENSE](LICENSE) for details.
