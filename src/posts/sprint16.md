---
title: Sprint 16
---

## Maandag 11 november  
- Indeling maken / planning maken voor deze sprint 
- component library, i love web, js fundamentals, mentoring 
- deeltaak i love web app (live sketchnoting tool, aggregator, zie artikel random kanaal (3.5.1), css weekly aanmelden mail, code pens, ontdekkingen en inzichten)

- Wat is een component library?
- Een mapje met componenten (bibliotheek)
- Belangrijk om hier structuur in aan te brengen, daar gaat deze sprint over 
- Een verzameling vooraf gemaakte, geteste en goed gedocumenteerde UI-componenten die eenvoudig kunnen worden hergebruikt in gebruikersinterface van een product. Bevorderd efficiëntie en schaalbaarheid. Met componenten bibliotheken kunnen ontwerpers en ontwikkelaars snel nieuwe functies en pagina's toevoegen. 
- Elke $lib is in principe een component library. 

- Stapje ingewikkelder -> kan component los op npm opslaan, deze hebben een versie nummer (mag als je durft, uitdaging binnen team)

- Deeltaak component building block 
- Individueel binnen project voor opdrachtgever component maken (belangen voor eindgebruiker staat hier centraal)
- Rappe websites (responsive, accesable, preforming, progressive, enhanced website)

- Morphological chart 
- Gebruikt in product design 
- Wat heb je nodig: Wil om veel varianten van een app of website te bedenken, systematische manier van werken
- Zet de eisen op een rij van jou componenten

- Navigeren, aangeven waar je bent, 

## Woensdag 13 november 
- Fonts, typografie, typefaces, hierarchie 
- Micro en macro typografie
- Micro typografie: lettergrootte, letterafstand, letterlijn
- Macro typografie: lettertype, letterkleur, letterstijl, lettervorm
- Word spacing is nieuw (letter spacing)

- Font kun je gebruiken om alle dignen die met font te maken hebben aan te spreken in een regel 
- font-family bouw je op door font die gedownload kan worden, daarna een installed font en vervolgens generic font als fall back
- cssfontstack.com : a complete collection of web safe css font stacks 

- variable fonts 
- Kan bepaalde assen aanpassen binnen een font (bijvoorbeeld dikte)
- variablefonts.io

- Waar bestaad een font uit 
- Wakamaifondue.com -> vul hier een font in en zie wat je kan veranderen 
- Axes zijn de dingen binnen je font die kan je animeren/aanpassen 

- Visuele hierarchie kun je op verschillende manieren gebruiken: grootte, positie op scherm, witruimte
- inverted pyramide of writing -> most newsworthy info, important details, other general info/background info 

- Modular scale : optimale verhouding tussen font sizes 
- Modular scale is een manier om een scala van font sizes te genereren die optimaal zijn 
- typescale.com 
- Zorgt voor meer eenheid 

## Maandag 18 november 
- Workshop Advanced Component Concepts, waarin we dieper ingaan op component concepten in Svelte. 
- We maken from scratch een component library met aandacht voor named slots, two way binding en stores.
- Paar weken terug svelte 5 uitgekomen (wat zijn de nieuwe dingen?) -> gaat meer op react lijken 
- Mag in svelte 4 blijven werken 

- Een component library is een verzameling herbruikbare en generieke componenten die je aan een project kunt toevoegen, er bestaan vele standaard component libraries die je kunt downloaden en gebruiken.
- Het gebruik van een component library
- Versnelt ontwikkeling omdat je veel kan hergebruiken -> groter kans op fouten
- Zorgt voor consistentie in projecten -> alles ziet er hetzelfde uit 
- Vergroot onderhoudbaarheid -> vergoot de chaos, strikt aan naamgeving houden (als je een foutje maakt is dit overal een probleem)
- Chaos bedwingen door afspraken (conventies) te maken over:
- - naamgeving van componenten
- variaties van componenten
- properties binnen componeten 
- metanaamgeving: componenten, patronen etc.
- indeling van $lib folder
- Metanaamgeving is een hierarchische benadering om het iver beoaakde soorten componenten te hebben
in prencipe is alles component 

- Page section component 
- Pages: volledige pagina's of schermen met een specifieke context, bestaand uit sections bv homepage
- Sections: secties van een pagina bestaan uit componenten 

- Funtional layering 
- Inputs: componenten voor gebruikersinvoor knoppen of formulieren 
display componenten voor het weergeven van informatie tabellen en grafieken 
navigation componetnen voor navigatie menus skip to content 
structural lay-out elementen die structuur bieden 

- LEGO
- Bricks: kleine niet herbruikbare stukjes bv icoon of tekstblok
- Blocks: hebruikbare basis componenten een knop of afbeelding
- Assemblages: gecombineerde componenten met een speciefieke functie, formulier of een kaart
- Constructions: complexe paginasecties of templates, dashboard 

- Atomic design 
- Atoms: Kleinste element. basis bouwblokken van je pahina html elementen label input of button (losse elementen)
- Molecules een groep atomen bij elkaar bv een zoekformulier met label input en button
- Organism een groep mollevulen die samen een sectie van je website vormen een bv header balk met een zoekformulier 
- Templates: een groep organismen die samen een paginatype vormen een overzichtspagina of detailpagina
- Pages: ingevuld template met inhoud 

- Presenter-Container 
- Presentational components: ui specifeike stateless componenten die bepalen hoe date getoond wordt bv afbeelding
- container components: componenten die presnetational components van data coorzien en hun gedrag bepalen 
- composition: combinatie van containers en poesnetational components die specifieke pagina-secties vormen 

svelte 5 
featires van svelte 4 is deprecated: niet meer de preverd manier van werken 
- $:bind is deprecated 
- Svelte docs 

runes: 
$props: the inputs to a component 
$host: 
{#snippet ...}: component binnen een component (kan snippet meerdere keren in een component gebruiken) (gebruik snippets spaarzaam)
{@render ...}: to render a snippet 
beter omschrijven wat voor type events er plaatsvinden 

script door codebase om svelte 4 naar 5 te zetten 

run sv migrate svelte-5 

## Woensdag 20 november 
- responsive deisgn 
- fluid grids, flexible images and madia queries 
- the new responsive 
- umo 
- Geeft een blik op dat responsive eigenlijk nog wat ingewikkelder is 
- vier delen 
- user-preference queries,viewport and form-factor media queries, container styles, macro components that contain other components, conatiner queries, scoped styles and components 
- user preferenes, container preferences, form-factor preferences 
- responsive to the user: instellingen van gebruiker (light,dark mode, veel over kleur contrast en animatie)
- anatomie van een media querie: aanroepen, media type, media features, de conditie waaraan voldaan moet worden. @media screen and (width >= 35rem) {body{padding: 1rem;}} (min-width >=)
- veel verschillende variaties: level 3,4 en 5 https://www.w3.org/TR/mediaqueries-5/

- user preference media features level 5 
- prefers-reduced-motion, prefers-reduced-transparancy, prefers-contrast, forced-colors, prefers-color-scheme, prefers-reduced-data

- prefers-color-scheme
- kan bijvoorbeeeld zo: media screen hierop te schrijven -> geeft kleuren eeen andere waarde 
- prefers-reduced-motion: default base tonen zonder animatie (als deze niet is ingesteld dan animatie uitvoeren) (baseline -> added motion)

- container queries 
- begin dit te gebruiken -> expriemnetern op componenten 
- responsive icon demo (mirian(mirjam?) suzanne)
- Kan los in de context werken in plaats van op je hele scherm 
- Container queries worden goed ondersteund 
- conatainer style queries -> naar kijken 

- Hoe maak je websites voor een telefoon die rond is of die je kan opvouwen 
- form-factors 

- opdracht:
- lees het artikel the new responsive 
- bespreek een strategie hoe je de drie onderdelen (responsive to the user, )

- Lerend vermogen 
- noteer per onderdeel (responsive to the user, responsive to the container, responsive to the form factor) van het artikel minimaal 1 ding dat je nog niet kent, zoek een bron en maak aantekeningen in je learning journal zodat je het (later) kan onderzoeken 


## Vrijdag 22 november 
- Mentoring (code en design review)
- Code review gegeven bij verschillende eerste jaars 
- Stap 1: Controleer in de HTML van de leertaak of de gedeelde stylesheet correct is gelinkt, via een <link> tag naar de stylesheet op GitHub Pages (van de gedeelde repository). Zo niet, maak dan een issue aan op de leertaak, en laat de ander dit meteen oplossen (en dat issue sluiten).
- Stap 2: Controleer of de styles uit de gedeelde stylesheet conflicteren met die uit de leertaak, en zoek uit hoe dit komt. Waarschijnlijk door de specificity van de selectors: het kan goed zijn dat er te algemene selectors in de gedeelde stylesheet staan. Maak in dat geval issues aan in de gedeelde repository. Voorbeeld: “De font styling op de body is te algemeen, en conflicteert met de styling van mijn eigen header. De selector voor font styling in onze gedeelde stylesheet moet minder algemeen.” Deze issues kunnen komende week opgepakt worden.
- Stap 3: Doe een code review op de HTML uit de leertaak, en controleer of er inderdaad ook gebruik wordt gemaakt van classes uit de gedeelde stylesheet. Zo niet, maak dan een issue aan op de leertaak. Voorbeeld: “Je gebruikt voor het stylen van je alinea's nog geen CSS uit de gedeelde stylesheet; gebruik hiervoor class="font-xl".”
- Stap 4: Bekijk het individueel gemaakte CSS-bestand uit de leertaak. Loop alle regels in de CSS door, en kijk of er styling in staat die ook al in de gedeelde stylesheet staat. Schiet issues in op de leertaak als dit het geval is. Voorbeeld: “Je eigen stylesheet gebruikt nog font styles, die ook al in de gedeelde stylesheet staan. Deze kun je weghalen, want je maakt gebruik van class="font-xl".”

## We love web 22 nov
- Emiel van Betsbrugge
- https://emielvanbetsbrugge.be/
- From pitch to production 
- Hoe werk je projecten uit van begin tot eind in teams 

- WebGL developer bij activy theory 
- Ollie, Stinkstudios 
- Type of work -> product development, creative campaign 
- 

- Process en polish 
- Proces: pitch, discovery, design en early dev, development, qa, go live, retrospect 

- pitch: opdrachtgever komt langs met een vraag naar iets, als bedrijf geef je een pitch wie wil hier aan werken etc. 
welke personen: producers, sales, design director, tech director/lead 
inhoud: wie, hoe , wanneer, wat, voor hoeveel 
details: vaak optioneel, soms tegen betaling (niet vaak), 

- discovery: optioneel 
inhoud: we tackelen de grootste vragen in de build 
details: vaak optioneel, als klant en agency nog niet samen zeker zijn, maar willen samenwerken, $$$

- design en early dev
inhoud: statement of work (sow) sign off, estimations (leren hoeveel tijd je voor bepaalde dingen nodig hebt), sprint planning (sommige agency's doen dit), scaffolding (basis set up)(router, pages, cms connectie, github deployments, css setup)

- Development challenges: opdracht opdelen, estimations en presentaties (bij agency's krijg je niet altijd de meest creatieve dingen te doen, ze kijken naar wie het het snelst kan, ik raad aan in je vrije tijd te expirimenteren met nieuwe dingen)

- development
mijn flow: quick and dirty volledige flow, fix fix fix, polish polish polish 
Details: langste periode, do your thing, check in met design, je eigen stijl is belangrijk 

polish tips: denk effe na, quick wins?, focus on low effort big impact, wat gaat dit project uniek maken?, test en blijf kritisch, no cutting corners 
(als ik twee uur aan dit component besteed wordt de website hier dan beter van of wat verliest het)(als het live is ben blij met je werk, maar als je echt iets kunt verbeteren doe het dan)

- QA
Inhoud: functional qa, taal qa (LQA), build accepting, laatste polish
details: vaak externe partij, blijf vooruit kijken, voorbereiding is belangrijk

- Go live
inhoud: press of a button
details: vaak niet meteen na einde build 

- Retrospect
inhoud: what should we continue doing
what should we stop doing?
what should we start doing?
boilerplate aanpassen?
botsing met collega probeer daar over te praten met hem/haar

speed is important 
quality is always the end goal

blijf experimenteren 
please make the internet fun again 

you all got this, you're in the right place 

hoe eigen design van coden 
niet in coding stijl maar in het eind product
smoothness kan een stijl zijn 
je bouwt je eigen stijl op als je tools of componenten opnieuw gebruikt 
Dingen doortrekken naar een ander project 

hoe eigen ideeen doorgeven naar designer, gaat vooral over motion, vaak zit je met elkaar en kun je het hier over hebben, misschien handig om iets in after effect te hebben staan om snel iets over te brengen 
vragen zou je dit trots op je portfolio zetten of waarom niet 

thomasmonavon.com 
