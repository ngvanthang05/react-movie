import API from "./httpConfig"


// CRUD API 
export const get = async (url) => {
    try {
        const res = await API.get(url)
        return res;
    } catch (error) {
        throw new Error(error.message)
    }
}


export const create = async (url, data) => {
    try {
        const res = await API.post(url, data)
        return res;
    } catch (error) {
        throw new Error(error.message)
    }
}



export const update = async (url, data) => {
    try {
        const res = await API.put(url, data)
        return res;
    } catch (error) {
        throw new Error(error.message)
    }
}



export const deleted = async (url, id) => {
    try {
        const path = url + `/${id}`
        const res = await API.delete(path)
        return res;
    } catch (error) {
        throw new Error(error.message)
    }
}