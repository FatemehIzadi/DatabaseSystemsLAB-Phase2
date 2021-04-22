import { ApiProperty } from "@nestjs/swagger";

export default class CreateUserDto {
    @ApiProperty({
        description: 'Name', default: 'Username'
    })
    readonly name: string;

    @ApiProperty({
        description: 'Books',
        type: 'array', items: { type: 'integer' }
    })
    readonly books: number[];
}