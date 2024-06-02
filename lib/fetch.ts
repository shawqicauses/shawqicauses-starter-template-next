// DONE REVIEWING: GITHUB COMMIT 6️⃣

type JSONValue = string | number | boolean | {[key: string]: JSONValue} | JSONValue[]

type FetchOptionsBase = {
  method?: "GET" | "POST" | "PUT" | "DELETE"
  headers?: Record<string, string>
  timeout?: number
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

type SHCRequestInit = RequestInit & {
  timeout?: number
}

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
  retries: {
    statusText: "MAXIMUM_RETRIES",
    message: "Maximum retries reached. Please try again."
  },
  network: {
    statusText: "NETWORK",
    message: "A network error occurred. Please check your connection and try again."
  },
  default: {
    statusText: "UNKNOWN_ERROR",
    message: "An unknown or unexpected error occurred. Please try again."
  }
}

const fetchWithTimeout = function fetchWithTimeout(
  url: string,
  options: SHCRequestInit
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
        const {statusText, message} =
          error instanceof TypeError ? ERRORS_DETAILS.network : ERRORS_DETAILS.default
        reject(new FetchError(0, statusText, message, error))
      })
  })
}

const fetchRetry = async function fetchRetry(
  url: string,
  options: SHCRequestInit,
  retries: number = 3
): Promise<Response> {
  try {
    const response = await fetchWithTimeout(url, options)
    if (!response.ok) {
      const {statusText, message} = ERRORS_DETAILS[response.status] || ERRORS_DETAILS.default
      throw new FetchError(response.status, statusText, message)
    }

    return response
  } catch (error) {
    if (error instanceof FetchError && error.status === 408 && retries > 1)
      return fetchRetry(url, options, retries - 1)

    if (error instanceof FetchError) {
      if (retries <= 1) {
        const {statusText, message} = ERRORS_DETAILS.retries
        throw new FetchError(408, statusText, message, error as Error)
      }

      throw new FetchError(error.status, error.statusText, error.message, error)
    }

    const {statusText, message} = ERRORS_DETAILS.default
    throw new FetchError(0, statusText, message, error as Error)
  }
}

export const shcFetch = function shcFetch() {
  return null
}

export default shcFetch
