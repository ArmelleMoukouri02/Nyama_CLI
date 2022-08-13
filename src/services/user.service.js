/*****************************/
/*** Import des mdules nécessires ***/

import Axios from './caller.service'

const getAllUsers = () => {
    return Axios.get('/users')
}

const getUser = (uid) => {
    return Axios.get('/users/'+uid)
}

const deleteUser = () => {
    return Axios.delete('/users/'+id)
}

export const userService = {
    getAllUsers,
    getUser,
    deleteUser
}