import { type Middleware,type HandlerDecorator, controller, httpPost, httpGet } from "inversify-express-utils";
import { type DecoratorTarget } from "inversify/lib/annotation/decorator_utils";

export function Controller(path: string, ...middleware: Middleware[]) : (target: any) => void

export function Controller(...middleware: Middleware[]) :(target: any) => void

export function Controller(path?: string | Middleware , ...middleware: Array<Middleware>) {

  if (typeof path === 'function') {
    return controller('', path, ...middleware)
  }

  if (typeof path === 'string') return controller(path, ...middleware)
  
  if(!path) return controller('', ...[])
}


export function Post(path: string, ...middleware: Middleware[]): HandlerDecorator {
  return httpPost(path, ...middleware)
}

export function Get(path: string, ...middleware: Middleware[]): HandlerDecorator {
  return httpGet(path, ...middleware)
}

export function Api(path?: string, ...middleware: Middleware[]): HandlerDecorator {
  return (target: DecoratorTarget, key: string, value: any): void => { 
    httpPost(path || key, ...middleware)(target, key, value)
  }
}