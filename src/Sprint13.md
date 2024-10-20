# Sprint 13 
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
<script>
	let name = 'Svelte';
</script>

Binnen de curly braces kan je alle javascript toevoegen die je wilt 
<h1>Hello {name.toUpperCase()}!</h1>

Dit kun je ook gebruiken voor element attributen
<script>
	let src = '/image.gif';
</script>

<img src={src}/>

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

### Sprint 14 
## Maandag 23 sep 
Jamstack: is een manier om websites en webablicaties te bouwen die sneller, veiliger en schaalvaarder zijn. Het doet dit door de ervaringslaag van het web los te koppelen van de gegevens en bedrijfslogica. Hierdoor bevat de statische laag alleen nog maat HTML, CSS en JS 
Headless cms 
Hamstack.org -> voorbeelden van tools 

## Dinsdag 24 sep 
- Meeting met opdrachtgever
- Briefing gemaakt:
•	Wat is de aanleiding van deze opdracht?
willen iets met de collectie (zelfde als rijksmuseum) 
collectie deels online zetten -> zodat musea hun objecten online zetten organisatie daar in helpen 
kunst uit het midden oosten meer presenteren aan de wereld 
	•	Wat voor API moeten we gebruiken?
heeft joost, als het goed is (als er meer data bij moet kan dat, kunnen we vragen) 
	•	Maakt het uit in welk framework we werken? 
geen voorkeur voor hun gebruiken view 
	•	Hebben jullie een huisstijl waar we ons aan moeten houden? 
gewoon het ontwerp maken, draait om de collectie 
	•	Wat is het hoofddoel van de website?
	•	Zijn er specifieke functies die jullie op de site willen hebben?
	•	Hoe willen jullie dat de gebruiker de website ervaart?
	•	Wie zijn de eindgebruikers van de website? 
	•	Is het een must om alle features op de website te hebben? 
	•	In hoeverre mogen wij afwijken van het ontwerp?

Wat is de fabrique?
stratigic digital design en development agency 
onderdeel van eidra (scandinavisch)
we are artists en engineers 
ingewikkelde dingen simpel laten ogen 
brand development  
we streven er naar om onze projecten awards winning te maken (bepaald niveau) 

opdracht 
ontwerp van de homepage 
qatar museums is een organisatie bestaat uit meerdere musea en galerijen 
collecties van 4 musea die worden tentoon gesteld 
oneindig scrollbaar canvas (loop, stuk of 50) naar links rechts en omhoog en omlaag 
filters die actief zijn dat je naar de zoek pagina gaat 
als je hoverd over een filter worden de niet relevante items donkerder als je klikt ga je naar zoek pagina (op telefoon moet je scrollen voor filters) 

	•	api driven 
	•	responsive 
	•	seo vriendelijk (geen canvas element) 
	•	toegankelijk (toesenbord navigatie en voorlezen van items) 
	•	meertalig (links naar rechts en andersom) 

infinite canvas
	•	zoomable (200% in en 50% out) 
	•	pannable (scrollen elke kant op) 

goed om op te merken 
oneindig canvas -> goed om hier over na te denken (zelfde foto mag ook meerdere keren te zien zijn) 
fonts zijn free for all (maakt niet uit welk font) arabisch ook in het font zitten 
navigatie gebruiken met api -> is van het website platform (geld zelfde voor hamburger menu) menu overlay is een goede toevoeging 

bonus punten 
	•	random images 
	•	goede preformance op ipad en iphone 
	•	humburger menu overlay op desktop en mobile 

detail pagina als toevoeging 

zoomt in als je op de website land 

in zoekbalk 
krijg je objecten en daar onder woorden 

op logo klikken ga je naar hun website 

unicoat ; geen latijnse karakters die je er wel in wilt hebben 

arabische woorden kun je langer maken (gelijk met de engelse tekst daaronder, zoas in navigatie) 


voor infinate canvas kun je tools gebruiken 

- Vragen die we hadden bedacht:
  •	Wat is de aanleiding van deze opdracht?
  •	Wat voor API moeten we gebruiken?
  •	Maakt het uit in welk framework we werken?
  •	Hebben jullie een huisstijl waar we ons aan moeten houden?
  •	Wat is het hoofddoel van de website?
  •	Zijn er specifieke functies die jullie op de site willen hebben?
  •	Hoe willen jullie dat de gebruiker de website ervaart?
  •	Wie zijn de eindgebruikers van de website?
  •	Is het een must om alle features op de website te hebben?
  •	In hoeverre mogen wij afwijken van het ontwerp?

## Woensdag 2 oktober 
- Workshop Design Critique waarin jullie ontwerpen onder de loep nemen en feedback geven. (Dorien)
- feedback gegeven op verschillende designs
- Design critique
Deter rams 
Good design is innovative 
Makes a product useful 
Makes a good product understandable -> feed forward en feedback 
Is thorough down to the last detail -> kleine details toepassen 
Is as little design as possible -> belangrijk om te focussen op de essential onderdelen van de website 

Issue geschreven voor design critique 
https://github.com/fdnd-agency/buurtcampus-oost/issues/173 
Good design makes a product understandable
Tekst op homepagina is lijkt erg klein, omdat de titel heel groot is.
Als je op een andere pagina klikt is de animatie raar, er lijkt alsof er iets fout gaat.

Good design is thorough down to the last detail
Misschien een optie om de animatie uit te zetten.
Op de nieuwe site is er geen sprake van een hover state.
Design veranderd met het weer, dat is wel erg leuk.

Good design is as little design as possible
Bij de minor website heb je een animatie met een blaadje als je naar de andere pagina gaat, deze is wel erg lang.

## donderdag 3 oktober 
- https://dev.to/dhintz89/simple-filters-in-css-or-js-185k
- Simpel filter maken
```
<div class="filteredList">
    <button class="filter-option" data-filter="Pottery" tabindex="-1">Pottery</button> 
    <button class="filter-option" data-filter="Islamic art" tabindex="-1">Islamic art</button> 
    <button class="filter-option" data-filter="Tapestry" tabindex="-1">Tapestry</button> 
    <button class="filter-option" data-filter="Glass" tabindex="-1">Glass</button> 
    <button class="filter-option" data-filter="*" tabindex="-1">All</button>

    <!-- <h3>Animals</h3>
    <div class="dog walks">Dog</div>
    <div class="eagle flies">Eagle</div>
    <div class="cow walks">Cow</div>
    <div class="shark swims">Shark</div>
    <div class="canary flies">Canary</div>
    <div class="human walks">Human</div>
    <div class="salamander swims walks">Salamander</div> -->
  </div>


<style>
button[data-filter="walks"]:focus ~ div:not([class*="walks"]) {
  display:none;
}

button[data-filter="swims"]:focus ~ div:not([class*="swims"]) {
  display:none;
}

button[data-filter="flies"]:focus ~ div:not([class*="flies"]) {
  display:none;
}
```
	
## Maandag 7 oktober 
Software development is moeilijk 
Heel veel verschillende systemen 
- don’t repeat yourself 
- keep it stupid simple 
- Packeges 
- release early release often
- rubber ducking debugging 
- scrum 
- softwear reviews 
- user-centraded design 

Waterval vs agile 
Specification-related paradigms: iterative and incremental development, waterfall model, normal methods 
Heeft de structuur van een waterval 
Heel uitgebreide documentatie 

Comprehensive system: agile software, development etc. 
Itererend 

Find agile woordenlijst agile zelftest 
Agile woordenlijst: 
Agile development 
Backlog 
Business owners 
Contiuous intergration -> cicd pipeline, pull requests als pull request wordt geaccepteerd wordt automatisch online gezet. Koppelen van code. 
Daily scrum 
Definition of done 
Epic 
Feature 
Iteration 
Minimal viable product -> alle must haves die geinplementeert zijn (het minimale wat je kunt leveren aan een bedrijf) 
Moscow
Optimum viable product -> alles geinplementeert wat de opdrachtgever wilde 
Planning poker 
Product owner 
Refactoring 
Retrospective 
Release 
Scrum -> gaat met dingen om die onzeker zijn
Is een effectieve en flexibele manier …
Check in check out (learning journal bijhouden) (goed voor bewijslast)  
Scrum master 
Scrum team 
Sprint 
Sprint goal 
Sprint planning 
Sprint review 
Stand-up -> waar loop je tegenaan, hoe ver ben je, wat ga je doen
Stakeholders -> mensen die op een of andere manier met het project te maken hebben (eigenaar bedrijf, gebruikers, opdrachtgever) 
Task 
Task board
Task points 
Velocity -> hoeveel planning poker punten je afkrijgt (zoveel mogelijk punten halen in een sprint) 
Wat betekenen deze dingen ->

Alles wat nog kan kan worden gedaan/ ideeën in projectboard zetten dat je weet waar je volgende sprint aan kunt werken 

Nieuwe agile instrumenten 
Een agile team kan eventuele problemen snel oplossen omdat ze alle nodige expertise bezit en mandaat heeft 

Get (even more) agile 
- Noem rollen explicieter -> wat lever jij binnen het team 
- Benoem de fasering en werkwijze 
- Plan onderdelen van het agile process die je nu nog niet omarmd en neem verantwoording op je 
- Neem beslissingen 

Programming spike 

## Woensdag 9 oktober 
sprint review
Readme -> hoe werkt de applicatie 
Example.env bestand 
Comment code 

Doel van een sprint review?
Specifieke vragen bedenken voor feedback 
Agenda maken
Demo (langs user stories gaan, website laten zien naast het design, laten zien wat er nog niet is gelukt adhv design, tijdens demo benadrukken wat de punten zijn waarop je feedback wilt) 
Specifieke vragen stellen om feedback te krijgen
Feedback geven aan elkaar, ook de opdrachtgever (voorstel om een functionaliteit beter te maken) 
Uitkomsten van testen bespreken, bv over huisstijl en kleurcontrast 
Plan voor aankomende sprint 
Werk opleveren

Rol verdeling binnen demo 
Presentator 
Feedback verwerker (feedback verwerken in issues) 
Cheerleader 
Timekeeper 


Notes tijdens ‘presentatie’ 
Foto in menu nog niet goed 
Responsive zonde image 
Geen hover op iPhone -> hoe doe je dat bij de images (geen ze bv al een titel) 
H2 in een li item -> (niet nodig voor een screenreader, overkill?) 
intressant om pagina er naast te zetten met masonry grid /collections experiments 
Lazy loading 
Scroll animation timeline
Inzoomen werkt nog niet 

## Donderdag 10 oktober 
- Sprint review met opdrachtgever
- 

### Sprint 15
## Maandag 14 oktober 
- Sprint 15 choices choices
- in deze sprint ligt de focus op het maken van onderbouwende keuzes voor de framework, tools en workflow die je kunt geburiken voor een project
- je verantoord je keuzes, neemt de mentotrol serieus

- Volgende week woensdag presenteer je je framework met een replica van je webiste (mag ook kiezen voor een ander headless cms, is optioneel, 'extra moeilijk') 
- Eigen tech-stack kiezen
- Keuzes die samenhangen met je stage
- Woensdag Kevin louise over derictus -> bedenk eventueel vragen 
- Vrijdag we love web met Dion over het maken van een portfolio
- Woensdag hulp met react tech stack Chianta
- Nog maar twee weken voor checkpoints
- 12 indicatoren (alleen je beste indicatoren)

- is het nuttig omj naar de stagemarkt te gaan als ik het schakelprogramma wil gaan volgen

- na deze sprint ga je verder met sveltekit
- voordelen en nadelen te zien (is dit makkelijker of beter en waarom, prettiger in gebruik? etc.)
- lane is -> scroll positie bepalen (smooth scrolling)

- client: library, html, css, js 
- middleware: cms, api
- server: nodejs, database, framework

- factors for choosing a techstack:
- platform, project type, scalability, performace, team experitize, maintenance, cost, hoeveel mensen werken er aan

- user experience - DX - development principles (minder prettig in gebruik)
- rekening houden met UX, DX, CMX (content management experience)
- keuze van techtack bepaald hoe makkelijk je er mee kan omgaan
- kies een nieuwe teck stack voor het ontwerpen en bouwen van een webiste voor een opdrachtgever. werk aan dezelfde epic als in sprint 14, maar dan met een ander framework en/of headless cms en/of andere tooling, presenteer jouw bevindingen aan je team 


## Woensdag 16 oktober 
- Opdracht gemaakt (workshop) met eerste jaars
- https://github.com/fdnd-task/all-human-accessible-website/blob/main/docs/user-experience-van-html.md

- Eerste jaars gaven presentatie over hun geteste website
- Feedback gegeven in portflow 

feedback cianta 
flex is iets gelimiteerder dan grid 


check-out 
schrijf kort op wat je vandaag hebt gedaan -> https://github.com/fdnd-task/all-human-accessible-website/blob/main/docs/user-experience-van-html.md
benoem drie dingen die je hebt geleerd 
beschrijf alle 6 onderwerpen uit de workshop en noteer welke je kan toepassen in je opdracht. 



presenatie (we love web) 
kevin works at directus 
how i make choices en what kind i need to make 
show some features 

directus 
headless cms 
to help you go quicker 

his role
developer experiance 
adducation -> how to help people understand directus 
community egagement -> support and organising (kopen of over vertellen) 
key extantions are being build en meet expectations 

how make money 
directus cloud  
selfposted 
support -> profecional serveces 
directus plus 
advisory 
market based 
you make money we make some money of that 
not a truely open sours 
use a business licens 
if you are succesfull we are succesfull 
we love it if you self host 

tradeoffs
there will always be some sort of choice
you can pick two of these -> good and fast (expensive), good and cheap (slow), fast and cheap (low quality) never all three (the iron trangle) 

perfectionism 

tech stack slection 

performance vs maintainability 
how may users are going to use this 
at directus we look at performance 

tailwind 
css utilaty library 
allows you to compose styles 

velocity vs flexability 
velocity: how fast can you build something 

AI
build on theft 
everyone is doing it 
cost of ai 
accuracy 

concerns 
we are not a ai company -> distraction 
accuracy when working with data 
depandancy on 3the parties 

cost benefit-analysis 
swot analysisi 
weighted decision matrix  

using directus 
its oke as a cms 
good on speed 
high quality 

directus tradeoffs 
flexible low level platform -> that means it can not preform at everyting 
data driven cms 
tipicaly arent a content manager 
features we build have to benefit 80% of the users. 

marketplace 

some 
the tech you use probalby doesnt matter 
you are going to make some shitty decisions -> own it and make better decissions next time (learn over time) 

root desicions in user 
root desicion i user needed 

directus tv -> directus academy 

web soccet 
two way connection to sent data both ways 
games, veilingen, uber driver 



talk Shyanta Vleugel 
techlead bij triple -> part of hypersolid 
s.vleugel@wearetriple.com
bestaad 25 jaar -> 250+ mensen 

onze core: 
development 
design 
technical operations 
data en insights 

cultuur 
mooie dingen maken met leuke mensen 
we delen onze eravringen projecten en innovaties met elkaar 
innovatie is erg balngrijk -> meegaan met de techniek 
we zoeken conferenties op om geinspireerd en up to date te blijven 
we zijn gek op feestjes, en missen geen moment om er een te vieren 

het web team 
react native, web, smartTV
drie losse teams 

web
react of svelte 
afhankelijk van type project 
bestaat hett al? vaak react -> blijft in react 
is het nieuw -> graag maken in svelte 

smartTV 
gewoon een website 
niet zo smart 
svelte gekozen -> lightweight, betere preformance, beeld naar html css en js -> geen grote files 

react native 
in react, react basics 
styling werkt iets anders 
mogelijkheid tot nieuwe componenten inladen/gebruiken 

way of working binne het webteam 
scrum 
daily standup, refinments, retrospect, sprint review/planning, 
gebruiken JIRA ticket management 
GIT -> code reviews 
conventional commits 

de gemene delen 
- iedereen werkt met dezelfde talen

de verschillen 
elk project heeft andere afhankelijkheden -> api 
elk team werkt aan een ander type project 
elk product heeft zijn bijzonderheden -> nieuwe elementen, support oudere browsers 


wat kan invloed hebben op je tech-stack?
seo preformance 
heeft voornamelijk te maken met je eindproduct -> wat heeft je eindproduct nodig en waarom kies je dan die techstack 
machines met weinig preformance 
eenmalige website
wens voor animaties -> svelte goed in 

tech tips 
don't repeat yourself -> als je iets gemaakt heb wat je veel moeite heeft gekost en die je kan hergebruiken zet het dan ergens waar je er makkelijk bijkan 
components maken die je telkens kan hergebuiken -> belangrijk volgende sprint 
gebruik van componenten is heilig, het framework waarin je dit giet staat hier los van 

j query alleen voor animatie 

manieren van leren 
lezen -> past toe 
eerst alleen lezen 

presentatie justus 
volgende week vrijdag presenteren 
poc aan het doen voor andere tech stack 

het is door logica dat we bewsijzen het is door intuitie dat we ontdekken. -> henri poincare 

wat is logica en waarom zou je het gebruiken 
logica is een systeem voo rsolide argumentatie 
in het dagelijksleven zorgt logica voor heldere redenering, betere besluits

het argumentatieproces in vier stappen 
stap 1 
formuleer een standpunt en selecteer argumenten 
als je een standpunt hebt inventariseer je welke argumenten voor en tegen je kunt geven. schrijf die op (en geef ze een simpele variabele naam) 
bv leercurve, prettig gebruik 

vue is opensource, grote communitie 

ux: accessability, performance, progressive enhancement, responsiveness
dx: documentatie, werkgelegenheid, community, helderheid, DRY
cmx: kracht, kosten, complexiteit, support 

serie argumenten verzameld en een standpunt

stap 2 
maak een argumentatieschema 

stap 3 
beoordelen van aanvaardbaarheid
is de argumentatie inhoudenlijk correct?
id de argumentatie 

stap 4 
argumentatieschema uitwerken 


dealine portfolio 
zondag 27-10 dealine portflow 23:59 



## Donderdag 17 oktober 
- Deeltaak
- Justify Your Tech-stack
- https://github.com/fdnd-task/justify-your-tech-stack/blob/main/docs/INSTRUCTIONS.md


## Vrijdag 18 oktober 
we love web Dion Pieters 
Over zijn Portfolio 
Free concept creation -> the art of development 
Arhnem gestudeerd 
Houd wat minder van e-commerce projecten 

Active theory 
heel experimenteel 
Spotify, Louie Vitton, Dior 

Voor zich zelf beginnen -> portfolio nodig 
Is je eigen portfolio het slechtste product wat je gaat opleveren 
'you are the worst client' 
Is nooit af moet altijd meer 

Wie gaat mijn portfolio ontwerpen? ik?
Heb ik nog een oud portfolio?
Wie gaat mijn portfolio bekijken?
Wat wil ik laten zien op mijn portfolio?
Hoeveel tijd moet ik besteden aan mijn portfolio?
waar heb ik een portfolio voor nodig?

Moet een developer kunnen designen en moet een designer kunnen developen?
Persoonlijke mening: developer hoeft niet kunnen te deisgnen en een designer hoeft niet kunnen te developen
Als je het allebei kan ga je vaak in limitaties denken 

Waar sta je nu? -> personal growth 
Showcase work -> my projects
Playground 
Motion concepts -> nog niks uitgewerkt 
Wanneer je beschibaar bent 

Moet ieder element op je site een vorm van animatie hebben? 
Mensen moeten een leuke tijd hebben op je site 
Ga los op je website 

