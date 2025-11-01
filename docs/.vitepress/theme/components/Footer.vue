<script setup>
import NavLink from "./NavLink.vue";

const config = {
  logo: '/logo-vertical.svg',
  columns: [
    {
      title: 'More',
      rows: [{
        text: 'Privacy Policy',
        link: '/privacy/'
      },
        {
          text: 'Branding',
          link: '/branding/'
        },
//        {
//         text: 'Ko-fi Donations',
//         link: 'https://ko-fi.com/lbryfoundation'
//        },
        {
          text: 'GitHub Repo',
          link: 'https://github.com/LBRYFoundation/lbry.org'
        }]
    },
    {
      title: 'Other Sites',
      rows: [{
        text: 'LBRY.tech',
        link: 'https://lbry.tech/'
      }
      ]
    }
  ],
};
</script>

<style lang="stylus">
.footer
  background-color var(--tertiaryBG)
  background-repeat no-repeat
  background-size contain
  background-position right
  padding 1rem
  width calc(100% - 2rem)
  margin-top 5rem
  .footer-main
    display flex
    flex-direction row
    justify-content space-between
    max-width $contentWidth
    margin 0 auto
    img
      flex none
      height 100px
  .columns
    display flex
    gap 40px
    .column-opener
      max-width 200px
    .column
      display flex
      flex-direction column
      .col-title
        font-weight 500
        margin-bottom 5px
        color var(--headerText)
      .links
        display flex
        align-self center
        flex-direction column
        align-self flex-start
        a
          font-weight 400
          color var(--text)
          & svg
            display none
          &:hover
            text-decoration underline
  .fine-print
    color var(--text)
    font-size 10px
    max-width $contentWidth
    margin 0 auto
    margin-top 30px
    display flex
    gap 10px
@media (max-width: $MQMobile)
  .footer
    background-image none
    .columns
      flex-wrap wrap
      gap 20px
      .column-opener
        max-width none
        margin-bottom 2rem
      .column
        align-self flex-start
        .links
          justify-content center
    .fine-print
      margin-top 2rem
</style>

<template>
  <footer class="footer">
    <div class="footer-main">
      <img alt="Logo" v-if="config.logo" :src="config.logo" draggable="false" />
      <div class="columns" v-if="config.columns && config.columns.length">
        <div class="column" :key="i" v-for="(column, i) in config.columns">
          <span class="col-title">{{ column.title }}</span>
          <div class="links" v-if="column.rows">
            <NavLink :key="j" v-for="(cell, j) in column.rows" :item="cell" />
          </div>
        </div>
      </div>
    </div>
    <div class="fine-print" v-if="config.finePrints">
      <span>{{ config.finePrints[0].replace('{year}', new Date().getFullYear().toString()) }}</span> <i>{{ config.finePrints[1] }}</i>
    </div>
  </footer>
</template>
