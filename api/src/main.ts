import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import {json} from "express";
import {sign} from 'jsonwebtoken'



const ACCESS_TOKEN_EXPIRE = 1
const SECRET_KEY = '12bdi12ebd2d23rf2ef12'
const ALGORITHM = 'HS256'

const payload = {
  name: 'test',
  role: 'admin',
  phone: '123'
}

const token = sign(payload, SECRET_KEY, { algorithm: 'RS256' }, () => {});
console.log('token', token)


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
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