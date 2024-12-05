import {Body, Controller, Get, Post} from "@nestjs/common";
import {OrderService} from './service'
import {CreateDto} from './dto'

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    getAll() {
        return this.orderService.getList()
    }

    @Post()
    create(@Body() order: CreateDto) {
        return this.orderService.create(order)
    }
}