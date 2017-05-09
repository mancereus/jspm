var engine = {
    cards: [
        [
        { upLeft: "A",upRight: "A", downLeft: "D" , downRight: "D", name: "MegaMan", hearts: 3, special: 3 },
        { upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "MegaMan", hearts: 3, special: 3 },
        { upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "MegaMan", hearts: 3, special: 3 },
        { upLeft: "A",upRight: "X", downLeft: "D" , downRight: "D", name: "MegaMan", hearts: 3, special: 3 },
        ],[
        ],[
        { type: "Mob", subtype: "A", count: 4, dark: "dark", owner: "" },
        { type: "Mob", subtype: "B", count: 4, dark: "dark", owner: "" },
        { type: "Mob", subtype: "C", count: 4, dark: "dark", owner: "" },
        { type: "Mob", subtype: "D", count: 4, dark: "dark", owner: "" },
        ]
    ],
    shuffle: function() {
        for (var j, x, i = this.cards.length; i; j = Math.floor(Math.random() * i), x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x);
        return this.cards;
    },
    init: function(game) {

    }
}
