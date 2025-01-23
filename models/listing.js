const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defaultImage = {
  filename: "listingimage",
  url: "https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/827b7144-bfa4-4bb0-bd69-02579295bf9b.jpeg?im_w=1200&im_format=avif",
};

const listingSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [5, "Title must be at least 5 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [10, "Description must be at least 10 characters"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be at least 0"],
  },
  image: {
    type: {
      filename: String,
      url: String,
    },
    set: (value) => (value === "" ? defaultImage : value),
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    minlength: [3, "Location must be at least 3 characters"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
    minlength: [3, "Country must be at least 3 characters"],
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
