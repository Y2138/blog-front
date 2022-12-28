type GetReqParam = {
  [prop: string]: string | number
}

/**
 * @description: 将对象转化为?a=*&b=*&c=*的形式
 * @param {GetReqParam} obj
 * @return {str} string
 */
export function changeParamToUrl(obj: GetReqParam): string {
  let paramStr = ''
  if (!obj) return paramStr
  const paramKeys = Object.keys(obj)
  paramKeys.map(v => `${v}=${obj[v]}`)
  return paramStr + '?' + paramKeys.join('&')
}