var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stateSchema = new Schema(
  {
    namr: { type: String, required: true },
    country: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    population: { type: Number, required: true },
    area: { type: String },
    neighbouring_states: [{ type: Schema.Types.ObjectId, ref: 'State' }],
  },
  {
    timestamps: true,
  }
);

let State = mongoose.model('State', stateSchema);
module.exports = State;
