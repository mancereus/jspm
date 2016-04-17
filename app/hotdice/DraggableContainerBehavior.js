var DraggableContainerBehavior = {
    properties: {
        container: {
            type: String,
            value: "stack",
            notify: true
        },
        data: {
            type: Array,
            value: function () { return []; }
        }
    },
    observers: [
        'refresh(data.*)'
    ],
    attached: function (e) {
        this.$.tmpl.set('items', this.data[this.container]);
    },
    refresh: function (e) {
        this.$.tmpl.render();
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
                if (container == srccontainer) {
                    var removearr = this.splice('data.' + srccontainer, e.model.index, 1);
                    this.push('data.' + container, removearr[0]);
                }
                else {
                    this.push('data.' + container, e.model.item);
                    this.splice('data.' + srccontainer, e.model.index, 1);
                }
                break;
        }
    },
};
