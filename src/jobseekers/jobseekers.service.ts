import { Injectable } from '@nestjs/common';
import EmployerEntity from '../db/entity/employer.entity';
import FreelancerEntity from '../db/entity/freelancer.entity'
import SkillEntity from '../db/entity/skill.entity';
import OfferEntity from '../db/entity/offer.entity';
import ResumeEntity from '../db/entity/resume.entity';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateSkillDto from './dto/create-skill.dto';
import CreateOfferDto from './dto/create-offer.dto';
import CreateResumeDto from './dto/create-resume.dto';

@Injectable()
export class JobseekersService {
  async insertEmployer(employerDetails: CreateEmployerDto): Promise<EmployerEntity> {
    const employerEntity: EmployerEntity = EmployerEntity.create();
    const {username, email , phone} = employerDetails;
    employerEntity.username = username;
    employerEntity.email = email;
    employerEntity.phone = phone;
    employerEntity.offers = [];
    await EmployerEntity.save(employerEntity);
    return employerEntity;
  }
  async insertFreelancer(freelancerDetails: CreateFreelancerDto): Promise<FreelancerEntity> {
    const freelancerEntity: FreelancerEntity = FreelancerEntity.create();
    const {username, email , phone} = freelancerDetails;
    freelancerEntity.username = username;
    freelancerEntity.email = email;
    freelancerEntity.phone = phone;
    freelancerEntity.skills = [];
    await FreelancerEntity.save(freelancerEntity);
    return freelancerEntity;
  }
  async insertSkill(skillDetails: CreateSkillDto, freelancerID: number): Promise<SkillEntity> {
    const skillEntity:SkillEntity = SkillEntity.create();
    const {skillID, descr, level} = skillDetails;
    skillEntity.skillID = skillID;
    skillEntity.freelancerID = await FreelancerEntity.findOne(freelancerID);
    skillEntity.descr = descr;
    skillEntity.level = level;
    await SkillEntity.save(skillEntity);
    return skillEntity;
  }
  async insertOffer(orderDetails: CreateOfferDto, employerID: number): Promise<OfferEntity> {
    const offerEntity: OfferEntity = OfferEntity.create();
    const {offerID, income, deadline, priority, category, minExp} = orderDetails;
    offerEntity.offerID = offerID;
    offerEntity.employerID = await EmployerEntity.findOne(employerID);
    offerEntity.income = income;
    offerEntity.deadline = deadline;
    offerEntity.priority = priority;
    offerEntity.category = category;
    offerEntity.minExp = minExp;
    await OfferEntity.save(offerEntity);
    return offerEntity;
  }

  async insertResume(ResumeDetails: CreateResumeDto, freelancerID: number): Promise<ResumeEntity> {
    const resumeEntity:ResumeEntity = ResumeEntity.create();
    const {resumeID, descr} = ResumeDetails;
    resumeEntity.resumeID = resumeID;
    resumeEntity.freelancerID = await FreelancerEntity.findOne(freelancerID);
    resumeEntity.descr = descr;
    await ResumeEntity.save(resumeEntity);
    return resumeEntity;
  }
  
}