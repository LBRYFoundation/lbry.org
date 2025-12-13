import { Icon } from "@iconify/vue";
import type { Awaitable, EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";

import Color from "./components/Color.vue";
import FundButton from "./components/FundButton.vue";
import Person from "./components/Person.vue";
import TechButton from "./components/TechButton.vue";
import Layout from "./Layout.vue";

import "./custom.css";

import _redirects from "/_redirects?url&raw";
const redirects = _redirects
  .split("\n")
  .filter(String)
  .map((item: string[]) => item.split(/\x20+/))
  .filter(
    (item: string) =>
      item[0].indexOf(":") === -1 && item[0].indexOf("*") === -1,
  );

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router }: EnhanceAppContext): void {
    app.component("Color", Color);
    app.component("FundButton", FundButton);
    app.component("IconifyIcon", Icon);
    app.component("Person", Person);
    app.component("TechButton", TechButton);

    router.onAfterRouteChange = async (to: string): Promise<void> => {
      // Static redirects
      redirects.forEach((item: string[]): void => {
        if (
          to === item[0] ||
          to.startsWith(item[0] + "?") ||
          to.startsWith(item[0] + "#")
        ) {
          router.go(item[1]);
        }
      });

      // Dynamic redirects
      if (
        to === "/faq" ||
        to.startsWith("/faq/") ||
        to.startsWith("/faq?") ||
        to.startsWith("/faq#")
      ) {
        await router.go("/archive" + to);
      }
    };
  },
  extends: DefaultTheme,
};
