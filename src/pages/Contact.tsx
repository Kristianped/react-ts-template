import {
  BsEnvelope,
  BsGeoAlt,
  BsInfoCircle,
  BsPhone,
  BsTelephoneFill,
} from '@react-icons/bootstrap-icons';

const Contact = () => {
  return (
    <div className='container py-6'>
      <h1 className='fg-success text-center mb-5'>
        <BsTelephoneFill className='me-4' />
        Contact
      </h1>
      <div className='border rounded shadow p-6'>
        <p>Get in touch with us!</p>
        <div className='card mt-6'>
          <div className='card-body'>
            <h3 className='card-title'>
              <BsInfoCircle className='me-4' />
              Contact Information
            </h3>
            <p>
              <BsEnvelope className='me-4' />
              Email: contact@demo.com
            </p>
            <p>
              <BsPhone className='me-4' />
              Phone: (555) 123-4567
            </p>
            <p>
              <BsGeoAlt className='me-4' />
              Address: 123 Demo Street, Example City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
