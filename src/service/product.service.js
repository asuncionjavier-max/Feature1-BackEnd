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