
import { BaseMiddleware } from 'inversify-express-utils';
import { Request, Response, NextFunction } from 'express'
import { Provide } from '../decorators';


export const TYPES = {
  DatabaseType: Symbol.for('DatabaseType'),
}
@Provide(DatabseMiddleware)
export class DatabseMiddleware extends BaseMiddleware {
  public handler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    // console.log('req :>> ', req);
    // // @ts-ignore
    // console.log('this.httpContext :>> ', this.httpContext?.request?.requestContext?.cloud?.db);
    // req?.requestContext?.cloud?.db
    this.bind<string>(TYPES.DatabaseType)
      // @ts-ignore
      .toConstantValue('11');

    // console.log('this. :>> ', this.get());
    next();
  }
}