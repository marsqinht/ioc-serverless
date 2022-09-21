import { Request, Response, NextFunction } from 'express'

export const bodyParser = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.body &&
    (req.body = JSON.parse(Buffer.from(req.body, 'utf-8').toString() || '{}'))
  next()
}
