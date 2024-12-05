import {Body, Get, Param, Post, Controller, Put, Delete, Request} from '@nestjs/common';
import {CreateDto, UpdateDto} from "./dto";
import {VendorService} from './service'
import { Reflector } from '@nestjs/core';


@Controller('vendor')
export class VendorController {
    constructor(
        private vendorService: VendorService,
        private reflector: Reflector
    ) {}


    @Get("/")
    getAll(@Request() req) {
        return this.vendorService.getList();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.vendorService.getOne(Number(id));
    }

    @Post()
    create(@Body() vendor: CreateDto) {
        return this.vendorService.create(vendor);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() vendor: UpdateDto) {
        console.log(id, vendor)
        return this.vendorService.update(id, vendor)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return "delete vendor"
    }
}