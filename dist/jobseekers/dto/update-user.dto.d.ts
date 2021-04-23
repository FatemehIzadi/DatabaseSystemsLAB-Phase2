import CreateUserDto from './create-user.dto';
export default class UpdateUserDto extends CreateUserDto {
    readonly userID: number;
}
