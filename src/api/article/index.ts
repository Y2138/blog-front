import { ArticleParam, ArticleModel } from "./types";
import useAxios from "@/utils/fetch";
import { PageReqDataModel } from "@/utils/utils";

const axiosReq = useAxios()
// 获取文章列表
export const a_getArticleList = (param: PageReqDataModel<ArticleParam>) => {
  return axiosReq.pagePost<ArticleParam, ArticleModel>('/article/getArticle/list', param)
}

// TODO 入参model 创建文章
export const a_addArticle = (param: ArticleModel) => {
  return axiosReq.post<ArticleModel, boolean>('/article/add', param)
}