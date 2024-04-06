import { createAppSlice } from "@/lib/createAppSlice";
import { IUser } from "@/type/type";
import { create } from "domain";
import { createUserAPI, getUserByIdAPI, getUsersAPI, updateUserByIdAPI } from "./userAPI";

const initialState:{users:IUser[],user:IUser}={
    users:[],
    user:{}as IUser
}

export const userSlice=createAppSlice({
    name:'user',        
    initialState,
    reducers:(create)=>({
        getUsersData:create.asyncThunk(
            async()=>{
                return await getUsersAPI()
            },
            {fulfilled:(state,action)=>{
                state.users=action.payload
            }}
        ),
        getUserByIdData:create.asyncThunk(
            async(id)=>{
                return await getUserByIdAPI(id)
            },
            {fulfilled:(state,action)=>{
                state.user=action.payload
            }}
        ),
        createUserData:create.asyncThunk(
            async(obj:IUser)=>{
                return await createUserAPI(obj)
            }
        ),
        updateUserData:create.asyncThunk(
            async({id,obj}:{id:number,obj:{email:string,name:string}})=>{
                return await updateUserByIdAPI({id,obj})
            }
        )
    }),
    selectors:{
        selectUsers:(app)=>app.users,
        selectUser:(app)=>app.user
        }
})

export const {getUserByIdData,getUsersData,updateUserData,createUserData}=userSlice.actions
export const {selectUser,selectUsers}=userSlice.selectors