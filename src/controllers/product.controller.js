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
export const createProduct = (req, res) =>{
    const {name,price} = req.body
    if(!name || price === undefined || price < 0) return  res.status(404).json({
        ok: false,
        error: { message: "Error al crear el producto" }})

    const newProduct = productService.createProduct({name,price})
    return res.status(201).json({
        ok:true,
        data: newProduct,
    })

}

export const updateProduct = (req,res) =>{
    const {id} = req.params
    const {data} = req.body
    const update = productService.updateProduct(id,data)

    if(!update) return res.status(404).json({
        ok: false,
        error: { message: "Producto no encontrado" }})

    return res.status(200).json({
    ok: true,
    data:product
    })    
}

export const deleteProduct = (req,res) =>{
    const {id} = req.params;

    const deleted = productService.deleteProduct(id);

    if(!deleted) return res.status(404).json({
        ok: false,
        error: { message: "Producto no encontrado" }})

    return res.status(200).json({
    ok: true,
    data: deleted
 })
}