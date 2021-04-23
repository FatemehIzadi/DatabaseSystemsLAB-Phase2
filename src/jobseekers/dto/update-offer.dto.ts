import { ApiProperty } from '@nestjs/swagger';
import CreateOfferDto from './create-offer.dto';

export default class UpdateOfferDto extends CreateOfferDto {
    @ApiProperty({type: "number", description:"Offer ID", maxLength: 500})
    readonly offrtID: number;
}