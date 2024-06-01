// DONE REVIEWING: GITHUB COMMIT 4️⃣

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

  public cause?: Error

  constructor(status: number, statusText: string, message: string, cause?: Error) {
    super(message)
    this.name = "FetchError"
    this.status = status
    this.statusText = statusText
    this.cause = cause
  }
}

const HEADERS_DEFAULT: Record<string, string> = {"Content-Type": "application/json"}
const URL_BASE: string | undefined = process.env.NEXT_PUBLIC_URL_BASE
const ERRORS_DETAILS: Record<string | number, {statusText: string; message: string}> = {
  400: {
    statusText: "BAD_REQUEST",
    message: "The request could not be understood by our server."
  },
  401: {
    statusText: "NOT_AUTHORIZED",
    message: "You are not authorized to access this resource."
  },
  403: {
    statusText: "FORBIDDEN",
    message: "Access to this resource is forbidden."
  },
  404: {
    statusText: "NOT_FOUND",
    message: "The requested resource could not be found."
  },
  408: {
    statusText: "REQUEST_TIMEOUT",
    message: "The request timed out. Please try again."
  },
  500: {
    statusText: "INTERNAL_SERVER_ERROR",
    message: "There was an error on our server. Please try again later."
  },
  default: {
    statusText: "ERROR",
    message: "An un-expected error occurred. Please try again."
  }
}

const fetchWithTimeout = function fetchWithTimeout(
  url: string,
  options: RequestInit & {timeout?: number}
): Promise<Response> {
  const {timeout = 8000, ...optionsRest} = options

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const {statusText, message} = ERRORS_DETAILS[408]
      reject(new FetchError(408, statusText, message))
    }, timeout)

    fetch(url, optionsRest)
      .then((response) => {
        clearTimeout(timer)
        resolve(response)
      })
      .catch((error) => {
        clearTimeout(timer)
        const {statusText, message} = ERRORS_DETAILS.default
        reject(new FetchError(0, statusText, message, error))
      })
  })
}

export const shcFetch = function shcFetch() {
  return null
}

export default shcFetch
