
import { BaseMiddleware } from 'inversify-express-utils';
import { Request, Response, NextFunction } from 'express'
import { Provide } from '../decorators';
import { TYPES } from '../types';



@Provide(DatabseMiddleware)
export class DatabseMiddleware extends BaseMiddleware {
  public handler(req: Request, res: Response, next: NextFunction) {

    this.bind<any>(TYPES.DatabaseType)
      // @ts-ignore
      .toConstantValue(req?.requestContext?.cloud?.db);

    next();
  }
}