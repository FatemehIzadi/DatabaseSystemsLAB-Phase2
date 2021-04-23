import { ApiProperty } from '@nestjs/swagger';
import CreateEmployerDto from './create-employer.dto';

export default class UpdateEmployerDto extends CreateEmployerDto {
    @ApiProperty({type: "number", description:"employer id", maxLength: 500})
    readonly employerID: number;
}