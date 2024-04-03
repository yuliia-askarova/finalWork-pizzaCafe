const { Schema, model } = require("mongoose");
const schema = new Schema({
  name: {
    type: String,
    require: true,
  },

  price: {
    type: Array,
    require: true,
  },

  discount: {
    type: Number,
  },

  ingredients: {
    type: String,
    require: true,
  },

  imgUrl: {
    type: String,
    require: true,
  },

  isAvailable: {
    type: Boolean,
    require: true,
  },
});

module.exports = model("Pizza", schema);
