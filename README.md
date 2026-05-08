## Swiper

Jag använder Swiper bara på biljettsidan för att skapa en smidig karusell så att användaren kan swipa mellan sina biljetter. Jag använder swipers EffectCards modul vilket gjorde det hela väldigt enkelt, det enda krångliga var att förstå att man måste låta Swiper element styra storleken och alla barn bara fyller ut. Valde denna för att det löste hela biljett sidan på ett smidigt sätt istället för att bygga en helt egen custom lösning.

## Motion

Motion använder jag för att skapa smidiga animationer och övergångar över i princip hela sidan. Biblioteket fungerar genom att man byter ut vanliga HTML-taggar mot motion komponenter, vilket gör det enkelt att applicera mina fördefinierade animationer som jag la i sin egen mapp. Jag valde att använda det för att det med ganska lite kod gör hela applikationen mycket mer spännande och tillfredsställande att interagera med utan att gör css filerna röriga.

## React Barcode

Jag använder React Barcode som enkelt skapar upp en barcode komponent som förvandlar en sträng till en fungerande barcode. Jag har den i min TicketCard komponent är den läser in ett unikt id och genererar en skanningsbar barcode. Valde den för att den är väldigt enkel att använda med minimal kod och gör biljetten mer verklighetstrogen.

## Hot Toast

Hot Toast används för att enkelt visa ett popup medellande, jag la den i layout så att den alltid syns och anroper den med toast(). Använder den för att tydligt visa användaren att något har lagts till i kundvagnen och vid klar beställning.
