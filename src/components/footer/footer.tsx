import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {

  return (
    <div class="footer-container-fluid">
      <div class="container-fluid">
        <div class="row flex-column d-flex justify-content-center align-items-center">
          <div class="text-center">
            <div class="ct-social-box" data-type="rounded" data-size="custom" data-color="custom" data-fill="solid">
              <a
                href="https://twitter.com/pantahub?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                data-network="twitter"
                aria-label="Twitter"
              >
                <span class="ct-icon-container-fluid"><svg width="20px" height="20px"
                  viewBox="0 0 20 20">
                  <path
                    d="M20,3.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,6.7,3.4,5.1,1.4,2.6C1,3.2,0.8,3.9,0.8,4.7c0,1.4,0.7,2.7,1.8,3.4C2,8.1,1.4,7.9,0.8,7.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C18.8,5.3,19.4,4.6,20,3.8z">
                  </path>
                </svg></span><span class="ct-label"> Twitter </span>
              </a>
              <a
                href="https://www.linkedin.com/company/pantacor/"
                target="_blank"
                rel="noopener noreferrer"
                data-network="linkedin"
                aria-label="LinkedIn"
              >
                <span class="ct-icon-container-fluid"><svg width="20px"
                  height="20px" viewBox="0 0 20 20">
                  <path
                    d="M18.6,0H1.4C0.6,0,0,0.6,0,1.4v17.1C0,19.4,0.6,20,1.4,20h17.1c0.8,0,1.4-0.6,1.4-1.4V1.4C20,0.6,19.4,0,18.6,0z M6,17.1h-3V7.6h3L6,17.1L6,17.1zM4.6,6.3c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C6.3,5.5,5.5,6.3,4.6,6.3z M17.2,17.1h-3v-4.6c0-1.1,0-2.5-1.5-2.5c-1.5,0-1.8,1.2-1.8,2.5v4.7h-3V7.6h2.8v1.3h0c0.4-0.8,1.4-1.5,2.8-1.5c3,0,3.6,2,3.6,4.5V17.1z">
                  </path>
                </svg></span><span class="ct-label"> LinkedIn </span>
              </a>
              <a
                href="https://www.reddit.com/r/Pantahub/"
                target="_blank"
                rel="noopener noreferrer"
                data-network="reddit"
                aria-label="Reddit">
                  <span
                  class="ct-icon-container-fluid"><svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path
                      d="M11.7,0.9c-0.9,0-2,0.7-2.1,3.9c0.1,0,0.3,0,0.4,0c0.2,0,0.3,0,0.5,0c0.1-1.9,0.6-3.1,1.3-3.1c0.3,0,0.5,0.2,0.8,0.5c0.4,0.4,0.9,0.9,1.8,1.1c0-0.1,0-0.2,0-0.4c0-0.2,0-0.4,0.1-0.5c-0.6-0.2-0.9-0.5-1.2-0.8C12.8,1.3,12.4,0.9,11.7,0.9z M16.9,1.3c-1,0-1.7,0.8-1.7,1.7s0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7S17.9,1.3,16.9,1.3z M10,5.7c-5.3,0-9.5,2.7-9.5,6.5s4.3,6.9,9.5,6.9s9.5-3.1,9.5-6.9S15.3,5.7,10,5.7z M2.4,6.1c-0.6,0-1.2,0.3-1.7,0.7C0,7.5-0.2,8.6,0.2,9.5C0.9,8.2,2,7.1,3.5,6.3C3.1,6.2,2.8,6.1,2.4,6.1z M17.6,6.1c-0.4,0-0.7,0.1-1.1,0.3c1.5,0.8,2.6,1.9,3.2,3.2c0.4-0.9,0.3-2-0.5-2.7C18.8,6.3,18.2,6.1,17.6,6.1z M6.5,9.6c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3S5.8,9.6,6.5,9.6z M13.5,9.6c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3S12.8,9.6,13.5,9.6z M6.1,14.3c0.1,0,0.2,0.1,0.3,0.2c0,0.1,1.1,1.4,3.6,1.4c2.6,0,3.6-1.4,3.6-1.4c0.1-0.2,0.4-0.2,0.6-0.1c0.2,0.1,0.2,0.4,0.1,0.6c-0.1,0.1-1.3,1.8-4.3,1.8c-3,0-4.2-1.7-4.3-1.8c-0.1-0.2-0.1-0.5,0.1-0.6C5.9,14.4,6,14.3,6.1,14.3z">
                    </path>
                  </svg></span><span class="ct-label"> Reddit </span>
                </a>
            </div>
          </div>
          <div class="col-sm-4">
            <ul class="navbar-nav mr-auto navbar-main">
              <li class="nav-item">
                <a class="nav-link" href="https://www.pantacor.com/about/">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.pantacor.com/products/">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://docs.pantahub.com">
                  Documentation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.pantacor.com/blog/">Blog</a>
              </li>
            </ul>
          </div>
          <div class="text-center">
            <ul class="nav nav-footer">
              <li class="nav-item">
                <a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://gitlab.com/pantacor">Git</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" target="_blank" rel="noopener noreferrer"
                  href="https://www.pantacor.com/disclaimer/">Disclaimer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" target="_blank" rel="noopener noreferrer"
                  href="https://www.pantacor.com/privacy-policy/">Privacy Policy</a>
              </li>
            </ul>
            <span class="copyright-box">© 2017, 2020 Pantacor Ltd.</span>
          </div>
        </div>
      </div>
    </div>
  )
})
