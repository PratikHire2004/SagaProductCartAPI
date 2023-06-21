const mongoose = require('mongoose')
const Product = require('../models/product.model')
const ObjectId = new mongoose.Types.ObjectId;

module.exports = {
    getAllProducts : async (req,res,next) => {
        try{
            const results = await Product.find({});
            console.log(results);
            res.status(200).json(results)
        }catch(err)
        {
            res.status(300).json(err)
        }
    },
    getProduct : async (req,res,next) => {
        try{
            const { productId } = req.params
            const product = await Product.findById(productId).exec();
            console.log(product)
            if(!product)
                res.status(300).json({msg : 'Product is not avialable'})
            else
                res.status(200).json(product)
        }catch(err)
        {
            console.log(err);
            res.status(300).json(err)
        }
    },
    updateProduct : async (req,res,next) => {
        try{
            const { id , name , quantity , price } = req.body
            console.log(req.body);
            const product = await Product.findByIdAndUpdate(id , 
                {
                    name : name ,
                    quantity : quantity ,
                    price : price 
                }
                ).exec();
            console.log(product)
            if(!product)
                res.status(300).json({msg : 'Product is not avialable'})
            else
                res.status(200).json({msg : "success"})
        }catch(err)
        {
            console.log(err);
            res.status(300).json(err)
        }
    },
    createProduct : async (req,res,next) => {
        try{
            const { name , quantity , price , description } = req.body
            console.log(req.body);
            const product = await Product.create(
                {
                    name : name ,
                    quantity : quantity ,
                    price : price ,
                    description : description
                }
                )
            console.log(product)
            if(!product)
                res.status(300).json({msg : 'Product not create'})
            else
                res.status(200).json(product)
        }catch(err)
        {
            console.log(err);
            res.status(300).json(err)
        }
    },
    deleteProduct : async (req,res,next) => {
        try{
            const { productId } = req.params
            const product = await Product.findByIdAndDelete(productId)
            console.log(product)
            if(!product)
                res.status(300).json({msg : 'Product not deleted'})
            else
                res.status(200).json({msg : "success"})
        }catch(err)
        {
            console.log(err);
            res.status(300).json(err)
        }
    }
}
