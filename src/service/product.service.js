import { products } from "../db/products.js"

// Show products
export const getProducts = () =>{
    return products
}
// Filter products for ID
export const getProductsById = (id) =>{
    const foundProduct = products.find((p) => p.id === Number(id))
    return foundProduct
}
// Create Product
export const createProduct = (productData) =>{
    const newProduct = {
        id: products.length +1,
        name: productData.name,
        price: productData.price
    } 
    products.push(newProduct)
    return newProduct
}
// Update product
export const updateProduct = (id, data) =>{
    const indexProduct = products.findIndex(p => p.id === Number(id))
    if(indexProduct === -1) return null
    products[indexProduct] = {...products[indexProduct], ...data}
    return products[indexProduct]
}
// Delete Product
export const deleteProduct = (id) =>{
     const indexProduct = products.findIndex(p => p.id === Number(id))
    if(indexProduct === -1) return null

    const deleteProduct = products[indexProduct];
    products.splice(indexProduct, 1)
    return deleteProduct
}