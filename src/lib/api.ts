import { FetchOptions } from '~/types/api'
import { CallBackFunc, QueryParams, ServiceCb, ServiceResponse } from '~/types/generic'

export const GetApiURL = (): string =>
  import.meta.env.VITE_APP_FLEET_API_URL || 'https://fleet.pantacor.com/api/v1'

export const getOptions = (method: string, contentType: string, options?: FetchOptions): RequestInit => {
  const headers = {
    'Content-Type': contentType,
  } as any

  if (options?.request?.headers) {
    headers.Cookie = options?.request?.headers.get("Cookie")
  }
  if (options?.cookie) {
    headers.Cookie = options?.cookie
  }
  if (options?.token) {
    headers["Authorization"] = `Bearer ${options?.token}`
  }

  return  {
    method,
    headers: headers, 
    credentials: "include"
  }
}

export const requestContentType = async (
  url: string,
  contentType = 'application/json',
  method = 'GET',
  body = {},
  ops?: FetchOptions,
) => {
  const options = getOptions(method, contentType, ops)

  if (method !== 'GET' && method !== 'HEAD') {
    options['body'] = JSON.stringify(body)
  }

  return fetch(url, options)
}

const requestJSON = async (url: string, method = 'GET', body = {}, options?: FetchOptions) => {
  const response = await requestContentType(
    url,
    'application/json',
    method,
    body,
    options,
  )

  const json = await response.json()
  
  return {
    ok: response.ok,
    redirected: response.redirected,
    headers: response.headers,
    status: response.status,
    json
  }
}

export const Get = async (url: string, options?: FetchOptions) =>
  requestJSON(url, 'GET', {}, options)

export const Post = async (url: string, body: {}, options?: FetchOptions) =>
  requestJSON(url, 'POST', body, options)

export const Put = async (url: string, body: {}, options?: FetchOptions) =>
  requestJSON(url, 'PUT', body, options)

export const Patch = async (url: string, body: {}, options?: FetchOptions) =>
  requestJSON(url, 'PATCH', body, options)

export const Delete = async (url: string, options?: FetchOptions) =>
  requestJSON(url, 'DELETE', {}, options)

export async function processService (
  service: ServiceCb,
  success: CallBackFunc,
  failure: CallBackFunc
): Promise<ServiceResponse> {
  let resp
  try {
    resp = await service()
    if (!resp.ok) {
      const error = typeof resp.json.Error === 'string'
        ? { code: resp.status, message: resp.json.Error }
        : resp.json

      failure({
        ok: false,
        json: error
      })
    } else {
      success(resp.json)
    }
  } catch (err: any) {
    resp = {
      ok: false,
      json: {
        code: 500,
        message: err.message ? err.message : err
      }
    }
    failure(resp.json)
  }
  return resp
}

export const CatchErrorResponse = (response: ServiceResponse) => {
  if (!response.ok) {
    throw response
  }
  return response
}

export function BuildURLWithParams (baseUrl: string, params = {} as QueryParams) {
  return Object.keys(params).reduce((acc, key) => {
    if (params[key] !== null && params[key] !== undefined  &&  params[key] !== '') {
      const ext = baseUrl === acc ? '?' : '&'
      acc = `${acc}${ext}${encodeURIComponent(key)}=${encodeURIComponent(params[key] as string)}`
    }
    return acc
  }, baseUrl)
}

export function GetSortingFromURL(search: string) {
  const urlParms = new URLSearchParams(search)
  return (urlParms.get('sort_by') || '').split(',').reduce((acc, key) => {
    const [order, field] = key.split(':')
    if (field && order) {
      acc[field] = order
    }
    return acc
  }, {} as QueryParams)
}

export function GetParamsFromURL(search: string) {
  const urlParms = new URLSearchParams(search)
  let params = {} as QueryParams
  
  for (let param of urlParms.entries()) {
    params[param[0]] = param[1].split(',').reduce((acc, key) => {
      const [order, field] = key.split(':')
      if (field && order) {
        acc[field] = order
      } else {
        acc = key
      }
      return acc
    }, {} as any)
  }

  return params
}

export function GetSortingURLParamsFromObject(sortBy = {} as QueryParams) {
  return Object.keys(sortBy).reduce((acc, key) => {
    const conector = acc === '' ? '' : ','
    return `${acc}${conector}${sortBy[key]}:${key}`
  }, '')
}