import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from 'typeorm';
import FreelancerEntity from './freelancer.entity';

@Entity()
export default class ResumeEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    resumeID: number;

    @Column({ length: 500 })
    descr: string;

    @OneToOne(type => FreelancerEntity, freelancer => freelancer.resume)
    freelancerID: FreelancerEntity;
}