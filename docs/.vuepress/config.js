const sidebar = require('./sidebar.js');
const additionalPages = require('./additionalPages.js').additionalPages;

const metaTitle = 'The LBRY Foundation',
  metaDesc = 'The LBRY community invites everyone to join us in building a more free and open way to share content and information online.',
  metaURL = 'https://lbry.org',
  metaLogo = '/logo.png',
  metaColor = '#27E4EB';

const config = {
  title: metaTitle,
  description: metaDesc,
  main: 'layouts/Layout.vue',
  additionalPages,
  head: [
    // Manifest
    ['link', { rel: 'icon', href: metaLogo }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],

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

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:url', content: metaURL }],
    ['meta', { name: 'twitter:title', content: metaTitle }],
    ['meta', { name: 'twitter:description', content: metaDesc }],
    ['meta', { name: 'twitter:image', content: metaLogo }],

    // OpenGraph
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:url', content: metaURL }],
    ['meta', { name: 'og:title', content: metaTitle }],
    ['meta', { name: 'og:description', content: metaDesc }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:image', content: metaLogo }],
    ['meta', {
      name: 'og:keywords',
      content: [
        'lbry'
      ].join(',')
    }]
  ],
  plugins: [
    [
      'zooming',
      {
        selector: '.md-img,img[zoomable]',
        options: {
          bgColor: 'black',
          bgOpacity: 0.5,
          scaleBase: 0.8
        }
      }
    ],
    '@vuepress/pwa',
    '@vuepress/last-updated',
    [
      'sitemap',
      {
        hostname: 'https://lbry.org'
      }
    ],
    [
      require('./plugins/redirect.js'),
      [
        // TODO update redirects
        { url: 'https://github.com/LBRYFoundation',
          aliases: ['/github/'] },
        { url: 'https://chat.lbry.org',
          aliases: ['/chat/'] }
      ]
    ],
    require('./plugins/richmeta.js')
  ],
  themeConfig: {
    search: false,
    nav: [
      // TODO update?
      { text: 'Projects', link: '/projects/' },
//      { text: 'Verified', link: '/verified/' },
      { text: 'Governance', link: '/governance/' },
      { text: 'LBRY Communities', link: '/hives/' }
    ],
    sidebar,
    nextLinks: true,
    prevlinks: true,
    docsRepo: 'LBRYFoundation/lbry.org',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page on GitHub!',
    logo: '/logo-horizontal.svg',
    smoothScroll: true,
    footer: {
      logo: '/logo-vertical.svg',
      columns: [
        {
          title: 'More',
          rows: [{
            text: 'Privacy Policy',
            link: '/privacy/'
          },
          {
            text: 'Branding',
            link: '/branding/'
          },
//        {
//         text: 'Ko-fi Donations',
//         link: 'https://ko-fi.com/lbryfoundation'
//        },
          {
            text: 'GitHub Repo',
            link: 'https://github.com/LBRYFoundation/lbry.org'
          }]
        },
        {
          title: 'Other Sites',
          rows: [{
            text: 'LBRY.tech',
            link: 'https://lbry.tech/'
          }
        ]
        }
      ],
      finePrints: [
        '© {year} The LBRY Foundation',
        'With love for community'
      ]
    }
  }
}

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}
module.exports = config;
