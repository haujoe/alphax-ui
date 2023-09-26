import { defineConfig } from "vitepress";
import { components, guides, navComponents } from "./items.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AlphaX UI",
  description: "轻量级、漂亮、快速的移动端组件库",
  lastUpdated: true,
  head: [
    ["meta", { property: "og:title", content: "AlphaX UI" }],
    [
      "meta",
      {
        property: "og:description",
        content: "轻量级、漂亮、快速的移动端组件库",
      },
    ],
    [
      "meta",
      { property: "og:url", content: "https://github.com/charnod/alphax-ui" },
    ],
    ["meta", { name: "referrer", content: "no-referrer" }],
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
  ],
  themeConfig: {
    logo: "/logo.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", items: guides },
      { text: "组件", items: components },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: guides,
        },
      ],
      "/components/": [
        {
          text: "组件",
          items: components,
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/charnod/alphax-ui" },
    ],

    editLink: {
      pattern: "https://github.com/charnod/alphax-ui/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    footer: {
      message: "MIT Licensed",
      copyright: "版权所有 © 2023 年-至今 Charnod & AlphaX UI 贡献者",
    },
  },

  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
});
