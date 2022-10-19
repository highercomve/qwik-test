import { $, component$, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const GetHostUrl = () =>
  import.meta.env.VITE_APP_FLEET_HOST_URL || "https://fleet.pantacor.com"

export default component$(() => {
  const state = useStore({ show: false })

  const toggleShow = $(() => {
    state.show = !state.show
  })
  return (
    <nav
      id="navbar-main"
      class="navbar navbar-expand-lg bg-white"
    >
      <div class="container-fluid d-flex justify-content-between">
        <Link
          aria-current="page"
          class="navbar-brand active"
          href="/"
        >
          <img
            alt="SimpleFleet"
            src={`${GetHostUrl()}/settings/logo`}
            height="34" />
        </Link>
        <div
          class="collapse navbar-collapse navigation-main d-flex justify-content-end"
        >
          <div class="dropdown">
            <button
              class="btn btn-outline-primary btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              data-toggle-target="settings-dropdown"
              aria-expanded="false"
              onClick$={toggleShow}
            >
              <img
                height="40"
                alt={`sergio`}
                style="border-radius: 100%; margin-right: 5px;"
                src="https://via.placeholder.com/100/FFFFFF?text=F"
              />
              <span style="margin-right: 5px;">
                {`sergio`}
              </span>
            </button>
            <ul class={`dropdown-menu ${state.show && "show"}`} id="settings-dropdown">
              <li>
                <Link
                  href="/credentials"
                >
                  Connected Accounts
                </Link>
              </li>
              <li>
                <Link
                  href="/tokens"
                >
                  Tokens
                </Link>
              </li>
              <li>
                <Link
                  href="/settings/customization"
                >
                  Customization
                </Link>
              </li>
              <li class="dropdown-divider"></li>
              <li>
                <Link
                  class="dropdown-item"
                  href="/auth/logout"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
});
