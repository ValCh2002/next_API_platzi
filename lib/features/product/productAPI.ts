import { IProduct, IRange } from '@/type/type';
import axios from 'axios';

export const getProductsAPI = async () => {
  const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
  return data;
};

export const getProductByIdAPI = async (id: number) => {
  const { data } = await axios.get(
    'https://api.escuelajs.co/api/v1/products/' + id,
  );
  return data;
};

export const getAllProductsByCategoryAPI = async (id: number) => {
  const { data } = await axios.get(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`,
  );
  return data;
};

export const createProductAPI = async (obj: IProduct) => {
  const { data } = await axios.post(
    'https://api.escuelajs.co/api/v1/products',
    obj,
  );
  return data;
};

export const searchProductsByTitleAPI = async (text: string) => {
  const { data } = await axios.get(
    'https://api.escuelajs.co/api/v1/products/?title=' + text,
  );
  return data;
};

export const filterProductMinMaxPriceAPI = async ({
  min,
  max,
}: IRange) => {
  const { data } = await axios.get(
    `https://api.escuelajs.co/api/v1/products/?price_min=${min}&price_max=${max}`,
  );
  return data;
};

export const filterByCategoryAPI = async (id: number) => {
  const { data } =await axios.get('https://api.escuelajs.co/api/v1/products/?categoryId='+id);
    return data
};
