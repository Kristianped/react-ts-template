import { FaHome } from '@react-icons/fontawesome5';
import { Link, NavLink, type NavLinkProps } from 'react-router';

import './header.css';

const DRAWER_ID = 'navBarDrawer';
const DRAWER_LABEL_ID = 'navbarDrawerLabel';

type HeaderProps = {
  title?: string;
};

type NavItemProps = NavLinkProps & { label: string };
type NavBarProps = {
  items: NavItemProps[];
};

const NavBrand = ({ title }: HeaderProps) => {
  return (
    <Link to='/' className='navbarLink navbar-brand'>
      <div className='navbarLogo'>
        <FaHome className='navbarIcon' />
      </div>
      {title ? <span className='fw-bold'>{title}</span> : ''}
    </Link>
  );
};

const NavToggler = () => {
  return (
    <button
      type='button'
      className='btn-icon navbar-toggler'
      data-bs-toggle='drawer'
      data-bs-target={'#' + DRAWER_ID}
      aria-controls={DRAWER_ID}
      aria-expanded={false}
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon' aria-hidden={true}></span>
    </button>
  );
};

const NavBar = ({ items }: NavBarProps) => {
  return (
    <ul className='nav navbar-nav me-auto'>
      {items.map((item, index) => (
        <li className='nav-item' key={index}>
          <NavLink className='nav-link' {...item}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Drawer = () => {
  return (
    <dialog
      id={DRAWER_ID}
      className='drawer drawer-end'
      tabIndex={-1}
      aria-labelledby={DRAWER_LABEL_ID}
    >
      <div className='drawer-header'>
        <h5 id={DRAWER_LABEL_ID} className='drawer-title'>
          Menu
        </h5>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='drawer'
          aria-label='Close'
        ></button>
      </div>

      <div className='drawer-body mb-2 lg:mb-0'>
        <NavBar
          items={[
            {
              to: '/contact',
              label: 'Contact Us',
            },
            {
              to: '/counter',
              label: 'Counter',
            },
            {
              to: '/notfound',
              label: 'Not Found',
            },
          ]}
        />
      </div>
    </dialog>
  );
};

const Header = ({ title }: HeaderProps) => {
  return (
    <nav className='navbar lg:navbar-expand sticky-top bg-1'>
      <div className='container-fluid'>
        <NavBrand title={title} />
        <NavToggler />
        <Drawer />
      </div>
    </nav>
  );
};

export default Header;
