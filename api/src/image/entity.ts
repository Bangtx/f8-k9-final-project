import {Column, Entity} from "typeorm";
import {Base} from '../base/entity'


@Entity()
export class Image extends Base {
    @Column({
        nullable: true,
        unique: true
    })
    path: string;

    @Column({
        nullable: true,
        unique: true
    })
    url: string;
}