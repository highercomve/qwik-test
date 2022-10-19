import { QueryParams } from '~/types/generic'
import {
  GetApiURL,
  BuildURLWithParams,
  Get,
  Patch,
} from '../lib/api'

const CHANNEL_URL = `${GetApiURL()}/channels`

export const GetChannelSummary = async (id = '', params = {}) => {
  return Get(BuildURLWithParams(`${CHANNEL_URL}/${id}/summary`, params))
}

export const GetChannel = async (id = '',  params = {}) => {
  const url = BuildURLWithParams(`${CHANNEL_URL}/${id}`, params)
  return Get(url)
}


export const GetChannels = async (params = {}) => {
  const url = BuildURLWithParams(`${CHANNEL_URL}`, params)
  return Get(url)
}

export const UpdateChannel = async (id = '', body = {}) => {
  return Patch(`${CHANNEL_URL}/${id}`, body)
}

export const GetChannelDevices = async (id = '', params = {} as QueryParams) => {
  if (!params['page[offset]'] || params['page[offset]'] === '') {
    params['page[offset]'] = 0
  }
  return Get(BuildURLWithParams(`${CHANNEL_URL}/${id}/devices`, params))
}

export const GetChannelReleases = async (id = '', params = {} as QueryParams) =>{
  if (!params['page[offset]'] || params['page[offset]'] === '') {
    params['page[offset]'] = 0
  }
  const url = BuildURLWithParams(`${CHANNEL_URL}/${id}/releases`, params)
  return Get(url)
}
  
export const GetChannelReleaseSummary = async (channelID = '', id = '') => {
  return Get(`${CHANNEL_URL}/${channelID}/releases/${id}`)
}
