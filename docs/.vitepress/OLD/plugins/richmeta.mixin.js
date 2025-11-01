
export default {
  created () {
    if (this.$ssrContext) {
      const scriptTypes = this.getScriptTypes()
      this.$ssrContext.pageMeta = renderScriptTypes(scriptTypes)
    }
  },

  mounted () {
    this.currentScriptTypes = {}
    this.updateScriptTypes()
  },

  methods: {
    updateScriptTypes (scriptTypes) {
      if (!scriptTypes) scriptTypes = this.getScriptTypes();

      Object.keys(scriptTypes).forEach(t => {
        if (!hasScriptType(t)) addScriptType(t, ...scriptTypes[t]);
        else setScriptType(t, scriptTypes[t]);
      });

      if (this.currentScriptTypes)
        Object.keys(this.currentScriptTypes).forEach(t => {
          if (hasScriptType(t) && !scriptTypes[t]) removeScriptType(t);
        });

      this.currentScriptTypes = scriptTypes;
    },

    getScriptTypes () {
      const scriptTypes = this.$page.frontmatter.scriptTypes || {};
      if (scriptTypes.faq) {
        scriptTypes.faq[1] = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: scriptTypes.faq[1].map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: a
            }
          }))
        }
      }
      if (scriptTypes.org) {
        scriptTypes.org[1] = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: scriptTypes.org[1][0],
          logo: scriptTypes.org[1][1],
          name: scriptTypes.org[1][2]
        }
      }
      return scriptTypes;
    }
  },

  watch: {
    $page () {
      this.updateScriptTypes()
    }
  },

  beforeDestroy () {
    updateScriptTypes({})
  }
}

function hasScriptType (type) {
  return !!document.querySelector(`script[data-id='${type}']`);
}

function removeScriptType (type) {
  document.head.removeChild(document.querySelector(`script[data-id='${type}']`))
}

function addScriptType (type, props = {}, content = '') {
  const script = document.createElement('script');
  script.setAttribute('data-id', type);
  Object.keys(props).forEach(p => script.setAttribute(p, props[p]));
  script.innerHTML = typeof content === 'object' ? JSON.stringify(content) : content;
  document.head.appendChild(script);
}

function setScriptType (type, content) {
  document.querySelector(`script[type='${type}']`).innerHTML = content;
}

function renderScriptTypes (scriptTypes) {
  if (!scriptTypes || !Object.keys(scriptTypes).length) return '';
  return Object.keys(scriptTypes).map(t => {
    const props = scriptTypes[t][0] || {}
    let content = ''
    if (typeof scriptTypes[t][1] === 'string') content = scriptTypes[t][1];
    if (typeof scriptTypes[t][1] === 'object') content = JSON.stringify(scriptTypes[t][1]);

    let res = `<script data-id="${t}"`
    Object.keys(props).forEach(key => {
      res += ` ${key}="${props[key]}"`
    })
    return `${res}>${content}</script>`
  }).join('\n    ')
}
