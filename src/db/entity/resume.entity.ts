import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from 'typeorm';
import FreelancerEntity from './freelancer.entity';

@Entity()
export default class ResumeEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    ResumeID: number;

    @Column({ length: 500 })
    description: string;

    @OneToOne(type => FreelancerEntity, freelancer => freelancer.resume)
    freelancerID: FreelancerEntity;
}