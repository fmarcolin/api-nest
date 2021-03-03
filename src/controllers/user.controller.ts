import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "src/services/user.service";

@Controller("users")
export class UserController {

    constructor(private usersService: UserService) { }

    @Post()
    public create(@Body() user) {

        const createdUser = this.usersService.create(user);

        return createdUser;
    }
}