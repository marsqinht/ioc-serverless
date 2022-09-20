
import { Request } from "express";
import { requestBody } from "inversify-express-utils";
import { Controller, Api, Inject } from "../../jowboy";
import { UserService } from "./user.service";



@Controller()
export class UserController {

  @Inject(UserService) private userService: UserService

  @Api()
  async login(@requestBody() body: LoginDTO) {

    this.userService.eat()
    return { user: 0 }
  }

  @Api()
  async getUserInfo(@requestBody() body: LoginDTO) {

    this.userService.eat()

    return { user: 0 }
  }
}

