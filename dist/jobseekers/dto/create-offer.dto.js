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
const swagger_1 = require("@nestjs/swagger");
class CreateOfferDto {
}
__decorate([
    swagger_1.ApiProperty({ type: "number", description: "Offer income" }),
    __metadata("design:type", Number)
], CreateOfferDto.prototype, "income", void 0);
__decorate([
    swagger_1.ApiProperty({ type: "Date", description: "Offer deadline" }),
    __metadata("design:type", Date)
], CreateOfferDto.prototype, "deadline", void 0);
__decorate([
    swagger_1.ApiProperty({ type: "number", description: "Offer minimum experience" }),
    __metadata("design:type", Number)
], CreateOfferDto.prototype, "minExp", void 0);
__decorate([
    swagger_1.ApiProperty({ type: "string", description: "Offer category" }),
    __metadata("design:type", String)
], CreateOfferDto.prototype, "category", void 0);
__decorate([
    swagger_1.ApiProperty({ type: "number", description: "Offer priority" }),
    __metadata("design:type", Number)
], CreateOfferDto.prototype, "priority", void 0);
exports.default = CreateOfferDto;
//# sourceMappingURL=create-offer.dto.js.map