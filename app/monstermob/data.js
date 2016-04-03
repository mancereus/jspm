var engine = {
    cards: [
        { type: "Schatz", subtype: "A", count: 4, owner: "" },
        { type: "Schatz", subtype: "B", count: 4, owner: "" },
        { type: "Schatz", subtype: "C", count: 4, owner: "" },
        { type: "Schatz", subtype: "D", count: 4, owner: "" },
        { type: "Schwert", subtype: "A", count: 2, owner: "" },
        { type: "Schwert", subtype: "B", count: 2, owner: "" },
        { type: "Tür", subtype: "A", count: 2, owner: "" },
        { type: "Tür", subtype: "B", count: 2, owner: "" },
        { type: "Mob", subtype: "A", count: 4, dark: "dark", owner: "" },
        { type: "Mob", subtype: "B", count: 4, dark: "dark", owner: "" },
        { type: "Mob", subtype: "C", count: 4, dark: "dark", owner: "" },
        { type: "Mob", subtype: "D", count: 4, dark: "dark", owner: "" },
        { type: "Biss", subtype: "A", count: 3, dark: "dark", owner: "" },
        { type: "Biss", subtype: "B", count: 3, dark: "dark", owner: "" },
        { type: "Biss", subtype: "C", count: 3, dark: "dark", owner: "" },
        { type: "Dieb", subtype: "A", count: 3, dark: "dark", owner: "" },
        { type: "Dieb", subtype: "B", count: 3, dark: "dark", owner: "" },
        { type: "Dieb", subtype: "C", count: 3, dark: "dark", owner: "" },
    ],
    shuffle: function (){
			    for(var j, x, i = this.cards.length; i; j = Math.floor(Math.random() * i), x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x);
			    return this.cards;
			},
   init: function(game) {
              
   }
}

