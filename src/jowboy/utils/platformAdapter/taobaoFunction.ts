

import 'core-js/actual/array/flat'
import { Container } from 'inversify';
import serverless from '@serverless-devs/serverless-http';
import { getRouteInfo } from "inversify-express-utils";
import path from 'path';
import { type TaobaoContext } from '../../interfaces';


const CONTEXT_HEADER_NAME = 'x-fc-http-context';

const getRequestHeaders = (ctx) => {
  return {};
};
const getSocketPath = () => {
  const socketPathSuffix = Math.random().toString(36).substring(2, 15);
  /* istanbul ignore if */ /* only running tests on Linux; Window support is for local dev only */
  if (/^win/.test(process.platform)) {
    return path.join(
      '\\\\?\\pipe',
      process.cwd(),
      `server-${socketPathSuffix}`,
    );
  } else {
    return `/tmp/server-${socketPathSuffix}.sock`;
  }
};



const mapContextToHttpRequest = (ctx: TaobaoContext) => {
  const headers = getRequestHeaders(ctx);
  // const request = ctx;
  headers[CONTEXT_HEADER_NAME] = encodeURIComponent(
    JSON.stringify(ctx),
  );


  return {
    method: 'post',
    path: ctx.cloud.dataspace.context.handler,
    url: '',
    headers,
    socketPath: getSocketPath(),
    body: ctx.data,
    clientIP: '',
    ip: '',
    queryStringParameters: {}, // url 后缀 params 参数
    queries: {}, // url 后缀 params 参数
    // 原始的函数计算请求对象，方便获取其中的一些信息
    fcRequest: ctx,
    // 针对 FC函数计算 的属性
    fcContext: ctx,
    httpMethod: 'post',
    // 把context 挂在到req.requestContext上
    requestContext: {},
  };
};

const formatCtx = (context: TaobaoContext) => {
  return {
    request: mapContextToHttpRequest(context),
    response: {},
    context,
  };
};

// const forwardResponse = (response, resolver) => {
//   const { statusCode, headers, body, isBase64Encoded, multiValueHeaders } =
//     response;
//   resolver({ statusCode, headers, body, isBase64Encoded, multiValueHeaders });
// };

export type TapbaoHandleRequest = (ctx: TaobaoContext) => Promise<any>

export const taobaoFCAdapter = (app: Express.Application, container: Container, opts = {}) => {
  const serverlessHandler = serverless(app, opts);

  const handleRequest: TapbaoHandleRequest = async (context: TaobaoContext) => {
    const ctx = formatCtx(context);

    try {
      const data: any = await serverlessHandler(ctx.request, {});
      try {
        return JSON.parse(Buffer.from(data?.body).toString()); 
      } catch (error) {
        return Buffer.from(data?.body).toString()
      }
    } catch (err) {
      console.log('err :>> ', err);
      // 异常报错
      return {
        sucess: false,
      };
    }
  };

  const routers = mapperRouter(container);

  const handlers = routers.reduce((pre, curr) => ({ ...pre, [curr]: handleRequest }), {} as Record<string, TapbaoHandleRequest>) 

  if (handlers.$functionInfo) {
    delete handlers.$functionInfo
  }

  return handlers
};

export const mapperRouter = (container: Container) => {
  const routers = getRouteInfo(container)

  const stringRoutes = routers.map(v => v.endpoints.map(j => j.route)).flat().map(v => v.replace('POST ', ''))

  return stringRoutes
}