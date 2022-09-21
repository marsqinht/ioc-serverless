import { BaseHttpController, requestBody } from 'inversify-express-utils'
import { Controller, Api, Inject, DatabseMiddleware } from 'src/jowboy'
import { LoginDTO } from './user.dto'
import { UserService } from './user.service'
@Controller()
export class UserController extends BaseHttpController {


  constructor(@Inject(UserService) private userService: UserService) {
    super()
  }

  // @Api()
  // async login(@requestBody() body: LoginDTO) {
  //   this.userService.eat()
  //   return { user: 0 }
  // }

  @Api('getUserInfo', DatabseMiddleware)
  async getUserInfo(@requestBody() body: LoginDTO) {

    await this.userService.eat()

    return { user: 0 }
  }
}
