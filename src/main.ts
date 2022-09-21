

import 'core-js/actual/array/values'
import { app, container } from './container.config'
import { taobaoFCAdapter } from './jowboy';


const handlers = taobaoFCAdapter(app, container)

module.exports = handlers
