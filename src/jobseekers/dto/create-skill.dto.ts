import { ApiProperty } from '@nestjs/swagger';

export default class CreateSkillDto {
    @ApiProperty({type: "number", description:"Skill ID", maxLength: 500})
    readonly skillID: number;

    @ApiProperty({type: "number", description:"Freelancer ID"})
    readonly freelancerID: number;

    @ApiProperty({type: "string", description:"Skill name"})
    readonly descr: string;

    @ApiProperty({type: "number", description:"Skill level"})
    readonly level: number;
}