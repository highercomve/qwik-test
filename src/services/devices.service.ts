import { FetchOptions } from '~/types/api'
import { QueryParams } from '~/types/generic'
import {
  GetApiURL,
  BuildURLWithParams,
  Get,
  Patch,
} from '../lib/api'

const DEVICES_URL = `${GetApiURL()}/devices`

export const GetDevices = async (params = {} as QueryParams, options?: FetchOptions) => {
  if (!params['page[offset]'] || params['page[offset]'] === '') {
    params['page[offset]'] = 0
  }
  return Get(BuildURLWithParams(`${DEVICES_URL}`, params), options)
}

export const GetDevice = async (id: string, params = {} as QueryParams, options?: FetchOptions) => {
  if (!params['page[offset]'] || params['page[offset]'] === '') {
    params['page[offset]'] = 0
  }
  return Get(BuildURLWithParams(`${DEVICES_URL}/${id}`, params), options)
}

export const DeleteDevice = async (deviceID: string, options?: FetchOptions) => {
  return Patch(`${DEVICES_URL}/${deviceID}/remove-channel`, {}, options)
}

export const ChangeDeviceChannel = async (deviceID: string, channelID: string, options?: FetchOptions) => {
  return Patch(`${DEVICES_URL}/${deviceID}/channel`, { "channel_id": channelID }, options)
}
