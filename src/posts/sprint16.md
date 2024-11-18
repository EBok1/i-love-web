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
- Templates: een groep organismen die smaen een paginatype cormen een overzichtspagina of detailpagina
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

