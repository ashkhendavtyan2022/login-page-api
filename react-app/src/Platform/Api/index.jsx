import axios from "axios";


const Api = "https://crudcrud.com/api/1971a4b4404b4ff5b5fe61e7559f1a74/"

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
