import type { Metadata } from 'next';
import { ShowTeams } from './components/ShowTeamsPage';


export default function IndexPage() {
  return <ShowTeams/>
}

export const metadata: Metadata = {
  title: 'Teams',
};
