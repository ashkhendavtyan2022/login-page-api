import axios from "axios";


const Api = "https://crudcrud.com/api/5264bbee3c0f4977adf5ca0d633ac5d3/"

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
