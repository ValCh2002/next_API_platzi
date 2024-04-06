import { ICategory } from "@/type/type"
import axios from "axios"

export const getCategoryAPI=async()=>{
    const {data}=await axios.get('https://api.escuelajs.co/api/v1/categories')
    return data
}

export const getCategoryByIdAPI=async(id:number)=>{
    const {data}=await axios.get('https://api.escuelajs.co/api/v1/categories/'+id)
    return data
}

export const createCategoryAPI=async(obj:ICategory)=>{
    const {data}=await axios.post('https://api.escuelajs.co/api/v1/categories',obj)
    return data
}