import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity()
export class Location {
    @Column('numeric', { precision: 13, scale: 10 })
    latitude: number

    @Column('numeric', { precision: 13, scale: 10 })
    longitude: number

    @PrimaryColumn({
        name: 'driver_id'
    })
    driverId: number
}