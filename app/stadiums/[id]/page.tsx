import { StadiumDetails } from '@/app/components/StadiumDetailsPage';
import { TeamDetails } from '@/app/components/TeamDetailsPage';
import type { Metadata } from 'next';


export default function IndexPage({params:{id}}:{params:{id:number}}) {
  return <StadiumDetails id={id}/>
}

export const metadata: Metadata = {
  title: 'Stadium Details',
};
