import { ApiProperty } from "@nestjs/swagger";

export default class CreateGenreDto {
    @ApiProperty({
        description: 'Genre', default: 'nonesense'
    })
    readonly type: string;
}