

import 'core-js/actual/array/values'
import serverless from '@serverless-devs/serverless-http';

import path from 'path';


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



const mapContextToHttpRequest = (ctx) => {
  const headers = getRequestHeaders(ctx);
  const request = ctx.request;
  headers[CONTEXT_HEADER_NAME] = encodeURIComponent(
    JSON.stringify(ctx.context),
  );

  return {
    method: 'post',
    path: '/',
    url: '',
    headers,
    socketPath: getSocketPath(),
    body: ctx.data,
    clientIP: '',
    ip: '',
    queryStringParameters: {}, // url 后缀 params 参数
    queries: {}, // url 后缀 params 参数
    // 原始的函数计算请求对象，方便获取其中的一些信息
    fcRequest: request,
    // 针对 FC函数计算 的属性
    fcContext: ctx.context,
    httpMethod: 'post',
    // 把context 挂在到req.requestContext上
    requestContext: {},
  };
};

const formatCtx = (context) => {
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

export const taobaoFCAdapter = (app, opts = {}) => {
  const serverlessHandler = serverless(app, opts);
  return async (context) => {
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
};