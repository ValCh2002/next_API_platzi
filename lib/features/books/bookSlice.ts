import { createAppSlice } from "@/lib/createAppSlice";
import { IBook } from "@/type/type";
import { getBooksAPI } from "./bookAPI";

const initialState:{books:IBook[]}={
    books:[]
}

export const bookSlice=createAppSlice({
    name:"book",
    initialState,
    reducers:(create)=>({
        getBooksData:create.asyncThunk(
            async()=>{
                return await getBooksAPI()
            },
            {fulfilled:(state,action)=>{
                state.books=action.payload
            }}
        )
    }),
    selectors:{
        selectBooks:(app)=>app.books
    }
})

export const {getBooksData}=bookSlice.actions
export const {selectBooks}=bookSlice.selectors