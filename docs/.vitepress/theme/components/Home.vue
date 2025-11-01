<!--<template>-->
<!--  <main class="home" role="main">-->
<!--    <header class="landing">-->
<!--      <div class="hero">-->
<!--        <img :src="data.heroImage" draggable="false" />-->
<!--        <div class="hero-text">-->
<!--          <h1>{{ data.heroText || $title || 'Hello' }}</h1>-->
<!--          <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <p class="action-buttons" v-if="data.actionButtons && data.actionButtons.length">-->
<!--        <a-->
<!--          class="action-button"-->
<!--          v-for="abtn in data.actionButtons"-->
<!--          :target="abtn.target"-->
<!--          rel="noopener"-->
<!--          :key="abtn.text"-->
<!--          :href="abtn.link"-->
<!--        >-->
<!--          <IconifyIcon v-if="abtn.icon" :icon="abtn.icon" />-->
<!--          <span>{{ abtn.text }}</span>-->
<!--        </a>-->
<!--      </p>-->
<!--    </header>-->

<!--    <Content class="content" />-->
<!--  </main>-->
<!--</template>-->

<!--<script>-->
<!--import { Icon, addCollection } from '@iconify/vue'-->

<!--import faSolidIcons from '@iconify/json/json/fa-solid.json';-->
<!--addCollection(faSolidIcons);-->

<!--import faBrandsIcons from '@iconify/json/json/fa-brands.json';-->
<!--addCollection(faBrandsIcons);-->
<template>

</template>
<!--export default {-->
<!--  name: 'Home',-->
<!--  components: { IconifyIcon: Icon },-->
<!--  computed: {-->
<!--    data () {-->
<!--      return this.$page.frontmatter-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--&lt;!&ndash;<style lang="stylus">&ndash;&gt;-->

<!--&lt;!&ndash;.home&ndash;&gt;-->
<!--&lt;!&ndash;  padding $navbarHeight 0&ndash;&gt;-->
<!--&lt;!&ndash;  margin 0 auto&ndash;&gt;-->
<!--&lt;!&ndash;  display flex&ndash;&gt;-->
<!--&lt;!&ndash;  flex-direction column&ndash;&gt;-->
<!--&lt;!&ndash;  position relative&ndash;&gt;-->
<!--&lt;!&ndash;  .landing&ndash;&gt;-->
<!--&lt;!&ndash;    display flex&ndash;&gt;-->
<!--&lt;!&ndash;    flex-direction column&ndash;&gt;-->
<!--&lt;!&ndash;    justify-content space-between&ndash;&gt;-->
<!--&lt;!&ndash;    margin 2.5rem 0&ndash;&gt;-->
<!--&lt;!&ndash;    .hero&ndash;&gt;-->
<!--&lt;!&ndash;      display flex&ndash;&gt;-->
<!--&lt;!&ndash;      flex-direction column&ndash;&gt;-->
<!--&lt;!&ndash;      text-align center&ndash;&gt;-->
<!--&lt;!&ndash;      align-self center&ndash;&gt;-->
<!--&lt;!&ndash;      justify-content center&ndash;&gt;-->
<!--&lt;!&ndash;      align-items center&ndash;&gt;-->
<!--&lt;!&ndash;      gap 20px&ndash;&gt;-->
<!--&lt;!&ndash;      max-width $contentWidth - 100px&ndash;&gt;-->
<!--&lt;!&ndash;      width calc(100% - 40px)&ndash;&gt;-->
<!--&lt;!&ndash;      img&ndash;&gt;-->
<!--&lt;!&ndash;        width 200px&ndash;&gt;-->
<!--&lt;!&ndash;        flex none&ndash;&gt;-->
<!--&lt;!&ndash;      .hero-text&ndash;&gt;-->
<!--&lt;!&ndash;        display flex&ndash;&gt;-->
<!--&lt;!&ndash;        flex-direction column&ndash;&gt;-->
<!--&lt;!&ndash;        text-align center&ndash;&gt;-->
<!--&lt;!&ndash;        align-self center&ndash;&gt;-->
<!--&lt;!&ndash;        justify-content center&ndash;&gt;-->
<!--&lt;!&ndash;        align-items center&ndash;&gt;-->
<!--&lt;!&ndash;        gap 10px&ndash;&gt;-->
<!--&lt;!&ndash;        h1&ndash;&gt;-->
<!--&lt;!&ndash;          font-size 48px&ndash;&gt;-->
<!--&lt;!&ndash;          margin 0&ndash;&gt;-->
<!--&lt;!&ndash;        .description&ndash;&gt;-->
<!--&lt;!&ndash;          width 100%&ndash;&gt;-->
<!--&lt;!&ndash;          font-size 26px&ndash;&gt;-->
<!--&lt;!&ndash;          line-height 1.3&ndash;&gt;-->
<!--&lt;!&ndash;          color var(&#45;&#45;text)&ndash;&gt;-->
<!--&lt;!&ndash;          margin 0&ndash;&gt;-->
<!--&lt;!&ndash;    .action-buttons&ndash;&gt;-->
<!--&lt;!&ndash;      display flex&ndash;&gt;-->
<!--&lt;!&ndash;      justify-content space-evenly&ndash;&gt;-->
<!--&lt;!&ndash;      align-self center&ndash;&gt;-->
<!--&lt;!&ndash;      flex-wrap wrap&ndash;&gt;-->
<!--&lt;!&ndash;      gap 20px&ndash;&gt;-->
<!--&lt;!&ndash;  .action-button&ndash;&gt;-->
<!--&lt;!&ndash;    display inline-flex&ndash;&gt;-->
<!--&lt;!&ndash;    align-items center&ndash;&gt;-->
<!--&lt;!&ndash;    gap 10px&ndash;&gt;-->
<!--&lt;!&ndash;    padding 15px 20px&ndash;&gt;-->
<!--&lt;!&ndash;    font-size 20px&ndash;&gt;-->
<!--&lt;!&ndash;    font-weight 500&ndash;&gt;-->
<!--&lt;!&ndash;    flex-direction row&ndash;&gt;-->
<!--&lt;!&ndash;    color var(&#45;&#45;counterAccent)&ndash;&gt;-->
<!--&lt;!&ndash;    background-color var(&#45;&#45;tertiaryBG)&ndash;&gt;-->
<!--&lt;!&ndash;    border-radius 8px&ndash;&gt;-->
<!--&lt;!&ndash;    line-height 1&ndash;&gt;-->
<!--&lt;!&ndash;    &:hover&ndash;&gt;-->
<!--&lt;!&ndash;      background-color var(&#45;&#45;secondaryBG)&ndash;&gt;-->
<!--&lt;!&ndash;      text-decoration none&ndash;&gt;-->
<!--&lt;!&ndash;  .content&ndash;&gt;-->
<!--&lt;!&ndash;    background-color var(&#45;&#45;secondaryBG)&ndash;&gt;-->
<!--&lt;!&ndash;    border-radius 15px&ndash;&gt;-->
<!--&lt;!&ndash;    box-shadow 0px 0px 4px rgba(0, 0, 0, 0.25)&ndash;&gt;-->
<!--&lt;!&ndash;    padding 20px&ndash;&gt;-->
<!--&lt;!&ndash;    margin 0 auto&ndash;&gt;-->
<!--&lt;!&ndash;    max-width $contentWidth&ndash;&gt;-->
<!--&lt;!&ndash;    width calc(100% - 80px)&ndash;&gt;-->
<!--&lt;!&ndash;    & > :first-child&ndash;&gt;-->
<!--&lt;!&ndash;      margin-top 0&ndash;&gt;-->
<!--&lt;!&ndash;    & > :last-child&ndash;&gt;-->
<!--&lt;!&ndash;      margin-bottom 0&ndash;&gt;-->
<!--&lt;!&ndash;    hr&ndash;&gt;-->
<!--&lt;!&ndash;      margin 0&ndash;&gt;-->
<!--&lt;!&ndash;// @media (max-width: $MQNarrow)&ndash;&gt;-->
<!--&lt;!&ndash;@media (max-width: $MQMobile)&ndash;&gt;-->
<!--&lt;!&ndash;  .home&ndash;&gt;-->
<!--&lt;!&ndash;    padding-bottom 0&ndash;&gt;-->
<!--&lt;!&ndash;    .landing&ndash;&gt;-->
<!--&lt;!&ndash;      .hero&ndash;&gt;-->
<!--&lt;!&ndash;        img&ndash;&gt;-->
<!--&lt;!&ndash;          width 150px&ndash;&gt;-->
<!--&lt;!&ndash;        .hero-text&ndash;&gt;-->
<!--&lt;!&ndash;          h1&ndash;&gt;-->
<!--&lt;!&ndash;            font-size 24px&ndash;&gt;-->
<!--&lt;!&ndash;          .description&ndash;&gt;-->
<!--&lt;!&ndash;            font-size 20px&ndash;&gt;-->
<!--&lt;!&ndash;      .action-buttons&ndash;&gt;-->
<!--&lt;!&ndash;        gap 10px&ndash;&gt;-->
<!--&lt;!&ndash;        .action-button&ndash;&gt;-->
<!--&lt;!&ndash;          gap 10px&ndash;&gt;-->
<!--&lt;!&ndash;          padding 10px 15px&ndash;&gt;-->
<!--&lt;!&ndash;          font-size 18px&ndash;&gt;-->
<!--&lt;!&ndash;    .content&ndash;&gt;-->
<!--&lt;!&ndash;      border-radius 0&ndash;&gt;-->
<!--&lt;!&ndash;      box-shadow none&ndash;&gt;-->
<!--&lt;!&ndash;      width calc(100% - 40px)&ndash;&gt;-->
<!--&lt;!&ndash;    & + .footer&ndash;&gt;-->
<!--&lt;!&ndash;      margin-top 0&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->
<script setup lang="ts">
</script>
