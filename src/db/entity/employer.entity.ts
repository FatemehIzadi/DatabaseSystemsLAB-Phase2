import { Entity, Column, OneToMany } from 'typeorm';
import OfferEntity from './offer.entity';
import UserEntity from './user.entity';

@Entity()
export default class EmployerEntity extends UserEntity {

    @OneToMany( type => OfferEntity , offer => offer.employerID)
    offers: OfferEntity[];
}