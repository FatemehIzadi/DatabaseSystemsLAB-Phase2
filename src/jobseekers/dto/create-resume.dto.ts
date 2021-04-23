import { ApiProperty } from '@nestjs/swagger';

export default class CreateResumeDto {
   
    @ApiProperty({type: "string", description:"Resume description"})
    readonly descr: string;

}