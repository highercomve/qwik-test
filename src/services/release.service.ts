import {
  GetApiURL,
  BuildURLWithParams,
  Patch,
} from '../lib/api'

const SERVICE_URL = `${GetApiURL()}/releases`

export const RunOperationOnRelease = async (id = '', action = '', query = {}) =>
  Patch(BuildURLWithParams(`${SERVICE_URL}/${id}/${action}`, query), {})
