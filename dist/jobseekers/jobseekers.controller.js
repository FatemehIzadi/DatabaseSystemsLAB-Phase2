"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobseekersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_employer_dto_1 = require("./dto/create-employer.dto");
const create_freelancer_dto_1 = require("./dto/create-freelancer.dto");
const create_offer_dto_1 = require("./dto/create-offer.dto");
const create_skill_dto_1 = require("./dto/create-skill.dto");
const update_employer_dto_1 = require("./dto/update-employer.dto");
const update_freelancer_dto_1 = require("./dto/update-freelancer.dto");
const update_offer_dto_1 = require("./dto/update-offer.dto");
const update_skill_dto_1 = require("./dto/update-skill.dto");
const jobseekers_service_1 = require("./jobseekers.service");
let JobseekersController = class JobseekersController {
    constructor(jobseekersService) {
        this.jobseekersService = jobseekersService;
    }
    postEmployer(employer) {
        return this.jobseekersService.insertEmployer(employer);
    }
    putEmployer(employer) {
        return this.jobseekersService.updateEmployer(employer);
    }
    getEmployers() {
        return this.jobseekersService.getAllEmployers();
    }
    postFreelancer(freelancer) {
        return this.jobseekersService.insertFreelancer(freelancer);
    }
    putFreelancer(freelancer) {
        return this.jobseekersService.updateFreelancer(freelancer);
    }
    getFreelancers() {
        return this.jobseekersService.getAllFreelancers();
    }
    postOffer(offer) {
        return this.jobseekersService.insertOffer(offer);
    }
    putOffer(offer) {
        return this.jobseekersService.updateOffer(offer);
    }
    postSkill(skill) {
        return this.jobseekersService.insertSkill(skill);
    }
    putSkill(skill) {
        return this.jobseekersService.updateSkill(skill);
    }
    getSkills() {
        return this.jobseekersService.getAllSkills();
    }
};
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Create employer" }),
    common_1.Post('employers'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employer_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "postEmployer", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Update employer" }),
    common_1.Put('employers'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_employer_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "putEmployer", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Retrieve employers" }),
    common_1.Get('employers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getEmployers", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Create freelancer" }),
    common_1.Post('freelancers'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_freelancer_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "postFreelancer", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Update freelancer" }),
    common_1.Put('freelancers'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_freelancer_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "putFreelancer", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Retrieve freelancers" }),
    common_1.Get('freelancers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getFreelancers", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Create offer for employerID" }),
    common_1.Post('employers/offers'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_offer_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "postOffer", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Update offer" }),
    common_1.Put('employers/offers'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_offer_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "putOffer", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Create skill for freelancerID" }),
    common_1.Post('freelancers/skills'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_skill_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "postSkill", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Update skill" }),
    common_1.Put('freelancers/skills'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_skill_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "putSkill", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: "Retrieve skills" }),
    common_1.Get('freelancers/skills'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getSkills", null);
JobseekersController = __decorate([
    common_1.Controller('jobseekers'),
    __metadata("design:paramtypes", [jobseekers_service_1.JobseekersService])
], JobseekersController);
exports.JobseekersController = JobseekersController;
//# sourceMappingURL=jobseekers.controller.js.map