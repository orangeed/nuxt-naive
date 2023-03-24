export interface ProjectForm {
  name: string
}

export interface CreateProject {
  id?: string | number
  name: string
  author: string
  img: string
  introduction: string
}
