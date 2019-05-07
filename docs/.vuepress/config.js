module.exports = {
  cache: false,
  head: [["link", {rel: "icon", href: "./assets/favicon.svg"}]],
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
          {text: "Benvenuti", link: "/welcome/"},
          {text: "Geografia", link: "/geography/"},
          {text: "Cronologia", link: "/chronology/"},
          {text: "Multiverso", link: "/multiverse/"},
          {text: "Divinità", link: "/dieties/"},
          {text: "Società", link: "/society/"},
          {
            text: "Almanacco",
            items: [
              {text: "Avventure", link: "/almanac/adventures/"},
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
          {text: "Welcome", link: "/en/welcome/"},
          {text: "Geography", link: "/en/geography/"},
          {text: "Chronology", link: "/en/chronology/"},
          {text: "Multiverse", link: "/en/multiverse/"},
          {text: "Dieties", link: "/en/dieties/"},
          {text: "Society", link: "/en/society/"},
          {
            text: "Almanac",
            items: [
              {text: "Adventures", link: "/almanac/adventures/"},
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
      "container",
      {
        type: "image",
        before: info => `<div class="image"><p class="title">${info}</p>`,
        after: "</div>"
      }
    ]
  ]
};
