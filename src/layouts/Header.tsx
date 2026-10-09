import logo from '@/assets/react.png';

import '@/style/layouts/header.scss';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className='header'>
      <img alt='' src={logo} />
      <span className='fs-3 pt-4 m-2'>{title}</span>
    </div>
  );
};

export default Header;
