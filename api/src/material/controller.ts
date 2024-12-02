import {Body, Controller, Get, Post} from "@nestjs/common";
import {MaterialService} from "./service";
import {CreateDto} from './dto'

@Controller('material')
export class MaterialController {
    constructor(private materialService: MaterialService) {}

    @Get()
    getAll() {
        return this.materialService.getList()
    }

    @Post()
    create(@Body() material: CreateDto) {
        return this.materialService.create(material)
    }
}