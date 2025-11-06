import {defineConfig, TransformContext} from 'vitepress';

const metaColor = '#27E4EB';
const metaLogo = '/logo.png';

/** @type {import('vitepress').DefaultTheme.Config} */
export default defineConfig({
  appearance: 'force-dark',
  lang: 'en-US',
  title: 'The LBRY Foundation',
  lastUpdated: true,
  description: 'The LBRY community invites everyone to join us in building a more free and open way to share content and information online.',
  transformHtml: (code: string): string => {
    return code.replace( /<head>/,`<head prefix="og: https://ogp.me/ns#">`);
  },
  head: [
    // Manifest
    ['link', { rel: 'icon', href: metaLogo }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'viewport', content: 'initial-scale=1,width=device-width' }],

    // Icons
    ['link', { rel: 'mask-icon', href: '/logo/safari-pinned-tab.svg', color: metaColor }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/logo/favicon-16x16.png' }],
    ['link', { rel: 'icon', sizes: '32x32', href: '/logo/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '192x192', href: '/logo/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', sizes: '512x512', href: '/logo/android-chrome-512x512.png' }],

    // Theme Color
    ['meta', { name: 'theme-color', content: metaColor }],
    ['meta', { name: 'msapplication-TileColor', content: metaColor }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:image', content: metaLogo }],

    // OpenGraph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: metaLogo }],
  ],
  transformHead: (context: TransformContext): void => {
    let path = '/'+context.pageData.relativePath
      .replace(/index\.md$/,'')
      .replace(/\.md$/,'.html');

    // OpenGraph
    context.head.push([
      'meta',
      {
        content: context.description,
        property: 'og:description',
      },
    ]);
    context.head.push([
      'meta',
      {
        content: context.title,
        property: 'og:title',
      },
    ]);
    if(!context.pageData.isNotFound){
      context.head.push([
        'meta',
        {
          content: path,
          property: 'og:url',
        },
      ]);
    }

    // Twitter Card
    context.head.push([
      'meta',
      {
        content: context.description,
        name: 'twitter:description',
      },
    ]);
    context.head.push([
      'meta',
      {
        content: context.title,
        name: 'twitter:title',
      },
    ]);
    if(!context.pageData.isNotFound){
      context.head.push([
        'meta',
        {
          content: path,
          name: 'twitter:url',
        },
      ]);
    }
  },
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
    siteTitle: false,
    socialLinks: [
      {
        icon: 'discord',
        link: 'https://chat.lbry.org',
      },
      {
        icon: 'github',
        link: 'https://github.com/LBRYFoundation',
      },
      {
        icon: 'reddit',
        link: 'https://reddit.com/r/lbry',
      },
      {
        icon: 'x', // or "twitter"
        link: 'https://x.com/LBRYFoundation',
      },
    ],
  },
  cleanUrls: true,
  rewrites(id: string): string {
    if(id.startsWith('news/')){
      return id.replace(/news\/\d+-/,'news/');
    }
    return id;
  },
  ignoreDeadLinks: true, //TODO temporary
});
