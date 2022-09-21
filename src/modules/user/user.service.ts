

import { InjectEntityModel, Provide, TaobaoModel } from 'src/jowboy';
import { AwardRecord, User } from './user.entity';

@Provide(UserService)
export class UserService {

  constructor(
    @InjectEntityModel(User) private userModel: TaobaoModel<User>,
    @InjectEntityModel(AwardRecord) private awardRecord: TaobaoModel<AwardRecord>
  ) { }

  async eat() {
    // console.log('this.userModel :>> ', this.userModel);
    const res = await this.userModel.find({ _id: '617f832d8e6a08af47d1e36f' })

    const res2 = await this.awardRecord.findById('6180d41c114fbb189eae66bb')
    console.log('this.user :>> ', res, res2);

    // console.log('eat :>> ')
  }
}
