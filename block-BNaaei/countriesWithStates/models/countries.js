var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema(
  {
    name: { type: String, required: true },
    states: [{ type: Schema.Types.ObjectId, ref: 'State' }],
    continent: { type: String },
    population: { type: Number, required: true },
    ethnicity: [{ type: String, required: true }],
    neighbouring_countires: [{ type: Schema.Types.ObjectId, ref: 'Country' }],
    area: { type: String },
  },
  {
    timestamps: true,
  }
);

var Country = mongoose.model('Country', countrySchema);
module.exports = Country;
