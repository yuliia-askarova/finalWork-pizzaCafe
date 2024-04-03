const { Schema, model } = require("mongoose");
const schema = new Schema({
  name: {
    type: String,
    require: true,
  },

  size: {
    type: Array,
    require: true,
  },

  desctiption: {
    type: String
  },

  price: {
    type: Array,
    require: true,
  },

  img: {
    type: String,
    require: true,
  },

});

module.exports = model("Drinks", schema);
