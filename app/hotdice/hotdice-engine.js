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
        'diceMoved(model.splices)'
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
    _modelIdx: function (name) {
        return this.model.findIndex(function (x) { return x.name == name; });
    },
    diceMoved: function (ev) {
        console.log("engine: " + ev);
    },
    _getPath: function (name) {
        return 'model.' + this._modelIdx(name) + '.content';
    },
    rerollAll: function (event) {
        console.log("rerollAll: " + event.detail);
        var stack = event.detail.stack;
        var cont = this.model.filter(function (x) { return x.name == stack; })[0];
        var self = this;
        if (cont) {
            cont.content.forEach(function (item, idx) {
                var val = item.items[Math.floor(Math.random() * item.items.length)];
                //if(item.reroll) {
                //    item.reroll();
                //}
                self.set(self._getPath(stack) + "." + idx + ".val", val);
                console.log(item);
            });
        }
    }
});
