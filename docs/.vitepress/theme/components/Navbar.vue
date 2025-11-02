<style lang="stylus">
.navbar, .sidebar .nav-links
  .nav-link
    color var(--headerText)
    font-weight 300
    &.router-link-active
      font-weight 500
    & svg
      display none
    &:hover, &.router-link-active
      color var(--accent)
.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  background-color var(--tertiaryBG)
  border none
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color var(--headerText)
    position relative
    display none
  .links
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top
@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 11.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color var(--accent)
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      border none
</style>

<template>
  <header class="navbar" role="navigation">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" role="button" />

    <RouterLink
      :to="$localePath"
      class="home-link"
    >
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$site.themeConfig.logo"
        :alt="$siteTitle"
      >
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
      >{{ $siteTitle }}</span>
    </RouterLink>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        role="search"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>
