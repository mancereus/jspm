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
        hearts: 6,
        special: 3
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Tank",
        desc: "",
        hearts: 8,
        special: 1
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Cammy",
        desc: "",
        hearts: 2,
        special: 7
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Laura",
        desc: "",
        hearts: 4,
        special: 5
      }
    ],
    [
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Tank",
        desc: ""
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
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Laura",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
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
        desc: "",
        hearts: 3,
        special: 6
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "ChunLi",
        desc: "",
        hearts: 5,
        special: 3
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Xara",
        desc: "",
        hearts: 7,
        special: 2
      },
      {
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "El Fuerte",
        desc: "",
        hearts: 6,
        special: 3
      }
    ],
    [
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "ChunLi",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Necalli",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "El Fuerte",
        desc: ""
      },
      {
        back: "Right",
        upLeft: { typ: "A", effects: ["", "", "", "", "", ""] },
        upRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        downLeft:{ typ: "X", effects: ["", "", "", "", "", ""] },
        downRight:{ typ: "D", effects: ["", "", "", "", "", ""] },
        name: "Xara",
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
