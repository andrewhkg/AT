var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TransportationSchema = new Schema({

  number_pax:             { type: Number},
  destination_from:       { type: String},
  destination_to:         { type: String},
  service_hour:           { type: String},
  flight_number:          { type: String},
  flight_arr_time:        { type: Number},
  description:            { type: String },
  picture:                { type: String },
  price_for_car:          { type: String}
});


module.exports = mongoose.model('Transportation', TransportationSchema);
