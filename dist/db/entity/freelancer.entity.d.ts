import SkillEntity from './skill.entity';
import UserEntity from './user.entity';
import ResumeEntity from './resume.entity';
export default class FreelancerEntity extends UserEntity {
    cardNum: string;
    skills: SkillEntity[];
    resume: ResumeEntity;
}
