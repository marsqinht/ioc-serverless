import { Provide } from "../../jowboy";

@Provide(UserService)
export class UserService {
  
  constructor() {
    console.log('UserService init:>> ');
  }
  eat() {
    console.log('eat :>> ');
  }
}