movieValidator = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "Actors", "Category", "Description", "Length", "Rating",
      "Rental Duration", "Replacement Cost", "Special Features", "Title" ],
    properties: {
      Actors: {
        bsonType: "array",
        uniqueItems: true,
        items: {
          bsonType: "object",
          required: [ "First name", "Last name", "actorId" ],
          description: "All actors must have the stated fields",
          properties: {
            "First name": {
              bsonType: "string",
              description: "All actors must have a 'First name'"
            },
            "Last name": {
              bsonType: "string",
              description: "All actors must have a 'Last name'"
            },
            actorId: {
              bsonType: "number",
              description: "All actors must have an 'actorId'"
            }
          }
        }
      },
      Category: {
        enum: [ "Horror", "Documentary", "Family", "Foreign", "Comedy", "Sports",
          "Classics", "Music", "Animation", "Action" ],
        description: "Category must exist and be one of the enum values"
      },
      Description: {
        bsonType: "string",
        description: "Description must exist and be a string"
      },
      Length: {
        bsonType: "string",
        description: "Length must exist and be a string"
      },
      Rating: {
        enum: [ "G", "PG", "PG-13", "R", "NC-17" ],
        description: "Rating must exist and be one of the enum values"
      },
      "Rental Duration": {
        bsonType: "string",
        description: "Rental Duration must exist and be a string"
      },
      "Replacement Cost": {
        bsonType: "string",
        description: "Replacement Cost must exist and be a string"
      },
      "Special Features": {
        bsonType: "string",
        description: "Special Features must exist and be a string"
      },
      Title: {
        bsonType: "string",
        description: "Title must exist and be a string"
      }
    }
  }
}
