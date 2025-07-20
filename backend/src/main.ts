import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DatabaseExceptionFilter } from './common/filters/database-exception.filter';
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

  app.useGlobalFilters(new DatabaseExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('ZK Cloud API')
    .setDescription('Open-source ZK device management server for learning and integration.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, document);

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
