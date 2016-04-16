///<reference path="../../typings/polymer/polymer.d.ts" />
Polymer({
    is: 'hotdice-engine',
    properties: {
        model: {
            notify: true
        }
    },
    listeners: {
        'reroll': 'rerollAll'
    },
    ready: function () {
        this.init();
    },
    init: function () {
        this.model = model;
    },
    reroll: function (item) {
        item.val = item.items[Math.floor(Math.random() * item.items.length)];
    },
    rerollAll: function (event) {
        var stack = event.detail.stack
        var cont = this.model[stack];
        var self = this;
        if (cont) {
            cont.forEach(function (item) {
                console.log(item);
                item.val = item.items[Math.floor(Math.random() * item.items.length)];
                self.notifyPath('item.val', item.val);
                //if(item.reroll) {
                //    item.reroll();
                //}
            })
        }
    }
});
