var persons = {
    "title": "persons",
    "type": "array",
    "minItems": 5,
    "maxItems": 12,
    "items": {
        "type": "object",
        "properties": {
            "id": {
                "$ref": "#/definitions/positiveInt"
            },
            "namex": {
                 "type": "string",
                 "faker": "name.firstName"
                 
            },
             "delivery": {
                 "type": "date",
                 "faker": "date.past"
            },
             "name": {
                 "type": "string",
                 "faker": {
                     "fake": "{{name.firstName}} {{name.lastName}}"}
            }
        },
        "uniqueItems ": [
            "id"
        ],
        "required": [
            "id","name","namex"
        ]
    },
    "definitions": {
        "positiveInt": {
            "type": "integer",
            "minimum": 0,
            "maximum": 100,
            "exclusiveMinimum": true
        }
    }
}
jsf.extend('faker', function(faker){
  faker.locale = "de"; // or any other language
  faker.custom = {
    statement: function(length) {
      return faker.name.firstName() + " has " + faker.finance.amount() + " on " + faker.finance.account(length) + ".";
    }
  };
  return faker;
});

var sample = jsf(persons);
console.log(sample);