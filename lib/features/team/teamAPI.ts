import axios from "axios"

export const getTeamsAPI=async()=>{
    const {data}=await axios.get('https://myfakeapi.com/api/football/teams')
    return data.Teams
}

export const getTeamByIdAPI=async(id:number)=>{
    const {data}=await axios.get('https://myfakeapi.com/api/football/teams/'+id)
    return data.Team
}