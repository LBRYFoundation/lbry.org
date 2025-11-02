import { defineConfig } from 'vitepress';

/** @type {import('vitepress').DefaultTheme.Config} */
export default defineConfig({
  appearance: 'force-dark',
  lang: 'en-US',
  title: 'The LBRY Foundation',
  description: 'The LBRY community invites everyone to join us in building a more free and open way to share content and information online.',
  sitemap: {
    hostname: 'https://lbry.org',
  },
  themeConfig: {
    editLink: {
      pattern: ({ filePath }) => {
        if(filePath==='projects/index.md'){
          return `https://github.com/LBRYFoundation/Awesome-LBRY/edit/main/README.md`;
        }
        return `https://github.com/LBRYFoundation/lbry.org/edit/master/docs/${filePath}`;
      },
      text: 'Improve this page on GitHub!',
    },
    footer: {
      message: 'With love for community',
      copyright: '© '+(new Date().getFullYear())+' The LBRY Foundation',
    },
    logo: '/logo-horizontal.svg',
    nav: [
      {
        text: 'Downloads',
        link: '/downloads/'
      },
      {
        text: 'Projects',
        link: '/projects/'
      },
      // {
      //   text: 'Verified',
      //   link: '/verified/'
      // },
      {
        text: 'Governance',
        link: '/governance/'
      },
      {
        text: 'LBRY Communities',
        link: '/hives/'
      }
    ],
    search: {
      provider: 'local',
    },
    outline: false,
    sidebar: {
      '/projects/': [
        {
          title: 'Projects',
          collapsed: false,
          items: [
            {
              text:'Projects',
              link:'/projects/',
            },
          ],
        },
      ],
      '/governance/': [
        {
          title: 'Governance',
          collapsed: false,
          items: [
            {
              text:'Governance',
              link:'/governance/',
            },
          ],
        },
      ],
    },
    siteTitle: false,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/LBRYFoundation',
      },
      {
        icon: 'x', // or "twitter"
        link: 'https://x.com/LBRYFoundation',
      },
    ],
  },
});
