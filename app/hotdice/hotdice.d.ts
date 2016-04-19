interface Model {
    stack: [Dice]
    roll: [Dice]
}

interface Dice {
    color: string,
    items: [number|string],
    val: string
}