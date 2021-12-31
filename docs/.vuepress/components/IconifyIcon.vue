<template>
  <Icon :icon="icon" />
</template>

<script>
import { Icon, addCollection } from '@iconify/vue2'
import faSolidIcons from '@iconify/json/json/fa-solid.json';
addCollection(faSolidIcons);
import faBrandsIcons from '@iconify/json/json/fa-brands.json';
addCollection(faBrandsIcons);
export default {
  name: 'IconifyIcon',
  props: ['icon'],
  components: { Icon }
};
</script>