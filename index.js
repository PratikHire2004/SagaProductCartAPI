const express = require('express')
require('dotenv').config()
require('./config/dbconfig')()
const cors = require('cors')
const ProductRouter = require('./routes/product.route')
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api/products',ProductRouter)

app.get('/',(req,res)=>{
    res.send('Welcome...')
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})