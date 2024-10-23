---
title: Sprint 13
---

## 2-09 
### Eerste dag van sprint 13. 
- Begin met het leren van Sveltekit.
- Team bekend voor squadpage -> Ik zit samen met Daan, Christopher, Annelinde, Tristan en Jason.
- Leervragen voor mijzelf opgesteld:
    - Hoe werken frameworks? 
    - Hoe begin ik met het leren van SvelteKit?
    - Wat is Svelte? 
    - Hoe werkt Sweltekit?
    - Hoe kan je een logisch stappenplan maken om een opdracht uit te voeren? 
    - Hoe plan ik mijn tijd beter in? 
    - Hoe lever ik mijn bewijslast op de juiste manier op? 
    - Hoe blijf ik constant de dlc gebruiken? 
    - Hoe zorg ik dat ik mijn i love web bijhoud?
 
- Wat is Svelte?
- Svelte is een hulpmiddel bij het maken van websites. 
- Net als andere frameworks kan je een app bouwen met componenten die opmaak, styles en gedrag combineren. 
- Deze componenten zijn samengevoegd in kleine JS modules -> een component is een herbruikbaar op zichzelf staand codeblok dat html css en javascript bevat die bij elkaar horen. Geschreven in een svelte bestand. 

- Wat is een framework? 

Data toevoegen: 
```
<script>
	let name = 'Svelte';
</script>
```

Binnen de curly braces kan je alle javascript toevoegen die je wilt 
```<h1>Hello {name.toUpperCase()}!</h1>```

Dit kun je ook gebruiken voor element attributen
```
<script>
	let src = '/image.gif';
</script>

<img src={src}/>
```
Belangrijk dat de website toegankelijk is img heeft bv een alt attribuut nodig 
Je kan curly braces ook binnen een attribuut gebruiken 
alt="{name} dances."

Attributen en waarden hebben vaak dezelfde waarde hebben 
src={src}

Svelte heeft hier een afkorting voor
<img {src} alt="{name} dances." />

Je kunt verschillende componenten en documenten toevoegen aan je opmaak 

Component names are always capitalised, to distinguish them from HTML elements.

Je kunt een stuk html tekst toevoegen door 
<p>{@html string}</p>
Te gebruiken 

Click button:
<script>
	let count = 0;

	function increment() {
		count += 1; 
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

reactive declarations   zien er zo uit 
$: doubled = count * 2;

<p>{count} doubled is {doubled}</p>
Maakt na een keer klikken -> 1 keer verdubbeld 2, 2 keer is verdubbeld 4 etc. 

You can even put the $: in front of things like if blocks:

The full list of modifiers:
		preventDefault — calls event.preventDefault() before running the handler. Useful for client-side form handling, for example.
		stopPropagation — calls event.stopPropagation(), preventing the event reaching the next element
		passive — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)
		nonpassive — explicitly set passive: false
		capture — fires the handler during the capture phase instead of the bubbling phase
		once — remove the handler after the first time it runs
		self — only trigger handler if event.target is the element itself
		trusted — only trigger handler if event.isTrusted is true, meaning the event was triggered by a user action rather than because some JavaScript called element.dispatchEvent(...)
You can chain modifiers together, e.g. on:click|once|capture={...}.

transition is applied, and any parameters that were passed in — and returns a transition object which can have the following properties:
		delay — milliseconds before the transition begins
		duration — length of the transition in milliseconds
		easing — a p => t easing function (see the chapter on tweening)
		css — a (t, u) => css function, where u === 1 - t
		tick — a (t, u) => {...} function that has some effect on the node

npm create svelte@latest




node.js Runt javascript 
Fetch haal tinformatie uit een externe server op (machine van het internet) 
Apiurl haalt op uit de database 
Renderen: inladen van dat combineren met html en dan doorsturen (data meegeven aan de view) 
Get request ga je naar een server toe 


Belangrijkste dingen sveltekit/svelte 

Set functies die het makkelijk maken om js te schrijven in een sever (svelte) 
Svelte kan een applicatie generen met html css js 
Svelte kit is een webframework voor svelte 

Sveltekit: meta framework, ssr, spa, mpa, ssg, web standerds, PE, accessibility 
- Get en post worden onderwater afgehandeld 
- folder based routing 
- Elke route heeft oa een server en component (view) bestand 
- Data wordt geëxporteerd vanaf het server bestand naar de site 
- deelt delen slim op in client en server 

Je zet client site rendering uit door: +page.js in de root van de route folder

Svelte: csr, lightweight, compiler, component framework, scoped styling, reactive state, 


Directus:
- Models -> elke squad is een model -> member is een relatie naar de squad 
- Content 


In de routes maak je een map met goeie naam 
In die map maak je een nieuwe pagina met +page.svelte 

Componenten maak je door 
In src map components te maken 
In deze map zet je een bepaald component 

In je +page.svelte roep je in script aan met import de functie 
En dan buiten script roep je de functie aan met de bedachte naam 

## 3-09
- Tutorial voor Sveltekit gemaakt. -> https://learn.svelte.dev/tutorial/introducing-sveltekit
- Team meeting op school -> Ideeën bedenken.

## 4-09 
- Team meeting op school -> Ontwerpen van eerste versie van website.
- Taken verdeeld -> Ik ga werken aan de squadpage. 

## 5-09
- Gewerkt aan eigen taak (squadpage)
- Geleerd hoe ik een component moet maken in svelte. 
- Code die ik gebruikt heb om component te laten werken op homepagina: 
- Op +page.svelte pagina staat:
```
<script>
    import Card from '$lib/Card.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    // Check if the data has been received and is an array
    console.log('Received data in +page.svelte:', data);
</script>

<!-- Only render if we have people in the data -->
{#if data.people}
    {#each data.people as person}
        <Card {person}></Card>
    {/each}
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}
```
- Card component staat in de lib (card.svelte):
```
<script>
    export let person;
</script>

<article>
    <h2>{person.name}</h2>
    <p>{person.bio}</p>
</article>
```


## 6-09
- Feedback geven op visitekaartjes van eerstejaars. (Degene die je zelf zou gebruiken en de gene die het best responsive was een stickynote geven) 
- Formuleer drie vragen over wat je heb geleerd:
    - Wat is een attomic design system?
    - Hoe pas ik een attomic design system toe? 
    - Hoe maak ik het beste een issue voor een component? 


## 9–09 
- Workshop kill your darlings en workshop hoe ontwerp je in Figma (cyd) 
- Dingen die ik geleerd heb tijdens de Figma workshop (auto layout en componenten) van cyd:  
    - shortcut r: maak een vierkant 
    - shortcut o: maak een cirkel 
    - shortcut cmd+g: groeperen van objecten 
    - shortcut cmd+]: brengt een object naar voor (omhoog)
    - shortcut alt: maak bv een vierkant of cirkel aan beide kanten breder (krijgt een rechthoek en een ovaal)
    - shortcut ctrl+shift+g: ongroeperen van objecten
    - shortcut alt+shift: hoogte en breedte van object veranderen tegelijk

- Je kan een grid toepassen om zo items netjes uit te lijnen 
- Gebruik 375 px voor mobiel 

- Goede website voor ideeën: https://www.awwwards.com/

- Je kunt een website bijvoorbeeld live zetten met vercel


## 13-09 
- Eerste We love web van dit schooljaar.  
- Vasilis van Gemert 
- Over toegankelijkheid, creativiteit en klokken 

- Lieve voor het web, omdat code gratis is. 
- Flexbox en css animaties waren iets nieuws toen hij begon. 
- Playground van vasilis : https://vasilis.nl/

- Favoriete website: https://lovenonsense.com/536. 
- De poppetjes op de website zijn text (een bepaald lettertype).
- De letter L geeft laserogen -> gedaan met transform en transitions. 

- Vasilis.nl/flipping-things/ 
- Kaartjes met een loop gemaakt 

- Vasilis.nl/clocks/
- Eerste klok die hij maakte: vasilis.nl/greek-time/ 
- Een uur of whatever 

- Vasilis.nl/wowclock/ 

- Decimal-clock
- Hoe het zou zijn als er 10 uur in een dag zit, 100 minuten per uur en 100 seconden per minuut. 

- Vasilis.nl/clocks/hsl-clock/02/ 
- Klok met kleuren 

- Vasilis.nl/clock/pix-clock/
- Laat de tijd zien aan de hand van foto’s 
- Elke minuut krijg je een andere foto te zien van een klok 

- Sachavonbose.nl/tekeningen/ 
- Leuke website met bewegende tekeningen. 

- Vasilis.nl/clocks/klokkenklok/02/ 
- Verschillende bewegende klokken telkens als je de pagina opnieuw laad. 

- Vasilis.nl/clocks/typewriter-clok/06/ 
- De tijd wordt uitgetypt door een ‘typemachine’. 
- Elke letter die je met je pink aanslaat in dunner dan de letter die je met je wijsvinger aanslaat. 

- Vasilis.nl/clocks/wandering-hour/02/ 

- Andere reden waarom hij het web zo tof vind: 
- Toegankelijkheid 
- Onderzoek met blind persoon door een website navigeren
    - De blinde persoon kreeg een modal in beeld -> dit kreeg hij vervolgens niet weg -> zijn oplossing was om de website afsluiten en dus de hele computer uit te zetten. Zo moet je telkens opnieuw beginnen als zo iets gebeurd.  

- Verder een code/design review 

## 16-09 
Pokerplanning 
Moscow 
Mark twain 
To change your life you need to change your priorities 

Van epic, langs (user)stories, naar taken 
Handige manier om werk op te organiseren en een hiërarchie te creëren. Het idee is om werk op te splitsen in opleverbare stukken. 

Voorbeelden van epic:
Een nieuwe e-commerce website lanceren voor …
De website van … verbeteren 
Een nieuwe website lanceren voor … 
De website van … optimaliseren voor zoekmachines 

Voorbeelden van stories:
Een nieuwe e-commerce website lanceren voor …
- winkelmandje toevoegen 
- betalingsmogelijkheden toevoegen 
- een klantenserviceportal toevoegen 

De website van … verbeteren 
- de website sneller maken 
- de website gebruiksvriendelijker maken 
- de website toegankelijker maken 

Voorbeelden van user-stories:
Een nieuwe e-commerce website lanceren voor …
- winkelmandje toevoegen 
Als bezoeker wil ik producten in mijn winkelmandje kunnen doen om overzicht te houden wat ik aanschaf 
- betalingsmogelijkheden toevoegen 
Als bezoeker wil ik producten kunnen verwijderen uit mijn winkelmandje al sik iets gevonden heb wat beter past bij wat ik nodig heb
- een klantenserviceportal toevoegen 
Als bezoeker wil ik overzicht houden op het uit te geven bedrag zodat ik het gevoel heb in controle te zijn 

Voorbeelden van taken:
Als bezoeker wil ik producten in mijn winkelmandje kunnen doen om overzicht te houden wat ik aanschaf 
- Database voor winkelmandje 
- Overzicht winkelmandje tonen in HTML/CSS
- Producten verwijderen uit de database 
- Interface ontwerpen voor verwijderen producten 
- Interface ontwerpen voor aantal aanpassen 
- Verder shoppen interface (button) / doorgaan naar betaling 
- Ontwerpen van icoon winkelmandje 
- Implementatie icoon winkelmandje 
- Optelsom alle prijzen 
- Verzendkosten 

Planning poker
Fibonatischn reeks 
? - 0 - 1 - 2 - 3 - 5 - 8 - 13 - 21 - oneindig 

Techniek voor het schatten, vooral gebruikt voor timeboxing in agile principes. 
Leden van de groep geven schatting door genummerde kaarten op tafel te leggen of een getal op te schrijven in plaats van dit hardop te zeggen. De kaarten worden omgedraaid en de schattingen worden vervolgens besproken. Door de cijfers te verbergen, kan cognitieve bias van verankering vermeden worden, waarbij het eerste hardop gesproken cijfer ene precedent schept voor volgende schattingen. 

Moscow 
Must haves: 
Moet af op de deadline -> niet af is het project gefaald 
Should haves: 
Best wel af moeten -> project is jammer als het niet af is 
Could haves: 
Dit kan -> als er tijd over is 
Want to have but will not have this time around: 
Dit zijn goede ideeën en nuttig om te noteren maar we komen er nu niet aantoe 



## 17-09 
Verder werken aan groepsopdracht 
Op school cards gemaakt 

## 18-09 
Hoe lever ik een project op ?
Readme 
In readme cms uitleggen -> hoe vragen aan opdrachtgever 
Code conventies 
Live zetten / publiceren 
Huisstijl -> in readme (pdf) 
Gestructureerde code / 
Refactoring 

Refactored code: 
Gestructureerde code (conventies), semantiek, geen commented code, geen console.log, goede tabs

Readme:
kenmerken
Live link 
Screenshots 
Instructies (uitleg over het gebruik) 
Installatiehandleiding 
Cms uitleg
Huisstijl (of waar die te vinden is) 
Bijdragen? (Hints voor volgende developers teams) 
Gebruikte bronnen 
Badges met gebruikte technologie 

Live zetten:
GitHub pages, 

## Donderdag 19 sep 
- Eigen gedeelte afgemaakt
- Pull request gemaakt
- Aan visitekaartje gewerkt 

## Vrijdag 20 sep 
Niveaumatrix bespreken 
Kampvuursessie 
Bewijslast in portflow zetten 

Wat betekend de indicator 
Waarom is dit goede bewijslast 
Heb je nog leervragen met betrekking op deze indicator 

