Polymer({
    is: 'hotdice-container',
    properties: {
        container: {
            type: String,
            value: "stack",
            notify: true
        },
        data: {
            type: Array,
            value: function () { return []; },
            notify: true,
        }
    },
    attached: function () {
        var cnt = this;
        var c = this.data;
    },
    reroll: function () {
        this.fire('reroll', { stack: this.container }, { node: engine });
    },
    notStack: function (container) {
        return container != "stack";
    },
    _getContainer: function (el) {
        if (el.hasAttribute('container'))
            return el.getAttribute('container');
        while (el.parentElement) {
            el = el.parentElement;
            if (el.hasAttribute('container'))
                return el.getAttribute('container');
        }
        return null;
    },
    trackElement: function (e) {
        switch (e.detail.state) {
            case 'start':
                console.log('Tracking started!');
                break;
            case 'track':
                console.log('Tracking in progress... ' +
                    e.detail.x + ', ' + e.detail.y);
                break;
            case 'end':
                console.log(e.model.item);
                var container = this._getContainer(e.detail.hover());
                var srccontainer = this.container;
                var engine = this.parentElement.querySelector('#engine');
                this.fire("moveItem", { item: e.model.item, index: e.model.index, src: srccontainer, target: container }, { node: engine });
        }
    },
});
