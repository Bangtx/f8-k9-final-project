import {Injectable} from "@nestjs/common";
import {BaseService} from "../base/service";
import {InjectRepository} from "@nestjs/typeorm";
import {Order} from "./entity";
import {OrderDetail} from "../orderDetail/entity";
import {Repository} from "typeorm";
import {OrderDetailService} from "../orderDetail/service";
import {MaterialService} from "../material/service";

@Injectable()
export class OrderService extends BaseService{
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        protected orderDetailService: OrderDetailService,
        protected materialService: MaterialService
    ) {
        super(orderRepository)
    }



    async create(order) {
        /*
        * create order -> id (orderId)
        * create order detail with order id above
        * */
        let orderDetailsIns = order.orderDetails

        // get all materials
        const materials = await this.materialService.getList()
        // console.log(materials)
        orderDetailsIns.forEach(orderDetailIns => {
            const material = materials.find(m => m.id == orderDetailIns.materialId)
            orderDetailIns.amount = material.unit_price * orderDetailIns.weight
        })

        let newOrder = await super.create({
            storeId: order.storeId,
            totalAmount: 3000
        })

        newOrder = newOrder['raw'][0]

        orderDetailsIns = orderDetailsIns.map(e => {
            return {...e, orderId: newOrder['id']}
        })

        this.orderDetailService.create(orderDetailsIns)
        return null
    }
}