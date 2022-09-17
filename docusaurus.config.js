// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const { writeFile } = require('fs/promises');
const TOCplugin = require('./src/remark/toc-plugin');
darkCodeTheme.plain.backgroundColor = "#091825"//"#3a3a3a";
lightCodeTheme.plain.backgroundColor = "#ECF3F9"//"#EBF3F9" //"#F3F8FC";"#F3FAFC";"#f0f9fc";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frost ORM',
  tagline: 'The coolest ORM for Firebase realtime database',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  url: 'https://frost-orm.github.io/', // Your website URL
  baseUrl: '/frost-web-docs/',
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
          routeBasePath:'/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            remarkPlugins: [
              [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
              // TOCplugin,
            ],
            includeCurrentVersion:false,
            lastVersion:"2.0.0",
            versions:{
              '1.0.3':{
                banner:"unmaintained",
                badge:true,
                label:'Annotations-V1.0.0'
              },
              '2.0.0':{
                badge:true,
                label: "Codegen-V1.0.0"

              }
            },
            // async sidebarItemsGenerator({
            //   defaultSidebarItemsGenerator,
            //   ...args
            // }) {
            //   // const log = require('./log.json')
            //   // log.push(args)
            //   // await writeFile('./log.json',JSON.stringify(log,null,4))
            //   return await defaultSidebarItemsGenerator(args)
            // },
            
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
  // [
  //   '@docusaurus/plugin-content-docs',
  //   {
  //     id: 'api',
  //     path: 'api',
  //     routeBasePath: 'api',
  //     sidebarPath: require.resolve('./sidebars.js'),
  //     lastVersion:"2.0.0",
  //     includeCurrentVersion:false,
  //     versions:{
  //       '1.0.3':{
  //         banner:"unmaintained",
  //         badge:true,
  //         label:'V1-Annotations'
  //       },
  //       '2.0.0':{
  //         banner:"unreleased",
  //         badge:true,

  //       }
  //     }
  //     // ... other options
  //   },
  // ],
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
            type: 'docsVersionDropdown',
            position: 'left',
            label: 'Docs',
          },
          {
            type: "docsVersion", label: 'Docs', position: 'left',path:'guides/installation'
          },
          {
            type: "custom-api-navbar-item", label: 'API', position: 'left'
          },
          {
            type: "custom-example-navbar-item", label: 'Example', position: 'left'
          },
          {
            type: "custom-fsl-navbar-item", label: 'Frost Schema Language', position: 'right'
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   label: 'API',
          //   docsPluginId: 'api',

          // },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs'
          // },
          // {
          //   to: '/api/modules', label: 'API', position: 'left'
          // },


          // {
          //   label: 'API',
          //   position: 'left',
          //   items:[
          //     {label:'V1 (Annotations)',to:'/api/1.0.3/modules'},
          //     {label:'V2',to:'/api/modules'}
          //   ]
          // },
          // {

          //   label: 'Example',
          //   position: 'left',
          //   items:[
          //     {label:'V1 (Annotations)',to:'/v1-example'},
          //     {label:'V2',to:'/v2-example'}
          //   ]
          // },
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
                href: 'https://www.npmjs.com/org/frost-orm',
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
      tableOfContents: {
        
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

module.exports = config;
