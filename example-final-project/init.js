// this is the equivalent of 'use' in the mongo shell
db = db.getSiblingDB("carParts")

// this first collection has a validator, your project only requires _one_
db.createCollection("manufacturers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "name", "address" ],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        // we make use of MongoDBs ability to store nested objects
        address: {
          bsonType: "object",
          required: [ "street", "city", "state", "zip" ],
          properties: {
            // this is an optional property for extra street information (apartment number, etc)
            additional: {
              bsonType: "string",
              description: "must be a string if the field exists"
            },
            street: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            city: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            state: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            zip: {
              bsonType: "string",
              description: "must be a string and is reuired"
            }
          }
        },
        phone: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
})

// these collections _do not_ have validators
db.createCollection("customers")
db.createCollection("parts")
db.createCollection("orders")

// your project does not require data, but here is some as an example 
db.manufacturers.insertMany([
  {
    name: "Goodtime Auto",
    address: {
      street: "123 Madeup Road",
      city: "Trenton",
      state: "NJ",
      zip: "08619"
    },
    phone: "6095555555"
  },
  {
    name: "Badtime Auto",
    address: {
      additional: "The Rickety Shack",
      street: "321 Legit Drive",
      city: "Newark",
      state: "NJ", 
      zip: "07101"
    },
    phone: "7325555555"
  },
  {
    name: "Freedom Car Parts",
    address: {
      street: "1 Buckleberry Ave",
      city: "Camden",
      state: "NJ",
      zip: "08030",
    },
    phone: "1234567890"
  }
])
