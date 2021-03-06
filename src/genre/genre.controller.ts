import { Body, Controller, Get, Post } from '@nestjs/common';
import GenreService from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('genres')
export default class GenreController {
    constructor(private readonly genreService: GenreService) { }

    @ApiOperation({ description: 'Create genre' })
    @ApiCreatedResponse({ description: 'Genre created successfully' })
    @Post()
    postGenre(@Body() genre: CreateGenreDto) {
        return this.genreService.insert(genre);
    }

    @ApiOperation({ description: 'Retrieve genres' })
    @ApiOkResponse({ description: 'Genres retrieved successfully' })
    @Get()
    getAll() {
        return this.genreService.getAllGenre();
    }
}