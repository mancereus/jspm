
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
    moveItem: function (event) {
        console.log("moveItem: " + event.detail);
        var detail = event.detail;
        this._moveItem(detail.item, detail.index, detail.src, detail.target)
    },
    _moveItem: function (item, index, src, target) {
        if (target == src) {
            var removearr = this.splice(this._getPath(src), index, 1);
            this.push(this._getPath(target), removearr[0]);

        }
        else {
            this.push(this._getPath(target), item);
            this.splice(this._getPath(src), index, 1);
        }
    },
    _getPath(name) {
        return 'model.' + name;
    },
    rerollAll: function (event) {
        var name = event.detail.stack
        var cont = this.model[name];
        var self = this;
        if (cont) {
            cont.forEach(function (item, idx) {
                var val = item.items[Math.floor(Math.random() * item.items.length)];
                self.set("model." + name + "." + idx + ".val", val);
                if(val == 'X') {
                    self._moveItem(item, idx, name, 'stack')
                }
            })
        }
    }
});
