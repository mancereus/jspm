
Polymer({
    is: 'hotdice-engine',
    properties: {
        model: {
            type: Object,
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
        console.log(event.detail);
        var detail = event.detail;
        if (detail.target == detail.src) {
            var removearr = this.splice('model.' + this._modelIdx(detail.src) + '.content', detail.index, 1);
            this.push('model.' + this._modelIdx(detail.target) + '.content', removearr[0]);

        }
        else {
            this.push('model.' + this._modelIdx(detail.target) + '.content', detail.item);
            this.splice('model.' + this._modelIdx(detail.src) + '.content', detail.index, 1);
        }
    },
    _modelIdx: function (name) {
        return this.model.findIndex(function(x) {return x.name == name});
    },
    rerollAll: function (event) {
        var stack = event.detail.stack
        var cont = this.model.filter(x => x.name == stack)[0];
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
