import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {VendorModule} from "./vendor/module";
import {StoreModule} from "./store/module";
import {ImageModule} from "./image/module";
import {LocationModule} from "./localtion/module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './vendor/entity'
import { Store } from './store/entity'
import { Location } from './localtion/entity'
import { Image } from './image/entity'
import {Material} from "./material/entity";
import {MaterialModule} from "./material/module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'default',
      entities: [Vendor, Store, Image, Location,Material],
      synchronize: true,
      logging: true
    }),
    VendorModule,
    StoreModule,
    ImageModule,
    LocationModule,
    MaterialModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
