export declare class BooksService {
    books: any;
    getBooks(): Promise<any>;
    getBook(bookID: any): Promise<any>;
    addBook(book: any): Promise<any>;
    deleteBook(bookID: any): Promise<any>;
}
