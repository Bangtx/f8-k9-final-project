import { Module } from '@nestjs/common';
import {ImageController} from './controller'
import { ImageService } from "./service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entity'

@Module({
    imports: [TypeOrmModule.forFeature([Image])],
    controllers: [ImageController],
    providers: [ImageService]
})
export class ImageModule {}