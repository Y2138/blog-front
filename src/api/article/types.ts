export interface ArticleParam {
  title: string
}

export interface ArticleModel {
  title: string,
  desc: string,
  content: string,
  tags?: string[]
}