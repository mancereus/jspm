var engine = {
  cards: [
    [
      {
        upLeft: { typ: "A", effects: ["-1", "", "", "", "-2", ""] },
        upRight:{ typ: "D", effects: ["+1", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        name: "Ryu",
        desc: "",
        hearts: 8,
        special: 4
      },
      {
        upLeft: { typ: "A", effects: ["-2", "-1", "", "", "-2", ""] },
        upRight:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "A", effects: ["-3", "-1", "-2", "", "-4", ""] },
        name: "Tank",
        desc: "",
        hearts: 11,
        special: 1
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        name: "Cammy",
        desc: "",
        hearts: 7,
        special: 5
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        name: "Laura",
        desc: "",
        hearts: 6,
        special: 6
      }
    ],
    [
      {
        back: "Right",
        upLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        upRight: { typ: "A", effects: ["-1", "-2", "", "", "", "-2"] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "h", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "s", "", "s"] },
        name: "Tank",
        desc: "massiver Angriff nach links; kaum Blocken"
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "+1", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "-1", "", "", "", "-2"] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Ryu",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Laura",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Cammy",
        desc: ""
      }
    ],
    [
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Necalli",
        hearts: 10,
        special: 2
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "ChunLi",
        desc: "",
        hearts: 9,
        special: 3
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Xara",
        desc: "",
        hearts: 8,
        special: 4
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "El Fuerte",
        hearts: 9,
        special: 3
      }
    ],
    [
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["0", "", "s", "", "*", ""] },
        downRight:{ typ: "D", effects: ["", "0", "", "h", "", "*"] },
        name: "ChunLi",
        desc: "* Jump: kann die Position wechseln"
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Necalli",
        desc: "kein Ausweichen, nur Blocken",
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "El Fuerte",
        desc: "der schnellste Läufer"
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Xara",
        desc: "durchbricht die Blocker"
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
