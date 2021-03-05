import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "src/models/user.entity";
import { UserService } from "src/services/user.service";

@Controller("users")
export class UserController {

    constructor(private usersService: UserService) { }

    @Get(":userName")
    searchByUserName(@Param("userName") userName: string): User {
        const user = this.usersService.getByUserName(userName);
        return user;
    }

    @Post()
    create(@Body() user: User): User {

        const createdUser = this.usersService.create(user);

        return createdUser;
    }
}