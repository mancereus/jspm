var data1 = {
    akt: 1,
    initcards: [
        { name: "Weg", Aktion: "", flavour: "Jane: 'Ob ich ihm von meiner Suche erzählen kann?'", hor: "true", type: "Basiskarte" },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Was für eine schöne Pflanze.' Jack: 'Vorsicht, die ist giftig.'", ver: "true", type: "Basiskarte" },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Jack hat ein düsteres Geheimnis, das spüre ich.'", ver: "true", type: "Basiskarte" },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Was suchen wir hier eigentlich?'", ver: "true", type: "Basiskarte" },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Ich brauche einen Whisky.'", ver: "true", hor: "true", type: "Basiskarte" },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Puuh, diese Luft bringt mich um.'", ver: "true", type: "Basiskarte" },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Wer hat wohl meinen Bezintank manipuliert?'", hor: "true", type: "Basiskarte" },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Hier können wir rasten.'", hor: "true", type: "Basiskarte" },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Hier waren wir doch schon mal.'", hor: "true", type: "Basiskarte" },
        { name: "Weg", Aktion: "", flavour: "Jane: Prof. Hampton ist ein berühmter Archeoöloge.", hor: "true", type: "Basiskarte" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", ver: "true", imgclass: "symbol", type: "Basiskarte" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: "true", ver: "true", imgclass: "symbol", type: "Basiskarte" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: "true", imgclass: "symbol", type: "Basiskarte" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", ver: "true", imgclass: "symbol", type: "Basiskarte" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", ver: "true", imgclass: "symbol", type: "Basiskarte" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", hor: "true", ver: "true", imgclass: "symbol", type: "Basiskarte" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", hor: "true", imgclass: "symbol", type: "Basiskarte" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", ver: "true", info: "info", bgc: "blue", type: "Basiskarte" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", ver: "true", info: "info", bgc: "blue", type: "Basiskarte" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", ver: "true", info: "info", bgc: "blue", type: "Basiskarte" },
        { name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.", ver: "true", imgclass: "symbol", pagebreak: "pagebreak", type: "Basiskarte" },
        { name: "Hängebrücke", info: "warn", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", type: "Basiskarte" },
        { name: "Hängebrücke", info: "warn", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", type: "Basiskarte" },
        { name: "Hängebrücke", info: "warn", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", type: "Basiskarte" },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", hor: "true", type: "Basiskarte" },
        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange. ", hor: "true", imgclass: "symbol", type: "Basiskarte" },
        { name: "Weg", level: "normal", Aktion: "", flavour: "Jack: 'Hier machen wir Pause.'", ver: "true", type: "Basiskarte" },
        { name: "Weg", level: "normal", Aktion: "", flavour: "Jane: 'Ist das der richtige Weg?'", hor: "true", type: "Basiskarte" },
        { name: "Weg", level: "normal", Aktion: "", flavour: "Jane: 'Ist das der richtige Weg?'", hor: "true", type: "Basiskarte" },
        { name: "Hängebrücke", level: "normal", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", info: "warn", bgc: "gelb", type: "Basiskarte" },

        { name: "Boot", Aktion: "Mit dem Boot kannst du dem See überqueren oder auf dem Fluss fahren.", hor: true, imgclass: "symbol", type: "Feldkarte" },
        { name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.", ver: "true", imgclass: "symbol", pagebreak: "pagebreak", type: "Feldkarte" },
        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", hor: "true", imgclass: "symbol", type: "Feldkarte" },
        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", ver: "true", imgclass: "symbol", type: "Feldkarte" },
        { name: "Höhle", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.", ver: "true", info: "info", bgc: "blue", type: "Feldkarte" },
        { name: "Inschrift", Aktion: "Wenn du mit dem Tagebuch beim Tempel und bei dieser Inschrift warst, kann Jane den Weg zum 'Reich der Schlangen' erkennen.", hor: "true", info: "Jane2", bgc: "blue", win: "Schriftrolle", bgcwin: "green", type: "Feldkarte" },
        { name: "Affenhorde", Aktion: "Die Affenhorde lässt dich nicht passieren. Lege einen Gegenstand in den Vorrat, dann darfst du vorbeigehen.", info: "problem", pagebreak: "pagebreak", type: "Feldkarte" },
        { name: "Affenhorde", Aktion: "Die Affenhorde lässt dich nicht passieren. Lege einen Gegenstand in den Vorrat, dann darfst du vorbeigehen.", info: "problem", pagebreak: "pagebreak", type: "Feldkarte" },
        { name: "See", Aktion: "Nur mit dem Boot kannst du den See betreten oder überqueren.", info: "problem", type: "Feldkarte" },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", ver: "true", type: "Feldkarte" },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", type: "Feldkarte" },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", type: "Feldkarte" },
        { name: "Tagebuch", Aktion: "Ihr findet das Tagebuch von Professor Hampton. Er sucht das verschollene Reich Mu. Suche zuerst den Tempel und dann die Inschrift.", imgclass: "symbol", type: "Feldkarte" },
        { name: "Tempel", Aktion: "Jane hat die Tempelruine gefunden. Bring das Tagebuch zuerst hierher und dann zur Inschrift.", hor: "true", bgc: "green", type: "Feldkarte" },
    ],
    initActions: [
        { name: "Fluss", order: "home", Aktion: "Wenn ihr den Weg zum 'Reich der Schlangen' kennt, könnt ihr mit dem Boot über den Fluss dorthin fahren und den Akt 1 beenden.", task: true, info: "info", bgc: "blue", type: "Aktionskarte" },
        { name: "Mine", order: "home", Aktion: "In dieser ine wurde vor langer Zeit nach Diaenten geschürft. Wenn alle 4  Höhlen im Spielplan gefunden sind, könnt ihr über diese Mine in den nächsten Akt wechseln.", task: true, info: "info", bgc: "blue", type: "Aktionskarte" },
        { name: "Lager",  Aktion: "Du findest ein verlassenes Lager. Du kannst bis zu 2 Dinge aus dem Vorrat auf passende leere Karten legen. (z.B.: Liane auf Lianenkarte)", task: true, type: "Aktionskarte" },
        { name: "Überfall", Aktion: "Jack kommt ins Lager zurück und Jane ist verschwunden. Er findet Spuren eines Kampfes und Pfeile der Kannibalen. Lege Janes Inventarkarte zur Seite.", info: "Voodoopuppe", win: "Jane2", bgcwin: "green", task: true, type: "Aktionskarte" },

        { name: "Tierfalle", Aktion: "Dein Bein verletzt sich in einer Tierfalle des Großwildjägers. Du kannst bis zu einem anderen Eckfeld pro Zug nur 3 Felder weit ziehen.", task: true, fuss: "-1", type: "Aktionskarte" },
        { name: "Karte", Aktion: "Du findest eine Karte des Dschungels. Ab sofort kannst du Karten auch diagonal anlegen.", task: true, type: "Aktionskarte" },
        { name: "Whiskykiste", Aktion: "Jack findet eine Kiste voll Whisky. Falls du in den letzten 24 Stunden keinen Alkohol getrunken hat, kann sich auch Jack beherrschen. Ansonsten säuft er sich voll und verliert einen Gegenstand aus dem Inventar.", task: true, type: "Aktionskarte" },
        { name: "Treibsand", Aktion: "Jack bleibt im Treibsand stecken. Jane muss eine Liane hierherbringen, um ihn zu retten. Gib die Liane dazu ab. Bisdahin kannst du Jacks Inventarkarte nicht verwenden.", task: true, type: "Erweiterung Aktionskarte" },
        { name: "Sturm", Aktion: "Ein Sturm zieht durch den Dschungel. Alle verwendeten Macheten kommen auf Machetenfelder zurück.", task: true, type: "Erweiterung Aktionskarte" },
        { name: "Abendrot", Aktion: "Im Sonnenuntergang verliebt sich Jack in Jane. Er weiss nicht, ob Sie seine Liebe erwidert. Schau dir die nächsten drei Karten vom Stapel an und lege Sie gemeinsam zurück oder unter den Stapel.", bgc: "green", win: "Edelstein", bgcwin: "green", task: true, type: "Aktionskarte" },
    ],
    secondActions: [

        { name: "Rucksack", Aktion: "Du findest einen alten Rucksack. Nimm die Inventarkarte Rucksack hinzu und lege den Rucksack darauf.", ver: "true", imgclass: "symbol", type: "Basiskarte" },
    ],
    start: { name: "Akt I", Aktion: "Jane hat den Piloten Jack für eine geheime Expedition in den Dschungel engagiert. Jack hat Alkoholprobleme und versucht für den Auftrag nüchtern zu bleiben. Das Flugzeug stürzt kurz vor dem Ziel ab. Jemand hat die Tanks durchlöchert...", task: true, type: "Startkarte" }
}