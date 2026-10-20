import { Outlet } from 'react-router';

import Footer from '@/layouts/footer/Footer';
import Header from '@/layouts/header/Header';

import './mainLayout.css';

type MainLayoutProps = {
  header?: string;
  footer: string;
};

const MainLayout = ({ header, footer }: MainLayoutProps) => {
  return (
    <div className='mainContent'>
      <Header title={header} />
      <main>
        <Outlet />
      </main>
      <Footer text={footer} />
    </div>
  );
};

export default MainLayout;
