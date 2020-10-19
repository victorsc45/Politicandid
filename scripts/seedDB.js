const mongoose = require("mongoose");
const db = require("../database/models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tempDB");

const Seed = [
  {
    name: "Mitchell Underwood",
    city: "Raleigh",
    county: "Wake",
    state: "NC",
    country: "USA",
    username: "mitchell@underwood.com",
    password: "$2a$10$ma0MBuyBvsrA0YRZKYQf6uaLJVSLITsQAKIlwQuhNs509OLV5zWe6",
    issues: [{issue: "Bunnies", stance: 5, important: true},{issue: "Kitties", stance: -5, important: true}],
    candidate: true, 
    campaign: {level: "Local", body: "School Board", position: "School Board Chair"}
  },
  {
    name: "Luke Evans",
    city: "Raleigh",
    county: "Wake",
    state: "NC",
    country: "USA",
    username: "luke@evans.com",
    password: "$2a$10$6hxNMqK/ITjkrfClBtH7TeV1lCwEcfRddO8.sBBDEogvuGh06qtRK",
    issues: [{issue: "Fortnight", stance: 5, important: true},{issue: "Tiger King", stance: -5, important: true}]
  },
  {
    name: "Matthew Neal",
    city: "Raleigh",
    county: "Wake",
    state: "NC",
    country: "USA",
    username: "matthew@neal.com",
    password: "$2a$10$r0ldOGYNx555jgQUn.8.y.mWv/rZiNms7EDwuNpxH2khaSfx5V8pq",
    issues: [{issue: "Cycling", stance: 5, important: true},{issue: "Printing", stance: -5, important: true}]
  },
  {
    name: "Victor Litzau",
    city: "Raleigh",
    county: "Wake",
    state: "NC",
    country: "USA",
    username: "victor@litzau.com",
    password: "$2a$10$5RmszFBpPRG0rLb18ngDy.K/sMoATHNpa25SHGdTGyPdpYG56gn9C",
    issues: [{issue: "Airbrushing", stance: 5, important: true},{issue: "Charleston", stance: -5, important: true}]
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(Seed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
