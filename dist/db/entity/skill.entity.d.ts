import { BaseEntity } from 'typeorm';
import FreelancerEntity from './freelancer.entity';
export default class SkillEntity extends BaseEntity {
    skillID: number;
    name: string;
    level: number;
    freelancerID: FreelancerEntity;
}
