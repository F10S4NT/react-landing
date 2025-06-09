import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
<<<<<<< HEAD
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Mademwith love ❤️
    by
=======
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with love ❤️ by{' '}
>>>>>>> 8e703826214ed8f36df9093c5e6f63d6482b025f
    <a href="https://www.facebook.com/Tepaxapa">Gustavo Flores</a>.
    {/*
     * PLEASE READ THIS SECTION
     * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
     */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
