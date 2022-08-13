/*****************************/
/*** Import des mdules nécessires ***/

import Axios from './caller.service'



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
    deleteResto
}