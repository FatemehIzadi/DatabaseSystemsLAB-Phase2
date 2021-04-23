import { BaseEntity } from 'typeorm';
import EmployerEntity from './employer.entity';
export default class OfferEntity extends BaseEntity {
    offerID: number;
    descr: string;
    category: string;
    deadline: Date;
    income: number;
    minExp: number;
    priority: number;
    employerID: EmployerEntity;
}
