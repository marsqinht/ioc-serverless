import "reflect-metadata";
import { Container } from "inversify";
import {  buildProviderModule } from "inversify-binding-decorators";
import './modules/user/user.controller'
import { InversifyExpressServer, getRouteInfo } from "inversify-express-utils";
import { bodyParser } from "./middlewares/bodyParse";



const container = new Container();
container.load(buildProviderModule());

const server = new InversifyExpressServer(container)


// server.setConfig((app) => { 
//   app.use(bodyParser);
// })


const app = server.build()

console.log('getRouteInfo :>> ', getRouteInfo(container));


// app.listen(1000)


export { container, app };