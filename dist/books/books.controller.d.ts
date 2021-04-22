import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
export default class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    postBook(book: CreateBookDto): Promise<import("../db/entity/book.entity").default>;
    getAll(): Promise<import("../db/entity/book.entity").default[]>;
    updateBook(bookID: number, book: CreateBookDto): Promise<import("../db/entity/book.entity").default>;
    deleteBook(bookID: number): void;
}
