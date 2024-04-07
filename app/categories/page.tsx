import type { Metadata } from 'next';
import { ShowCategoryPage } from '../components/ShowCategoryPage';

export default function Index() {
  return <ShowCategoryPage />;
}

export const metadata: Metadata = {
  title: 'Categories',
};
