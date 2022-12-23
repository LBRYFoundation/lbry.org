const rp = require('request-promise');

module.exports = {
  // Add pages from other locations
  async additionalPages () {
    const now = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

    const projects = await rp('https://raw.githubusercontent.com/LBRYFoundation/Awesome-LBRY/master/README.md')
    const cotw = await rp('https://lbry.pigg.es/cotw.md')
    return [
        {
            title: 'Awesome LBRY Projects',
            path: '/projects/',
            editLink: true,
            editLinkPattern: ':LBRYFoundation/Awesome-LBRY',
            content: projects
        },
        {
          title: 'Creator of the Week',
          path: '/governance/creators-council/cotw/',
          content: `# Creator Of The Week\nHere's a list of every channel that have been the creator of the week.\n\n*This page was last updated **${now}***\n\n${cotw}`
      }
    ]
  }
}
