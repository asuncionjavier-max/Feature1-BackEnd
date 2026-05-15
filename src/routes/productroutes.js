import express from 'express'
import {products}  from '../db/products.js'
const router = express.Router()

router.get('/api/products', (req, res) =>{
    res.json({
    ok: true,
    data: products
  });
})

router.get('/api/products/:id', (req, res) =>{
 const productId = Number(req.params.id)
 const product = products.find((p) => p.id === productId)

 if(!product){
    return res.status(404).json({
      ok: false,
      error: {
        message: "Product not found"
      }

    });
 }
 res.json({
    ok: true,
    data: product
  });
})

export default router