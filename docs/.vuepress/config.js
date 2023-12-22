// Autometa Init
// const autometa_options = {
//   site: {
//     name: "Aumyr",
//     twitter: "",
//   },
//   canonical_base: "https://www.aumyr.world",
// };
// // RSS Init
// const feed_options = {
//   canonical_base: "https://www.aumyr.world",
// };

// Theme
import { defaultTheme } from "vuepress";

// Plugins
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { gitPlugin } from "@vuepress/plugin-git";
import { searchPlugin } from "@vuepress/plugin-search";
import { pwaPlugin } from "@vuepress/plugin-pwa";

export default {
  locales: {
    "/": {
      lang: "it-IT",
      title: "Aumyr",
      description:
        "Ambientazione Fantasy per Giochi di Ruolo. Centinaia di idee per le tue avventure e campagne.",
    },
    "/en/": {
      lang: "en-US",
      title: "Aumyr",
      description:
        "Fantasy Setting for Roleplaying Games. Hundreds of ideas for your adventures and campaigns.",
    },
    // "/fr/": {
    //   lang: "fr-FR",
    //   title: "Aumyr",
    //   description:
    //     "Environnement de fantasy pour jeux de rôle. Des centaines d'idées pour vos aventures et campagnes.",
    // },
    // "/es/": {
    //   lang: "es-ES",
    //   title: "Aumyr",
    //   description:
    //     "Entorno de fantasía para juegos de rol. Cientos de ideas para tus aventuras y campañas.",
    // },
    // "/de/": {
    //   lang: "de-DE",
    //   title: "Aumyr",
    //   description:
    //     "Fantasy-Umgebung für Rollenspiele. Hunderte von Ideen für Ihre Abenteuer und Kampagnen.",
    // },
  },
  theme: defaultTheme({
    logo: "/assets/img/logo-aumyr-world.svg",
    sidebar: "auto",
    repo: "bertolinimarco/aumyr-rpg-setting",
    docsDir: "docs",
    cache: false,
    markdown: {
      extractHeaders: ["h2", "h3", "h4"],
    },
    head: [
      ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
      ["meta", { name: "theme-color", content: "#2196f3" }],
      [
        "link",
        { rel: "apple-touch-icon", href: "/assets/favicon/icon-180x180.png" },
      ],
      ["link", { rel: "icon", href: "/assets/favicon/icon-512x512.png" }],
    ],

    locales: {
      "/": {
        repo: "bertolinimarco/aumyr-rpg-setting",
        repoLabel: "Contribuisci",
        selectLanguageName: "🇮🇹 Italiano",
        selectLanguageText: "Lingua",
        lastUpdated: "Ultimo aggiornamento",
        editLinkText: "Modifica pagina su GitHub",
        notFound: [
          "Mmmm... non c'è nulla qui",
          "Sembra che non ci sia nulla qui",
          "Non c'è niente qui",
          "Non c'è niente da vedere qui",
        ],
        backToHome: "Torna alla Home",
        navbar: [
          // { text: "Home", link: "/" },
          {
            text: "Il Mondo",
            children: [
              { text: "Geografia", link: "/geography/" },
              { text: "Società", link: "/society/" },
              { text: "Cronologia", link: "/chronology/" },
              { text: "Multiverso", link: "/multiverse/" },
              { text: "Divinità", link: "/dieties/" },
            ],
          },
          {
            text: "Almanacco",
            children: [
              { text: "Idee e Trame", link: "/almanac/adventures/" },
              { text: "Creature", link: "/almanac/creatures/" },
              { text: "Oggetti", link: "/almanac/items/" },
              { text: "Personaggi", link: "/almanac/characters/" },
              { text: "Le Figure", link: "/almanac/figures/" },
            ],
          },
        ],
      },
      "/en/": {
        repo: "bertolinimarco/aumyr-rpg-setting",
        repoLabel: "Contribute",
        selectLanguageName: "🇬🇧 English",
        selectLanguageText: "Language",
        lastUpdated: "Last Updated",
        editLinkText: "Edit this page on GitHub",
        notFound: [
          "Mmmm... nothing here",
          "It seems there's nothing here",
          "There's nothing here",
          "There's nothing to see here",
        ],
        backToHome: "Back to Home",
        navbar: [
          {
            text: "The World",
            children: [
              { text: "Geography", link: "/en/geography/" },
              { text: "Society", link: "/en/society/" },
              { text: "Chronology", link: "/en/chronology/" },
              { text: "Multiverse", link: "/en/multiverse/" },
              { text: "Dieties", link: "/en/dieties/" },
            ],
          },
          {
            text: "Almanac",
            children: [
              { text: "Ideas and Plots", link: "/en/almanac/adventures/" },
              { text: "Creatures", link: "/en/almanac/creatures/" },
              { text: "Items", link: "/en/almanac/items/" },
              { text: "NPCs", link: "/en/almanac/characters/" },
              { text: "The Figures", link: "/en/almanac/figures/" },
            ],
          },
        ],
      },
      // "/fr/": {
      //   repoLabel: "Contribuer",
      //   selectLanguageName: "🇫🇷 Français",
      //   selectLanguageText: "Langue",
      //   lastUpdated: "Dernière mise à jour",
      //   editLinkText: "Modifier cette page sur GitHub",
      //   navbar: [
      //     { text: "Accueil", link: "/fr/" },
      //     { text: "Géographie", link: "/fr/geography/" },
      //     { text: "Société", link: "/fr/society/" },
      //     { text: "Chronologie", link: "/fr/chronology/" },
      //     { text: "Multivers", link: "/fr/multiverse/" },
      //     { text: "Divinités", link: "/fr/dieties/" },
      //     {
      //       text: "Almanach",
      //       children: [
      //         { text: "Idées et Scénarios", link: "/fr/almanac/adventures/" },
      //         { text: "Créatures", link: "/fr/almanac/creatures/" },
      //         { text: "Objets", link: "/fr/almanac/items/" },
      //         { text: "PNJs", link: "/fr/almanac/characters/" },
      //         { text: "Les Figures", link: "/fr/almanac/figures/" },
      //       ],
      //     },
      //   ],
      // },
      // "/es/": {
      //   repoLabel: "Contribuir",
      //   selectLanguageName: "🇪🇸 Español",
      //   selectLanguageText: "Idioma",
      //   lastUpdated: "Última actualización",
      //   editLinkText: "Editar esta página en GitHub",
      //   navbar: [
      //     { text: "Inicio", link: "/es/" },
      //     { text: "Geografía", link: "/es/geography/" },
      //     { text: "Sociedad", link: "/es/society/" },
      //     { text: "Cronología", link: "/es/chronology/" },
      //     { text: "Multiverso", link: "/es/multiverse/" },
      //     { text: "Dioses", link: "/es/dieties/" },
      //     {
      //       text: "Almanaque",
      //       children: [
      //         { text: "Ideas y Tramas", link: "/es/almanac/adventures/" },
      //         { text: "Criaturas", link: "/es/almanac/creatures/" },
      //         { text: "Objetos", link: "/es/almanac/items/" },
      //         { text: "PNJs", link: "/es/almanac/characters/" },
      //         { text: "Las Figuras", link: "/es/almanac/figures/" },
      //       ],
      //     },
      //   ],
      // },
      // "/de/": {
      //   repoLabel: "Beitragen",
      //   selectLanguageName: "🇩🇪 Deutsch",
      //   selectLanguageText: "Sprache",
      //   lastUpdated: "Zuletzt aktualisiert",
      //   editLinkText: "Bearbeiten Sie diese Seite auf GitHub",
      //   navbar: [
      //     { text: "Startseite", link: "/de/" },
      //     { text: "Geographie", link: "/de/geography/" },
      //     { text: "Gesellschaft", link: "/de/society/" },
      //     { text: "Chronologie", link: "/de/chronology/" },
      //     { text: "Multiversum", link: "/de/multiverse/" },
      //     { text: "Gottheiten", link: "/de/dieties/" },
      //     {
      //       text: "Almanach",
      //       children: [
      //         {
      //           text: "Ideen und Handlungsstränge",
      //           link: "/de/almanac/adventures/",
      //         },
      //         { text: "Kreaturen", link: "/de/almanac/creatures/" },
      //         { text: "Gegenstände", link: "/de/almanac/items/" },
      //         { text: "NPCs", link: "/de/almanac/characters/" },
      //         { text: "Die Figuren", link: "/de/almanac/figures/" },
      //       ],
      //     },
      //   ],
      // },
    },
  }),

  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin(),
    activeHeaderLinksPlugin(),
    gitPlugin(),
    pwaPlugin(),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Cerca",
        },
        "/en/": {
          placeholder: "Search",
        },
      },
    }),
    externalLinkIconPlugin({
      locales: {
        "/": {
          openInNewWindow: "Apri in una nuova finestra",
        },
        "/en-US/": {
          openInNewWindow: "Open in new window",
        },
      },
    }),
  ],
};
