<template>

</template>
<!--<template>-->
<!--  <RouterLink-->
<!--    v-if="isInternal"-->
<!--    class="nav-link"-->
<!--    role="button"-->
<!--    :class="item.class || ''"-->
<!--    :to="link"-->
<!--    :exact="exact"-->
<!--    @focusout.native="focusoutAction"-->
<!--  >-->
<!--    {{ item.text }}-->
<!--  </RouterLink>-->
<!--  <a-->
<!--    v-else-->
<!--    :href="link"-->
<!--    class="nav-link external"-->
<!--    role="button"-->
<!--    :class="item.class || ''"-->
<!--    :target="target"-->
<!--    :rel="rel"-->
<!--    @focusout="focusoutAction"-->
<!--  >-->
<!--    {{ item.text }}-->
<!--    <OutboundLink v-if="isBlankTarget" />-->
<!--  </a>-->
<!--</template>-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import { isExternal, isMailto, isTel, ensureExt } from '@parent-theme/util'&ndash;&gt;-->
<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  name: 'NavLink',&ndash;&gt;-->
<!--&lt;!&ndash;  props: {&ndash;&gt;-->
<!--&lt;!&ndash;    item: {&ndash;&gt;-->
<!--&lt;!&ndash;      required: true&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  computed: {&ndash;&gt;-->
<!--&lt;!&ndash;    absLink () {&ndash;&gt;-->
<!--&lt;!&ndash;      const alias = this.$page.frontmatter._aliases ? this.$page.frontmatter._aliases.find(link => link.aliases.includes(this.item.link)) : null;&ndash;&gt;-->
<!--&lt;!&ndash;      return alias ? alias.url : this.item.link;&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    link () {&ndash;&gt;-->
<!--&lt;!&ndash;      return ensureExt(this.absLink)&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    exact () {&ndash;&gt;-->
<!--&lt;!&ndash;      if (this.$site.locales) {&ndash;&gt;-->
<!--&lt;!&ndash;        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      return this.link === '/'&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    isNonHttpURI () {&ndash;&gt;-->
<!--&lt;!&ndash;      return isMailto(this.link) || isTel(this.link)&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    isBlankTarget () {&ndash;&gt;-->
<!--&lt;!&ndash;      return this.target === '_blank'&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    isInternal () {&ndash;&gt;-->
<!--&lt;!&ndash;      return !isExternal(this.link) && !this.isBlankTarget&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    target () {&ndash;&gt;-->
<!--&lt;!&ndash;      if (this.isNonHttpURI) {&ndash;&gt;-->
<!--&lt;!&ndash;        return null&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      if (this.item.target) {&ndash;&gt;-->
<!--&lt;!&ndash;        return this.item.target&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      return isExternal(this.link) ? '_blank' : ''&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    rel () {&ndash;&gt;-->
<!--&lt;!&ndash;      if (this.isNonHttpURI) {&ndash;&gt;-->
<!--&lt;!&ndash;        return null&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      if (this.item.rel) {&ndash;&gt;-->
<!--&lt;!&ndash;        return this.item.rel&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      return this.isBlankTarget ? 'noopener noreferrer' : ''&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  methods: {&ndash;&gt;-->
<!--&lt;!&ndash;    focusoutAction () {&ndash;&gt;-->
<!--&lt;!&ndash;      this.$emit('focusout')&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->
<script setup lang="ts">
</script>
