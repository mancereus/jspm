/// <reference path="model.ts" />

Polymer({
    is: 'krimi-story',
    properties: {
        actions: Array,
        persons: Array,
        gamedata: {
            type: Object,
            notify: true,
            computed: 'initGame(actions, persons)'
        }
    },
    ready: function () {
        //this.data = personlist;
    },
    gameModified: function (cr) {
        console.log("test" + cr);
    },
    initGame: function (actions: Array<Action>, persons: Array<Person>) {
        if (this.gamedata == undefined) {
            var gd: Game = {
                actions: actions,
                persons: persons,
                places: <Array<Place>>[{ pname: "Bahnhof" }, { pname: "Kino" }, { pname: "Badezimmer" }],
                erkundet: [],
                init: function () { return this },
                getPersonTimeline: function () {
                    var map = new Map();
                    map.set("7:00", persons[0])
                    return map;
                },
                getRandomAction: function () { return actions[0] }
            };
            console.log(gd);
            return gd;
        }
        return this.gamedata;
    }
});