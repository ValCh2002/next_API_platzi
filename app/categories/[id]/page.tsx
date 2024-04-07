import { DetailsCategoryPage } from '@/app/components/DetailsCategoryPage';
import type { Metadata } from 'next';

export default function Index({params:{id}}:{params:{id:number}}) {
  return <DetailsCategoryPage id={id}/>
}

export const metadata: Metadata = {
  title: 'Category Details',
};
