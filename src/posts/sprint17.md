## Woensdag 4 december 
- micro interacties 
- je kunt live in je console tegen je code aanpraten 
- bv document.querySelector('section') -> laat alle sections zien in het document (je website)

- compositie in webdesign 
- user needs 


## Vrijdag 6 december 
- creative spike week 1 einde 
- review 


## Maandag 9 december 
- Eerste jaars 
- drie stappenplan js (patroon)
1. queryselector (zoekt elementen in de dom en berwaar deze in een variabele)
2. addEventListener (voeg een event toe(geberutenis) en roep een callback function aan als dit gebeurt)
3. classList (pas een property van een elment aan)

- verschil tussen ui events (gebruikers) of die de browser doet (plaatje laden etc.)

- geholpen met het toepassen van keyframes en het stappenplan van js. 
- Renzo snapte niet zo goed hoe je een element kon aanspreken, dit het ik geprobeerd zo goed mogenlijk aan het uit te leggen. 
let changeColor = document.querySelector('a:nth-of-type(1)')


- Middag (tweede les)
- Creative coding spike 2 
- view transitions 
- wat is een view transition? - transities tussen twee states 
- een view transition is een animatie die je maakt tussen twee views (schermen)
- code drops

- cross document view transitions 
alleen css 
voor normale a links -> bv @view-transition (navigation: auto;) -> crossfade in pagina 
dit kun je aanpassen met keyframe animaties in css

same-document 
met js voor micro interacties op pagina zelf 

code:
document.startViewTransition
if (document.startViewTransition)
else toggleActiveState 

view-transition-name; 
zet op beide elementen zelfde naam zo worden ze samengevoegd 

::view-transition-group
kun je inpluggen op wat je browser je standaard geeft 
animatie tijd kun je hier mee aanpassen (animation-duration)

## Woensdag 11 december 
- Kleur in webdesign 
- 