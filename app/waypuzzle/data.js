var data = [
    {
        name: "Regel 1: Bewegung",
        rows: [
            "         ",
            " 3  2 1Z ",
            "         ",
        ],
        rules: [
            "pro Bewegung sinkt die Bewegungsweite um 1.",
            "Bei Bewegungsweite 0 ist man tot."
        ]
    },
    {
        name: "Regel 2: Zielfeld",
        rows: [
            "     ",
            " 5 Z ",
            "     ",
        ],
        rules: [
            "Das Zielfeld muss am Ende einer Bewegung erreicht werden.",
            "Kein Feld darf mehrfach betreten werden."
        ]
    },
    {
        name: "Regel 3: Wasser",
        rows: [
            "~~~ ~ ",
            "   ~~Z",
            "5   ~ ",
        ],
        rules: [
            "Wasserfelder dürfen überschritten werden.",
            "Kein Bewegungsende auf einem Wasserfeld."
        ]
    },
    {
        name: "Regel 4: Berge",
        rows: [
            "   ~  ",
            "  ~~~ ",
            " MZ ~ ",
            " MM M~",
            "4    ~",
        ],
        rules: [
            "Bergfelder dürfen nicht überschritten werden."
        ]
    },
    {
        name: "Regel 5: Wald",
        rows: [
            "     T  ",
            " M   ~  ",
            "   T  M ",
            " 4~~  M ",
            "    MMM ",
            "    ~  Z",
        ],
        rules: [
            "Waldfelder dürfen nicht überschritten werden.",
            "Bewegungen die direkt neben einem Wald enden, sinken nicht um 1."
        ]
    },
    {
        name: "Land",
        rows: [
            "       ~~      ~~~Z",
            "      ~~ AD   ~~ ~ ",
            " DWW     AAAA~     ",
            "  WD     A A       ",
            "                   ",
            "~~~~~~     A      A",
            "  ~ D~ D AAA       ",
            "~~~~~~~~~~WW       ",
            "                   ",
            "4   A  D  WWW      ",
        ],
        rules: [
            "grosses Puzzle"
        ]

    }
]