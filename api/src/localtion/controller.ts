import {Body, Controller, Put} from "@nestjs/common";
import { LocationDto } from './dto'
import {LocationService} from "./service";

@Controller('location')
export class LocationController {

    constructor(private locationService: LocationService) {
    }

    @Put()
    async create_or_update(@Body() location: LocationDto){
        return this.locationService.create_or_update(location)
    }

}