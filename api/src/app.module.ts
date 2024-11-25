import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {VendorModule} from "./vendor/module";
import {StoreModule} from "./store/module";
import {ImageModule} from "./image/module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './vendor/entity'
import { Store } from './store/entity'
import { Image } from './image/entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'default',
      entities: [Vendor, Store, Image],
      synchronize: true,
      logging: true
    }),
    VendorModule,
    StoreModule,
    ImageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
