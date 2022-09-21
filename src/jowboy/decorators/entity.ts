import { interfaces } from 'inversify';
import { container } from '..';
import { TaobaoModel } from '../orm';
import { TYPES } from '../types';
import { Inject, Provide } from './decorators';
export function Entity(collectionName: string) {

  return (target: NewableFunction): void => {
    container.bind<string>(target).toConstantValue(collectionName)
    Provide(collectionName)(target)
  }
}


export function InjectEntityModel(entity: interfaces.ServiceIdentifier) {

  // console.log('object :>> ', entity.name);



  return function (a, b, c) {
    // container.bind<string>(a).toConstantValue(container.get(entity) as string)
    // @ts-ignore
    // if (!container.isBound(TYPES.ColletionName)) {
    //   container.bind(TYPES.ColletionName).toDynamicValue((context: interfaces.Context) => {
    //     console.log('context :>> ', entity);
    //     return context.container.get(entity)
    //   })
    // }
    Inject(TaobaoModel)(a, b, c)
  }
}