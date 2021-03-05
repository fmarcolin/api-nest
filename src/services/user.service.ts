import { Injectable } from "@nestjs/common";
import { User } from "src/models/user.entity";

@Injectable()
export class UserService {

    private users = [];

    create(user: User): User {

        this.users.push(user);

        return user;
    }

    getByUserName(userName: string): User {
        return this.users.find(x => x.userName == userName);
    }

}