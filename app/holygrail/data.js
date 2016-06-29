var game = {
    cards: [
        { type: "Kreuzung", hor: false, ver: true, btype: "Monster", bhor: false, bver: true},
        { type: "Kreuzung", hor: true, ver: false, btype: "Monster", bhor: true, bver: false},
        { type: "Kreuzung", hor: false, ver: false, btype: "Tür", bhor: false, bver: true},
        { type: "Drache", hor: true, ver: false, btype: "Monster", bhor: false, bver: true},
        { type: "Drache", hor: false, ver: false, btype: "Falle", bhor: false, bver: false},
        { type: "Brunnen", hor: true, ver: false, btype: "Drache", bhor: false, bver: true},
        { type: "Brunnen", hor: false, ver: true, btype: "Monster", bhor: false, bver: false},
        { type: "Falle", hor: false, ver: true, btype: "Brunnen", bhor: true, bver: false},
        { type: "Falle", hor: false, ver: false, btype: "Tür", bhor: false, bver: true},
        { type: "Monster", hor: true, ver: false, btype: "Brunnen", bhor: false, bver: true},
        { type: "Monster", hor: false, ver: false, btype: "Kreuzung", bhor: true, bver: false},
        { type: "Tür", hor: true, ver: false, btype: "Drache", bhor: false, bver: true},
        { type: "Tür", hor: false, ver: true, btype: "Falle", bhor: true, bver: false},
        { type: "Tür", hor: true, ver: false, btype: "Brunnen", bhor: true, bver: false},
        { type: "Kreuzung", hor: false, ver: true, btype: "Falle", bhor: false, bver: true},
        { type: "Drache", hor: false, ver: true, btype: "Tür", bhor: false, bver: true},
        { type: "Monster", hor: false, ver: false, btype: "Drache", bhor: true, bver: false},
        { type: "Brunnen", hor: false, ver: true, btype: "Kreuzung", bhor: true, bver: false},
    ],
    old: [
        { type: "Falle", hor: false, ver: false, btype: "Drache", bhor: false, bver: true},
        { type: "Drache", hor: true, ver: false, btype: "Kreuzung", bhor: false, bver: true},
        { type: "Tür", hor: false, ver: true, btype: "Kreuzung", bhor: false, bver: false},
        { type: "Monster", hor: false, ver: true, btype: "Tür", bhor: true, bver: false},

    ],
    start: { type: "Start", hor: false, ver: false, btype: "Start", bhor: false, bver: false, open: true},
    end: { type: "Ziel", hor: true, ver: true,btype: "Ziel", bhor: true, bver: true, open: true}
};
