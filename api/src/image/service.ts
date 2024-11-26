import {Injectable} from "@nestjs/common";
import {BaseService} from "../base/service";
import { writeFile } from 'fs'
import { v4 } from 'uuid'
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Image} from './entity'
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ImageService extends BaseService {

    constructor(
        @InjectRepository(Image)
        private imageRepository: Repository<Image>,
    ) {
        super(imageRepository)
    }

    async create(image) {
        const payload = image.payload.split(',')[1]
        const path = `images/${v4()}.png`

        await writeFile(path, payload, 'base64', (e) => {
            console.log(e)
        })

        const newImg = super.create({
            path: path,
            url: null
        })
        return newImg
    }
}