export interface Login {
  username: string
  password: string
}

export interface ProjectListAnalyse {
  time: string
}

export interface ArticleList {
  current: number
  pageSize: number
  articleName: string
  beginTime: string
  endTime: string
}

export interface CreateActicle {
  title: string
  author: string
  tags: string[]
  content: string
  img: string
}

export interface ReadList {
  title: string
}
