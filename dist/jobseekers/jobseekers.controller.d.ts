import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOfferDto from './dto/create-offer.dto';
import CreateSkillDto from './dto/create-skill.dto';
import UpdateEmployerDto from './dto/update-employer.dto';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import UpdateOfferDto from './dto/update-offer.dto';
import UpdateSkillDto from './dto/update-skill.dto';
import { JobseekersService } from './jobseekers.service';
export declare class JobseekersController {
    private readonly jobseekersService;
    constructor(jobseekersService: JobseekersService);
    postEmployer(employer: CreateEmployerDto): Promise<import("../db/entity/employer.entity").default>;
    putEmployer(employer: UpdateEmployerDto): Promise<import("../db/entity/employer.entity").default>;
    getEmployers(): Promise<import("../db/entity/employer.entity").default[]>;
    postFreelancer(freelancer: CreateFreelancerDto): Promise<import("../db/entity/freelancer.entity").default>;
    putFreelancer(freelancer: UpdateFreelancerDto): Promise<import("../db/entity/freelancer.entity").default>;
    getFreelancers(): Promise<import("../db/entity/freelancer.entity").default[]>;
    postOffer(offer: CreateOfferDto): Promise<import("../db/entity/offer.entity").default>;
    putOffer(offer: UpdateOfferDto): Promise<import("../db/entity/offer.entity").default>;
    postSkill(skill: CreateSkillDto): Promise<import("../db/entity/skill.entity").default>;
    putSkill(skill: UpdateSkillDto): Promise<import("../db/entity/skill.entity").default>;
    getSkills(): Promise<import("../db/entity/skill.entity").default[]>;
}
