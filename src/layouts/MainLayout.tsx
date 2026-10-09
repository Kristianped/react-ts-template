import { Outlet } from 'react-router';

import Footer from '@/layouts/Footer.tsx';
import Header from '@/layouts/Header.tsx';

import '@/style/layouts/main-layout.scss';

type MainLayoutProps = {
  header: string;
  footer: string;
};

const MainLayout = ({ header, footer }: MainLayoutProps) => {
  return (
    <div className='main-content'>
      <Header title={header} />
      <main>
        <Outlet />
      </main>
      <Footer text={footer} />
    </div>
  );
};

export default MainLayout;
