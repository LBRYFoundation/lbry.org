<template>
  <img :src="src" :data-original="original" class="md-img" />
</template>

<style lang="stylus">
.md-img
  margin .5em 10%
  width 80%
  border-radius 10px
  filter drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
  transition border-radius .2s ease, filter .2s ease
  // Zoomed in
  &[style*="z-index"]
    filter drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25))
    border-radius 5px
@media (max-width: $MQMobile)
  .md-img
    width 100%
    margin .5em 0
</style>

<script>
export default {
  name: 'markdownimage',
  props: ['src', 'original'],
};
</script>