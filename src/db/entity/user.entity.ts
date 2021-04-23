import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import BookEntity from './book.entity';

@Entity()
export default class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    username: string;

    @Column({ length: 32 })
    password: string;

    @Column({ length: 32 })
    email: string;

    @Column({ length: 32 })
    phone: string;

    @OneToMany(type => BookEntity, book => book.user)
    books: BookEntity[];
}