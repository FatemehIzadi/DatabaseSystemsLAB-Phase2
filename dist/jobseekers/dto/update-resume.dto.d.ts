import CreateSkillDto from './create-resume.dto';
export default class UpdateSkillDto extends CreateSkillDto {
    readonly resumeID: number;
}
