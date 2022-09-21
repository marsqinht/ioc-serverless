/* eslint-disable import/first */
require('source-map-support').install()
import 'core-js/actual/array/values'
import { app } from './container.config'
import { taobaoFCAdapter, container } from 'src/jowboy'

const handlers = taobaoFCAdapter(app, container)

module.exports = handlers
