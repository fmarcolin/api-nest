import { Module } from "@nestjs/common";
import { UserController } from "src/controllers/user.controller";
import { UserService } from "src/services/user.service";
import { IsUniqueUserNameConstraint } from "src/validators/isUniqueUserName.validator";

@Module({
    controllers: [UserController],
    providers: [UserService, IsUniqueUserNameConstraint]
})

export class UserModule { }