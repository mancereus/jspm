var engine = {
  cards: [
    [
      {
        upLeft: { typ: "A", effects: ["b", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "A", effects: ["", "", "b", "", "b", ""] },
        name: "Ryu",
        desc: "",
        hearts: 6,
        special: 4
      },
      {
        upLeft: { typ: "A", effects: ["b", "", "", "", "", ""] },
        upRight:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "A", effects: ["b", "", "b", "", "", ""] },
        name: "Tank",
        desc: "",
        hearts: 9,
        special: 1
      },
      {
        upLeft: { typ: "A", effects: ["b", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "D", effects: ["", "", "", "b", "", ""] },
        downRight:{ typ: "A", effects: ["", "", "", "", "b", ""] },
        name: "Cammy",
        desc: "",
        hearts: 5,
        special: 5
      },
      {
        upLeft: { typ: "A", effects: ["b", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", "b"] },
        downRight:{ typ: "A", effects: ["", "", "b", "", "", ""] },
        name: "Laura",
        desc: "",
        hearts: 4,
        special: 6
      }
    ],
    [
      {
        back: "Right",
        upLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        upRight: { typ: "A", effects: ["", "b", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "s", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", "s"] },
        name: "Tank",
        desc: "massiver Angriff nach links; kaum Blocken"
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "b", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "h", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "s", "", ""] },
        name: "Ryu",
        desc: "leite den Angriff zurück"
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "b", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "h", ""] },
        downRight:{ typ: "X", effects: ["", "", "", "", "", "h"] },
        name: "Laura",
        desc: "Magieangriff"
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "b", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["s", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "h", "", "", "", ""] },
        name: "Cammy",
        desc: "Allrounder"
      }
    ],
    [
      {
        upLeft: { typ: "A", effects: ["b", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "b", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["b", "", "", "", "", ""] },
        name: "Necalli",
        hearts: 8,
        special: 2
      },
      {
        upLeft: { typ: "A", effects: ["b", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "b", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "b", "", "", ""] },
        name: "ChunLi",
        desc: "",
        hearts: 7,
        special: 3
      },
      {
        upLeft: { typ: "A", effects: ["b", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "D", effects: ["", "b", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "b", "", "", ""] },
        name: "Xara",
        desc: "",
        hearts: 7,
        special: 3
      },
      {
        upLeft: { typ: "X", effects: ["b", "", "", "", "", ""] },
        upRight:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "A", effects: ["", "", "", "", "", "b"] },
        downRight:{ typ: "A", effects: ["", "", "", "", "b", ""] },
        name: "El Fuerte",
        hearts: 6,
        special: 4
      }
    ],
    [
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "b", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "s", "", "*", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "h", "", "*"] },
        name: "ChunLi",
        desc: "* Jump: kann die Position wechseln"
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "b", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["s", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "s", "", "", "", ""] },
        name: "Necalli",
        desc: "kein Ausweichen, steht fest",
      },
      {
        back: "Right",
        upLeft: { typ: "X", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "X", effects: ["", "b", "", "", "", ""] },
        downLeft:{ typ: "D", effects: ["", "", "s", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "s", "", ""] },
        name: "El Fuerte",
        desc: "der schnellste Läufer"
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "b", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "s", "", "", ""] },
        downRight:{ typ: "X", effects: ["", "", "", "", "", "s"] },
        name: "Xara",
        desc: "durchbricht mit Doppelangriff"
      }
    ]
  ],
  shuffle: function() {
    for (
      var j, x, i = this.cards.length;
      i;
      (j = Math.floor(Math.random() * i)), (x = this.cards[--i]), (this.cards[
        i
      ] = this.cards[j]), (this.cards[j] = x)
    );
    return this.cards;
  },
  init: function(game) {}
};
