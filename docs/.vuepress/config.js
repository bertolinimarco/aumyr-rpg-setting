module.exports = {
  head: [["link", {rel: "icon", href: "/favicon.svg"}]],
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
    sidebar: "auto",
    locales: {
      "/": {
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
          {text: "Benvenuti", link: "/benvenuti/"},
          {text: "Geografia", link: "/geografia/"},
          {text: "Cronologia", link: "/cronologia/"},
          {text: "Multiverso", link: "/multiverso/"},
          {text: "Divinità", link: "/divinita/"},
          {text: "Società", link: "/societa/"},
          {
            text: "Almanacco",
            items: [
              {text: "Avventure", link: "/almanacco/avventure/"},
              {text: "Creature", link: "/almanacco/creature/"},
              {text: "Oggetti", link: "/almanacco/oggetti/"},
              {text: "Personaggi", link: "/almanacco/personaggi/"},
              {text: "Mappe", link: "/almanacco/mappe/"}
            ]
          }
        ]
      },
      "/en/": {
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
  }
};
