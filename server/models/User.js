// Imports mongoose and extracts Schema into it's own variable
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
// const jwt = require('jsonwebtoken');
// const secret = require('../config').secret;

const Schema = mongoose.Schema;

// Creates a new Mongoose Schema with two properties
const UserSchema = new Schema({
  username: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
  email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  password: { type: String, required: true },
  totalPoints: { type: Number, required: true, default: 0 },
  social: {
    facebook: { type: String, required: false },
    google: { type: String, required: false }
  },
  games: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
}, { timestamps: true });

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.setPassword = (password) => {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'hello123').toString('hex');
};

UserSchema.methods.validPassword = (password) => {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'hello123').toString('hex');
  return this.hash === hash;
};

module.exports = mongoose.model('User', UserSchema);
