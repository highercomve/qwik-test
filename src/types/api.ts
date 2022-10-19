import { RequestContext } from "@builder.io/qwik-city"

export interface FetchOptions {
  token?: string
  cookie?: string | null
  request?: RequestContext
}