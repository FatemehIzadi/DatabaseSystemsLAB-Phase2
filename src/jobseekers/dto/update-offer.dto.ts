import { ApiProperty } from '@nestjs/swagger';
import CreateOrderDto from './create-offer.dto';

export default class UpdateOrderDto extends CreateOrderDto {
    @ApiProperty({type: "number", description:"Offer ID", maxLength: 500})
    readonly offrtID: number;
}