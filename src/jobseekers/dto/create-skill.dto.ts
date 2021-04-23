import { ApiProperty } from '@nestjs/swagger';

export default class CreateSkillDto {

    @ApiProperty({type: "string", description:"Skill category", maxLength: 500})
    readonly category: string;

    @ApiProperty({type: "string", description:"Skill description"})
    readonly descr: string;

    @ApiProperty({type: "number", description:"Skill level"})
    readonly level: number;
}