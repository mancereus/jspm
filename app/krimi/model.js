var PersonStatus;
(function (PersonStatus) {
    PersonStatus[PersonStatus["wütend"] = 0] = "wütend";
    PersonStatus[PersonStatus["ruhig"] = 1] = "ruhig";
    PersonStatus[PersonStatus["traurig"] = 2] = "traurig";
    PersonStatus[PersonStatus["verzweifelt"] = 3] = "verzweifelt";
})(PersonStatus || (PersonStatus = {}));
var Actor = (function () {
    function Actor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fname = firstName;
        this.lname = lastName;
        this.id = Actor.counter++;
    }
    Actor.counter = 0;
    return Actor;
}());
var ActionType;
(function (ActionType) {
    ActionType[ActionType["liebt"] = 0] = "liebt";
    ActionType[ActionType["hasst"] = 1] = "hasst";
    ActionType[ActionType["tötet"] = 2] = "tötet";
    ActionType[ActionType["besticht"] = 3] = "besticht";
    ActionType[ActionType["erpresst"] = 4] = "erpresst";
})(ActionType || (ActionType = {}));
