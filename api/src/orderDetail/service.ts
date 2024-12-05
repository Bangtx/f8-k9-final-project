import {Injectable} from "@nestjs/common";
import {BaseService} from "../base/service";
import {InjectRepository} from "@nestjs/typeorm";
import {OrderDetail} from "./entity";
import {Repository} from "typeorm";

@Injectable()
export class OrderDetailService extends BaseService {
    constructor(
        @InjectRepository(OrderDetail)
        private orderDetailRepository: Repository<OrderDetail>
    ) {
        super(orderDetailRepository)
    }
}