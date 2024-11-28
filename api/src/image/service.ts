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

        if (image.isIdentity) {
            // call gg vision api

            const body = {
                "requests": [
                    {
                        "image": {
                            "content": payload
                        },
                        "features": [
                            {
                                "type": "TEXT_DETECTION"
                            }
                        ]
                    }
                ]
            }

            const res = await fetch(
                'https://content-vision.googleapis.com/v1/images:annotate?alt=json&key=AIzaSyB8kyx-tthsKfMgn3zx4yF92ZtO2R5le2U',
                {
                    method: 'POST',
                    body: JSON.stringify(body)
                }
            )


            const rawText = (await res.json())['responses'][0]['textAnnotations'][0]['description']
            // console.log('cay the', rawText)
            const info = {};

            info['fullName'] = rawText.match(/Họ và tên \/ Full name:\s*(.+)/)[1].trim();
            console.log(info)

        }

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