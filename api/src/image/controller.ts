import {Body, Get, Post, Controller, Query, StreamableFile} from '@nestjs/common';
import { ImageCreate } from './dto'
import {ImageService} from "./service";
import { createReadStream } from 'fs'


@Controller('image')
export class ImageController {
    constructor(private imageService: ImageService) {}

    @Get('/')
    getImg (@Query('path') path: string) {
        // path = images/b9e2a59b-bb59-4474-b2c4-8ab7b852b27a.png
        const file = createReadStream(path)
        return new StreamableFile(file)
    }

    @Post('/')
    create(@Body() image: ImageCreate) {
        return this.imageService.create(image)
    }

}