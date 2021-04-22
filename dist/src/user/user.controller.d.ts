import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    postUser(user: CreateUserDto): any;
    getAll(): any;
    getBooks(userID: number): any;
}
