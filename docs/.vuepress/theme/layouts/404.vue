<template>
  <div class="error-page">
    <img src="/logo-fit.svg">
    <div class="content">
      <h1>Oh no!</h1>
      <p class="description">The page you have requested could not be found.</p>
      <div class="action-buttons">
        <RouterLink
          class="action-button"
          target="_blank"
          rel="noopener"
          :to="'/'"
        >
          <IconifyIcon icon="fa-solid:arrow-circle-left" />
          <span>Go Back Home</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.error-page
  padding 2rem 2.5rem
  display flex
  flex-direction column
  justify-content center
  align-items center
  text-align center
  gap 40px
  width auto
  height calc(100vh - 4rem)
  & > img
    filter grayscale()
    width 200px
    flex none
  .content
    display flex
    flex-direction column
    justify-content center
    align-items center
    gap 10px
  h1
    font-size 48px
    margin 0
  .description
    width 100%
    font-size 26px
    line-height 1.3
    color var(--text)
    margin 0
  .action-buttons
    display flex
    justify-content space-evenly
    align-self center
    flex-wrap wrap
    gap 20px
    .action-button
      display inline-flex
      align-items center
      gap 10px
      padding 15px 20px
      font-size 20px
      font-weight 500
      flex-direction row
      color var(--counterAccent)
      background-color var(--tertiaryBG)
      border-radius 8px
      line-height 1
      &:hover
        background-color var(--secondaryBG)
        text-decoration none

@media (max-width: $MQNarrow)
  .error-page
    padding 2rem

@media (max-width: $MQMobile)
  .error-page
    gap 20px
    & > img
      width 150px
    h1
      font-size 24px
    .description
      font-size 20px
    .action-buttons .action-button
      gap 10px
      padding 10px 15px
      font-size 18px
</style>

<script>
import { Icon, addCollection } from '@iconify/vue2'
import faSolidIcons from '@iconify/json/json/fa-solid.json';
addCollection(faSolidIcons);

export default {
  components: { IconifyIcon: Icon }
}
</script>