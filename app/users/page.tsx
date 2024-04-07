import type { Metadata } from 'next';
import { ShowUsersPage } from '../components/ShowUsersPage';

export default function Index() {
  return <ShowUsersPage />;
}

export const metadata: Metadata = {
  title: 'Show Users',
};
