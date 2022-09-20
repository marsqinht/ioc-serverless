export interface Projection {
  projection?: {
    [key: string]: number | boolean | any
  }
  sort?: {
    [key: string]: 1 | -1
  }
  maxTimeMS?: number
  upsert?: boolean
  limit?: number
  skip?: number
  returnOriginal?: boolean
}

export interface UpdateOperator {
  $currentDate?: Date | { $type: 'date' | 'timestamp' }
  $inc?: { [key: string]: number | undefined }
  $min?: { [key: string]: number | undefined }
  $max?: { [key: string]: number | undefined }
  $mul?: { [key: string]: number | undefined }
  $rename?: { [key: string]: any }
  $set?: { [key: string]: any }
  $setOnInsert?: { [key: string]: any }
  $unset?: { [key: string]: any }
  $addToSet?: { [key: string]: any }
  $pop?: { [key: string]: any }
  $pull?: { [key: string]: any }
  $push?: { [key: string]: any }
  $bit?: {
    [key: string]: { [key in 'and' | 'or' | 'xor']?: number }
  }
}

export interface Query {
  [params: string]: string | boolean | number | IQuerySelector
}

export interface IQuerySelector {
  // Comparison
  $eq?: any
  $gt?: any
  $gte?: any
  $in?: any[]
  $lt?: any
  $lte?: any
  $ne?: any
  $nin?: any[]
  // Logical
  $not?: any
  // Element
  /**
   * When `true`, `$exists` matches the documents that contain the field,
   * including documents where the field value is null.
   */
  $exists?: boolean
  $type?: any
  // Evaluation
  $expr?: any
  $jsonSchema?: any
  $mod?: any
  $regex?: RegExp | string
  $options?: string
  // Geospatial
  // TODO: define better types for geo queries
  $geoIntersects?: { $geometry: Record<string, unknown> }
  $geoWithin?: { [key: string]: any }
  $near?: { [key: string]: any }
  $nearSphere?: { [key: string]: any }
  $maxDistance?: number
  // Array
  // TODO: define better types for $all and $elemMatch
  $all?: any
  $elemMatch?: any
  $size?: any
  // Bitwise
  $bitsAllClear?: any
  $bitsAllSet?: any
  $bitsAnyClear?: any
  $bitsAnySet?: any
}


export abstract class BaseModel<T = any> {

  abstract findOne(query: Query, projection?: Projection): Promise<T | undefined>

  abstract findById(id: string, projection?: Projection): Promise<T | undefined>

  abstract find(query: Query, projection?: Projection): Promise<T[]>

  abstract insertOne(document: T): Promise<string>

  abstract insertMany(documents: T[]): Promise<string[]>

  abstract update(query: Query, updateOperator?: UpdateOperator): Promise<number>

  abstract delete(query: Query): Promise<any>

  abstract count(query: Query, options?: Record<string, any>): Promise<number>

  abstract aggregate(pipeline: Record<string, any> | Record<string, any>[], options?: Record<string, any>): Promise<any>

}