export interface ReadForm {
  title: string
}

export interface CreateBook {
  name: string
  author: string
  img: string
  time: string
  introduction: string
  content: string
  id?: number | string
}
