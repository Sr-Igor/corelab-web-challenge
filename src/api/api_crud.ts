import axios from "axios"
import qs from "qs"
import { Options } from "../types/options"


type InfoVehicle = {
    title: string
    brand: string
    color: string
    year: string
    licensePlate: string
    price: string
    description: string
}

const http = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const Api = {
    getVehicles: async (query?: Options) => {
        let res = await http.get(`/allCars?${qs.stringify(query)}`)
        return res.data
    },
    addVehicle: async (data: InfoVehicle) => {
        let res = await http.post("/add", data)
        return res.data
    },
    editVehicle: async (data: InfoVehicle, id: string) => {
        let res = await http.put(`/edit/${id}`, data)
        return res.data
    },
    delVehicle: async (id: string) => {
        let res = await http.delete(`/del/${id}`)
        return res.data
    },
    favVehicle: async (id: string, option: boolean) => {
        let res = await http.post(`/fav/${id}`, {option})
        return res.data
    },
    searchVehicle: async (q: string) => {
        let res = await http.get(`/search?${qs.stringify({q})}`)
        return res.data
    },
    getColors: async () => {
        let res = await http.get("/colors")
        return res.data
    },
    getYears: async () => {
        let res = await http.get("/years")
        return res.data
    },
    getBrands: async () => {
        let res = await http.get("/brands")
        return res.data
    }
}