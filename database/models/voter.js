const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voterSchema = new Schema({
    user_id: { type: Number, required: true },
    name: { type: String, required: true },
    county: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true, default: "US" },
    zip: { type: Number, required: false },
    issues: [{ issue: { type: String, required: true }, important: { type: Boolean, required: true }, stance: { type: Number, required: true } }],
    candidate: { type: Boolean, required: false },
    campaign: { level: { type: String, required: false }, body: { type: String, required: false }, office: { type: String, required: false } },
});

const Voter = mongoose.model("Voter", voterSchema);

module.exports = Voter;