# Avonder (BOT)

Avonder is a bot on [Aumyr's Discord server](https://discord.gg/HP9bA4Z) that can help you during your game sessions, allowing you to roll various types of dice, generate adventures, pngs and much more...

::: warning
Avonder is temporarily disabled. [The source code is available here](https://github.com/bertolinimarco/discord-bot-avonder).
:::

## Features

### Rolling dice

Avonder can roll a variety of dice of all types and quantities, even with special rules for different game systems.

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

#### Add comments to the roll

It is often useful to add a commentary to the roll so that you have an overview of what the sequence of actions is.

`Avonder rolls 1d20+1#hit, 1d8#damage` Roll 1d20 to hit, then 1d8 for damage

`Avonder rolls 1d20+12#check "Athletics" to jump off the steps` Wow :muscle:

### Draw cards

Draw cards from a deck of 54 cards with French suits (hearts, spades, diamonds, clubs)

`Avonder cards <n>` or `!c <x>`

`Avonder cards 5` Draw 5 cards from a pack of cards (there is always a basic deck).

`Avonder cards <count name>` I draw 1 card from the `<count name>` deck (if it doesn't exist, I create it)

`Avonder cards <number>` I draw `<number>` cards from the deck

`Avonder cards <number> <card number>` Draw `<number>` cards from the deck `<card number>`.

`Avonder cards shuffle <number>` Shuffle `<number>`

`Avonder cards remove <number>` I remove `<number>` from the channel

`Avonder cards decks` A list of decks in the channel

### Generate something

It is possible to generate (there is a long list) some useful ideas to add some colour to adventures:

`Avonder generate <x>` or `!g <x>`.

`Avonder generate adventure` Proposes the idea for an adventure, a situation, an event...

`Avonder generate png` Generates the traits of a character or png

`Avonder generate book` Generates the description of a book.

`Avonder generate riddle` Proposes a riddle (and puts the solution in the "spoiler" tag)

### Other

Many more features are on the way.

Do you have any ideas for Avonder? Let us know on our [Discord server](https://discord.gg/HP9bA4Z)
