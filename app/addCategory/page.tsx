import type { Metadata } from 'next';
import { AddCategoryPage } from '../components/AddCategoryPage';

export default function Index() {
  return (<AddCategoryPage/>
  );
}

export const metadata: Metadata = {
  title: 'Add Category',
};
