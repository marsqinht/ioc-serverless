

import 'core-js/actual/array/values'
import { app } from './main'
import { taobaoFCAdapter } from './jowboy';


const formatedHandler = taobaoFCAdapter(app)

exports.main = (context) => {
  return formatedHandler(context);
}
