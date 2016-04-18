
Polymer({
    
    is: 'hotdice-dice',
    properties: {
        data: {
            type: Object,
            notify: true,
            observer: "dataChanged"
        },
        val: {
            type: String
        },
        dark: {
            type: Boolean,
            value: false
        },
    },
    ready: function () {
        this.$.front.style.width = '50px';
        this.$.front.style.height = '50px';
        this.toggleClass("dark", this.dark, this.$.front);
        var dice = this;
    },
    
    dataChanged: function (e) {
        console.log(e);
    },
    
    reroll: function (e) {
        this.set("data.val", this.data.items[Math.floor(Math.random() * this.data.items.length)]);
    },
    refresh: function (event) {
        console.log(event);
    }

});
