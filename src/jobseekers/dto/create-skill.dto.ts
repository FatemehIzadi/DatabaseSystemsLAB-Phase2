import { ApiProperty } from '@nestjs/swagger';

export default class CreateSkillDto {
    @ApiProperty({type: "number", description:"Skill ID", maxLength: 500})
    readonly skillID: number;

    @ApiProperty({type: "string", description:"Skill description"})
    readonly descr: string;

    @ApiProperty({type: "number", description:"Skill level"})
    readonly level: number;
}