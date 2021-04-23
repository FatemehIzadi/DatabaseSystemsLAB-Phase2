import CreateSkillDto from './create-skill.dto';
export default class UpdateSkillDto extends CreateSkillDto {
    readonly skillID: number;
}
