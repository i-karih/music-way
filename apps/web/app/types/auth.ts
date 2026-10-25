export type Role = 'student' | 'teacher'

export type AuthUser = {
  id: string
  email: string
  name: string
  role: Role
}

export type LoginResponse = {
  message: string
}
