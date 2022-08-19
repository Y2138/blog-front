export interface BasicReqDataModel {
  model: any
}
export interface PageReqDataModel extends Required<BasicReqDataModel> {
  pageIndex: number
  pageSize: number
}
export interface CommonReqDataModel extends Partial<BasicReqDataModel> {
  [propName: string]: any
}

export interface BasicResponseModel {
  model: any
  success: boolean
  errorMessage?: string
}
export interface PageResponseModel extends BasicResponseModel {
  pageIndex: number
  pageSize: number
  total: number
  totalPage: number
}
export interface CommonResponseModel extends BasicResponseModel {
  [propName: string]: any
}
