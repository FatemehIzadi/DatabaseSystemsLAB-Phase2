import { BaseEntity } from 'typeorm';
import FreelancerEntity from './freelancer.entity';
export default class SkillEntity extends BaseEntity {
    skillID: number;
    category: string;
    descr: string;
    level: number;
    freelancer: FreelancerEntity;
}
