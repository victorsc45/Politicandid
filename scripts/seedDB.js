const mongoose = require("mongoose");
const db = require("../database/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tempDB");

const userSeed = [
  {

    username: "Mitchell@Underwood.com",
    password: "abc123",
    voterInfo: {
      county: "Wake",
      state: "NC",
      country: "USA",
      zip: "27612",
      photoUrl: "https://avatars0.githubusercontent.com/victorsc45"
    },


    issues: [
      {
        belief: "Net Neutrality",
        important: true,
        stance: 0,
      },
      {
        belief: "Economy",
        important: false,
        stance: 5,
      },
      {
        belief: "China Tariff",
        important: true,
        stance: -5,
      },
    ],
    candidate: true,
    campaign: {
      level: "County",
      body: "School Board",
      office: "School Board Member",
    },

  },
  {
    username: "victor@some.com",
    password: "123456",
    voterInfo: {
      county: "Durham",
      state: "NC",
      country: "USA",
      zip: "27606",
      photoUrl: "https://avatars0.githubusercontent.com/victorsc45"
    },


    issues: [
      {
        belief: "Net Neutrality",
        important: true,
        stance: 0,
      },
      {
        belief: "Economy",
        important: false,
        stance: 5,
      },
      {
        belief: "China Tariff",
        important: true,
        stance: -5,
      },
    ],
    candidate: false,
    campaign: {
      level: "",
      body: "",
      office: "",
    },

  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
