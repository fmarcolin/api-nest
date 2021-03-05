import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "../core/http/nestResponse";
import { NestResponseBuilder } from "../core/http/nestResponseBuilder";
import { User } from "src/models/user.entity";
import { UserService } from "src/services/user.service";

@Controller("users")
export class UserController {

    constructor(private usersService: UserService) { }

    @Get(":userName")
    searchByUserName(@Param("userName") userName: string): User {
        const user = this.usersService.getByUserName(userName);

        if (!user) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: "Not found user"
            });
        }

        return user;
    }

    @Post()
    create(@Body() user: User): NestResponse {

        const createdUser = this.usersService.create(user);

        return new NestResponseBuilder()
            .withStatus(HttpStatus.CREATED)
            .withHeader({
                'Location': `/users/${createdUser.username}`
            })
            .withBody(createdUser)
            .build();
    }
}