// import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from "class-validator";
import { Entity } from 'src/jowboy/decorators'

@Entity('c_user')
export class User {
  _id: string
  activityId: string
  openId: string
  userNick?: string
  createTime: number
  updateTime: number
  createDay: string
}
