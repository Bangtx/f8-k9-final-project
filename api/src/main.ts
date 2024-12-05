import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import {json} from "express";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'http://localhost:5000',
    methods: ['OPTION', 'GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*'],
    credentials: true,
  });
  app.use(json({ limit: '50mb' }));

  const config = new DocumentBuilder()
      .setTitle('F8 k9 api')
      .setDescription('The API description')
      .setVersion('1.0')
      .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();