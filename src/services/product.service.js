/*****************************/
/*** Import des mdules nécessires ***/

import Axios from './caller.service'

let createProduct = (restaurant) => {
    return Axios.post('/produits', restaurant)
}

const getAllprod = () => {
    return Axios.get('/produits')
}

const getprod = (uid) => {
    return Axios.get('/produits/'+uid)
}

const deleteProduct = (id) => {
    return Axios.delete('/produits/'+id)
}

export const productService = {
    createProduct,
    getAllprod,
    getprod,
    deleteProduct
}