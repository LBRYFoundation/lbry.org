<template>
  <div class="person">
    <img
      v-if="!!avatar" no-zoom
      draggable="false"
      :alt="`${name}'s Avatar`"
      :src="avatar"
      :class="imageClass ? `image-title ${imageClass}` : 'image-title'">
    <div class="person-content">
      <h4 :class="avatar || subtitle ? 'title' : 'title minimal'">{{ name }}</h4>
      <p v-if="!!subtitle" class="subtitle">{{ subtitle }}</p>
      <div class="buttons"><slot/></div>
    </div>
  </div>
</template>

<style lang="stylus">
.person
  border-radius .5em
  background-color var(--secondaryBG)
  padding .5em 1em
  margin .5em
  display flex
  .title
    font-size 24px
    &.minimal
      font-size 16px
      font-weight normal
  .title, .subtitle
    margin 0
  img
    height 5em
    & + .person-content
      margin-left 1em
    &.large
      height 10em
    &.rounded
      border-radius 50%
  .person-content
    display flex
    flex-direction column
    flex auto
    justify-content center
    .subtitle
      color var(--tertiaryText)
    .buttons a
      line-height 2
</style>

<script>
export default {
  name: 'person',
  props: ['avatar', 'name', 'subtitle', 'imageClass'],
};
</script>