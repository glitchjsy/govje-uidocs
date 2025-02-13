// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gov.je UI Docs',
  tagline: 'User interface documentation for Gov.je web projects',
  favicon: 'https://govje.azureedge.net/images/GovJE.ico',

  // Set the production url of your site here
  url: 'https://uidocs.glitch.je',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'glitchjsy', // Usually your GitHub org/user name.
  projectName: 'govje-uidocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/glitchjsy/govje-uidocs/tree/master"
        },
        blog: false,
        theme: {

          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://cdn.gov.je/govje/images/GovJeLogo.png',
      navbar: {
        title: 'gov.je - user interface docs (unofficial)',
        logo: {
          alt: 'Gov.je Logo',
          src: 'https://cdn.gov.je/govje/images/GovJE.ico',
        },
        items: [
          {
            href: 'https://gov.je',
            label: 'Back to gov.je',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        copyright: `This website contains guidance on designing user interfaces for Government websites.<br> © Government of Jersey ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
      }
    }),
};

export default config;
