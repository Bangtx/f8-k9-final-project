import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";;
import {OrderDetailService} from "./service";
import {OrderDetail} from "./entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderDetail]),
    ],
    controllers: [],
    providers: [OrderDetailService],
})
export class OrderModule {}