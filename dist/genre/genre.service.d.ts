import CreateGenreDto from './dto/create-genre.dto';
import GenreEntity from '../db/entity/genre.entity';
export default class GenreService {
    insert(genreDetails: CreateGenreDto): Promise<GenreEntity>;
    getAllGenre(): Promise<GenreEntity[]>;
}
