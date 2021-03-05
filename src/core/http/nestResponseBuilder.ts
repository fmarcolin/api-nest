import { HttpStatus } from "@nestjs/common";
import { User } from "src/models/user.entity";
import { NestResponse } from "./nestResponse";

export class NestResponseBuilder {

    private response: NestResponse = {
        status: 200,
        headers: {},
        body: {}
    }

    withStatus(status: number) {
        this.response.status = status;
        return this;
    }

    withHeader(header: object) {
        this.response.headers = status;
        return this;
    }

    withBody(body: object) {
        this.response.body = body;
        return this;
    }

    build() {
        return new NestResponse(this.response);
    }
}