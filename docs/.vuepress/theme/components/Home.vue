<template>
  <main class="home" role="main">
    <header class="landing">
      <div class="hero">
        <img :src="data.heroImage" draggable="false" />
        <div class="hero-text">
          <h1>{{ data.heroText || $title || 'Hello' }}</h1>
          <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
        </div>
      </div>
      <p class="action-buttons" v-if="data.actionButtons && data.actionButtons.length">
        <a
          class="action-button"
          v-for="abtn in data.actionButtons"
          target="_blank"
          rel="noopener"
          :key="abtn.text"
          :href="abtn.link"
        >
          <IconifyIcon v-if="abtn.icon" :icon="abtn.icon" />
          <span>{{ abtn.text }}</span>
        </a>
      </p>
    </header>

    <Content class="content" />
  </main>
</template>

<script>
import { Icon, addCollection } from '@iconify/vue2'

import faSolidIcons from '@iconify/json/json/fa-solid.json';
addCollection(faSolidIcons);

import faBrandsIcons from '@iconify/json/json/fa-brands.json';
addCollection(faBrandsIcons);

export default {
  name: 'Home',
  components: { IconifyIcon: Icon },
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus">

.home
  padding $navbarHeight 0
  margin 0 auto
  display flex
  flex-direction column
  position relative
  .landing
    display flex
    flex-direction column
    justify-content space-between
    margin 2.5rem 0
    .hero
      display flex
      flex-direction column
      text-align center
      align-self center
      justify-content center
      align-items center
      gap 20px
      max-width $contentWidth - 100px
      width calc(100% - 40px)
      img
        width 200px
        flex none
      .hero-text
        display flex
        flex-direction column
        text-align center
        align-self center
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
  .content
    background-color var(--secondaryBG)
    border-radius 15px
    box-shadow 0px 0px 4px rgba(0, 0, 0, 0.25)
    padding 20px
    margin 0 auto
    max-width $contentWidth
    width calc(100% - 80px)
    & > :first-child
      margin-top 0
    & > :last-child
      margin-bottom 0
    hr
      margin 0
// @media (max-width: $MQNarrow)
@media (max-width: $MQMobile)
  .home
    padding-bottom 0
    .landing
      .hero
        img
          width 150px
        .hero-text
          h1
            font-size 24px
          .description
            font-size 20px
      .action-buttons
        gap 10px
        .action-button
          gap 10px
          padding 10px 15px
          font-size 18px
    .content
      border-radius 0
      box-shadow none
      width calc(100% - 40px)
    & + .footer
      margin-top 0
</style>
