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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const freelancer_entity_1 = require("./freelancer.entity");
let ResumeEntity = class ResumeEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ResumeEntity.prototype, "resumeID", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], ResumeEntity.prototype, "descr", void 0);
__decorate([
    typeorm_1.OneToOne(type => freelancer_entity_1.default, freelancer => freelancer.resume),
    __metadata("design:type", freelancer_entity_1.default)
], ResumeEntity.prototype, "freelancerID", void 0);
ResumeEntity = __decorate([
    typeorm_1.Entity()
], ResumeEntity);
exports.default = ResumeEntity;
//# sourceMappingURL=resume.entity.js.map