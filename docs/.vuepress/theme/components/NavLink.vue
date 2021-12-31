<template>
  <RouterLink
    v-if="isInternal"
    class="nav-link"
    role="button"
    :class="item.class || ''"
    :to="link"
    :exact="exact"
    @focusout.native="focusoutAction"
  >
    {{ item.text }}
  </RouterLink>
  <a
    v-else
    :href="link"
    class="nav-link external"
    role="button"
    :class="item.class || ''"
    :target="target"
    :rel="rel"
    @focusout="focusoutAction"
  >
    {{ item.text }}
    <OutboundLink v-if="isBlankTarget" />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '@parent-theme/util'
export default {
  name: 'NavLink',
  props: {
    item: {
      required: true
    }
  },
  computed: {
    absLink () {
      const alias = this.$page.frontmatter._aliases ? this.$page.frontmatter._aliases.find(link => link.aliases.includes(this.item.link)) : null;
      return alias ? alias.url : this.item.link;
    },
    link () {
      return ensureExt(this.absLink)
    },
    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    },
    isNonHttpURI () {
      return isMailto(this.link) || isTel(this.link)
    },
    isBlankTarget () {
      return this.target === '_blank'
    },
    isInternal () {
      return !isExternal(this.link) && !this.isBlankTarget
    },
    target () {
      if (this.isNonHttpURI) {
        return null
      }
      if (this.item.target) {
        return this.item.target
      }
      return isExternal(this.link) ? '_blank' : ''
    },
    rel () {
      if (this.isNonHttpURI) {
        return null
      }
      if (this.item.rel) {
        return this.item.rel
      }
      return this.isBlankTarget ? 'noopener noreferrer' : ''
    }
  },
  methods: {
    focusoutAction () {
      this.$emit('focusout')
    }
  }
}
</script>