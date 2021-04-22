"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    postBook(book) {
        return this.booksService.insert(book);
    }
    getAll() {
        return this.booksService.getAllBooks();
    }
    updateBook(bookID, book) {
        return this.booksService.update(bookID, book);
    }
    deleteBook(bookID) {
        this.booksService.delete(bookID);
    }
};
__decorate([
    swagger_1.ApiOperation({ description: 'Create book' }),
    swagger_1.ApiCreatedResponse({ description: 'Book created successfully' }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.default]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "postBook", null);
__decorate([
    swagger_1.ApiOperation({ description: 'Retrieve books' }),
    swagger_1.ApiOkResponse({ description: 'Books retrieved successfully' }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ description: 'Update book' }),
    swagger_1.ApiOkResponse({ description: 'Book updated successfully' }),
    common_1.Put(':bookID'),
    __param(0, common_1.Param('bookID')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_book_dto_1.default]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "updateBook", null);
__decorate([
    swagger_1.ApiOperation({ description: 'Deletebook' }),
    swagger_1.ApiOkResponse({ description: 'Book deleted successfully' }),
    common_1.Delete(':bookID'),
    __param(0, common_1.Param('bookID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "deleteBook", null);
BooksController = __decorate([
    common_1.Controller('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
exports.default = BooksController;
//# sourceMappingURL=books.controller.js.map