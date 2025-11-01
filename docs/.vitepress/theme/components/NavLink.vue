<script setup>
const props = defineProps({
  item: {
    required: true,
  },
});

function absLink () {
  const alias = this.$page.frontmatter._aliases ? this.$page.frontmatter._aliases.find(link => link.aliases.includes(this.item.link)) : null;
  return alias ? alias.url : this.item.link;
}
function link () {
  return ensureExt(this.absLink)
}
function exact () {
  if (this.$site.locales) {
    return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
  }
  return this.link === '/'
}
function isNonHttpURI () {
  return isMailto(this.link) || isTel(this.link)
}
function isBlankTarget () {
  return this.target === '_blank'
}
function isInternal () {
  return !isExternal(this.link) && !this.isBlankTarget
}
function target () {
  if (this.isNonHttpURI) {
    return null
  }
  if (this.item.target) {
    return this.item.target
  }
  return isExternal(this.link) ? '_blank' : ''
}
function rel () {
  if (this.isNonHttpURI) {
    return null
  }
  if (this.item.rel) {
    return this.item.rel
  }
  return this.isBlankTarget ? 'noopener noreferrer' : ''
}

function focusoutAction () {
    this.$emit('focusout')
  }
</script>

<template>
  <a
    v-if="isInternal"
    class="nav-link"
    role="button"
    :class="item.class || ''"
    :href="link"
    @focusout="focusoutAction">
    {{ item.text }}
  </a>
  <a
    v-else
    :href="link"
    class="nav-link external"
    role="button"
    :class="item.class || ''"
    :target="target"
    :rel="rel"
    @focusout="focusoutAction">
    {{ item.text }}
    <span v-if="isBlankTarget">
      <svg
        class="icon outbound"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        width="15"
        height="15">
        <path
          fill="currentColor"
          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
        />
        <polygon
          fill="currentColor"
          points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
        />
      </svg>
      <span class="sr-only">{{ '(opens new window)' }}</span>
    </span>
  </a>
</template>
