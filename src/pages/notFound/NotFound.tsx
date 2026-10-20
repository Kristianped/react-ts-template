import { BsEnvelope, BsHouse } from '@react-icons/bootstrap-icons';
import { NavLink } from 'react-router';

import './notFound.css';

const NotFound = () => {
  return (
    <div className='errorPage'>
      <div className='errorContainer container'>
        <h1 className='errorCode fs-6xl'>404!</h1>
        <h2 className='mb-5 fs-5xl'>Page Not Found</h2>
        <p className='fs-lg fw-light mb-5'>
          Sorry, an error has occurred. The requested page was not found!
        </p>

        <div className='errorActions'>
          <NavLink to='/' className='errorBtn theme-primary btn-outline'>
            <BsHouse />
            Take me Home
          </NavLink>
          <NavLink to='/contact' className='errorBtn theme-primary btn-outline'>
            <BsEnvelope />
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
