import { ApiProperty } from '@nestjs/swagger';
import CreateUserDto from './create-user.dto';

export default class UpdateUserDto extends CreateUserDto {
    @ApiProperty({type: "number", description:"User ID", maxLength: 500})
    readonly userID: number;
}