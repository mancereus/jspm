var engine = {
    cards: [
        [
        { upLeft: "A",upRight: "X", downLeft: "X" , downRight: "D", name: "MegaMan", hearts: 6, special: 3 },
        { upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "Tank", hearts: 8, special: 1 },
        { upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "Heiler", hearts: 2, special: 7 },
        { upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "Fechter", hearts: 4, special: 5 },
        ],[
        { back: "Right", upLeft: "X",upRight: "A", downLeft: "X" , downRight: "D", name: "MegaMan" },
        { back: "Right", upLeft: "X",upRight: "A", downLeft: "D" , downRight: "D", name: "Tank" },
        { back: "Right", upLeft: "X",upRight: "A", downLeft: "D" , downRight: "D", name: "Heiler" },
        { back: "Right", upLeft: "X",upRight: "A", downLeft: "D" , downRight: "D", name: "Fechter" },
        ],[
        { upLeft: "A",upRight: "A", downLeft: "D" , downRight: "D", name: "Magier", hearts: 3, special: 6 },
        { upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "Schütze", hearts: 5, special: 3 },
        { upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "Zyklop", hearts: 7, special: 2 },
        { upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "Zwerg", hearts: 6, special: 3 },
        ],[
        { back: "Right", upLeft: "A",upRight: "A", downLeft: "D" , downRight: "D", name: "Magier" },
        { back: "Right", upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "Schütze" },
        { back: "Right", upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "Zyklop" },
        { back: "Right", upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "Zwerg" },
        ]
    ],
    shuffle: function() {
        for (var j, x, i = this.cards.length; i; j = Math.floor(Math.random() * i), x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x);
        return this.cards;
    },
    init: function(game) {

    }
}
