import {Base} from "../base/entity";
import {Column, Entity} from "typeorm";

@Entity()
export class Material extends Base {
    @Column()
    name: string;

    @Column({
        name: "unit_price",
        type: "numeric",
        precision: 10,
        scale: 2
    })
    unitPrice: number
}