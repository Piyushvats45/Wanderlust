const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://search.brave.com/images?q=image%20of%20a%20house&source=imageCluster",
        set: (v) => v == "" ? "https://search.brave.com/images?q=image%20of%20a%20house&source=imageCluster" : v,
    },
    price: Number,
    location: String,
    country: String
})

const Listing = mongoose.model("Listing", listingSchema)
module.exports = Listing;