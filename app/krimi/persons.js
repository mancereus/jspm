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
             "birthday": {
                 "type": "date",
                 "faker": "date.past"
            },
             "user": {
                 "faker": "helpers.userCard"
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
            "id","name","user"
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