<script setup>
import DefaultTheme from 'vitepress/theme';


// <!--import { useData } from 'vitepress';-->
// <!--import Footer from "./components/Footer.vue";-->
// <!--import Navbar from "./components/Navbar.vue";-->
// <!--import Home from "./components/Home.vue";-->
// <!--const { page } = useData();-->
</script>

<!--<script>-->
<!--// import Navbar from '@theme/components/Navbar.vue'-->
<!--// import Page from '@parent-theme/components/Page.vue'-->
<!--// import Sidebar from '@parent-theme/components/Sidebar.vue'-->
<!--// import Footer from '@theme/components/Footer.vue'-->
<!--// import { resolveSidebarItems } from '@parent-theme/util'-->
<!--// export default {-->
<!--//   name: 'Layout',-->
<!--//   components: {-->
<!--//     Home,-->
<!--//     Page,-->
<!--//     Sidebar,-->
<!--//     Navbar,-->
<!--//     Footer-->
<!--//   },-->
<!--//   data () {-->
<!--//     return {-->
<!--//       isSidebarOpen: false-->
<!--//     }-->
<!--//   },-->
<!--//   computed: {-->
<!--//     shouldShowNavbar () {-->
<!--//       const { themeConfig } = this.$site-->
<!--//       const { frontmatter } = this.$page-->
<!--//       if (-->
<!--//         frontmatter.navbar === false-->
<!--//         || themeConfig.navbar === false) {-->
<!--//         return false-->
<!--//       }-->
<!--//       return (-->
<!--//         this.$title-->
<!--//         || themeConfig.logo-->
<!--//         || themeConfig.repo-->
<!--//         || themeConfig.nav-->
<!--//         || this.$themeLocaleConfig.nav-->
<!--//       )-->
<!--//     },-->
<!--//     shouldShowSidebar () {-->
<!--//       const { frontmatter } = this.$page-->
<!--//       return (-->
<!--//         !frontmatter.home-->
<!--//         && frontmatter.sidebar !== false-->
<!--//         && this.sidebarItems.length-->
<!--//       )-->
<!--//     },-->
<!--//     sidebarItems () {-->
<!--//       return resolveSidebarItems(-->
<!--//         this.$page,-->
<!--//         this.$page.regularPath,-->
<!--//         this.$site,-->
<!--//         this.$localePath-->
<!--//       )-->
<!--//     },-->
<!--//     pageClasses () {-->
<!--//       const userPageClass = this.$page.frontmatter.pageClass-->
<!--//       return [-->
<!--//         {-->
<!--//           'no-navbar': !this.shouldShowNavbar,-->
<!--//           'sidebar-open': this.isSidebarOpen,-->
<!--//           'no-sidebar': !this.shouldShowSidebar-->
<!--//         },-->
<!--//         userPageClass-->
<!--//       ]-->
<!--//     }-->
<!--//   },-->
<!--//   mounted () {-->
<!--//     this.$router.afterEach(() => {-->
<!--//       this.isSidebarOpen = false-->
<!--//     })-->
<!--//   },-->
<!--//   methods: {-->
<!--//     toggleSidebar (to) {-->
<!--//       this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen-->
<!--//       this.$emit('toggle-sidebar', this.isSidebarOpen)-->
<!--//     },-->
<!--//     // side swipe-->
<!--//     onTouchStart (e) {-->
<!--//       this.touchStart = {-->
<!--//         x: e.changedTouches[0].clientX,-->
<!--//         y: e.changedTouches[0].clientY-->
<!--//       }-->
<!--//     },-->
<!--//     onTouchEnd (e) {-->
<!--//       const dx = e.changedTouches[0].clientX - this.touchStart.x-->
<!--//       const dy = e.changedTouches[0].clientY - this.touchStart.y-->
<!--//       if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {-->
<!--//         if (dx > 0 && this.touchStart.x <= 80) {-->
<!--//           this.toggleSidebar(true)-->
<!--//         } else {-->
<!--//           this.toggleSidebar(false)-->
<!--//         }-->
<!--//       }-->
<!--//     }-->
<!--//   }-->
<!--// }-->
<!--</script>-->

<!--<template>-->
<!--&lt;!&ndash;  <div&ndash;&gt;-->
<!--&lt;!&ndash;    class="theme-container"&ndash;&gt;-->
<!--&lt;!&ndash;    :class="pageClasses"&ndash;&gt;-->
<!--&lt;!&ndash;    @touchstart="onTouchStart"&ndash;&gt;-->
<!--&lt;!&ndash;    @touchend="onTouchEnd"&ndash;&gt;-->
<!--&lt;!&ndash;  >&ndash;&gt;-->
<!--&lt;!&ndash;    <Navbar&ndash;&gt;-->
<!--&lt;!&ndash;      v-if="shouldShowNavbar"&ndash;&gt;-->
<!--&lt;!&ndash;      @toggle-sidebar="toggleSidebar"&ndash;&gt;-->
<!--&lt;!&ndash;    />&ndash;&gt;-->

<!--&lt;!&ndash;    <div&ndash;&gt;-->
<!--&lt;!&ndash;      class="sidebar-mask"&ndash;&gt;-->
<!--&lt;!&ndash;      @click="toggleSidebar(false)"&ndash;&gt;-->
<!--&lt;!&ndash;    />&ndash;&gt;-->

<!--&lt;!&ndash;    <Sidebar&ndash;&gt;-->
<!--&lt;!&ndash;      :items="sidebarItems"&ndash;&gt;-->
<!--&lt;!&ndash;      @toggle-sidebar="toggleSidebar"&ndash;&gt;-->
<!--&lt;!&ndash;    >&ndash;&gt;-->
<!--&lt;!&ndash;      <template #top>&ndash;&gt;-->
<!--&lt;!&ndash;        <slot name="sidebar-top" />&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->
<!--&lt;!&ndash;      <template #bottom>&ndash;&gt;-->
<!--&lt;!&ndash;        <slot name="sidebar-bottom" />&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->
<!--&lt;!&ndash;    </Sidebar>&ndash;&gt;-->

<!--&lt;!&ndash;    <Home v-if="page.frontmatter.home" />&ndash;&gt;-->

<!--&lt;!&ndash;    <Page&ndash;&gt;-->
<!--&lt;!&ndash;      v-else&ndash;&gt;-->
<!--&lt;!&ndash;      :sidebar-items="sidebarItems"&ndash;&gt;-->
<!--&lt;!&ndash;    >&ndash;&gt;-->
<!--&lt;!&ndash;      <template #top>&ndash;&gt;-->
<!--&lt;!&ndash;        <slot name="page-top" />&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->
<!--&lt;!&ndash;      <template #bottom>&ndash;&gt;-->
<!--&lt;!&ndash;        <slot name="page-bottom" />&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->
<!--&lt;!&ndash;    </Page>&ndash;&gt;-->

<!--&lt;!&ndash;    <Footer v-if="page.frontmatter.footer" />&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;     && $site.themeConfig.footer&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;  <DefaultTheme.Layout />&ndash;&gt;-->

<!--  <Footer/>-->
<!--</template>-->

<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <DefaultTheme.Layout/>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<template>
  <DefaultTheme.Layout>
<!--    LAYOUT-->
<!--    <template #home-hero-info>-->
<!--      INSIDE TEMPLATE-->
<!--    </template>-->
  </DefaultTheme.Layout>
</template>
