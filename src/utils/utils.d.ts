export interface BasicReqDataModel<T> {
  model: T
}
export interface PageReqDataModel<T> extends Required<BasicReqDataModel<T>> {
  pageIndex: number
  pageSize: number
}

export interface BasicResponseModel<T> {
  model: T | Array<T>
  success: boolean
  errorMessage?: string
}
export interface PageResponseModel<T> extends BasicResponseModel<T> {
  pageIndex: number
  pageSize: number
  total: number
  totalPage: number
  model: Array<T>
}
