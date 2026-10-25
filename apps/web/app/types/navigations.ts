export const Routes = {
  Home: '/',
  Songs: '/songs',
  Recordings: '/recordings',
  Exercises: '/exercises',
  Setlists: '/setlists',
} as const

type AppRoute = (typeof Routes)[keyof typeof Routes]

export type Navigations = {
  to: AppRoute
  label: string
}
