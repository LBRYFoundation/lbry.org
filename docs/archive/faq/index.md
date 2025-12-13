---
outline: deep
---

<script lang="ts" setup>
import {data} from './index.data';
</script>

# \[ARCHIVE\] Frequently Asked Questions

![FAQ](/img/og-faq.png)

## Categories

### Intro to LBRY

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='LBRY 101'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### Getting Started

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='getstarted'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### LBRY Tutorials

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='tutorial'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### Publishers and Creators

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='publisher'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### Help and Troubleshooting

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='troubleshooting'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### LBRY for Power Users

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='powerusers'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### Wallet and Transactions

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='wallet'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### LBRY Bots

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='bots'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### Mining LBC

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='mining'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### What Makes LBRY Different?

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='differences'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

### Other Questions

<ul>
<template v-for="page in data">
  <li v-if="page.frontmatter.category=='other'">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</template>
</ul>

## Ask A Question

See something not answered above? [Send us your question](mailto:board@lbry.org?subject=Question%20for%20the%20FAQ)!
