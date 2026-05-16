import * as productService from '../service/product.service.js'

export const getAllProducts = (req,res) =>{
const allProducts = productService.getProducts()
return res.status(200).json({
    ok: true,
    data:allProducts
})
}

export const getAllProductsById = (req,res) =>{
    const {id} = req.params
    const product = productService.getProductsById(id)
    
    if(!product) return res.status(404).json({ok: false,
            error: { message: "Producto no encontrado" }})

    return res.status(200).json({
    ok: true,
    data:product
})
}