import CreateOfferDto from './create-offer.dto';
export default class UpdateOfferDto extends CreateOfferDto {
    readonly offerID: number;
}
