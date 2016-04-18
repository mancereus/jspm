interface Model {
    name: String,
    content: [Dice]
}

interface Dice {
    color: string,
    items: [number|string],
    val: string
}