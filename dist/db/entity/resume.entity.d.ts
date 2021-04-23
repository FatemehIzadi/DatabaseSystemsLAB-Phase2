import { BaseEntity } from 'typeorm';
import FreelancerEntity from './freelancer.entity';
export default class ResumeEntity extends BaseEntity {
    ResumeID: number;
    description: string;
    freelancerID: FreelancerEntity;
}
