import { ApiProperty } from "@nestjs/swagger";

export default class CreateBookDto {
    @ApiProperty({
        description: 'Book name', default: 'blah blah'
    })
    readonly name: string;

    @ApiProperty({
        description: 'User ID', default: '1'
    })
    readonly userID: number;

    @ApiProperty({
        description: 'Genere',
        type: 'array', items: { type: 'integer' }
    })
    readonly genreIDs: number[];
}