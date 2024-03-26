import axios from "axios"

const API_URL = "https://api.spacexdata.com/v3"

export const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {}
})
 