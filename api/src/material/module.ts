import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Material} from "./entity";
import {MaterialController} from "./controller";
import {MaterialService} from "./service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Material]),
    ],
    controllers: [MaterialController],
    providers: [MaterialService]
})
export class MaterialModule {}
