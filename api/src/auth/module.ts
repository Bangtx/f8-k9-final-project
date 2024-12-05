import {Module} from "@nestjs/common";
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from './service'
import {AuthController} from './controller'

@Module({
    imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}