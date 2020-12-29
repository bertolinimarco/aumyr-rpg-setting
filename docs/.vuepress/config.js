// Autometa Init
const autometa_options = {
  site: {
    name: "Aumyr",
    twitter: "",
  },
  canonical_base: "https://www.aumyr.world",
};
// RSS Init
const feed_options = {
  canonical_base: "https://www.aumyr.world",
};

module.exports = {
  cache: false,
  markdown: {
    extractHeaders: ["h2", "h3", "h4"],
  },
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      { rel: "apple-touch-icon", href: "/assets/favicon/icon-180x180.png" },
    ],
    ["link", { rel: "icon", href: "/assets/favicon/icon-512x512.png" }],
    ["meta", { name: "theme-color", content: "#2196f3" }],
  ],
  locales: {
    "/": {
      lang: "it-IT",
      title: "Aumyr",
      description: "Ambientazione Fantasy per Giochi di Ruolo",
    },
    "/en/": {
      lang: "en-US",
      title: "Aumyr",
      description: "Fantasy Setting for Roleplaying Games",
    },
  },

  // Theme Config
  themeConfig: {
    logo: "/assets/img/logo-aumyr-world.svg",
    editLinks: true,
    repo: "bertolinimarco/aumyr-rpg-setting",
    docsDir: "docs",
    sidebar: "auto",
    locales: {
      "/": {
        repoLabel: "Contribuisci",
        selectText: "🇮🇹",
        label: "🇮🇹 (Italiano)",
        lastUpdated: "Ultimo aggiornamento",
        editLinkText: "Modifica pagina su GitHub",
        nav: [
          { text: "Home", link: "/" },
          { text: "Geografia", link: "/geography/" },
          { text: "Società", link: "/society/" },
          { text: "Cronologia", link: "/chronology/" },
          { text: "Multiverso", link: "/multiverse/" },
          { text: "Divinità", link: "/dieties/" },
          {
            text: "Almanacco",
            items: [
              { text: "Idee e Trame", link: "/almanac/adventures/" },
              { text: "Creature", link: "/almanac/creatures/" },
              { text: "Oggetti", link: "/almanac/items/" },
              { text: "Personaggi", link: "/almanac/characters/" },
            ],
          },
        ],
      },
      "/en/": {
        repoLabel: "Contribute",
        selectText: "🇬🇧",
        label: "🇬🇧 (English)",
        lastUpdated: "Last Updated",
        editLinkText: "Edit this page on GitHub",
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Geography", link: "/en/geography/" },
          { text: "Society", link: "/en/society/" },
          { text: "Chronology", link: "/en/chronology/" },
          { text: "Multiverse", link: "/en/multiverse/" },
          { text: "Dieties", link: "/en/dieties/" },
          {
            text: "Almanac",
            items: [
              { text: "Ideas and Plots", link: "/en/almanac/adventures/" },
              { text: "Creatures", link: "/en/almanac/creatures/" },
              { text: "Items", link: "/en/almanac/items/" },
              { text: "NPCs", link: "/en/almanac/characters/" },
            ],
          },
        ],
      },
    },
  },

  // Plugins
  plugins: [
    ["autometa", autometa_options],
    ["feed", feed_options],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "Nuovi contenuti disponibili",
            buttonText: "Aggiorna",
          },
          "/en/": {
            message: "New content is available",
            buttonText: "Refresh",
          },
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "Nuovi contenuti disponibili",
            buttonText: "Aggiorna",
          },
          "/en/": {
            message: "New content is available",
            buttonText: "Refresh",
          },
        },
      },
    ]["@vuepress/medium-zoom"],
    ["@vuepress/back-to-top"],
    [
      ("container",
      {
        type: "image",
        before: (info) => `<div class="image"><p class="title">${info}</p>`,
        after: "</div>",
      }),
    ],
  ],
};
