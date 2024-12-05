import {Injectable} from "@nestjs/common";
import {BaseService} from "../base/service";
import {InjectRepository} from "@nestjs/typeorm";
import {Material} from "./entity";
import {Repository} from "typeorm";
import {Base} from "../base/entity";

@Injectable()
export class MaterialService extends BaseService {
    constructor(
        @InjectRepository(Material)
        private materialRepository: Repository<Material>,
    ) {
        super(materialRepository)
    }

    handleSelect() {
        return super.handleSelect().select([
            'id as id',
            'name as name',
            'unit_price as unit_price',
        ]);
    }
}