// Imports mongoose and extracts Schema into it's own variable
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
// Creates a new Mongoose Schema with game properties
const GameSchema = new Schema({
  gameType: { type: String, required: true },
  didWin: { type: Boolean, required: true, default: false },
  hintUsed: { type: Boolean, required: true, default: false },
  points: { type: Number, required: true, default: 0 },
    // userId: { type: Schema.Types.ObjectId, required: true},
  user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Game', GameSchema);
