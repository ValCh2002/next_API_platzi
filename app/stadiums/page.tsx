import { TeamDetails } from '@/app/components/TeamDetailsPage';
import type { Metadata } from 'next';
import { ShowStadiums } from '../components/ShowStadiumsPage';


export default function IndexPage() {
  return <ShowStadiums/>
}

export const metadata: Metadata = {
  title: 'Show Stadiums',
};
