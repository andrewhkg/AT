var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BookingSchema = new Schema({
    attraction_id:  { type: mongoose.Schema.ObjectId, ref: 'Attraction' },
    date:           { type: Date },
    qnt_adult:      { type: String},
    qnt_child:      { type: String},
    total:          { type: Number}
});


module.exports = mongoose.model('Booking', BookingSchema);
