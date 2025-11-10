<script setup>
import {data} from './index.data';
</script>

# The Front Desk

News and musings from the LBRY team

::: warning
For more regular updates, see <a href="https://open.lbry.com/@lbry">the official @lbry channel</a> on LBRY itself.
:::

![Bangalore](/img/bangalore.jpg)

<template v-for="article in data.reverse()">
  <a :href="article.url">{{ article.frontmatter.title }}</a><br>
  <sub>{{ article.frontmatter.date }} &middot; {{ article.frontmatter.author }}</sub><br>
  <br>
</template>
