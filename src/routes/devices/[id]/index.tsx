import { component$, useStore, useWatch$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import { GetDevice } from "~/services/devices.service";
import { Device } from "~/types/device";

interface State {
  loading: boolean
  device: Device
}

export const EmptyDevice: Device = {
  id: '',
  cred_id: '',
  channel_id: '',
  nick: '',
  running_rev: '',
}

export default component$(() => {
  const location = useLocation();
  const state = useStore<State>({
    loading: true,
    device: EmptyDevice,
  })

  useWatch$(async ({ track }) => {
    track(() => null)
    
    const response = await GetDevice(location.params.id, {})
    if (response.ok) {
      state.device = await response.json()
    }

    state.loading = false
  })

  return (
    <section>
      <header>
        <h1>{state.device.nick}</h1>
      </header>

      <section>
        <p><b>ID</b>: {state.device.id}</p>
        <p><b>Credential</b>: {state.device.cred_id}</p>
        <p><b>Channel</b>: {state.device.channel_id}</p>
        <p><b>Rev</b>: {state.device.running_rev}</p>
      </section>                            

      <footer>
      </footer>
    </section>
  )
})

export const head: DocumentHead = {
  title: 'Device detail',
};
