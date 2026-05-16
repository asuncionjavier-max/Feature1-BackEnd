import { products } from "../db/products"

export const getProducts = () =>{
    return products
}

export const getProductsById = (id) =>{
    return product.find((p) => p.id === Number(products.id))
}

export const CreateProduct = (productData) =>{
    const newProduct = {
        id: products.length +1,
        name: productData.name,
        price: productData.price
    } 
    products.push(newProduct)
}

export const updateProduct = (id, data) =>{
    const indexProduct = products.findIndex(p => p.id === Number(id))
    if(indexProduct === -1) return null
    products[indexProduct] = {...products[indexProduct], ...data}
    return products[indexProduct]
}

export const deleteProduct = (id) =>{
     const indexProduct = products.findIndex(p => p.id === Number(id))
    if(indexProduct === -1) return null

    const deleteProduct = products[indexProduct];
    products.splice(indexProduct, 1)
    return deleteProduct
}