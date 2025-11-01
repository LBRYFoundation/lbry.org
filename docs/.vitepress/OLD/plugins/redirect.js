const fs = require('fs');
const path = require('path');

function getTemplate (path) {
  return '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
      '<meta charset="utf-8">' +
      '<title>Redirecting...</title>' +
      '<link rel="canonical" href="' + path + '">' +
      '<meta http-equiv="refresh" content="0; url=' + path + '">' +
    '</head>' +
    '</html>';
}

function getAliases (options, ctx) {
  let aliasArray = [];

  ctx.pages.filter(({ frontmatter }) => {
    return frontmatter.alias || frontmatter.aliases
  }).forEach(page => {
    let aliases = page.frontmatter.alias || page.frontmatter.aliases;
    if (!Array.isArray(aliases)) aliases = [aliases];
    if (!aliases.length) return;

    aliasArray.push({ url: page.path, aliases });
  });

  if (options && Array.isArray(options))
    aliasArray = aliasArray.concat(options);

  return aliasArray;
}

// function getAbsLink (options, ctx, link) {
//   const alias = getAliases(options, ctx).find(link => link.aliases.includes(link));
//   return alias ? alias.url : link;
// }

module.exports = (options, ctx) => ({
  name: 'redirect-pages',
  extendPageData($page) {
    Object.assign($page.frontmatter, { _aliases: getAliases(options, ctx) });
  },
  beforeDevServer(app) {
    getAliases(options, ctx).forEach(({ url, aliases }) =>
      aliases.forEach(alias =>
        app.get(alias, (_, res) => res.redirect(url)))
    );
  },
  generated() {
    const { outDir } = ctx;

    getAliases(options, ctx).forEach(({ url, aliases }) => {
      aliases.forEach(alias => {
        let filePaths = [alias];
        if (/^\/.+\/$/.test(alias))
          filePaths = [
            alias.slice(1).replace(/\/$/, '') + '.html',
            alias.slice(1).replace(/\/$/, '') + '/index.html'
          ];
        filePaths.forEach(async file => {
          const aliasPagePath = path.resolve(outDir, file)
          fs.writeFileSync(aliasPagePath,getTemplate(url))
        });
      });
    });
  }
})
