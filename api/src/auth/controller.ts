import {Controller, Post} from "@nestjs/common";
import {AuthService} from "./service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post()
    createToken() {
        return this.authService.createToken()
    }
}

