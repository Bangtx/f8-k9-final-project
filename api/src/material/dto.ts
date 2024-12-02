import {ApiProperty} from "@nestjs/swagger";

export class CreateDto {
    @ApiProperty({
        example: 'Fe'
    })
    name: string;

    @ApiProperty({
        example: 10
    })
    unitPrice: number;
}