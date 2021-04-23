import EmployerEntity from '../db/entity/employer.entity';
import FreelancerEntity from '../db/entity/freelancer.entity';
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
export declare class JobseekersService {
    insertEmployer(employerDetails: CreateEmployerDto): Promise<EmployerEntity>;
    insertFreelancer(freelancerDetails: CreateFreelancerDto): Promise<FreelancerEntity>;
    insertSkill(skillDetails: CreateSkillDto, freelancerID: number): Promise<SkillEntity>;
    insertOffer(offerDetails: CreateOfferDto, employerID: number): Promise<OfferEntity>;
    insertResume(ResumeDetails: CreateResumeDto, freelancerID: number): Promise<ResumeEntity>;
    updateEmployer(employerDetails: UpdateEmployerDto): Promise<EmployerEntity>;
    deleteEmployer(userID: number): Promise<EmployerEntity>;
    updateFreelancer(freelancerDetails: UpdateFreelancerDto): Promise<FreelancerEntity>;
    deleteFreelancer(userID: number): Promise<FreelancerEntity>;
    updateSkill(skillDetails: UpdateSkillDto): Promise<SkillEntity>;
    deleteSkill(skillId: number): Promise<SkillEntity>;
    updateOffer(offerDetails: UpdateOfferDto): Promise<OfferEntity>;
    deleteOffer(offerId: number): Promise<OfferEntity>;
}
