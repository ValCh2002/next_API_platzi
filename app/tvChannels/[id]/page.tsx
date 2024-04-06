import { TeamDetails } from '@/app/components/TeamDetailsPage';
import { TvChannelsDetails } from '@/app/components/TvChannelDetailsPage';
import type { Metadata } from 'next';


export default function IndexPage({params:{id}}:{params:{id:number}}) {
  return <TvChannelsDetails id={id}/>
}

export const metadata: Metadata = {
  title: 'Tv Channel Details',
};
