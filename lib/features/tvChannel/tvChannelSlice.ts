import { createAppSlice } from "@/lib/createAppSlice";
import { ITvChannel } from "@/type/type";
import { getTvChannelByIdAPI, getTvChannelsAPI } from "./tvChannelAPI";

const initialState:{tvChannel:ITvChannel,tvChannels:ITvChannel[]}={
    tvChannel:{}as ITvChannel,
    tvChannels:[]
}

export const tvChannelSlice=createAppSlice({
    name:"tv channel",
    initialState,
    reducers:(create)=>({
        getTvChannelsData:create.asyncThunk(
            async()=>{
                return await getTvChannelsAPI()
            },
            {fulfilled:(state,action)=>{
                state.tvChannels=action.payload
            }}          
        ),
        getTvChannelByIdData:create.asyncThunk(
            async(id:number)=>{
                return await getTvChannelByIdAPI(id)
            },
            {fulfilled:(state,action)=>{
                state.tvChannel=action.payload
            }}
        )
    }),
    selectors:{
        selectTvChannels:(app)=>app.tvChannels,
        selectTvChannel:(app)=>app.tvChannel
    }

})
export const {getTvChannelByIdData,getTvChannelsData}=tvChannelSlice.actions
export const {selectTvChannel,selectTvChannels}=tvChannelSlice.selectors
