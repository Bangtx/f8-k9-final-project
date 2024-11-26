import { Module } from '@nestjs/common';
import {VendorController} from './controller'
import {VendorService} from "./service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entity'
import { MailerModule } from '@nestjs-modules/mailer'

const HOST = 'smtp.gmail.com';
const PORT = 465
const SENDER = 'bangtran.hha@gmail.com';
const PASSWORD = 'olytahjqepxjwyxq';

@Module({
    imports: [
        TypeOrmModule.forFeature([Vendor]),
        MailerModule.forRoot({
            transport: {
                host: HOST,
                port: PORT,
                auth: {
                    user: SENDER,
                    pass: PASSWORD
                }
            }
        })
    ],
    controllers: [VendorController],
    providers: [VendorService]
})
export class VendorModule {}
