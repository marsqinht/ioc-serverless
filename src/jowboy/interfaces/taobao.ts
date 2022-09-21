
export interface TaobaoCloud {
  dataspace: {
    context: {
      handler: string
    }
  }
}

export interface TaobaoContext<T = Record<string, any>> {
  appKey: string
  appOwner: number
  appOwnerOpenId: string
  cloudId: string
  env: 'test' | 'pre' | 'prod'
  fcInvokeId: string
  fcName: string
  miniappId: string
  mixNick: string
  openId: string
  ownerId: number
  userId: number
  data: T
  cloud: TaobaoCloud
}