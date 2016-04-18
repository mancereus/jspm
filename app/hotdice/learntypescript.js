// There are 3 basic types in TypeScript
var isDone = false;
var lines = 42;
var name = "Anders";
// When it's impossible to know, there is the "Any" type
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// For tuples define types
// Declare a tuple type
let x;
// Initialize it
x = ['hello', 10, true]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
console.log(x[2] ? "hu" : "hi"); // check boolean
// For collections, there are typed arrays and generic arrays
var list = [1, 2, 3];
// Alternatively, using the generic array type
var list = [1, 2, 3];
// For enumerations:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// Lastly, "void" is used in the special case of a function returning nothing
function bigHorribleAlert() {
    alert("I'm a little annoying box!");
}
// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference
// The following are equivalent, the same signature will be infered by the
// compiler, and same JavaScript will be emitted
var f1 = function (i) { return i * i; };
// Return type inferred
var f2 = function (i) { return i * i; };
var f3 = (i) => { return i * i; };
// Return type inferred
var f4 = (i) => { return i * i; };
// Return type inferred, one-liner means no return keyword needed
var f5 = (i) => i * i;
// Object that implements the "Person" interface
// Can be treated as a Person since it has the name and move properties
var p = { name: "Bobby", move: () => { } };
// Objects that have the optional property:
var validPerson = { name: "Bobby", age: 42, move: () => { } };
// Is not a person because age is not a number
var invalidPerson = { name: "Bobby", age: true };
// Only the parameters' types are important, names are not important.
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
// Classes - members are public by default
class Point {
    // Constructor - the public/private keywords in this context will generate
    // the boiler plate code for the property and the initialization in the
    // constructor.
    // In this example, "y" will be defined just like "x" is, but with less code
    // Default values are also supported
    constructor(x, y = 0) {
        this.y = y;
        this.x = x;
    }
    // Functions
    dist() { return Math.sqrt(this.x * this.x + this.y * this.y); }
}
// Static members
Point.origin = new Point(0, 0);
var p1 = new Point(10, 20);
var p2 = new Point(25); //y will be 0
// Inheritance
class Point3D extends Point {
    constructor(x, y, z = 0) {
        super(x, y); // Explicit call to the super class constructor is mandatory
        this.z = z;
    }
    // Overwrite
    dist() {
        var d = super.dist();
        return Math.sqrt(d * d + this.z * this.z);
    }
}
// Modules, "." can be used as separator for sub modules
var Geometry;
(function (Geometry) {
    class Square {
        constructor(sideLength = 0) {
            this.sideLength = sideLength;
        }
        area() {
            return Math.pow(this.sideLength, 2);
        }
    }
    Geometry.Square = Square;
})(Geometry || (Geometry = {}));
var s1 = new Geometry.Square(5);
// Local alias for referencing a module
var G = Geometry;
var s2 = new G.Square(10);
// Generics
// Classes
class Tuple {
    constructor(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
}
// And functions
var pairToTuple = function (p) {
    return new Tuple(p.item1, p.item2);
};
var tuple = pairToTuple({ item1: "hello", item2: "world" });
// Including references to a definition file:
/// <reference path="jquery.d.ts" />
// Template Strings (strings that use backticks)
// String Interpolation with Template Strings
var name = 'Tyrone';
var greeting = `Hi ${name}, how are you?`;
// Multiline Strings with Template Strings
var multiline = `This is an example
of a multiline string`;
