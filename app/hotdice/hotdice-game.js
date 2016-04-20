/// <reference path="../../typings/polymer/polymer.d.ts" />
Polymer({
    is: 'hotdice-game',
    properties: {
        config: {
            type: Object,
            notify: true
        }
    },
    attached: function () {
        var self = this;
        var engine = this.$.engine;
        //setInterval(console.log, 3000, engine);
        this.fire('reroll', { stack: 'stack' }, { node: engine });
        this.fire('reroll', { stack: 'roll' }, { node: engine });
        // setInterval(this.$.engine.reroll, 3000, 'stack');
    }
});
