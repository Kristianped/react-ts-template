import '@/style/layouts/footer.scss';

type FooterProps = {
  text: string;
};

const Footer = ({ text }: FooterProps) => {
  return <div className='footer'>{text}</div>;
};

export default Footer;
