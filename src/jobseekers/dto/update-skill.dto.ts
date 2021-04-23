import { ApiProperty } from '@nestjs/swagger';
import CreateSkillDto from './create-skill.dto';

export default class UpdateSkillDto extends CreateSkillDto {
    @ApiProperty({type: "number", description:"Skill ID ", maxLength: 500})
    readonly skillID: number;
}