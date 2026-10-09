import { NavLink } from 'react-router';

import '@/style/pages/not-found.scss';

const NotFound = () => {
  return (
    <div className='error-page'>
      <div className='error-container'>
        <h1 className='error-code'>404!</h1>
        <h2 className='display-6 mb-3'>Page Not Found</h2>
        <p className='lead mb-4'>Sorry, an error has occurred. The requested page was not found!</p>

        <div className='error-actions'>
          <NavLink to='/' className='error-btn'>
            <i className='bi bi-house'></i>
            Take me Home
          </NavLink>
          <NavLink to='/contact' className='error-btn'>
            <i className='bi bi-envelope'></i>
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
