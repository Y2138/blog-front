import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { BasicReqDataModel, BasicResponseModel } from './utils'
import eventEmitts from '@/utils/eventEmitter'
const instance: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  // TODO 本地测试
  baseURL: 'https://ngw.qa.enmonster.com',
  timeout: 5000,
})
instance.interceptors.request.use((config: AxiosRequestConfig<BasicReqDataModel>) => {
  const { data } = config
  // TODO 配置config.headers的内容
  // config.headers!['Auth'] = 'UkJTLVBDCtfB4jeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJHU1pOMTY3ODkiLCJjcmVhdGVkIjoxNjYwODc2MjkxNTEwLCJleHAiOjE2NjExMzU0OTF9.kNBKluRHfms3CYRhuujeZZCrxuPsSgUgV8G6UhsJWH6Xj5HSNJy1lar8EkwO9uoehLl77w_IcAwbL30QG98n5w'
  // config.headers!['userview'] = 1
  return config
}, (error: any) => {
  console.log(error)
  return Promise.reject(error)
})

instance.interceptors.response.use((res: AxiosResponse<BasicResponseModel>) => {
  const { data } = res
  return Promise.resolve(data)
}, (error: any) => {
  const { response } = error
  if (response === undefined) {
    console.log('接口请求异常')
    eventEmitts.emit('message.error', '接口请求异常')
  } else {
    const { status } = response
    dealStatusCode(status)
  }
  return Promise.reject(response)
})

function dealStatusCode(status: number) {
  switch (status) {
    case 302:
      eventEmitts.emit('message.error', `${status}-接口重定向了！`);
      break;
    case 400:
      eventEmitts.emit('message.error', `${status}-发出的请求有错误，服务器没有进行新建或修改数据的操作`);
      break;
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401: //重定向
      // console.error("token:登录失效:" + status);
      eventEmitts.emit('message.error', `${status}-token登录失效`);
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      // console.error(`${other}:` + status);
      eventEmitts.emit('message.error', `${status}-鉴权失败,无权限访问该页面`);
      break;
    case 404:
      eventEmitts.emit('message.error', `${status}-网络请求不存在`);
      break;
    case 406:
      eventEmitts.emit('message.error', `${status}-请求的格式不可得`);
      break;
    case 408:
      console.error(" 请求超时！");
      eventEmitts.emit('message.error', `${status}-请求超时！`);
      break;
    case 410:
      eventEmitts.emit('message.error', `${status}-请求的资源被永久删除，且不会再得到的`);
      break;
    case 422:
      eventEmitts.emit('message.error', `${status}-当创建一个对象时，发生一个验证错误`);
      break;
    case 500:
      eventEmitts.emit('message.error', `${status}-服务器发生错误，请检查服务器`);
      break;
    case 502:
      eventEmitts.emit('message.error', `${status}-网关错误`);
      break;
    case 503:
      eventEmitts.emit('message.error', `${status}-服务不可用，服务器暂时过载或维护`);
      break;
    case 504:
      eventEmitts.emit('message.error', `${status}-网关超时`);
      break;
    default:
      eventEmitts.emit('message.error', `${status}-晕了晕了...请重试`);
  }
}

export const request = (config: AxiosRequestConfig<any>) => {
  return instance.request(config)
}

export const get = (url: string, config: AxiosRequestConfig<any>) => {
  return request({ url, method: 'get', ...config })
}
export const post = (url: string, config: AxiosRequestConfig<BasicReqDataModel>) => {
  return request({ url, method: 'post', ...config })
}