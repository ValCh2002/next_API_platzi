import { TeamDetails } from '@/app/components/TeamDetailsPage';
import type { Metadata } from 'next';


export default function IndexPage({params:{id}}:{params:{id:number}}) {
  return <TeamDetails id={id}/>
}

export const metadata: Metadata = {
  title: 'Team Details',
};
