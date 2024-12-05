import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    createToken() {
        const token = this.jwtService.sign({
            name: 'test',
            age: 10,
            sub: '1234567890',
            test: 11111
        }, {
            expiresIn: 6000
        })

        return {
            access_token: token,
            token_type: 'Bearer'
        }
    }
}