import {createMarkdownRenderer} from "vitepress";

export default {
  async load() {
    const config = globalThis.VITEPRESS_CONFIG;

    const md = await createMarkdownRenderer(config.srcDir);

    const content = await (await fetch('https://raw.githubusercontent.com/LBRYFoundation/Awesome-LBRY/master/README.md')).text();

    // fetch remote data
    return md.render(content);
  }
}
