import DefaultTheme from 'vitepress/theme';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
import NavLink from './components/NavLink.vue';
// import './Layout.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Footer',Footer);
    app.component('Home',Home);
    app.component('Navbar',Navbar);
    app.component('NavLink',NavLink);
  }
};
