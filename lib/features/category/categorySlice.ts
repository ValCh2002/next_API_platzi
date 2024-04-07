import { createAppSlice } from "@/lib/createAppSlice";
import { ICategory } from "@/type/type";
import { createCategoryAPI, getCategoryAPI, getCategoryByIdAPI } from "./categoryAPI";

const initialState:{categories:ICategory[],category:ICategory}={
    categories:[],
    category:{}as ICategory
}

export const categorySlice=createAppSlice({
    name:'category',
    initialState,
    reducers:(create)=>({
        getCategoriesData:create.asyncThunk(
            async()=>{
                return await getCategoryAPI()
            },
            {fulfilled:(state,action)=>{
                state.categories=action.payload
            }}
        ),
        getCategoryByIdData:create.asyncThunk(
            async(id)=>{
                return await getCategoryByIdAPI(id)
            },
            {fulfilled:(state,action)=>{
                state.category=action.payload
            }}
        ),
        createCategoryData:create.asyncThunk(
            async(obj)=>{
                return await createCategoryAPI(obj)
            }
        )
    }),
    selectors:{
        selectCategory:(app)=>app.category,
        selectCategories:(app)=>app.categories
    }
})
export const {getCategoriesData,getCategoryByIdData,createCategoryData}=categorySlice.actions
export const {selectCategories,selectCategory}=categorySlice.selectors