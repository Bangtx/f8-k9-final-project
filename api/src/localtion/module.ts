import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Location} from "./entity";
import {LocationService} from './service'
import {LocationController} from './controller'

@Module({
    imports: [
        TypeOrmModule.forFeature([Location])
    ],
    controllers: [LocationController],
    providers: [LocationService]
})
export class LocationModule {}