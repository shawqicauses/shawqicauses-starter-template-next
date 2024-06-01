// DONE REVIEWING: GITHUB COMMIT 3️⃣

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

const HEADERS_DEFAULT: Record<string, string> = {"Content-Type": "application/json"}
const URL_BASE: string = process.env.NEXT_PUBLIC_URL_BASE
const ERRORS_MESSAGES: Record<string | number, string> = {
  400: "The request could not be understood by our server.",
  401: "You are not authorized to access this resource.",
  403: "Access to this resource is forbidden.",
  404: "The requested resource could not be found.",
  500: "There was an error on our server. Please try again later.",
  default: "An un-expected error occurred. Please try again."
}

export const shcFetch = function shcFetch() {
  return null
}

export default shcFetch
