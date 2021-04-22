import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    postUser(user: CreateUserDto): Promise<import("../db/entity/user.entity").default>;
    getAll(): Promise<import("../db/entity/user.entity").default[]>;
    getBooks(userID: number): Promise<import("../db/entity/book.entity").default[]>;
}
