import { createAppSlice } from "@/lib/createAppSlice";
import { IStadium } from "@/type/type";
import { getStadiumByIdAPI, getStadiumsAPI } from "./stadiumAPI";

const initialState: { stadiums: IStadium[], stadium: IStadium } = {
    stadium: {} as IStadium,
    stadiums: []
}


export const stadiumSlice = createAppSlice({
    name: 'stadiums',
    initialState,
    reducers: (create) => ({
        getStadiumsData: create.asyncThunk(
            async () => {
                return await getStadiumsAPI()
            },
            {
                fulfilled: (state, action) => {
                    state.stadiums = action.payload
                }
            }
        ),
        getStadiumByIdData: create.asyncThunk(
            async (id:number) => {
                return await getStadiumByIdAPI(id)
            },
            {
                fulfilled: (state, action) => {
                    state.stadium = action.payload
                }
            }
        )
    }),
    selectors:{
        selectStadium:(app)=>app.stadium,
        selectStadiums:(app)=>app.stadiums
    }
})

export const {getStadiumByIdData,getStadiumsData}=stadiumSlice.actions
export const {selectStadium,selectStadiums}=stadiumSlice.selectors
