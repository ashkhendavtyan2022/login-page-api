import axios from "axios";


const Api = "https://crudcrud.com/api/1a97671891cc4b94964155dc4db5d6be/"

export const SetUser = (data) => {
    return axios.post(`${Api}list`, data)
};

export const GetUser = (id) => {
    return axios.get(`${Api}list/${id}`)
}

export const GetUsers = () => {
    return axios.get(`${Api}list`)
}

export const UpdateUser = (id) => {
    return axios.put(`${Api}list/${id}`)
}
