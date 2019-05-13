// Autometa Init
const autometa_options = {
  site: {
    name: "Aumyr",
    twitter: "aumyrworld"
  },
  canonical_base: "https://aumyr-rpg-setting.netlify.com"
};
// RSS Init
const feed_options = {
  canonical_base: "https://aumyr-rpg-setting.netlify.com"
};

module.exports = {
  cache: false,
  head: [
    ["link", {rel: "icon", type: "image-png", sizes: "72x72", href: "/favicon/icon-72x72.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "96x96", href: "/favicon/icon-96x96.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "128x128", href: "/favicon/icon-128x128.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "144x144", href: "/favicon/icon-144x144.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "152x152", href: "/favicon/icon-152x152.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "192x192", href: "/favicon/icon-192x192.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "384x384", href: "/favicon/icon-384x384.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "512x512", href: "/favicon/icon-512x512.png"}],
    ["meta", {name: "msapplication-TileColor", content: "#ffffff"}],
    ["meta", {name: "msapplication-TileImage", content: "/favicon/ms-icon-144x144.png"}],
    ["meta", {name: "theme-color", content: "#ffffff"}],
    ["link", {rel: "manifest", href: "/manifest.json"}]
  ],
  locales: {
    "/": {
      lang: "it-IT",
      title: "Aumyr",
      description: "Ambientazione Fantasy per Giochi di Ruolo"
    },
    "/en/": {
      lang: "en-US",
      title: "Aumyr",
      description: "Fantasy Setting for Roleplaying Games"
    }
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
        selectText: "Lingua",
        label: "Italiano",
        lastUpdated: "Ultimo aggiornamento",
        editLinkText: "Modifica pagina su GitHub",
        nav: [
          {text: "Home", link: "/"},
          {text: "Geografia", link: "/geography/"},
          {text: "Società", link: "/society/"},
          {text: "Cronologia", link: "/chronology/"},
          {text: "Multiverso", link: "/multiverse/"},
          {text: "Divinità", link: "/dieties/"},
          {
            text: "Almanacco",
            items: [
              {text: "Idee e Trame", link: "/almanac/adventures/"},
              {text: "Creature", link: "/almanac/creatures/"},
              {text: "Oggetti", link: "/almanac/items/"},
              {text: "Personaggi", link: "/almanac/characters/"},
              {text: "Mappe", link: "/almanac/maps/"}
            ]
          }
        ]
      },
      "/en/": {
        repoLabel: "Contribute",
        selectText: "Language",
        label: "English",
        lastUpdated: "Last Updated",
        editLinkText: "Edit this page on GitHub",
        nav: [
          {text: "Home", link: "/en/"},
          {text: "Geography", link: "/en/geography/"},
          {text: "Society", link: "/en/society/"},
          {text: "Chronology", link: "/en/chronology/"},
          {text: "Multiverse", link: "/en/multiverse/"},
          {text: "Dieties", link: "/en/dieties/"},
          {
            text: "Almanac",
            items: [
              {text: "Ideas and Plots", link: "/almanac/adventures/"},
              {text: "Creatures", link: "/almanac/creatures/"},
              {text: "Items", link: "/almanac/items/"},
              {text: "NPCs", link: "/almanac/npcs/"},
              {text: "Maps", link: "/almanac/maps/"}
            ]
          }
        ]
      }
    }
  },

  // Plugins
  plugins: [
    ["autometa", autometa_options],
    ["feed", feed_options],
    ["@vuepress/medium-zoom"],
    ["@vuepress/back-to-top"],
    [
      ("container",
      {
        type: "image",
        before: info => `<div class="image"><p class="title">${info}</p>`,
        after: "</div>"
      })
    ]
  ]
};
