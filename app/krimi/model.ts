enum PersonStatus {
    wütend,
    ruhig,
    traurig,
    verzweifelt,
    
}

interface Person {
    id: Number;
    fname: String;
    lname: String;
    dead?: boolean;
    status?: PersonStatus;
    
}
class Actor {
    static counter = 0;
    id: Number;
    fname: String;
    lname: String;
    constructor(public firstName, public lastName) {
        this.fname = firstName;
        this.lname = lastName;
        this.id = Actor.counter++;
    }
}

interface Place {
    pname: String;
}

interface Time {
    time: String;
}

enum ActionType {
    liebt, hasst, tötet, besticht, erpresst
}

interface Action {
    actor : Person;
    on : Person;
    zeugen : Array<Person>;
    type : ActionType;
    time : Time;
    place : Place;
    getDesc(): String;
}

interface Game {
    persons: Array<Person>;
    places: Array<Place>;
    actions: Array<Action>;
    erkundet: Array<Action>;
    init(): Game;
    getRandomAction():Action;
    getPersonTimeline(person: Person): Map<String, Place>;
}

