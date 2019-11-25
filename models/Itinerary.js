let mongoose = require('mongoose');
var Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    title: {
        type: String
    },
    profile: {
        type: String
    },
    rating: {
        type: Number
    },
    hours: {
        type: Number
    },
    price: {
        type: Number
    },
    hashtags: {
        type: Array
    },
    city: {
        type: Schema.Types.ObjectId
    },
    activities: {
        type: Array
    }
});

module.exports = mongoose.model("itinerary", itinerarySchema);