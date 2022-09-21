import 'reflect-metadata'

import { buildProviderModule } from 'inversify-binding-decorators'
import { InversifyExpressServer } from 'inversify-express-utils'
import { bodyParser, container } from './jowboy'
import './modules'

container.load(buildProviderModule())

const server = new InversifyExpressServer(container)

server.setConfig((app) => {
  app.use(bodyParser)
})

const app = server.build()

export { app }
