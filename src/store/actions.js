/*****************************/
/*** Import des modules nécessires ***/
import axios from 'axios';

export const getProducts = ({ commit }) => {
    axios.get('http://127.0.0.1:8000/api/produits')
        .then(response => {
            commit('SET_PRODUCTS', response.data);
    });    
}

export const addProduct = ({ commit }) => {
    axios.post('http://127.0.0.1:8000/api/produits')
        .then(response => {
            commit('ADD_PRODUCT', response.data);
    });
}