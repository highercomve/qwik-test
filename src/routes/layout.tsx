import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/components/footer/footer';
import { Sidebard } from '~/components/sidebar/sidebar';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main class="main d-flex">
        <section id="sidebar-wrapper">
          <Sidebard />
        </section>
        <section id="page-content-wrapper">
          <Slot />
        </section>
      </main>
      <footer class="footer-container-fluid bg-dark">
        <Footer />
      </footer>
    </>
  );
});
