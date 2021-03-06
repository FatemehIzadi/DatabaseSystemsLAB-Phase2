import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) { }

    @ApiOperation({ description: 'Create user' })
    @ApiCreatedResponse({ description: 'User created successfully' })
    @Post()
    postUser(@Body() user: CreateUserDto) {
        return this.usersService.insert(user);
    }

    @ApiOperation({ description: 'Retrieve users' })
    @ApiOkResponse({ description: 'Users retrieved successfully' })
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({ description: 'Retrieves books of user' })
    @ApiOkResponse({ description: 'Books of user retrieved successfully' })
    @ApiNotFoundResponse({ description: 'User not found' })
    @ApiParam({
        name: 'userID',
        description: 'User ID',
        schema: { type: 'integer', default: 1 }
    })
    @Get(':userID/books')
    getBooks(@Param('userID', ParseIntPipe) userID: number) {
        return this.usersService.getBooksOfUser(userID);
    }
}