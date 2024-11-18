import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {VendorModule} from "./vendor/module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './vendor/entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'default',
      entities: [Vendor],
      synchronize: true,
    }),
    VendorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
