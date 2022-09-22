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



  return function (target: any, key: string) {

    // console.log('a,b,c :>> ', target, key);
    // container.bind<string>(a).toConstantValue(container.get(entity) as string)
    // @ts-ignore


    const A = Reflect.getMetadata('design:type', target, key)
    const b = Reflect.getMetadata('design:paramtypes', target);
    // Reflect.defineMetadata('1', )
    console.log('design:type :>> ', A, b);

    if (!container.isBound(TYPES.ColletionName)) {
      container.bind(TYPES.ColletionName).toDynamicValue((context: interfaces.Context) => {

        return context.container.get(entity)
      })
    }
    Inject(A)(target, key)
  }
}