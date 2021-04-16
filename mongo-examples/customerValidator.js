customerValidator = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "Address", "City", "Country", "District", "First Name",
      "Last Name", "Phone" ],
    properties: {
      Address: {
        bsonType: "string",
      },
      City: {
        bsonType: "string",
      },
      Country: {
        bsonType: "string",
      },
      District: {
        bsonType: "string",
      },
      "First Name": {
        bsonType: "string",
      },
      "Last Name": {
        bsonType: "string",
      },
      Phone: {
        bsonType: "string",
      }
    }
  }
}
