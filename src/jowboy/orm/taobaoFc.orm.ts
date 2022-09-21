
import { Inject, Provide } from '../decorators'
import { TYPES } from '../middlewares/database'
import { BaseModel, Projection, Query, UpdateOperator } from './base.orm'

@Provide(TaobaoModel)
export class TaobaoModel<T = Record<string, any>> implements BaseModel {
  collectionName: any
  db: any
  // constructor(@Inject(TYPES.DatabaseType) private db: any) {

  // }


  find(query: Query, projection: Projection = {}): Promise<T[]> {
    return this.db.collection(this.collectionName || 'c_user').find(query, projection)
  }

  async findOne(query: Query, projection?: Projection): Promise<T | undefined> {
    const [res] = await this.find(query, {
      ...projection,
      limit: 1,
    })
    return res
  }

  async findById(id: string, projection?: Projection): Promise<T | undefined> {
    return this.findOne({ _id: id }, projection)
  }

  insertOne(document: T): Promise<string> {
    return this.db.collection(this.collectionName).insertOne(document)
  }

  insertMany(documents: T[]): Promise<string[]> {
    return this.db.collection(this.collectionName).insertMany(documents)
  }

  update(query: Query, updateOperator?: UpdateOperator): Promise<0 | 1> {
    return this.db
      .collection(this.collectionName)
      .updateMany(query, updateOperator)
  }

  delete(filter: Query): Promise<number> {
    return this.db.collection(this.collectionName).deleteMany(filter)
  }

  count(query: Query): Promise<number> {
    return this.db.collection(this.collectionName).count(query)
  }

  aggregate(
    pipeline: Record<string, any> | Record<string, any>[],
    options?: Record<string, any>
  ): Promise<any> {
    return this.db.collection(this.collectionName).aggregate(pipeline, options)
  }
}
