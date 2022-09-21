

import { InjectEntityModel, Provide, TaobaoModel } from 'src/jowboy';
import { inject } from 'inversify';
import { TYPES } from 'src/jowboy/middlewares/database';

@Provide(UserService)
export class UserService {

  // constructor(@inject(TaobaoModel) private readonly userModel: TaobaoModel<User>) {


  //   // console.log('UserService init:>> ')

  //   // console.log('User :>> ', User);
  // }
  // userModel: any
  constructor(@inject(TYPES.DatabaseType) private readonly userModel: any) {


    console.log('UserService init:>> ')

    console.log('User :>> ', userModel);
  }

  async eat() {


    console.log('this.userModel :>> ', this.userModel);

    // const res = await this.userModel.find({})

    // console.log('this.user :>> ', res);

    console.log('eat :>> ')
  }
}
