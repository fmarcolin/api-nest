import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUniqueUserName } from "src/validators/isUniqueUserName.validator";

export class User {
    id: number;

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsUniqueUserName({
        message: "username already exists"
    })
    @IsNotEmpty()
    @IsString()
    username: string;

    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: "password is required"
    })
    password: string;

    startDate: string;
}