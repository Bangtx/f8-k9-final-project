import {Injectable} from "@nestjs/common";
import {BaseService} from "../base/service";
import {InjectRepository} from "@nestjs/typeorm";
import {Material} from "./entity";
import {Repository} from "typeorm";

@Injectable()
export class MaterialService extends BaseService {
    constructor(
        @InjectRepository(Material)
        private materialRepository: Repository<Material>,
    ) {
        super(materialRepository)
    }
}