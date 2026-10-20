import { createBrowserRouter } from 'react-router';

import MainLayout from '@/layouts/mainLayout/MainLayout';
import Contact from '@/pages/Contact';
import Counter from '@/pages/counter/Counter';
import Home from '@/pages/Home';
import NotFound from '@/pages/notFound/NotFound';

type RouterProps = {
  header?: string;
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
          path: 'counter',
          Component: Counter,
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
