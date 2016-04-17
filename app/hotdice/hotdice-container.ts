interface Rollable {
    reroll;
}


Polymer({
    is: 'hotdice-container',
    behaviors: [DraggableContainerBehavior],
    attached: function () {
        var c = this.data[this.container];
        var cnt = this;
        setInterval(
            function () {
                c.forEach(function (entry) {
                    cnt.set("data." + this.container + ".splices", "2");
                })
            }, 3000);
        this.notifyPath("data." + this.container + ".splices", "2");
    },
    reroll: function () {
        this.
        Polymer.dom(this.root).querySelectorAll("board-game-dice")
            .forEach(function (entry) {
                if (entry.reroll)
                    entry.reroll()
            });
    },
    notStack: function (container) {
        return container != "stack";

    },
});