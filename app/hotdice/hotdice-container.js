
Polymer({
    is: 'hotdice-container',
    behaviors: [DraggableContainerBehavior],
    attached: function () {
        var c = this.data[this.container];
        var cnt = this;
        setInterval(
            function () {
                c.forEach(function (entry) {
                    cnt.set("data." + this.container, "2");
                })
            }, 3000);

    },
    reroll: function () {
        Polymer.dom(this.root).querySelectorAll("board-game-dice")
            .forEach(function (entry) { entry.reroll() });
    },
    notStack: function (container) {
        return container != "stack";

    },
});