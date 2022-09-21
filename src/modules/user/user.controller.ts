import { requestBody } from 'inversify-express-utils'
import { Controller, Api, Inject, DatabseMiddleware } from 'src/jowboy'
import { LoginDTO } from './user.dto'
import { UserService } from './user.service'
@Controller(DatabseMiddleware)
export class UserController {

  @Inject(UserService) private userService: UserService

  // @Api()
  // async login(@requestBody() body: LoginDTO) {
  //   this.userService.eat()
  //   return { user: 0 }
  // }
  @Api()
  async getUserInfo(@requestBody() body: LoginDTO) {

    await this.userService.eat()

    return { user: 0 }
  }
}
