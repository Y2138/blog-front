
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
