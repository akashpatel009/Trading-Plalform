const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersSchema = new model("position", OrdersSchema);

module.exports = { OrdersSchema };