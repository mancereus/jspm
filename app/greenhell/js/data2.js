var data2 = {
    akt: 2,
    initcards: [
        { name: "Weg", Aktion: "", flavour: "Jane: 'Was war das für ein Geräusch?'", hor: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Prof. Hampton ist vermutlich schon tot.' Jane: 'Nein, er lebt noch.'", hor: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Hier können wir rasten.'", hor: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Vorsicht, die ist giftig.'", ver: true },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Wir brauchen mehr Wasser zum Trinken.'", ver: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Wir sollten umkehren.'", ver: true },
        { name: "Weg", Aktion: "", flavour: "Jane: 'Prof. Hampton ist bei der letzten Expedition verschollen.'", ver: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Hier geht es nicht weiter.'", ver: true, hor: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Pause.'", ver: true, hor: true },
        { name: "Weg", Aktion: "", flavour: "Jack: 'Pause.'", ver: true, hor: true },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", ver: true, imgclass: "symbol" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: true,  imgclass: "symbol" },
        { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", ver: true,  imgclass: "symbol" },
        { name: "Boot", Aktion: "Mit dem Boot kannst du dem See überqueren oder auf dem Fluß fahren.", hor: true, imgclass: "symbol" },
        { name: "Rucksack", Aktion: "Du findest einen alten Rucksack. Nimm die Inventarkarte Rucksack hinzu.", ver: true, imgclass: "symbol" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", ver: true, imgclass: "symbol" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", ver: true, imgclass: "symbol" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", ver: true, imgclass: "symbol" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", hor: true, imgclass: "symbol" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", hor: true, imgclass: "symbol" },
        { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", hor: true, imgclass: "symbol" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", ver: true, info: "info" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", ver: true, info: "info" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", hor: true, info: "info" },
        { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", hor: true, info: "info" },
        { name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.", ver: true, imgclass: "symbol" },
        { name: "Kannibalen", Aktion: "Die Kannibalen durchstreifen das Tal. Habt ihr den Schrunpfkopf bei euch, lassen sie euch vorbeiziehen. Ansonsten könnt ihr das Feld nicht betreten.", info: "problem" },
        { name: "Kannibalen", Aktion: "Die Kannibalen durchstreifen das Tal. Habt ihr den Schrunpfkopf bei euch, lassen sie euch vorbeiziehen. Ansonsten könnt ihr das Feld nicht betreten.", info: "problem" },
        { name: "Kannibalen", Aktion: "Die Kannibalen durchstreifen das Tal. Habt ihr den Schrunpfkopf bei euch, lassen sie euch vorbeiziehen. Ansonsten könnt ihr das Feld nicht betreten.", info: "problem" },
        { name: "Kannibalen", Aktion: "Die Kannibalen durchstreifen das Tal. Habt ihr den Schrunpfkopf bei euch, lassen sie euch vorbeiziehen. Ansonsten könnt ihr das Feld nicht betreten.", info: "problem" },
        { name: "Kannibalen", Aktion: "Die Kannibalen durchstreifen das Tal. Habt ihr den Schrunpfkopf bei euch, lassen sie euch vorbeiziehen. Ansonsten könnt ihr das Feld nicht betreten.", info: "problem" },
        { name: "Fels", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.", info: "problem" },
        { name: "Schrumpfkopf", Aktion: "Ihr findet einen Schrumpfkopf der Kannibalen.", hor: true, imgclass: "symbol"},
        { name: "Dynamit", Aktion: "Du findest einen versteckten Vorrat an Dynamit und kannst damit einen Felsen sprengen. Lege dazu das Dynamit von einem Nachbarfeld aus ohne Wand dazwischen auf den Felsen.", imgclass: "symbol", type: "Erweiterung Aktionskarte" },
        { name: "Fels", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.", info: "problem" },

        { name: "Artefakt", Aktion: "Du findest ein Artefakt einer unbekannten Zivilisation. ", imgclass: "symbol", hor: true },
        { name: "Artefakt", Aktion: "Du findest ein Artefakt einer unbekannten Zivilisation. ", imgclass: "symbol", hor: true },
        { name: "Artefakt", Aktion: "Du findest ein Artefakt einer unbekannten Zivilisation. ", imgclass: "symbol", ver: true },
        { name: "Pistole", Aktion: "Die Pistole ist alt und hat nur noch eine Kugel.", hor: true, imgclass: "symbol"},
        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", hor: true, imgclass: "symbol" },
        { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", ver: true, imgclass: "symbol" },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem"},
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem" },
        { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beißt dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem" },
    ],
    initActions: [
        { name: "Tiger", Aktion: "Ein Tiger überrascht euch und jagt euch 2 Felder diagonal zur Mitte. Ihr könnt die Aktion auf diesem Feld ignorieren.", task: true },
        { name: "Alligator", Aktion: "Am Fluß wird Jack von einem Alligator angefallen. Wenn ihr keine Pistole habt, wird er verletzt und ihr könnt pro Zug nur noch maximal 4 Schritte gehen.", task: true },
        { name: "Affenhorde",  Aktion: "Die Affenhorde klaut einen offen liegenden Gegenstand auf dem Plan. Wähle einen Gegenstand aus und lege ihn den Vorrat", info: "problem", task: true },

        { name: "Jäger", order: "accessibility", Aktion: "Der Großwildjäger Stoephasius klaut dir alle Artefakte und bringt sie zur gegenüberliegenden Aktionskarte. Mit der Pistole kannst du sie ihm dort abnehmen.",  task: true },
        { name: "Jäger", order: "accessibility", Aktion: "Der Großwildjäger Stoephasius wurde von Kannibalen gefangen genommen und wird in ihr Dorf transportiert. Mit der Pistole kannst du ihn retten. Aus Dankbarkeit darfst du in der nächsten Partie einen zusätzlichen Stern verwenden.", info: "warn",  task: true },

        { name: "Gefangen", order: "build", Aktion: "Jack wird von den Kannibalen überrascht und gefangen. Jane muss den Kannibalen den Schrumpfkopf geben, dann lassen sie Jack frei. Bis dahin kannst du Jacks Inventarkarte nicht verwenden. ", task: true },

        { name: "Treibsand", order: "build", Aktion: "Jack bleibt im Treibsand stecken. Jane muss eine Liane hierherbringen, um ihn zu retten. Gib die Liane dazu ab. Bis dahin kannst du Jacks Inventarkarte nicht verwenden. Ist Jane nicht dabei, stirbt Jack und das Abenteuer ist zu Ende.", task: true },

        { name: "Diamantenmine", order: "select-all", Aktion: "Mit der Fackel findest du in der dunklen Mine große Diamanten. Wenn du Sie herausholst, verlierst du die Fackel.", info: "warn", imgclass: "symbol", task: true },


        { name: "Königin", order: "gesture", Aktion: "Jane wird von den Kannibalen als Dschungelkönigin verehrt. Lege mit der Fackel ein Feuer, dann kann Jane unbemerkt fliehen. Die Fackel geht in den Vorrat.", task: true },

        { name: "Fluss", order: "home", Aktion: "Wenn du alle anderen Aktionskarten erfüllt hast, könnt ihr mit dem Boot über den Fluß das Abenteuer beenden. Wenn du mind. 2 Artefakte dabei hast, kannst du die nächste Expedition mit einem zusätzlichen Stern beginnen.", task: true },
        { name: "Schatzkammer", order:"exit-to-app", Aktion: "Ihr habt die Schatzkammer der Kannibalen gefunden. Wenn ihr die 3 Artefakte hier ablegt und Jack und Jane dabei sind, könnt ihr die Tür zur Schatzkammer öffnen. Darin findet ihr ein Geheimnis und beendet die Partie erfolgreich.", task: true },
    ],
    start: {name: "Akt II", task: true,
    Aktion: "Ihr erreicht das 'Tal der Kannibalen'. Jane ist sich sicher, dass Prof. Hampton hier hergekommen ist."},
    secrets: [
        {level: 1, text: "Jane: 'Danke Jack, dass wir es bis hier geschafft haben. Ich schulde dir ein paar Hintergründe: Prof. Hampton ist mein Vater. Meine Mutter ist bei der Geburt gestorben. Vater sucht schon seit vielen Jahren nach dem untergegangenen Reich von Atlantis. Von seiner letzten Expedition hier in den Dschungel ist er nicht mehr zurückgekehrt. Ich spüre aber, dass er noch lebt. Lass uns weitersuchen.' Jack sieht plötzlich ein helles Licht auf sich zukommen. In einem Zeitstrudel wird er drei Tage in die Vergangeheit zurückkatapultiert. Er sitzt mit Jane in dem abgestürzten Flugzeug und beginnt das Abenteuer (mit 2 Sternen) von vorne. Jack und Jane können sich nicht an die vorherigen Ereignisse erinnern."},
        {level: 2, text: "Jane: 'Ich kann dir nun vertrauen und dir mein Geheimnis erzählen. Ich besitze eine besondere Gabe. Ich kann die Zeit um bis 3 Tage zuückdrehen. Dabei vergesse ich selbst das Meiste und kann mich nur an kleine Informationen erinnern. Wir haben dieses Abenteuer vermutlich schon viele Male durchlebt. Deswegen glaubst du auch, mich schon so lange zu kennen. Wir werden dieses Abenteuer wiederholen, bis ich weis, wo mein Vater hingegangen ist. Tut mir leid, dass du das alles mitmachen musst.' Erneut kommt der Zeitstrudel auf Jack und Jane zu und verschluckt beide. Sie finden sich ohne Erinnerung im abgestürzten Flugzeug wieder. Das Abenteuer beginnt erneut (mit 3 Sternen)."},
        {level: 3, text: "Jane findet einen versteckten Brief ihres Vaters: 'Liebe Jane, wenn du diese Zeilen liest, bin ich bereits auf dem Weg nach Atlantis. Mit Hilfe dieser Schatzkammer konnte ich den genauen Ort ermittlen. Ich habe deine Mutter Mahara vor 25 Jahren kennengelernt. Nach einer gemeinsamen Nacht war Sie verschwunden. Ein Jahr später kam Sie mit dir im Arm zu mir, und bat mich dich aufzuziehen. Sie ist eine der letzten Überlebenden von Atlantis und du bist die letzte Tochter von Atlantis. Folge mir nun (in Teil 2) und komm in deine eigentliche Heimat. Die Kannibalen sind eigentlich friedlich und bewachen den Zugang zur Schatzkammer und den Eingang zum letzten Ort von Atlantis'. VOr Freude fallen sich Jack und Jane in die Arme und es gibt einen langen intensiven Liebeskuss. The END."},
    ]
 }