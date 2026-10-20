import './footer.css';

type FooterProps = {
  text: string;
};

const Footer = ({ text }: FooterProps) => {
  return <div className='border-top border-subtle-secondary footer'>{text}</div>;
};

export default Footer;
