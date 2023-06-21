const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type:String,
        required : true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number
    },
    description:{
        type:String,
        required : true
    },
    image:{
        type:String
    }
})

const Product = mongoose.model('Product',ProductSchema)

module.exports = Product