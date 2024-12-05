import {Base} from "../base/entity";
import {Column, Entity} from "typeorm";

@Entity()
export class OrderDetail extends Base {
    @Column({
        name: 'order_id'
    })
    orderId: number

    @Column({
        name: 'material_id'
    })
    materialId: number

    @Column({
        type: 'numeric',
        precision: 10,
        scale: 2
    })
    weight: number

    @Column({
        type: 'numeric',
        precision: 10,
        scale: 2
    })
    amount: number
}