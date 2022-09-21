import { interfaces,inject } from 'inversify';
import {  Provide } from './decorators';


export function Entity(name: string) {
  console.log('name :>> ', name);

  return (target: NewableFunction): void => {

    console.log('target :>> ', target);
    Provide(target)(target)
  }
}


export function InjectEntityModel(entity: interfaces.ServiceIdentifier) {
  console.log('entity :>> ', entity);

  return inject(entity)
}