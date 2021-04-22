import { Body, Controller, Get, Header, Post, Put, Delete, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export default class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @ApiOperation({ description: 'Create book' })
    @ApiCreatedResponse({ description: 'Book created successfully' })
    @Post()
    postBook(@Body() book: CreateBookDto) {
        return this.booksService.insert(book);
    }

    @ApiOperation({ description: 'Retrieve books' })
    @ApiOkResponse({ description: 'Books retrieved successfully' })
    @Get()
    getAll() {
        return this.booksService.getAllBooks();
    }

    @ApiOperation({ description: 'Update book' })
    @ApiOkResponse({ description: 'Book updated successfully' })
    @Put(':bookID')
    updateBook(@Param('bookID') bookID: number, @Body() book: CreateBookDto) {
        return this.booksService.update(bookID, book);
    }

    @ApiOperation({ description: 'Deletebook' })
    @ApiOkResponse({ description: 'Book deleted successfully' })
    @Delete(':bookID')
    deleteBook(@Param('bookID') bookID: number) {
        this.booksService.delete(bookID);
    }
}