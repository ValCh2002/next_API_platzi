import { createAppSlice } from '@/lib/createAppSlice';
import { IProduct, IRange } from '@/type/type';
import {
  createProductAPI,
  filterByCategoryAPI,
  filterProductMinMaxPriceAPI,
  getAllProductsByCategoryAPI,
  getProductByIdAPI,
  getProductsAPI,
  searchProductsByTitleAPI,
} from './productAPI';

const initialState: { products: IProduct[]; product: IProduct } = {
  product: {} as IProduct,
  products: [],
};

export const productSlice = createAppSlice({
  name: 'product',
  initialState,
  reducers: (create) => ({
    getProductsData: create.asyncThunk(
      async () => {
        return await getProductsAPI();
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      },
    ),
    getProductByIdData: create.asyncThunk(
      async (id) => {
        return await getProductByIdAPI(id);
      },
      {
        fulfilled: (state, action) => {
          state.product = action.payload;
        },
      },
    ),
    getAllProductByCategoryData: create.asyncThunk(
      async (id) => {
        return await getAllProductsByCategoryAPI(id);
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      },
    ),
    createProductData: create.asyncThunk(async (obj) => {
      return await createProductAPI(obj);
    }),
    seacrhProductByTitleData: create.asyncThunk(
      async (text) => {
        return await searchProductsByTitleAPI(text);
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      },
    ),
    filterProductMinMaxPriceData: create.asyncThunk(
      async ({ min, max }:IRange) => {
        return await filterProductMinMaxPriceAPI({ min, max });
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      },
    ),
    filterByCategoryData:create.asyncThunk(
        async(id)=>{
            return await filterByCategoryAPI(id)
        },
        {fulfilled:(state,action)=>{
            state.products=action.payload
        }}
    )
  }),
  selectors: {
    selectProducts: (app) => app.products,
    selectProduct: (app) => app.product,
  },
});
export const {
  getProductByIdData,
  getProductsData,
  getAllProductByCategoryData,
  createProductData,
  seacrhProductByTitleData,
  filterProductMinMaxPriceData,
  filterByCategoryData
} = productSlice.actions;
export const { selectProduct, selectProducts } = productSlice.selectors;
