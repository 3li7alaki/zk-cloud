# Contributing to ZK Cloud

Contributions are welcome. Whether it's fixing a bug, adding protocol documentation, or improving test coverage, your help is appreciated.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/zk-cloud.git`
3. Create a branch: `git checkout -b your-feature`

## Development Setup

### With Docker

```bash
docker compose up
```

### Manual

Requires Node.js 20+ and PostgreSQL.

```bash
cd backend
cp .env.example .env   # Edit with your DB credentials
npm install
npm run migration:run
npm run start:dev
```

## Project Structure

```
backend/src/
├── device/        # Device management module
├── user/          # User and biometric data
├── command/       # Command queue and builder
├── attendance/    # Attendance records
├── iclock/        # iClock protocol implementation
├── common/        # Shared utilities (guards, filters, DTOs)
└── migrations/    # TypeORM migrations
```

## Code Style

- Follow existing NestJS conventions (modules, services, controllers, DTOs)
- TypeScript strict mode is enabled
- Run `npm run lint` before committing
- Run `npm run format` to auto-format with Prettier

## Testing

```bash
npm test              # Run all tests
npm run test:cov      # Run with coverage
npm run test:watch    # Watch mode
```

Write tests for new features. Place test files next to the source file with a `.spec.ts` suffix.

## Pull Requests

1. Keep PRs focused on a single change
2. Include tests for new functionality
3. Update documentation if you change public APIs or protocol behavior
4. Reference any related issues in the PR description
5. Make sure `npm run lint` and `npm test` pass

## Protocol Documentation

If you have access to ZK devices and discover new protocol behavior:

1. Document your findings in the relevant file under `docs/`
2. Include raw HTTP request/response examples when possible
3. Note the device model and firmware version you tested with

## Reporting Issues

Use [GitHub Issues](https://github.com/3li7alaki/zk-cloud/issues) to report bugs or request features. Include:

- Steps to reproduce (for bugs)
- Device model and firmware (if protocol-related)
- Expected vs actual behavior

## Code of Conduct

Be respectful and constructive. We're all here to learn and build something useful.
