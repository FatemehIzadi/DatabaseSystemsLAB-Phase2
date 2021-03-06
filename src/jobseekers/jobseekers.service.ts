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
import UpdateEmployerDto from './dto/update-employer.dto';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import UpdateOfferDto from './dto/update-offer.dto';
import UpdateSkillDto from './dto/update-skill.dto';

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
  async insertSkill(skillDetails: CreateSkillDto): Promise<SkillEntity> {
    const skillEntity:SkillEntity = SkillEntity.create();
    const {category, descr, level} = skillDetails;
    skillEntity.category = category;
    skillEntity.descr = descr;
    skillEntity.level = level;
    await SkillEntity.save(skillEntity);
    return skillEntity;
  }
  async insertOffer(offerDetails: CreateOfferDto): Promise<OfferEntity> {
    const offerEntity: OfferEntity = OfferEntity.create();
    const {income, deadline, priority, category, minExp, descr} = offerDetails;
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
    const {descr} = ResumeDetails;
    resumeEntity.freelancerID = await FreelancerEntity.findOne(freelancerID);
    resumeEntity.descr = descr;
    await ResumeEntity.save(resumeEntity);
    return resumeEntity;
  }

  async updateEmployer(employerDetails: UpdateEmployerDto): Promise<EmployerEntity> {
    const {username, email , phone} = employerDetails;
    const employer = await EmployerEntity.findOne(username);
    employer.email = email;
    employer.phone = phone;
    await employer.save();
    return employer;
  }
 
  async deleteEmployer(employerID: number): Promise<EmployerEntity> {
    const employer = await EmployerEntity.findOne(employerID);
    await employer.remove();
    return employer;
  }
 
  async updateFreelancer(freelancerDetails: UpdateFreelancerDto): Promise<FreelancerEntity> {
    const {username, email , phone} = freelancerDetails;
    const freelancer = await FreelancerEntity.findOne(username);
    freelancer.email = email;
    freelancer.phone = phone;
    await freelancer.save();
    return freelancer;
  }
 
  async deleteFreelancer(freelancerID: number): Promise<FreelancerEntity> {
    const freelancer = await FreelancerEntity.findOne(freelancerID);
    await freelancer.remove();
    return freelancer;
  } 

  async updateSkill(skillDetails: UpdateSkillDto): Promise<SkillEntity> {
    const {skillID, category, descr, level} = skillDetails;
    const skillEntity = await SkillEntity.findOne(skillID);
    skillEntity.category = category;
    skillEntity.descr = descr;
    skillEntity.level = level;
    await skillEntity.save();
    return skillEntity;
  }

  async deleteSkill(skillID: number): Promise<SkillEntity> {
    const skillEntity = await SkillEntity.findOne(skillID);
    await skillEntity.remove();
    return skillEntity;
  }

  async updateOffer(offerDetails: UpdateOfferDto): Promise<OfferEntity> {
    const {offerID, income, deadline, priority, category, minExp, descr} = offerDetails;
    const offerEntity = await OfferEntity.findOne(offerID);
    offerEntity.income = income;
    offerEntity.deadline = deadline;
    offerEntity.priority = priority;
    offerEntity.category = category;
    offerEntity.minExp = minExp;
    await offerEntity.save();
    return offerEntity;
  }

  async deleteOffer(offerID: number): Promise<OfferEntity> {
    const offerEntity = await OfferEntity.findOne(offerID);
    await offerEntity.remove();
    return offerEntity;
  }

  async getAllEmployers(): Promise<EmployerEntity[] > {
    return EmployerEntity.find();
  }

  async getAllFreelancers(): Promise<FreelancerEntity[] > {
    return FreelancerEntity.find();
  }

  async getAllSkills(): Promise<SkillEntity[] > {
    return SkillEntity.find();
  }
  
  async getAllOffers(): Promise<OfferEntity[] > {
    return OfferEntity.find();
  }
}