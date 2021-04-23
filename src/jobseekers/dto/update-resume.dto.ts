import { ApiProperty } from '@nestjs/swagger';
import CreateSkillDto from './create-resume.dto';

export default class UpdateSkillDto extends CreateSkillDto {
    @ApiProperty({type: "number", description:"Resume ID ", maxLength: 500})
    readonly resumeID: number;
}