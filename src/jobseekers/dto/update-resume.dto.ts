import { ApiProperty } from '@nestjs/swagger';
import CreateResumeDto from './create-resume.dto';

export default class UpdateResumeDto extends CreateResumeDto {
    @ApiProperty({type: "number", description:"Resume ID ", maxLength: 500})
    readonly resumeID: number;
}