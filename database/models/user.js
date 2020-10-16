const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  voterInfo: {
    county: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },

    zip: {
      type: Number,
      required: false
    },
    photoUrl: String,
    required: false
  },
  issues: [{
    belief: { type: String, required: true },
    important: { type: Boolean, required: true },
    stance: { type: Number, required: true }
  }],
  candidate: { type: Boolean, required: false },
  campaign: {
    level: { type: String, required: false },
    body: { type: String, required: false },
    office: { type: String, required: false }
  },
});

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('NO PASSWORD PROVIDED');
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
