import {Icon} from "@iconify/vue";
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import Color from './components/Color.vue';
import Person from './components/Person.vue';
import './custom.css';

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app }) {
    app.component('Color',Color)
    app.component('IconifyIcon',Icon)
    app.component('Person',Person)
  },
  extends: DefaultTheme,
};
