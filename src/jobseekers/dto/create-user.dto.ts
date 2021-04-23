import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDto {
    @ApiProperty({type: "string", description:"Username", maxLength: 500})
    readonly username: string;

    @ApiProperty({type: "string", description:"email", maxLength: 500})
    readonly email: string;

    @ApiProperty({type: "string", description:"password", maxLength: 500})
    readonly password: string;

    @ApiProperty({type: "string", description:"phone", maxLength: 500})
    readonly phone: string;
}