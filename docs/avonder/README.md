# Avonder (BOT)

Avonder è un bot sul [server Discord di Aumyr](https://discord.gg/HP9bA4Z) che ti può aiutare durante le tue sessioni di gioco, permettendoti di tirare vari tipi di dado, generare avventure, png e molto altro ancora...

::: warning
Avonder è temporaneamente disabilitato. [Il codice sorgente è disponibile qui](https://github.com/bertolinimarco/discord-bot-avonder).
:::

## Funzionalità

### Tirare dadi

Avonder può tirare una serie di dadi di ogni tipo e quantità, anche con regole particolari adatte a diversi sistemi di gioco.

`Avonder tira 2d20+3` Tiro 2d20+3

`Avonder tira 3d6+6, 2d8` Tiro 3d6+6 e poi 2d8 (virgola per tiri multipli)

`Avonder tira 1d8-1d4` Tiro 1d8 e tolgo 1d4 (puoi usare + - \* /)

`Avonder tira 2d20k` Tiro 2d20, tengo il risultato più alto

`Avonder tira 2d20l` Tiro 2d20, tengo il risultato più basso

`Avonder tira 3d20k2` Tiro 3d20, tengo i 2 risultati più alti

`Avonder tira 3d20l3` Tiro 3d20, tengo i 3 risultati più bassi

`Avonder tira 3p6` Tiro 3d6, considero 5 e 6 come un _successo_

`Avonder tira 5p10t8` Tiro 5d10, considero 8+ come _successo_

`Avonder tira 2w6` Tiro 2d6 e un dado _Destino_

`Avonder tira 2w6w8` Tiro 2d6 _Destino_ e 1d8 _Destino_

`Avonder tira f` Tiro standard _Fudge/FATE_

`Avonder tira 5f` Tiro 5 dadi _Fudge/FATE_

`Avonder tira 5f+3` Tiro 5 dadi _Fudge/FATE_ e aggiungo 3

`Avonder tira 3d6!` Tiro 3d6 ed esplodo 1d6 per ogni 6

`Avonder tira d6!5` Tiro 3d6 e un altro d6 per ogni 5 o più

`Avonder tira 3d6!m2` _esplodo_ max 2 volte per ogni d6 (max 5 volte di fila, ma è raro che avvenga)

`Avonder tira 2d20!l` Tiro 2d20 con _esplodi_ e tengo solo il risultato più basso

#### Aggiungere commenti al tiro

Spesso è utile aggiungere un commento al tiro così da avere il colpo d'occhio su quale sia la sequenza delle azioni.

`Avonder tira 1d20+1#colpire, 1d8#danni` Tiro 1d20 per colpire, e poi 1d8 per i danni

`Avonder tira 1d20+12#check "Atletica" per saltare dalla gradinata` Wow :muscle:

### Pescare carte

Pesca carte da un mazzo di 54 carte con semi francesi (cuori, picche, quadri, fiori)

`Avonder carte <n>` oppure `!c <x>`

`Avonder carte 5` Pesco 5 carte da un mazzo di carte (c'è sempre un mazzo base).

`Avonder carte <nomemazzo>` Pesco 1 carta dal mazzo `<nomemazzo>` (se non esiste, lo creo)

`Avonder carte <numero>` Pesco `<numero>` carte dal mazzo

`Avonder carte <numero> <nomemazzo>` Pesco `<numero>` carte dal mazzo `<nomemazzo>`

`Avonder carte mescola <nomemazzo>` Mescolo `<nomemazzo>`

`Avonder carte rimuovi <nomemazzo>` Rimuovo `<nomemazzo>` dal canale

`Avonder carte mazzi` Un elenco dei mazzi presenti nel canale

### Generare qualcosa

E' possibile generare (c'è una lunga lista) alcune idee utili per dare un po' di colore alle avventure:

`Avonder genera <x>` oppure `!g <x>`

`Avonder genera avventura` Propone l'idea per un'avventura, una situazione, un evento...

`Avonder genera png` Genera i tratti di un personaggio o un png

`Avonder genera libro` Genera la descrizione di un libro

`Avonder genera enigma` Propone un indovinello (e inserisce nel tag "spoiler" la soluzione)

### Altro

Molte altre funzionalità sono in arrivo.

Hai qualche idea per Avonder? Facci sapere sul nostro [server Discord](https://discord.gg/HP9bA4Z)
