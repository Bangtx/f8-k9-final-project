import {Body, Get, Post, Controller} from '@nestjs/common';
import { ImageCreate } from './dto'
import {ImageService} from "./service";


@Controller('image')
export class ImageController {
    constructor(private imageService: ImageService) {}

    @Post('/')
    create(@Body() image: ImageCreate) {
        return this.imageService.create(image)
    }

}