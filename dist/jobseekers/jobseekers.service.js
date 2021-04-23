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
    async insertSkill(skillDetails, freelancerID) {
        const skillEntity = skill_entity_1.default.create();
        const { skillID, descr, level } = skillDetails;
        skillEntity.skillID = skillID;
        skillEntity.freelancerID = await freelancer_entity_1.default.findOne(freelancerID);
        skillEntity.descr = descr;
        skillEntity.level = level;
        await skill_entity_1.default.save(skillEntity);
        return skillEntity;
    }
    async insertOffer(orderDetails, employerID) {
        const offerEntity = offer_entity_1.default.create();
        const { offerID, income, deadline, priority, category, minExp } = orderDetails;
        offerEntity.offerID = offerID;
        offerEntity.employerID = await employer_entity_1.default.findOne(employerID);
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
        const { resumeID, descr } = ResumeDetails;
        resumeEntity.resumeID = resumeID;
        resumeEntity.freelancerID = await freelancer_entity_1.default.findOne(freelancerID);
        resumeEntity.descr = descr;
        await resume_entity_1.default.save(resumeEntity);
        return resumeEntity;
    }
};
JobseekersService = __decorate([
    common_1.Injectable()
], JobseekersService);
exports.JobseekersService = JobseekersService;
//# sourceMappingURL=jobseekers.service.js.map