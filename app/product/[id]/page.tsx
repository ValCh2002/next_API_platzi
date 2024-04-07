import { DetailsProductPage } from '@/app/components/DetailsProductPage';
import type { Metadata } from 'next';

export default function Index({params:{id}}:{params:{id:number}}) {
  return <DetailsProductPage id={id}/>
}

export const metadata: Metadata = {
  title: 'Product Details',
};
