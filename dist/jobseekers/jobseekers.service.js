"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobseekersService = void 0;
const common_1 = require("@nestjs/common");
const employer_entity_1 = require("../db/entity/employer.entity");
const freelancer_entity_1 = require("../db/entity/freelancer.entity");
const skill_entity_1 = require("../db/entity/skill.entity");
const offer_entity_1 = require("../db/entity/offer.entity");
const resume_entity_1 = require("../db/entity/resume.entity");
let JobseekersService = class JobseekersService {
    async insertEmployer(employerDetails) {
        const employerEntity = employer_entity_1.default.create();
        const { username, email, phone } = employerDetails;
        employerEntity.username = username;
        employerEntity.email = email;
        employerEntity.phone = phone;
        employerEntity.offers = [];
        await employer_entity_1.default.save(employerEntity);
        return employerEntity;
    }
    async insertFreelancer(freelancerDetails) {
        const freelancerEntity = freelancer_entity_1.default.create();
        const { username, email, phone } = freelancerDetails;
        freelancerEntity.username = username;
        freelancerEntity.email = email;
        freelancerEntity.phone = phone;
        freelancerEntity.skills = [];
        await freelancer_entity_1.default.save(freelancerEntity);
        return freelancerEntity;
    }
    async insertSkill(skillDetails) {
        const skillEntity = skill_entity_1.default.create();
        const { category, descr, level } = skillDetails;
        skillEntity.category = category;
        skillEntity.descr = descr;
        skillEntity.level = level;
        await skill_entity_1.default.save(skillEntity);
        return skillEntity;
    }
    async insertOffer(offerDetails) {
        const offerEntity = offer_entity_1.default.create();
        const { income, deadline, priority, category, minExp, descr } = offerDetails;
        offerEntity.income = income;
        offerEntity.deadline = deadline;
        offerEntity.priority = priority;
        offerEntity.category = category;
        offerEntity.minExp = minExp;
        await offer_entity_1.default.save(offerEntity);
        return offerEntity;
    }
    async insertResume(ResumeDetails, freelancerID) {
        const resumeEntity = resume_entity_1.default.create();
        const { descr } = ResumeDetails;
        resumeEntity.freelancerID = await freelancer_entity_1.default.findOne(freelancerID);
        resumeEntity.descr = descr;
        await resume_entity_1.default.save(resumeEntity);
        return resumeEntity;
    }
    async updateEmployer(employerDetails) {
        const { username, email, phone } = employerDetails;
        const employer = await employer_entity_1.default.findOne(username);
        employer.email = email;
        employer.phone = phone;
        await employer.save();
        return employer;
    }
    async deleteEmployer(employerID) {
        const employer = await employer_entity_1.default.findOne(employerID);
        await employer.remove();
        return employer;
    }
    async updateFreelancer(freelancerDetails) {
        const { username, email, phone } = freelancerDetails;
        const freelancer = await freelancer_entity_1.default.findOne(username);
        freelancer.email = email;
        freelancer.phone = phone;
        await freelancer.save();
        return freelancer;
    }
    async deleteFreelancer(freelancerID) {
        const freelancer = await freelancer_entity_1.default.findOne(freelancerID);
        await freelancer.remove();
        return freelancer;
    }
    async updateSkill(skillDetails) {
        const { skillID, category, descr, level } = skillDetails;
        const skillEntity = await skill_entity_1.default.findOne(skillID);
        skillEntity.category = category;
        skillEntity.descr = descr;
        skillEntity.level = level;
        await skillEntity.save();
        return skillEntity;
    }
    async deleteSkill(skillID) {
        const skillEntity = await skill_entity_1.default.findOne(skillID);
        await skillEntity.remove();
        return skillEntity;
    }
    async updateOffer(offerDetails) {
        const { offerID, income, deadline, priority, category, minExp, descr } = offerDetails;
        const offerEntity = await offer_entity_1.default.findOne(offerID);
        offerEntity.income = income;
        offerEntity.deadline = deadline;
        offerEntity.priority = priority;
        offerEntity.category = category;
        offerEntity.minExp = minExp;
        await offerEntity.save();
        return offerEntity;
    }
    async deleteOffer(offerID) {
        const offerEntity = await offer_entity_1.default.findOne(offerID);
        await offerEntity.remove();
        return offerEntity;
    }
    async getAllEmployers() {
        return employer_entity_1.default.find();
    }
    async getAllFreelancers() {
        return freelancer_entity_1.default.find();
    }
    async getAllSkills() {
        return skill_entity_1.default.find();
    }
    async getAllOffers() {
        return offer_entity_1.default.find();
    }
};
JobseekersService = __decorate([
    common_1.Injectable()
], JobseekersService);
exports.JobseekersService = JobseekersService;
//# sourceMappingURL=jobseekers.service.js.map