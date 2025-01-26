## Maandag 6 januari 
- talk is cheap. Show me the code. 
- Alles verzorgd, puntjes op de i, gepubliceerd op fdnd agency 
- Software release life cycle (SRLC) (pre-alpha (vroege ontwikkelingsfase), alpha, beta, release candidate, RTM, GA, Production or live release)
- Je richt je op de release candidate -> alles testen (klaar om vrij te geven te worden, geen nieuwe broncode nodig, alle functionaliteit zit er in)

- Vul een teamcanvas in -> principes en conventies 
- Werk met een nette projectstructuur -> pull requests nakijken, goeie issues, goeie commit messages, uitvoeren van test tijdens je pull requests -> werk daar op door. 
- Focus op planbord -> poker alle taken
- Planning maken 

## Theorie 
- TLA
- manieren waarop je een website live kan zetten (hosten)
- De keuze voor welke deployment -> waarom deploy je op een bepaalde manier -> hoe onderbouw je een argument 
- client site rendering -> haalt client site rendering op en deployd (nadeel: al jouw clients gaan een connectie maken, geen controlle over de inlaad snelheid van de website)
- server site rendering -> geladen naar server, server wordt naar client gestuurd. inpact op hosting (kan niet op github zelf)
- static site generation -> wordt tijdens de build alle mogelijk pagina's gerenderd, houd een website over met alle pagina's die al ingeladen zijn. super snel -> lastig met actuele pagina om te gaan (kan tijd kosten) (bv eleventy 11ty)
- Incremental static regeneration -> hipster versie build stap wordt periodiek uitgevoerd -> alleen wat geupdate is wordt opnieuw geladen (werkt nog niet voor een live omgeving)

- CDN (content delivery network)-> veilig, preformance, schaalbaarheid, gratis hosting. (build time, minder dynamisch, content)

## Maandag 13 jan
- Clean code en refactoring 
- geen lelijke code base 
- vrijdag code reviews -> met mensen uit het vakgebied in het engels 
- boek clean code van robert martin 
- refactoring -> code verbeteren zonder de functionaliteit te veranderen
- code smells -> code die niet goed is, maar nog niet fout is
- code review -> code beoordelen, feedback geven, verbeteringen aanbrengen
- Geen clean code is geen professional 
- clean code als het makkelijk te begrijpen is door iedereen in het team en door andere dan de auteur, laasbaar, aanpasbaar, onderhoudtbaar en begrijpbaar 
- boyscout rule -> try and leave this world a little better than you found it 
- allemaal net onze code iets schoner inchecken dan toen we die uitcheckten 
- opruimen hoeft niet grootst te zijn, verander een variabelenaam in iets beters, splits een te grote functie op 
- gebruik duidelijke en beschrjivende namen voor variabelen, functies en bestanden
- vermijd cryptische afkortingen of generieke termen zoals a, x, data of temp
- code is leesbaar als het makkelijk te begrijpen is door iedereen
- Schrijf kleine functies, lange functies zijn namelijk moeilijk te begrijpen, zo min mogelijk parameters (f(x)) -> het liefst moadisch maar als nodig diadisch vermeid triadisch, voorkom side effects, dingen die buiten de scope van de functie vallen -> een functie heeft een ingang (parameters) en een uitgang (return)
- Gebruik goed commentaar, less is more, goede code heeft weinig commentaar nodig omdat het zichzelf uitlegt 
- maak code leesbaar, code wordt vaker gelezen van geschreven 

- Door te kijken naar code ga je patronen herkennen 
- refactoring is een proces van het verbeteren van de structuur van code zonder het gedrag te veranderen 
- Patroon: hernoem functie declaratie, de handtekening van een functie omvat de naam, parameters en soms het returntype 
- splits conditionals op, complexe en onoverzichtelijke if-els functies 
- functionele decompositie 
- Vervang loops door pipelines, traditionele iteraties over collecties (zoals for, foreach of while-loops) worden vervangen door een functionele stijl met behulp van een pipeline van operaties, dit patroon maakt gebruik van methoden map, filter en reduce die declaratief beschrijven wat er met de data moet gebeuren in plaats van ho
- Verwijder dode code, zijn functies, variabelen, klassen of andere elementen die nergens meer worden aangeroepen of geen effect meer hebben op het gedrag van het systeem 
- verschuif statements, herpositioneren van code binnen een methode om de leesbaarheid te verbeteren. Het doel is gerelateerde statements dichter bij elkaar te plaatsen irrelevante of afleidene stukken code te verplaatsen naar een meer geschikte locatie 

- Structuur van een sveltekit code-base, src/lib voor componenten en helpers, scr/routes voor layout en pagina's, static vppr statische assets 
- Voorkom het inladen van componenten die componenten inladen etc. 
- Als een bestand te groot wordt zet je script en style in een apart bestand en importeer deze, prima als je page.svelte een page.js en page.css importeert 

performance 
svelte kit doet op het gebied van preformance al een heleboel werk voor je bv:
- code-splitting
- asset preloading 
- file hashing 
- request coalescing
- paralllel loading 
- pre-rendering 
- link preloading -> op het moment als je over heen link hoverd 

performance testing 
- Lighthouse, network en preformance devtools 
- dev reageert anders dan in build, test preview versie lokaal, daarnaast ook op je live variant 
- afbeeldingen, responsive images, reduceren van bestandsgrootte hier is een package voor in svelte 

## Maandag 20 jan 
ThreeJS/WebGL/Shaders
threejs is niet het zelfde als webgl, threejs gebruikt webgl 
threejs bestaat uit drie kernonderdelen:
1. Scene -> wereld waarin je 3d object jzich bevind
2. Camera -> de camera waarmee je naar je 3d object kijkt 
3. Renderer 
je begint met een scene 
vervolgens maak je een camera aan -> perspective camera, cube camera, orthographic camera 
render doet dingen achter de schermen -> je kan de grootte zetten 
alles wordt getekend met js 
boxgeometry 
alle onderdelen zijn meshes 

verschil perspective en orthographic camera 
far clip plane kleiner dan near clip plane bij perspective 
orthographic heeft even grootte far en near clip planes 
orthograpic wordt plat je krijgt een 2d presentatie 

meshes 
geometry -> square, cone etc. (sphere geometry, planegeometry)
material -> kleur is gewoon plat object, je hebt verschillende belichtingstechnieken 

verschillende soorten licht: spot, directional, ambient

shader materials 
als je een object tekent in 3d heb je verschillende shaders 
1 daarvan is de vertex shader en de ander is fragment shader
fragment shader: geeft een kleur aan wat je getekend hebt

spector js extensie die je kunt downloaden 
kun je zien wat er precies getekend wordt met three js 

## woensdag 22 jan 
Timeline van gemiddeld project: vraag, gesprek, offerte, design, 
Hoe kom je aan projecten? netwerken

Wat wil de opdrachtgever?
briefing, verwachting, wat kan jij/wat kan ik, nee zeggen/wil ik dit wel?

Wat staat er in een offerte?
lang of kort maakt niet zoveel uit
1. Wat ga je doen en ook wat je niet gaat doen bv boven aan in zoekopdrachten
2. Begroting (bv lage en hoge inschatting niet precies 6 uur maar bv 6 tot 8 uur)(uurtarrief bepalen: online kijken, theGOODlist 40 tot 60 euro per uur afhankelijk van je skills)
3. planning en afspraken 
4. Algemene voorwaarden (FENIT)
Buggarantie

schetsen van het ontwerp 
grove schetsen laten zien 
daarna high fi 
en dan snel bouwen 
design changes on the way 

Bouwen 
fundering, data model 
framework kiezen 
cms? zeker doen 
testen 
acceptatie omgeving opzetten (omgeving die de klant kan zien), productie omgeving (live)

live gaan
niet live op vrijdag als er iets fout gaat moet je werken in het weekend 
afspraken over de oplevering 
garantie, bug fixing 
factuur sturen 
systeem gebruiken voor offertes en facturen 
kan werken met een aanbetaling bv 40%

service level agreement (SLA)
maak afspraken voor na de oplevering 
hostingkosten? updates? 
maandelijkse vaste uren? 
nacalculatie? 