<template>

</template>
<!--<template>-->
<!--  <div class="footer">-->
<!--    <div class="footer-main">-->
<!--      <img v-if="config.logo" :src="config.logo" draggable="false" />-->
<!--      <div class="columns" v-if="config.columns && config.columns.length">-->
<!--        <div class="column" :key="i" v-for="(column, i) in config.columns">-->
<!--          <span class="col-title">{{ column.title }}</span>-->
<!--          <div class="links" v-if="column.rows">-->
<!--            <NavLink :key="j" v-for="(cell, j) in column.rows" :item="cell" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="fine-print" v-if="config.finePrints">-->
<!--      <span>{{ config.finePrints[0].replace('{year}', new Date().getFullYear().toString()) }}</span> <i>{{ config.finePrints[1] }}</i>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import NavLink from '@theme/components/NavLink.vue'-->
<!--export default {-->
<!--  name: 'Footer',-->
<!--  components: { NavLink },-->
<!--  computed: {-->
<!--    data () {-->
<!--      return this.$page.frontmatter-->
<!--    },-->
<!--    config () {-->
<!--      return this.$site.themeConfig.footer || {}-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--&lt;!&ndash;<style lang="stylus">&ndash;&gt;-->
<!--&lt;!&ndash;.footer&ndash;&gt;-->
<!--&lt;!&ndash;  background-color var(&#45;&#45;tertiaryBG)&ndash;&gt;-->
<!--&lt;!&ndash;  background-repeat no-repeat&ndash;&gt;-->
<!--&lt;!&ndash;  background-size contain&ndash;&gt;-->
<!--&lt;!&ndash;  background-position right&ndash;&gt;-->
<!--&lt;!&ndash;  padding 1rem&ndash;&gt;-->
<!--&lt;!&ndash;  width calc(100% - 2rem)&ndash;&gt;-->
<!--&lt;!&ndash;  margin-top 5rem&ndash;&gt;-->
<!--&lt;!&ndash;  .footer-main&ndash;&gt;-->
<!--&lt;!&ndash;    display flex&ndash;&gt;-->
<!--&lt;!&ndash;    flex-direction row&ndash;&gt;-->
<!--&lt;!&ndash;    justify-content space-between&ndash;&gt;-->
<!--&lt;!&ndash;    max-width $contentWidth&ndash;&gt;-->
<!--&lt;!&ndash;    margin 0 auto&ndash;&gt;-->
<!--&lt;!&ndash;    img&ndash;&gt;-->
<!--&lt;!&ndash;      flex none&ndash;&gt;-->
<!--&lt;!&ndash;      height 100px&ndash;&gt;-->
<!--&lt;!&ndash;  .columns&ndash;&gt;-->
<!--&lt;!&ndash;    display flex&ndash;&gt;-->
<!--&lt;!&ndash;    gap 40px&ndash;&gt;-->
<!--&lt;!&ndash;    .column-opener&ndash;&gt;-->
<!--&lt;!&ndash;      max-width 200px&ndash;&gt;-->
<!--&lt;!&ndash;    .column&ndash;&gt;-->
<!--&lt;!&ndash;      display flex&ndash;&gt;-->
<!--&lt;!&ndash;      flex-direction column&ndash;&gt;-->
<!--&lt;!&ndash;      .col-title&ndash;&gt;-->
<!--&lt;!&ndash;        font-weight 500&ndash;&gt;-->
<!--&lt;!&ndash;        margin-bottom 5px&ndash;&gt;-->
<!--&lt;!&ndash;        color var(&#45;&#45;headerText)&ndash;&gt;-->
<!--&lt;!&ndash;      .links&ndash;&gt;-->
<!--&lt;!&ndash;        display flex&ndash;&gt;-->
<!--&lt;!&ndash;        align-self center&ndash;&gt;-->
<!--&lt;!&ndash;        flex-direction column&ndash;&gt;-->
<!--&lt;!&ndash;        align-self flex-start&ndash;&gt;-->
<!--&lt;!&ndash;        a&ndash;&gt;-->
<!--&lt;!&ndash;          font-weight 400&ndash;&gt;-->
<!--&lt;!&ndash;          color var(&#45;&#45;text)&ndash;&gt;-->
<!--&lt;!&ndash;          & svg&ndash;&gt;-->
<!--&lt;!&ndash;            display none&ndash;&gt;-->
<!--&lt;!&ndash;          &:hover&ndash;&gt;-->
<!--&lt;!&ndash;            text-decoration underline&ndash;&gt;-->
<!--&lt;!&ndash;  .fine-print&ndash;&gt;-->
<!--&lt;!&ndash;    color var(&#45;&#45;text)&ndash;&gt;-->
<!--&lt;!&ndash;    font-size 10px&ndash;&gt;-->
<!--&lt;!&ndash;    max-width $contentWidth&ndash;&gt;-->
<!--&lt;!&ndash;    margin 0 auto&ndash;&gt;-->
<!--&lt;!&ndash;    margin-top 30px&ndash;&gt;-->
<!--&lt;!&ndash;    display flex&ndash;&gt;-->
<!--&lt;!&ndash;    gap 10px&ndash;&gt;-->
<!--&lt;!&ndash;@media (max-width: $MQMobile)&ndash;&gt;-->
<!--&lt;!&ndash;  .footer&ndash;&gt;-->
<!--&lt;!&ndash;    background-image none&ndash;&gt;-->
<!--&lt;!&ndash;    .columns&ndash;&gt;-->
<!--&lt;!&ndash;      flex-wrap wrap&ndash;&gt;-->
<!--&lt;!&ndash;      gap 20px&ndash;&gt;-->
<!--&lt;!&ndash;      .column-opener&ndash;&gt;-->
<!--&lt;!&ndash;        max-width none&ndash;&gt;-->
<!--&lt;!&ndash;        margin-bottom 2rem&ndash;&gt;-->
<!--&lt;!&ndash;      .column&ndash;&gt;-->
<!--&lt;!&ndash;        align-self flex-start&ndash;&gt;-->
<!--&lt;!&ndash;        .links&ndash;&gt;-->
<!--&lt;!&ndash;          justify-content center&ndash;&gt;-->
<!--&lt;!&ndash;    .fine-print&ndash;&gt;-->
<!--&lt;!&ndash;      margin-top 2rem&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->
