# Avonder (BOT)

Avonder est un bot sur [le serveur Discord d'Aumyr] (https://discord.gg/HP9bA4Z) qui peut vous aider lors de vos sessions de jeu, en vous permettant de lancer différents types de dés, de générer des aventures, des pngs et bien d'autres choses encore...

::: warning
Avonder est temporairement désactivé. [Le code source est disponible ici](https://github.com/bertolinimarco/discord-bot-avonder).
:::

## Caractéristiques

### Dés à lancer

Avonder peut lancer une variété de dés de tous types et de toutes quantités, même avec des règles spéciales pour différents systèmes de jeu.

`Avonder roll 2d20+3` Roll 2d20+3

`Avonder roll 3d6+6, 2d8` Roll 3d6+6 and then 2d8 (comma for multiple roll)

`Avonder roll 1d8-1d4` Roll 1d8 and remove 1d4 (you can use + - \* /)

`Avonder roll 2d20k` I roll 2d20, keep the higher result

`Avonder roll 2d20l` Roll 2d20, I keep the lower result

`Avonder roll 3d20k2` Roll 3d20, I hold the 2 highest results

`Avonder roll 3d20l3` Roll 3d20, I keep the 3 lowest results

`Avonder roll 3p6` Roll 3d6, I count 5 and 6 as a _success_.

`Avonder roll 5p10t8` Roll 5d10, I consider 8+ as a _success_.

`Avonder roll 2w6` Roll 2d6 and a die _Destiny_.

`Avonder roll 2w6w8` Roll 2d6 _Destiny_ and 1d8 _Destiny_.

`Avonder roll f` Standard roll _Fudge/FATE_

`Avonder roll 5f` Roll 5 dice _Fudge/FATE_

`Avonder roll 5f+3` Roll 5 dice _Fudge/FATE_ and add 3

`Avonder roll 3d6!` I roll 3d6 and roll 1d6 for each 6

`Avonder roll d6!5` I roll 3d6 and another d6 for every 5 or more

`Avonder roll 3d6!m2` _explode_ max 2 times for each d6 (max 5 times in a row, but rarely happens)

`Avonder roll 2d20!l` I roll 2d20 with _explode_ and keep only the lowest result

#### Ajouter des commentaires au rouleau

Il est souvent utile d'ajouter un commentaire au jet afin d'avoir une vue d'ensemble de la séquence d'actions.

`Avonder rolls 1d20+1#hit, 1d8#damage` Roll 1d20 to hit, then 1d8 for damage

`Avonder rolls 1d20+12#check "Athletics" to jump off the steps` Wow :muscle:

### Tirer des cartes

Tirer des cartes d'un jeu de 54 cartes de couleurs françaises (cœur, pique, carreau, trèfle).

`Avonder cards <n>` or `!c <x>`

`Avonder cards 5` Draw 5 cards from a pack of cards (there is always a basic deck).

`Avonder cards <count name>` I draw 1 card from the `<count name>` deck (if it doesn't exist, I create it)

`Avonder cards <number>` I draw `<number>` cards from the deck

`Avonder cards <number> <card number>` Draw `<number>` cards from the deck `<card number>`.

`Avonder cards shuffle <number>` Shuffle `<number>`

`Avonder cards remove <number>` I remove `<number>` from the channel

`Avonder cards decks` A list of decks in the channel

### Générer quelque chose

Il est possible de générer (la liste est longue) quelques idées utiles pour ajouter de la couleur aux aventures :

`Avonder generate <x>` or `!g <x>`.

`Avonder generate adventure` Proposes the idea for an adventure, a situation, an event...

`Avonder generate png` Generates the traits of a character or png

`Avonder generate book` Generates the description of a book.

`Avonder generate riddle` Proposes a riddle (and puts the solution in the "spoiler" tag)

### Autres

De nombreuses autres fonctionnalités sont en cours d'élaboration.

Vous avez des idées pour Avonder ? Faites-nous en part sur notre [serveur Discord](https://discord.gg/HP9bA4Z)
