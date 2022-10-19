import { $, component$, Resource, useStore, useClientEffect$, useWatch$  } from "@builder.io/qwik";
import { DocumentHead, RequestHandler, useEndpoint, useLocation } from "@builder.io/qwik-city";
import { GetDevices } from "~/services/devices.service";
import { Device } from "~/types/device";
import { QueryParams } from "~/types/generic";
import omit from 'lodash.omit';
import { BuildURLWithParams, GetParamsFromURL, GetSortingFromURL, GetSortingURLParamsFromObject } from "~/lib/api";
import { SortingHeader } from "~/components/SortHeader/SortHeader";

interface State {
  filters: QueryParams
  sort_by: QueryParams
  items?: Device[]
}

interface Props {
  filters: QueryParams
}

export const getDefaultState = (props: Props, search: any): State =>  ({
  filters: props.filters || omit(search, ['sort_by']),
  sort_by: GetSortingFromURL(search) || {},
})

interface DevicesResponse {
  resource: string
  page_size: number
  page_offset: number
  current_page: number
  total: number
  next: string
  prev: string
  items: Device[]
}

export const GetPaginationParams = (search: string) => {
  const paginationParams = GetParamsFromURL(search)
  if (!paginationParams['page[size]'] || paginationParams['page[size]'] === 0) {
    paginationParams['page[size]'] = 100
  }

  if (paginationParams.sort_by) {
    paginationParams.sort_by = GetSortingURLParamsFromObject(paginationParams.sort_by as any)
  }

  return paginationParams
}

export const onGet: RequestHandler<DevicesResponse> = async ({ request, url }) => {
  const paginationParams = GetPaginationParams(url.search)
  const response = await GetDevices(paginationParams, { cookie: request?.headers?.get("Cookie") })
  return response.json
};

export default component$((props: Props) => {
  const location = useLocation()
  const state = useStore<State>(getDefaultState(props, location.query as any))
  const devicesData = useEndpoint<DevicesResponse>()
  
  useClientEffect$(async ({ track }) => {
    const sortBy = track(() => state.sort_by)

    const response = await devicesData.promise
    const queryParams: QueryParams = {
      ... omit(state.filters, ['sort_by']),
      sort_by: GetSortingURLParamsFromObject(sortBy),
      'page[size]': response.page_size,
      'page[offset]': response.page_offset,
    }
    state.filters = queryParams
    window.history.pushState("", "", BuildURLWithParams(location.pathname, queryParams))
  })

  useWatch$(async ({ track }) => {
    const sortBy = track(() => state.sort_by)
    const filters = track(() => state.filters)

    const queryParams: QueryParams = {
      ...omit(filters, ['sort_by']),
      sort_by: GetSortingURLParamsFromObject(sortBy),
    }

    const response = await GetDevices(queryParams, {})
    if (response.ok &&  response?.json?.items) {
      state.items = response.json.items
    }
  })

  const onChangeSorting$ = $((sortBy: string, field: string) => {
    state.sort_by = {
      ...state.sort_by,
      [field]: sortBy,
    }
  })

  return (
    <div id="devices-list">
      <header>
        <h1>Devices</h1>
      </header>
      <div className="table-responsive">
        <table class="table table-borderless table-lg">
          <thead>
            <tr>
              <th scope="col">
                ID
              </th>
              <th scope="col">
                Nick
              </th>
              <th scope="col">
                Channel ID
              </th>
              <th scope="col">
                Running Rev &nbsp;
                <SortingHeader
                  onChange$={onChangeSorting$}
                  sort={state.sort_by}
                  field={'running_rev'}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {state.items ? (
              <>
                {state.items.map((device) => (
                  <tr>
                    <td>{device.id}</td>
                    <td>{device.nick}</td>
                    <td>{device.channel_id === "" ? "Not Asigned": device.channel_id }</td>
                    <td>{device.running_rev}</td>
                  </tr>
                ))}
              </>
            ) : (
              <Resource
                value={devicesData}
                onPending={() => <>Loading...</>}
                onRejected={(error) => <>Error: {error.message}</>}
                onResolved={(response) => (
                  <>
                    {response && response.items ? (
                      <>
                        {response.items.map((device) => (
                          <tr>
                            <td>{device.id}</td>
                            <td>{device.nick}</td>
                            <td>{device.channel_id === "" ? "Not Asigned": device.channel_id }</td>
                            <td>{device.running_rev}</td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      <tr>
                        <td colSpan={4}>no devices found</td>
                      </tr>
                    )}
                  </>
                )}
              />
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Devices list',
};
