// DONE REVIEWING: GITHUB COMMIT 1️⃣

type JSONValue = string | number | boolean | {[key: string]: JSONValue} | JSONValue[]

type FetchOptionsBase = {
  method?: "GET" | "POST" | "PUT" | "DELETE"
  headers?: Record<string, string>
  timeout?: number
  retries?: number
}

type FetchOptionsWithBody<T> = FetchOptionsBase & {
  method: "POST" | "PUT"
  body: T
}

type FetchOptionsWithoutBody = FetchOptionsBase & {
  method?: "GET" | "DELETE"
  body?: never
}

type FetchOptions<T> = FetchOptionsWithBody<T> | FetchOptionsWithoutBody

export const shcFetch = function shcFetch() {
  return null
}

export default shcFetch
