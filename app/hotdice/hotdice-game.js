
Polymer({
    is: 'hotdice-game',
    properties: {
        config: {
            notify: true
        }
    },
    attached: function () {
        var self = this;
        var engine = this.$.engine;
        //setInterval(console.log, 3000, engine);
        this.fire('reroll', { stack: 'stack' }, { node: engine });
        setInterval(function() {
            engine.fire('reroll', {stack: 'roll'}, {node: engine});
        }, 3000);
        //setInterval(this.$.engine.reroll, 3000, 'stack');
    }
});