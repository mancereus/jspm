
Polymer({
    is: 'hotdice-engine',
    properties: {
        model: {
            type: Object,
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
        var cont = this.model.filter(x => x.name=="roll")[0];
        var self = this;
        if (cont) {
            cont.content.forEach(function (item) {
                item.val = item.items[Math.floor(Math.random() * item.items.length)];
                self.notifyPath('item.splices', item);
                //if(item.reroll) {
                //    item.reroll();
                //}
                console.log(item);
            })
        }
    }
});
