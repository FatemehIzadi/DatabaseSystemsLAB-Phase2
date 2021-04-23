import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import EmployerEntity from './employer.entity';

@Entity()
export default class OfferEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    offerID: number;

    @Column({ length: 500 })
    description: string;

    @Column({ length: 500 })
    category: string;

    @Column()
    deadline: Date;

    @Column()
    income: number;

    @Column()
    minExp: number;

    @Column()
    priority: number;

    @ManyToOne(type => EmployerEntity, employer => employer.offers)
    employerID: EmployerEntity;
}