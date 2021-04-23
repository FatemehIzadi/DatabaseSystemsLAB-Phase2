import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import FreelancerEntity from './freelancer.entity';

@Entity()
export default class SkillEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    skillID: number;

    @Column({ length: 500 })
    category: string;

    @Column({ length: 500 })
    descr: string;

    @Column()
    level: number;

    @ManyToOne(type => FreelancerEntity, freelancer => freelancer.skills)
    freelancerID: FreelancerEntity;
}