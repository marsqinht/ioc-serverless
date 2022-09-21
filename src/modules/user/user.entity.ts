// import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from "class-validator";
import { Provide } from '/src/jowboy'

@Provide(User)
export class User {
  _id: string
  activityId: string
  openId: string
  userNick?: string
  createTime: number
  updateTime: number
  createDay: string
}
