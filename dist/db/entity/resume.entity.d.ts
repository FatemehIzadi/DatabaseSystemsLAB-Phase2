import { BaseEntity } from 'typeorm';
import FreelancerEntity from './freelancer.entity';
export default class ResumeEntity extends BaseEntity {
    resumeID: number;
    descr: string;
    freelancerID: FreelancerEntity;
}
