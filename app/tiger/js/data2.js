 var initcards =  [

 {name: "Weg", Aktion: "",flavour: "Jane: 'Was war das für ein Geräusch?'",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Was für eine schöne Pflanze.' Jack: 'Vorsicht, die ist giftig.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Diese Stille ist unheimlich.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Wir sollten umkehren.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Hier geht es nicht weiter.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Puuh, diese Luft bringt mich um.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Dein Vater ist vermutlich schon tot.' Jane: 'Nein, er lebt noch.'",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Hier können wir rasten.'",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Hier waren wir doch schon mal.'",hor: "true", type: "Basiskarte"},
 {name: "Rucksack", Aktion: "Du findest einen alten Rucksack. Nimm die Inventarkarte Rucksack hinzu und lege den Rucksack darauf.",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",hor: "true",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",hor: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", warn:"Fackel" , bgc:"blue",type: "Basiskarte"},
 {name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", warn:"Fackel" , bgc:"blue",type: "Basiskarte"},
 {name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", warn:"Fackel" , bgc:"blue",type: "Basiskarte"},
 {name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.",ver: "true", imgclass:"symbol", pagebreak: "pagebreak",type: "Basiskarte"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." ,type: "Basiskarte"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." ,type: "Basiskarte"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." ,type: "Basiskarte"},
 {name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",hor: "true",type: "Basiskarte"},
 {name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange. ",hor: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Fels", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.",type: "Basiskarte"},
    {name: "Weg", level: "schwer", Aktion: "",flavour: "Jack: 'Pause.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Weg", level: "schwer", Aktion: "",flavour: "Jack: 'Pause.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Fels", level: "schwer", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.",type: "Basiskarte"},

 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",hor: "true",type: "Feldkarte"},
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",hor: "true",type: "Feldkarte"},
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",ver: "true",type: "Feldkarte"},
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",ver: "true",type: "Feldkarte"},
 {name: "Gegengift", akt: "2", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",hor: "true", imgclass:"symbol",type: "Feldkarte"},
 {name: "Gegengift", akt: "2", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",ver: "true", imgclass:"symbol",type: "Feldkarte"},
 {name: "Höhle", akt: "2", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", warn:"Fackel" , bgc:"blue",type: "Feldkarte"},
 {name: "Lager", akt: "2", Aktion: "Ihr findet das versteckte Lager des Jägers.",hor: "true", bgc:"green",type: "Feldkarte"},
 {name: "Machete", akt: "2", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",ver: "true",imgclass:"symbol",type: "Feldkarte"},
 {name: "Pistole", akt: "2", Aktion: "Die Pistole ist alt und hat nur noch eine Kugel.",hor: "true",ver: "true", imgclass:"symbol", bgc: "gelb",type: "Feldkarte"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",ver: "true",type: "Feldkarte"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",ver: "true",type: "Feldkarte"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",type: "Feldkarte"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",type: "Feldkarte"},
 {name: "Taleingang", akt: "2", Aktion: "Mit den 4 Artefakten kannst du den Eingang zum verschollenen Tal öffnen. und beendest Akt II. Lege die Artefakte dazu hier ab.",hor: "true", bgc:"green",type: "Feldkarte"}
 ];

 var initActions = [
 {name: "Jäger", akt: "2", Aktion: "Der Großwildjäger Stoephasius klaut dir alle Artefakte und bringt sie zu seinem Lager. Mit der Pistole kannst du sie ihm dort abnehmen.",warn:"Pistole", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true,type: "Aktionskarte"},
 {name: "Idol", akt: "2", Aktion: "Mit dem Idol kannst du die Ureinwohner verjagen und an Ihnen vorbeilaufen.", imgclass:"symbol", task: true,type: "Aktionskarte"},
 {name: "Überfall", akt: "2", color : "H",Aktion: "Jack kommt ins Lager zurück und Jane ist verschwunden. Er findet Spuren eines Kampfes und Pfeile der Ureinwohner. Lege Janes Inventarkarte zur Seite.", warn:"Voodoopuppe", win:"Jane2", bgcwin:"green", task: true,type: "Aktionskarte"},
 {name: "Diamantenmine", akt: "2", color : "H",Aktion: "Mit der Fackel findest du in der dunklen Mine grosse Diamenten. Wenn du Sie herausholst, verlierst du die Fackel.", warn:"Fackel", win:"Diamantenmine", bgcwin:"green", imgclass:"symbol", task: true,type: "Aktionskarte"},
 ];

 var secondActions = [
 {name: "Dynamit", akt: "2", Aktion: "Du findest einen versteckten Vorrat an Dynamit und kannst damit einen Felsen sprengen. Lege dazu das Dynamit von einem Nachbarfeld aus ohne Wand dazwischen auf den Felsen.", imgclass:"symbol",task: true,type: "Erweiterung Aktionskarte"},
 {name: "Tiger", akt: "2", color : "H",Aktion: "Ein Tiger überrascht euch und jagt euch 2 Felder diagonal zur Mitte. Ihr könnt die Aktion auf diesem Feld ignorieren.", task: true,type: "Erweiterung Aktionskarte"},
 {name: "Fluss", akt: "3", variant:"d",Aktion: "Ihr könnt mit dem Boot am Fluss das Abenteuer hier erfolgreich beenden.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true,type: "Erweiterung Aktionskarte"},
 {name: "Schatzkammer", akt: "3",variant:"d", Aktion: "Ihr habt die Schatzkammer der Ureinwohner gefunden. Mit den beiden Kugeln öffnet ihr ein Portal, dass euch aus dem Dschungel teleportiert. Jack, Jane und Prof. Hampton das Abenteuer hier erfolgreich beenden.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true,type: "Erweiterung Aktionskarte"}
];

 var start = {name: "Akt II", akt: "2",color : "H",  task: true,
 Aktion: "Ihr erreicht das 'Reich der Schlangen', in dem Prof Hampton verschwunden ist. Sucht nach dem Zugang zum verschollenen Tal.",type: "Startkarte"};