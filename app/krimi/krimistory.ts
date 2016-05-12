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
            ready: function() {
                //this.data = personlist;
            },
            gameModified: function(cr) {
                console.log("test" + cr);
            },
           initGame: function(actions : Array<Action>, persons : Array<Person>) {
               var gd: Game =  {
                   actions: actions,
                   persons: persons,
                   places: [{pname:"Bahnhof"},{pname:"Kino"},{pname:"Badezimmer"}],
                   erkundet: []
               };
               console.log(gd);
               return gd;
           }
        });