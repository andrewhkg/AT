var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TourSchema = new Schema({
  name:            { type: String },
  picture:         { type: String },
  description:     { type: String },
  price_adult:     { type: String},
  price_child:     { type: String},
  time_start:      { type: Number},
  time_durations:  { type: Number},
  place_start:     { type: Number},
  direction_map:   { type: Array}
});


module.exports = mongoose.model('Tour', TourSchema);
