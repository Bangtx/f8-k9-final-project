import {Base} from "../base/entity";
import {Column, Entity} from "typeorm";

@Entity()
export class Order extends Base {
    @Column({
        name: 'driver_id',
        nullable: true
    })
    driverId: number

    @Column({
        name: 'store_id'
    })
    storeId: number

    @Column({name: 'image_id', nullable: true})
    imageId: number

    @Column({
        name: 'status',
        default: 'pending'
    })
    status: string;

    @Column({
        name: 'payment_status',
        default: 'unpaid'
    })
    paymentStatus: string

    @Column({
        name: 'total_amount',
        type: 'numeric',
        precision: 10,
        scale: 2
    })
    totalAmount: number;
}