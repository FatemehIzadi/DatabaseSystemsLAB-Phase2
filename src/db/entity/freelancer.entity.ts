import { type } from 'node:os';
import { Entity, Column, OneToMany, OneToOne } from 'typeorm';
import SkillEntity from './skill.entity';
import UserEntity from './user.entity';
import ResumeEntity from './resume.entity';

@Entity()
export default class FreelancerEntity extends UserEntity {

    @Column({ length: 16 })
    cardNum: string;

    @OneToMany( type => SkillEntity , skill => skill.freelancer)
    skills: SkillEntity[];

    @OneToOne (type => ResumeEntity , resume => resume.freelancerID)
    resume: ResumeEntity;
}