
// import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from "class-validator";


export class User {
  _id: string
  activityId: string
  openId: string
  userNick?: string
  createTime: number
  updateTime: number
  createDay: string
}

