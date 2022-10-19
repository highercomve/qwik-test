
export interface ServiceResponse {
  ok: boolean;
  json: any;
  redirected?: boolean;
  headers?: Headers;
  status?: number;
}

export type ServiceCb = () => Promise<ServiceResponse>

export type CallBackFunc = (json: any) => void 

export interface QueryParams {
  [key: string]: string | undefined | null | number
}