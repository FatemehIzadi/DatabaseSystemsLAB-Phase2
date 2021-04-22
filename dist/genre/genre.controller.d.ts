import GenreServices from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
export default class GenreController {
    private readonly genreServices;
    constructor(genreServices: GenreServices);
    postGenre(genre: CreateGenreDto): Promise<import("../db/genre.entity").default>;
    getAll(): Promise<import("../db/genre.entity").default[]>;
}
