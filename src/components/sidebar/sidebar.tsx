import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Sidebard = component$(() => {
  return (
    <ul class="nav flex-column nav-pills">
      <li class="nav-item">
        <Link
          prefetch={true}
          href="/"
        >
          Dashboard
        </Link>
      </li>
      <li class="nav-item">
        <Link
          prefetch={true}
          href="/devices"
        >
          Devices
        </Link>
      </li>
      <li class="nav-item">
        <Link
          prefetch={true}
          href="/channels"
        >
          Channels
        </Link>
      </li>
    </ul>
  )
})
