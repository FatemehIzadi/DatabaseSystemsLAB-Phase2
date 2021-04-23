import { BaseEntity } from 'typeorm';
import BookEntity from './book.entity';
export default class UserEntity extends BaseEntity {
    username: string;
    password: string;
    email: string;
    phone: string;
    books: BookEntity[];
}
