import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { BasicResponseModel, PageReqDataModel, PageResponseModel } from './utils'
import eventEmitts from '@/utils/eventEmitter'
const instance: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  // TODO 本地测试
  baseURL: 'http://localhost:3000',
  timeout: 5000,
})
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const { data } = config
  // TODO 配置config.headers的内容
  // config.headers!['Auth'] = 'UkJTLVBDCtfB4jeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJHU1pOMTY3ODkiLCJjcmVhdGVkIjoxNjYwODc2MjkxNTEwLCJleHAiOjE2NjExMzU0OTF9.kNBKluRHfms3CYRhuujeZZCrxuPsSgUgV8G6UhsJWH6Xj5HSNJy1lar8EkwO9uoehLl77w_IcAwbL30QG98n5w'
  // config.headers!['userview'] = 1
  return config
}, (error: any) => {
  console.log(error)
  return Promise.reject(error)
})

instance.interceptors.response.use((res: AxiosResponse) => {
  const { data } = res
  console.log('success: ', res)
  return Promise.resolve(data)
}, (error: any) => {
  const { response } = error
  if (response === undefined) {
    console.log('接口请求异常')
    eventEmitts.emit('message.error', '接口请求异常')
    return Promise.resolve({
      success: false,
      errorMessage: '接口请求异常',
    })
  } else {
    const { status } = response
    const errMsg = dealStatusCode(status)
    eventEmitts.emit('message.error', errMsg)
    return Promise.resolve({
      success: false,
      status: response?.status,
      errorMessage: errMsg
    })
  }
})

function dealStatusCode(status: number) {
  switch (status) {
    case 302:
      return `${status}-接口重定向了！`
    case 400:
      return `${status}-发出的请求有错误，服务器没有进行新建或修改数据的操作`
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401: //重定向
      // console.error("token:登录失效:" + status);
      return `${status}-token登录失效`
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      // console.error(`${other}:` + status);
      return `${status}-鉴权失败,无权限访问该页面`
    case 404:
      return `${status}-网络请求不存在`
    case 406:
      return `${status}-请求的格式不可得`
    case 408:
      console.error(" 请求超时！")
      return `${status}-请求超时！`
    case 410:
      return `${status}-请求的资源被永久删除，且不会再得到的`
    case 422:
      return `${status}-当创建一个对象时，发生一个验证错误`
    case 500:
      return `${status}-服务器发生错误，请检查服务器`
    case 502:
      return `${status}-网关错误`
    case 503:
      return `${status}-服务不可用，服务器暂时过载或维护`
    case 504:
      return `${status}-网关超时`
    default:
      return `${status}-服务器晕了晕了...请重试`
  }
}

// D-入参类型，R-出参data类型
export const request = <D = any, R = any>(config: AxiosRequestConfig<D>): Promise<BasicResponseModel<R>> => {
  return instance.request(config)
}

export const get = <D = any, R = any>(url: string, config?: AxiosRequestConfig<D>): Promise<BasicResponseModel<R>> => {
  return instance.get(url, config)
}
export const post = <D = any, R = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<BasicResponseModel<R>> => {
  return instance.post(url, data, config)
}

export const pagePost = <D = any, R = any>(url: string, data?: PageReqDataModel<D>, config?: AxiosRequestConfig<PageReqDataModel<D>>): Promise<PageResponseModel<R>> => {
  return instance.post(url, data, config)
}