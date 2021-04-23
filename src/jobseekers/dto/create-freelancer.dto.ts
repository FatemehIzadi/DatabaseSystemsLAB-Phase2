import { ApiProperty } from '@nestjs/swagger';
import CreateUserDto from './create-user.dto';

export default class CreateFreelancerDto extends CreateUserDto {
    @ApiProperty({type: "string", description:"Freelancer bank account number", maxLength: 500})
    readonly cardNum: string;
}