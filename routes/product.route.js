const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product.controller')

router.get('/',ProductController.getAllProducts)

router.get('/:productId',ProductController.getProduct)

router.patch('/',ProductController.updateProduct)

router.post('/',ProductController.createProduct)

router.delete('/:productId',ProductController.deleteProduct)

module.exports = router