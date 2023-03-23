export interface Data {
  markDownInfo: MarkDownInfo
  editorText: string
}

export interface MarkDownInfo {
  title: string
  author: string
  // time: string;
  tags: string[]
  content: string
  img: string
}

export interface ArticleForm {
  articleName: string
  beginTime: string
  endTime: string
  time: string
}

export interface PageConfig {
  current: number
  pageSize: number
  total: number
}

export interface FullScreen {
  fullHeight: number
  fullWidth: number
}
