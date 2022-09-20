

import 'core-js/actual/array/values'
import { app } from './main'
import { adapter } from './utils/platformAdapter/taobaoFc.adapter';


const formatedHandler = adapter(app)

exports.main = (context) => {
  return formatedHandler(context);
}
