import mongoose from "mongoose";
var Schema = mongoose.Schema;

var productSchema = new Schema({
	productid: { type: Number, required: true },
	productname: { type: String, required: true },
	modelyear: { type: Number },
	price: { type: Number },
	description: { type: String },
});

export var product = mongoose.model("product", productSchema);
