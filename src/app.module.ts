import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import BooksModule from './books/books.module';
import GenreModule from './genre/genre.module';
import UserEntity from './db/entity/user.entity';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';

@Module({
    imports: [UserModule,
        BooksModule,
        GenreModule,
        TypeOrmModule.forFeature(
            [UserEntity, BookEntity, GenreEntity],
        ),

        TypeOrmModule.forRoot(),

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }