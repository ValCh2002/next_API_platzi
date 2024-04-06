import type { Metadata } from 'next';
import { ShowTvChannels } from '../components/ShowTvChannelsPage';


export default function IndexPage() {
  return <ShowTvChannels/>
}

export const metadata: Metadata = {
  title: 'Show Tv Channels',
};
