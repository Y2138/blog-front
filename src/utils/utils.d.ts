
export interface FetchConfig {
  // 取消重复请求
  cancelAgainRequest?: boolean
  // 自动展示错误信息
  showErrorMsg?: boolean
  // 超时自动重试
  retry?: boolean
  // 全屏loading
  maskLoading?: boolean
}
export interface PageReqDataModel<T> {
  model: T
  pageIndex: number
  pageSize: number
}

export interface BasicResponseModel<T> {
  model?: T | Array<T>
  success: boolean
  errorMessage?: string
  status?: number
}
export interface PageResponseModel<T> extends BasicResponseModel<T> {
  pageIndex: number
  pageSize: number
  totalCount: number
  totalPage: number
  model?: Array<T>
}
