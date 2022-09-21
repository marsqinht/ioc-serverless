import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators';
import { TYPES } from './types';
export { bodyParser, DatabseMiddleware } from './middlewares'

export { taobaoFCAdapter } from './platformAdapter'

export { TaobaoCloud, TaobaoContext } from './interfaces'

export { Controller, Api, Provide, Inject, Entity, InjectEntityModel } from './decorators'


export { TaobaoModel } from './orm'


export const container = new Container()

console.log('bind :>> ');
container.bind<string>(TYPES.DatabaseType).toConstantValue('undefined');

const { lazyInject } = getDecorators(container);

export {
  lazyInject
}


