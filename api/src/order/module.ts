import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";;
import {OrderController} from "./controller";
import {OrderService} from "./service";
import {Order} from "./entity";
import {OrderDetailService} from "../orderDetail/service";
import {MaterialService} from "../material/service";
import {OrderDetail} from '../orderDetail/entity'
import {Material} from '../material/entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([Order, OrderDetail, Material]),
    ],
    controllers: [OrderController],
    providers: [OrderService, OrderDetailService, MaterialService]
})
export class OrderModule {}