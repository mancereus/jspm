Polymer({
    is: 'hotdice-engine',
    properties: {
        model: {
            type: Array,
            notify: true
        }
    },
    listeners: {
        'reroll': 'rerollAll',
        'moveItem': 'moveItem'
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
    observers: [
        'diceMoved(model.*)'
    ],
    moveItem: function (event) {
        console.log("moveItem: " + event.detail);
        var detail = event.detail;
        if (detail.target == detail.src) {
            var removearr = this.splice(this._getPath(detail.src), detail.index, 1);
            this.push(this._getPath(detail.target), removearr[0]);
        }
        else {
            this.push(this._getPath(detail.target), detail.item);
            this.splice(this._getPath(detail.src), detail.index, 1);
        }
    },
    diceMoved: function (ev) {
        console.log("engine: " + ev);
    },
    _getPath: function (name) {
        return 'model.' + name;
    },
    rerollAll: function (event) {
        console.log("rerollAll: " + event.detail);
        var name = event.detail.stack;
        var cont = this.model[name];
        var self = this;
        if (cont) {
            cont.forEach(function (item, idx) {
                var val = item.items[Math.floor(Math.random() * item.items.length)];
                self.set("model." + name + "." + idx + ".val", val);
                console.log("new dice: " + item.val);
            });
        }
    }
});
