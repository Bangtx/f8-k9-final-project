import {Injectable} from "@nestjs/common";
import { Repository } from 'typeorm';
import { Location } from './entity';
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class LocationService {
    constructor(@InjectRepository(Location) protected locationRepository: Repository<Location>) {}

    async create_or_update(location) {
        /*
        * location: {
        *   latitude: number, longitude: number, driverId: number
        * }
        * */

        // select location of this driver
        // const existingLocation = await this.locationRepository.findOne({
        //     where: {driverId: location.driverId}
        // });
        // console.log(existingLocation)
        //
        // // if location exists, update it
        // if (existingLocation) {
        //     existingLocation.latitude = location.latitude;
        //     existingLocation.longitude = location.longitude;
        //     existingLocation.driverId = location.driverId;
        //     await this.locationRepository.save(existingLocation);
        // } else {
        //     console.log(location)
        //     // otherwise, create a new one
        //     await this.locationRepository.save(location);
        // }
        // TODO: return new order if existing

        // get nearest location
        // fake location of store (21.0332647, 105.7938184)
        const storeLocation = {latitude: 21.0332647, longitude: 105.7938184}
        // get all locations
        const allLocations = await this.locationRepository.find();

        // calculate distance between current location and store location
        const distances = allLocations.map(location => {
            const R = 6371; // Radius of the Earth in km
            const dLat = R * Math.abs(storeLocation.latitude - location.latitude)
            const dLon = R * Math.abs(storeLocation.longitude - location.longitude);

            const curDistance = Math.sqrt(dLat * dLat + dLon * dLon)
            return {location, curDistance};
        });

        console.log(distances)

        // sort by
    }
}