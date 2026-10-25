// Статусы запроса useFetch
export const FetchStatus = {
  Idle: 'idle',
  Pending: 'pending',
  Success: 'success',
  Error: 'error',
} as const

export type FetchStatusType = (typeof FetchStatus)[keyof typeof FetchStatus]
