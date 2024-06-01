// DONE REVIEWING: GITHUB COMMIT 2️⃣

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

class FetchError extends Error {
  public status: number

  public statusText: string

  public cause: Error | null

  constructor(status: number, statusText: string, message: string, cause: Error | null) {
    super(message)
    this.name = "FetchError"
    this.status = status
    this.statusText = statusText
    this.cause = cause
  }
}

export const shcFetch = function shcFetch() {
  return null
}

export default shcFetch
