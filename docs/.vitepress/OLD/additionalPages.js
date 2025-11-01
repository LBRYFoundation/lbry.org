

module.exports = {
  // Add pages from other locations
  async additionalPages () {
    const now = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

    const projects = await (await fetch('https://raw.githubusercontent.com/LBRYFoundation/Awesome-LBRY/master/README.md')).text();

    return [
        {
          title: 'Awesome LBRY Projects',
          path: '/projects/',
          footer: true,
          editLink: true,
          editLinkPattern: ':LBRYFoundation/Awesome-LBRY',
          content: projects
        }
    ]
  }
}
