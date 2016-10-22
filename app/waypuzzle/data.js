var data = [
    {
        name: "Regel 1: Bewegung",
        rows: [[
            "         ",
            " 3  2 1Z ",
            "         ",
        ]],
        rules: [
            "pro Bewegung sinkt die Bewegungsweite um 1.",
            "Bei Bewegungsweite 0 ist man tot."
        ]
    },
    {
        name: "Regel 2: Zielfeld (Z)",
        rows: [
            [
            "     ",
            " 5 Z ",
            "     ",
            ],
            [
            "Z    ",
            "   7 ",
            "     ",
            "     ",
            ]
        ],
        rules: [
            "Das Zielfeld muss am Ende einer Bewegung erreicht werden.",
            "Kein Feld darf mehrfach betreten werden."
        ]
    },
    {
        name: "Regel 3: Wasser (~)",
        rows: [
        [
        "~~~ ~ ",
        "   ~~Z",
        "5   ~ ",
        ],
        [
        "~~~~  ",
        "   ~~Z",
        "    ~ ",
        " ~~ ~~",
        "5~~~~~",
        ]
        ],
        rules: [
            "Wasserfelder dürfen überschritten werden.",
            "Kein Bewegungsende auf einem Wasserfeld."
        ]
    },
    {
        name: "Regel 4: Berge (M)",
        rows: [
        [
        "   ~  ",
        "  ~~~ ",
        " MZ ~ ",
        " MM M~",
        "4    ~",
        ],
        [
        " ~    ",
        "  ~~~ ",
        " MZ ~ ",
        " MM M~",
        "7    ~",
        ]

        ],
        rules: [
            "Bergfelder dürfen nicht überschritten werden."
        ]
    },
    {
        name: "Regel 5: Wald (T)",
        rows: [
        [
        "     T  ",
        " M   ~  ",
        "   T  M ",
        " 4~~  M ",
        "    MMM ",
        "    ~  Z",
        ],
        [
        "     T  ",
        " M   ~  ",
        "   T  M ",
        "  ~~  M ",
        "    MMMZ",
        "7   ~  ~",
        ],
        ],
        rules: [
            "Waldfelder dürfen nicht überschritten werden.",
            "Bewegungen die direkt neben einem Wald enden, sinken nicht um 1."
        ],
        pagebreak: true
    },
    {
        name: "Regel 6: Dorf (D)",
        rows: [
        [
        "1  ~~~  ",
        " D ~~~  ",
        "   ~~~~~",
        "   ~~~~Z",
        " D ~~~  ",
        "   ~~~  ",
        ],
        [
        "     T  ",
        "M  M    ",
        " D    D ",
        "  ~~  M ",
        "    MMMZ",
        "4   ~  ~",
        ],
        ],
        rules: [
            "Dörfer dürfen nicht überschritten werden.",
            "Bewegungen die direkt neben einem Dorf enden, erhöhen ihre Bewegung um 1."
        ]
    },
    {
        name: "Land",
        rows: [[
            "       ~~      ~~~Z",
            "      ~~ MD   ~~ ~ ",
            " DTT     MMMM~     ",
            "  TD     M M       ",
            "                   ",
            "~~~~~~     M      M",
            "  ~ D~ D MMM       ",
            "~~~~~~~~~~TT       ",
            "                   ",
            "4   M  D  TTT      ",
        ]],
        rules: [
            "grosses Puzzle"
        ]

    }
]