export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  repo?: string
  demo?: string
  featured?: boolean
}