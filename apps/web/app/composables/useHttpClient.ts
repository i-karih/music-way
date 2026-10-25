type HttpGetOptions = {
  params?: Record<string, unknown>
  key?: string
}

type RequestBody = Record<string, unknown> | FormData | null

export function useHttpClient() {
  const { $api } = useNuxtApp()

  return {
    /**
     * GET запрос — использует useFetch для SSR-совместимости
     * Возвращает реактивный объект { data, pending, error, refresh }
     */
    get: <T>(url: string, options?: HttpGetOptions) => {
      return useFetch<T>(url, {
        $fetch: $api as typeof $fetch,
        params: options?.params,
        key: options?.key,
      })
    },

    /**
     * POST запрос — возвращает Promise
     */
    post: <T>(url: string, body?: RequestBody) => {
      return $api<T>(url, { method: 'POST', body })
    },

    /**
     * PUT запрос — возвращает Promise
     */
    put: <T>(url: string, body?: RequestBody) => {
      return $api<T>(url, { method: 'PUT', body })
    },

    /**
     * PATCH запрос — возвращает Promise
     */
    patch: <T>(url: string, body?: RequestBody) => {
      return $api<T>(url, { method: 'PATCH', body })
    },

    /**
     * DELETE запрос — возвращает Promise
     */
    delete: <T>(url: string) => {
      return $api<T>(url, { method: 'DELETE' })
    },
  }
}
