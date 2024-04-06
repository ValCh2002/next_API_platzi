import axios from "axios"

export const getStadiumsAPI=async()=>{
    const {data}=await axios.get('https://myfakeapi.com/api/football/stadiums')
    return data.stadiums
}   

export const getStadiumByIdAPI=async(id:number)=>{
    const {data}=await axios.get('https://myfakeapi.com/api/football/stadiums/'+id)
    return data.stadium
}

