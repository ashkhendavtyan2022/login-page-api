import axios from "axios";


const Api = "https://crudcrud.com/api/b68288f9c3794226902dbace7547b159/"

export const SetUser = (data) => {
    return axios.post(`${Api}list`, data)
};

export const GetUser = (id) => {
    return axios.get(`${Api}list/${id}`)
}

export const GetUsers = () => {
    return axios.get(`${Api}list`)
}

export const UpdateUser = (id, data) => {
    return axios.put(`${Api}list/${id}`, data)
}


