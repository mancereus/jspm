var data = [
    {
        name: "Regel 1: Bewegung",
        rows:[
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
        rows:[
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
        name: "Land",
        rows:[
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
                "Bewegung pro Tag sinktdie Bwegung um 1.",
                "Bei Bewegung 0 ist man tot."
            ]
        
    }
]