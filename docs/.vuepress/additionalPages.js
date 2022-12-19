const rp = require('request-promise');

module.exports = {
    // Add pages from other locations
    async additionalPages () {
        const projects = await rp('https://raw.githubusercontent.com/LBRYFoundation/Awesome-LBRY/master/README.md')
        return [
            {
                title: 'Awesome LBRY Projects',
                path: '/projects/',
                editLink: true,
                editLinkPattern: ':LBRYFoundation/Awesome-LBRY',
                content: projects
            }
        ]
    }
}
