// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frost ORM',
  tagline: 'The coolest ORM for Firebase realtime database',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  url: 'https://frost.sami-mishal.online', // Your website URL
  baseUrl: '/',
  projectName: 'frost-web-docs',
  organizationName: 'Frost-ORM',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            remarkPlugins: [
              [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
            ],
        },
        pages:{
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
plugins:[
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'api',
      path: 'api',
      routeBasePath: 'api',
      sidebarPath: require.resolve('./sidebars.js'),

      // ... other options
    },
  ],
  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        // {
        //   to: '/api/intro',
        //   from: '/api/modules',
        // },

      ],
    },
  ],

],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'FrostORM Web',
        logo: {
          alt: 'FrostORM Web Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/api/modules', label: 'API', position: 'left'},
          {to: '/v1-example', label: 'Example', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/api/modules',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Developer\'s LinkedIn',
                href: 'https://www.linkedin.com/in/sami-mishal-612261161/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/Frost-ORM',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/@frost-orm/frost-web',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FrostORM.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments:[
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-error',
            block: {start: 'highlight-error-start', end: 'highlight-error-end'},

          },
          {
            className: 'code-block-correct-line',
            line: 'highlight-correct',
            block: {start: 'highlight-correct-start', end: 'highlight-correct-end'},

          },
        ]
      },
    }),
};

module.exports = config;
