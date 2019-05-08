module.exports = {
  cache: false,
  head: [
    ["link", {rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-icon-57x57.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-icon-60x60.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-icon-72x72.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-icon-76x76.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-icon-114x114.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-icon-120x120.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/apple-icon-144x144.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-icon-152x152.png"}],
    ["link", {rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-icon-180x180.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "192x192", href: "/favicon/android-icon-192x192.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "32x32", href: "/favicon/android-icon-32x32.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "96x96", href: "/favicon/android-icon-96x96.png"}],
    ["link", {rel: "icon", type: "image-png", sizes: "16x16", href: "/favicon/android-icon-16x16.png"}],
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
        // serviceWorker: {
        //   updatePopup: {
        //     message: "Nuovo contenuto disponibile",
        //     buttonText: "Aggiorna"
        //   }
        // },
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
        // serviceWorker: {
        //   updatePopup: {
        //     message: "New content is available.",
        //     buttonText: "Refresh"
        //   }
        // },
        nav: [
          {text: "Home", link: "/en/"},
          {text: "Geography", link: "/en/geography/"},
          {text: "Society", link: "/society/"},
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
    ["@vuepress/medium-zoom"],
    ["@vuepress/back-to-top"],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "Nuovi contenuti disponibili",
            buttonText: "Aggiorna"
          },
          "/en/": {
            message: "New content is available",
            buttonText: "Refresh"
          }
        }
      }
    ][
      ("container",
      {
        type: "image",
        before: info => `<div class="image"><p class="title">${info}</p>`,
        after: "</div>"
      })
    ]
  ]
};
