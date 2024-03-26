import { axiosInstance } from "./serviceConfig";

export const getAllLaunches = () => {
    return axiosInstance.get("/launches")
}

export const getOneLaunch = (flight_number) => {
    return axiosInstance.get(`/launches/${flight_number}`)
}

export const getPastLaunches = () => {
    return axiosInstance.get("/launches/past")
}

export const getUpcomingLaunches = () => {
    return axiosInstance.get("/launches/upcoming")
}

export const getNextLaunch = () => {
    return axiosInstance.get("/launches/next")
}

