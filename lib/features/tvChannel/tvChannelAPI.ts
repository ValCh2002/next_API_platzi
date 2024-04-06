import axios from "axios"

export const getTvChannelsAPI=async()=>{
    const {data}=await axios.get('https://myfakeapi.com/api/football/tvchannels')
    return data.tvchannels
}

export const getTvChannelByIdAPI=async(id:number)=>{
    const {data}=await axios.get('https://myfakeapi.com/api/football/tvchannels/'+id)
    return data.tvchannel
}