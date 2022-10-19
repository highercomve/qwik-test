import { QueryParams } from '~/types/generic'
import {
  GetApiURL,
  BuildURLWithParams,
  Get,
} from '../lib/api'

const DEPLOYMENTS_URL = `${GetApiURL()}/deployment-actions`

export const GetDeployments = async (_: any, params = {} as QueryParams) => {
  if (!params['page[offset]'] || params['page[offset]'] === '') {
    params['page[offset]'] = 0
  }
  return Get(BuildURLWithParams(`${DEPLOYMENTS_URL}`, params))
}

export const GetDeployment = async (deploymentID: string) => {
  return Get(`${DEPLOYMENTS_URL}/${deploymentID}`)
}
