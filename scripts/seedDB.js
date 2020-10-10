const mongoose = require("mongoose");
const db = require("../database/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/tempDB"
);

const voterSeed = [
    {
        id: 1,
        name: "Mitchell Underwood",
        county: "Wake",
        state: "NC",
        country: "USA",
        zip: "27612",
        issues: [
            {
                issue: "Net Neutrality",
                important: true,
                stance: 0
            },
            {
                issue: "Economy",
                important: false,
                stance: 5
            },
            {
                issue: "China Tariff",
                important: true,
                stance: -5
            }
        ],
        candidate: true,
        campaign: {
            level: "County",
            body: "School Board",
            office: "School Board Member"
        }
    },
    {
        id: 2,
        name: "Bob Smith",
        county: "Durham",
        state: "NC",
        country: "USA",
        zip: "27606",
        issues: [
            {
                issue: "Net Neutrality",
                important: true,
                stance: 0
            },
            {
                issue: "Economy",
                important: false,
                stance: 5
            },
            {
                issue: "China Tariff",
                important: true,
                stance: -5
            }
        ],
        candidate: "",
        campaign: {
            level: "",
            body: "",
            office: ""
        }
    }
];
db.Voter
    .remove({})
    .then(() => db.Voter.collection.insertMany(voterSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });