import "reflect-metadata";
import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import { InversifyExpressServer } from "inversify-express-utils";
import { bodyParser } from "./jowboy";
import './modules'

const container = new Container();
container.load(buildProviderModule());

const server = new InversifyExpressServer(container)

server.setConfig((app) => {
  app.use(bodyParser)
})

const app = server.build()

export { container, app };