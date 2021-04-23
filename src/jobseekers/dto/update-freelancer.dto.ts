import { ApiProperty } from '@nestjs/swagger';
import CreateFreelancerDto from './create-freelancer.dto';

export default class UpdateEmployerDto extends CreateFreelancerDto {
    @ApiProperty({type: "number", description:"Freekancer ID", maxLength: 500})
    readonly freelancerID: number;
}