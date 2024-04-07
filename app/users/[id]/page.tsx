import { DetailsUserPage } from '@/app/components/DetailsUserPage';
import type { Metadata } from 'next';

export default function Index({params:{id}}:{params:{id:number}}) {
  return <DetailsUserPage id={id}/>;
}

export const metadata: Metadata = {
  title: 'User Details',
};
