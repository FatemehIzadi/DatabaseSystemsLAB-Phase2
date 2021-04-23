import OfferEntity from './offer.entity';
import UserEntity from './user.entity';
export default class EmployerEntity extends UserEntity {
    offers: OfferEntity[];
}
