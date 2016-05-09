var engine = {
    cards: [
        { count: 4, type:"Standard", name: "Krieg", move: "1", strength: 6, desc: "In diesem Zug mit eigenen Einheiten in ein Land ohne eigene Einheiten ziehen." },
        { count: 4, type:"Standard", name: "Marsch", move: "4", strength: 3, desc: "In dieser Runde dürfen alle 3 Karten gespielt werden. Diese Karte zusätzlich als Bewegung oder Angriff." },        
        { count: 4, type:"Standard", name: "Turmbau", move: "2", strength: 4, desc: "Einen neuen Turm aus der Bereitschaft auf ein Feld im Besitz setzen. Der Turm gibt in der Verteidigung 2 Punkte." },
        { count: 4, type:"Standard", name: "Einheit", move: "3", strength: 2, desc: "Eine neue Einheit aus der Bereitschaft auf ein Feld im Besitz mit Turm setzen." },
        { count: 4, type:"Standard", name: "Forschung", move: "5", strength: 5, desc: "Zwei neue Karte ziehen und eine davon unter das Deck schieben. Die andere unter den Forschungsstapel." },
        { count: 4, type:"Standard", name: "Steuern", move: "6", strength: 1, desc: "Pro Feld im Besitz darf man eine Einheit(1F) oder einen Turm(2F) in die Bereitschaft legen." },

        { count: 2, type:"Forschung", name: "Schiff", move: "0", strength: 3, desc: "Karte offen: Küstenländer werden automatisch versorgt. Angriff +1 auf Küstenländer." },
        { count: 2, type:"Forschung", name: "Katapult", move: "2", strength: 5, desc: "Bei Angriff mit dieser Runde: In einem gewonenen Kampf wird zusätzlich ein Turm zerstört." },
        { count: 2, type:"Forschung", name: "Partisanen", move: "2", strength: 5, desc: "Karte offen: Unversorgte Einheiten haben eine Verteidigung von 1, können aber immer noch nicht angreifen." },
    ],
    shuffle: function() {
        for (var j, x, i = this.cards.length; i; j = Math.floor(Math.random() * i), x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x);
        return this.cards;
    },
    init: function(game) {

    }
}
