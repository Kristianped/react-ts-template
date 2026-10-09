import { createBrowserRouter } from 'react-router';

import MainLayout from '@/layouts/MainLayout.tsx';
import Contact from '@/pages/Contact.tsx';
import Home from '@/pages/Home.tsx';
import NotFound from '@/pages/NotFound.tsx';

type RouterProps = {
  header: string;
  footer: string;
};

const createRouter = ({ header, footer }: RouterProps) => {
  return createBrowserRouter([
    {
      path: '/',
      Component() {
        return <MainLayout header={header} footer={footer} />;
      },
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: 'contact',
          Component: Contact,
        },
        {
          path: '*',
          Component: NotFound,
        },
      ],
    },
  ]);
};

export default createRouter;
