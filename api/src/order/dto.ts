import {ApiProperty} from "@nestjs/swagger";


export class CreateOrderDetailDto {
    @ApiProperty()
    materialId: number

    @ApiProperty()
    weight: number
}


export class CreateDto {
    @ApiProperty()
    storeId: number

    @ApiProperty({
        type: CreateOrderDetailDto, // Specify the type of each array element
        isArray: true,
    })
    orderDetails: CreateOrderDetailDto[]
}

// {
//     storeId: 1,
//     orderDetails: [
//         {
//             materialId: 1,
//             weight: 10.0
//         }
//     ]
// }