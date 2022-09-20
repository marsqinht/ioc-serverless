
import { Request } from "express";
import { injectable, inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { controller, httpPost, requestBody } from "inversify-express-utils";


function CheckParam(): ParameterDecorator {

  
  return (target, paramIdentifier, index) => {
     
    console.log('target :>> ', target, paramIdentifier, index);
    return requestBody()
  }; 
}

@controller('')
export class UserController {
  @httpPost('/login')
  async login(@requestBody() body: LoginDTO) {

    // console.log('body :>> ', body);
    return { user: 0 }
  }

  @httpPost('/getUserInfo')
  async getUserInfo(@CheckParam() body: LoginDTO) {

    // console.log('body :>> ', body);
    return { user: 0 }
  }
}

