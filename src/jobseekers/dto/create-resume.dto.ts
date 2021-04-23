import { ApiProperty } from '@nestjs/swagger';

export default class CreateResumeDto {
    @ApiProperty({type: "number", description:"Resume ID", maxLength: 500})
    readonly resumeID: number;

    @ApiProperty({type: "number", description:"Freelancer ID"})
    readonly freelancerID: number;

    @ApiProperty({type: "string", description:"Resume description"})
    readonly description: string;

}