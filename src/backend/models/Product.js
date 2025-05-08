const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  sellPrice: Number,
  condition: String,
  review: String,
  image: String,
  status: {
    type: String,
    default: "Available"
  }
});

module.exports = mongoose.model('Product', productSchema);
