import { defineConfig } from 'vitepress';

export default defineConfig({
  appearance: 'force-dark',
  lang: 'en-US',
  title: 'The LBRY Foundation',
  description: 'The LBRY community invites everyone to join us in building a more free and open way to share content and information online.',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/LBRYFoundation/lbry.org/edit/master/docs/:path',
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
        link: '/downloads'
      },
      {
        text: 'Projects',
        link: '/projects'
      },
      // {
      //   text: 'Verified',
      //   link: '/verified'
      // },
      {
        text: 'Governance',
        link: '/governance'
      },
      {
        text: 'LBRY Communities',
        link: '/hives'
      }
    ],
    search: {
      provider: 'local',
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
