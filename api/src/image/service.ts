import {Injectable} from "@nestjs/common";
import {BaseService} from "../base/service";

@Injectable()
export class ImageService extends BaseService {

    create(image) {
        console.log('vao day')
        return null
    }
}