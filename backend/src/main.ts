import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DatabaseExceptionFilter } from './common/filters/database-exception.filter';
import { CustomExceptionFilter } from './common/filters/exception.filter';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false },
      forbidUnknownValues: true,
    }),
  );

  app.use(bodyParser.text({ type: 'text/plain', defaultCharset: 'utf-8' }));
  app.use(bodyParser.text({ type: 'application/octet-stream', defaultCharset: 'utf-8' }));
  app.use(bodyParser.text({ type: 'application/push', defaultCharset: 'utf-8' }));

  app.useGlobalFilters(new DatabaseExceptionFilter());
  app.useGlobalFilters(new CustomExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('ZK Cloud API')
    .setDescription('Open-source ZK device management server for learning and integration.')
    .setVersion('1.0')
    .setContact('Ali AlHalaki', 'https://github.com/3li7alaki/zk-cloud', 'AliHalaki@outlook.com')
    .addServer('http://localhost:3000', 'Development server')
    .addBearerAuth()
    .addTag('Devices', 'Device management operations')
    .addTag('Users', 'User management operations')
    .addTag('Commands Management', 'Command operations for device interaction')
    .addTag('Attendance', 'Attendance record operations')
    .addTag('iClock Protocol', 'Device communication protocol endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, document);

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
