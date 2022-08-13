/*****************************/
/*** Import des mdules nécessires ***/

import Axios from './caller.service'

const getAllUsers = () => {
    return Axios.get('/users')
}

const getUser = (uid) => {
    return Axios.get('/users/'+uid)
}

export const userService = {
    getAllUsers,
    getUser
}