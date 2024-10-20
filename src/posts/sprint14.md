---
title: Sprint 14
---

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