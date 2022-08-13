/*****************************/
/*** Import des mdules nécessires ***/

import Axios from './caller.service'

let createResto = (restaurant) => {
    return Axios.post('/restaurants', restaurant)
}

const getAllresto = () => {
    return Axios.get('/restaurants')
}

const getResto = (uid) => {
    return Axios.get('/restaurants/'+uid)
}

const deleteResto = (id) => {
    return Axios.delete('/restaurants/'+id)
}

export const restaurantService = {
    getAllresto,
    getResto,
    deleteResto,
    createResto
}