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
        downLeft:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        name: "Cammy",
        desc: "",
        hearts: 7,
        special: 5
      },
      {
        upLeft: { typ: "A", effects: ["-1", "-2", "", "-1", "-1", "+2"] },
        upRight:{ typ: "D", effects: ["+2", "", "+2", "", "+2", ""] },
        downLeft:{ typ: "X", effects: ["+3", "", "", "-2", "", "-2"] },
        downRight:{ typ: "A", effects: ["", "+2", "-2", "", "-2", ""] },
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
        desc: "leite den Angriff zurück"
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "+2", "", "+2", "", "+2"] },
        upRight:{ typ: "A", effects: ["+2", "-1", "-1", "", "+2", "-1"] },
        downLeft:{ typ: "X", effects: ["+3", "", "s", "", "h", "-1"] },
        downRight:{ typ: "X", effects: ["", "+3", "", "s", "-1", "h"] },
        name: "Laura",
        desc: "Magieangriff"
      },
      {
        back: "Right",
        upLeft: { typ: "D", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Cammy",
        desc: "Allrounder"
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
        upLeft: { typ: "A", effects: ["-1", "+2", "-2", "", "", ""] },
        upRight:{ typ: "A", effects: ["+2", "-1", "", "-2", "", ""] },
        downLeft:{ typ: "D", effects: ["+3", "", "", "-2", "", "-2"] },
        downRight:{ typ: "D", effects: ["", "+3", "-2", "", "-2", ""] },
        name: "Xara",
        desc: "",
        hearts: 8,
        special: 4
      },
      {
        upLeft: { typ: "X", effects: ["-1", "+3", "", "", "-2", ""] },
        upRight:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "A", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "A", effects: ["", "", "", "", "", ""] },
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
        desc: "kein Ausweichen, steht fest",
      },
      {
        back: "Right",
        upLeft: { typ: "X", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "X", effects: ["+3", "-1", "", "", "", "-2"] },
        downLeft:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "El Fuerte",
        desc: "der schnellste Läufer"
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["", "+2", "-2", "", "", ""] },
        upRight:{ typ: "A", effects: ["+2", "-2", "", "-3", "", ""] },
        downLeft:{ typ: "X", effects: ["h", "-1", "s", "", "h", ""] },
        downRight:{ typ: "X", effects: ["-1", "h", "", "h", "", "s"] },
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
