var engine = {
  cards: [
    [
      {
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "KungFu",
        desc: "",
        hearts: 6,
        special: 3
      },
      {
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Tank",
        desc: "",
        hearts: 8,
        special: 1
      },
      {
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Heiler",
        desc: "",
        hearts: 2,
        special: 7
      },
      {
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Fechter",
        desc: "",
        hearts: 4,
        special: 5
      }
    ],
    [
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Tank",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "KungFu",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Fechter",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Heiler",
        desc: ""
      }
    ],
    [
      {
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Magier",
        desc: "",
        hearts: 3,
        special: 6
      },
      {
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Schütze",
        desc: "",
        hearts: 5,
        special: 3
      },
      {
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Zyklop",
        desc: "",
        hearts: 7,
        special: 2
      },
      {
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Zwerg",
        desc: "",
        hearts: 6,
        special: 3
      }
    ],
    [
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Schütze",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Magier",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Zwerg",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        upRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downLeft:{ typ: "X", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        downRight:{ typ: "D", effects: ["-1", "-2", "-1", "-1", "-1", "0"] },
        name: "Zyklop",
        desc: ""
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
