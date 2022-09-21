import { Inject, Provide } from '../decorators';
import { TaobaoModel } from './taobaoFc.orm';


@Provide(DatabaseModel)
export class DatabaseModel<T = Record<string, any>> {

  constructor(@Inject(TaobaoModel) taobaoModel: TaobaoModel<T>) {

  }

}