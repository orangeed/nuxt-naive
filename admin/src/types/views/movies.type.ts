export interface MoviesForm {
  title: string
  type: string
}

export interface CreateMovies {
  id?: string | number
  name: string
  type: string | number
  score: string
  time:string
  img: string
  introduction: string
  content: string
}
