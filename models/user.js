const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: Number, required: true },
    user: { type: String, required: true },
    county: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true, default: "US" },
    zip: { type: Number, required: false },
    issue: [{ issue: { type: String, required: true }, important: { type: Boolean, required: true }, stance: { type: Number, required: true } }],
    candidate: { type: Boolean, required: false },
    campaign: { level: { type: String, required: false }, body: { type: String, required: false }, office: { type: String, required: false } },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
