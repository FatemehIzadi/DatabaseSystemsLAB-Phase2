import { BaseEntity } from 'typeorm';
import FreelancerEntity from './freelancer.entity';
export default class SkillEntity extends BaseEntity {
    skillID: number;
    descr: string;
    level: number;
    freelancerID: FreelancerEntity;
}
