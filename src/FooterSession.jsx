import { FaWhatsapp, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../src/css/Footersession.css';

function FooterSession() {
  return (
    <footer className='footer-container overflow-x-hidden'>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="footerP">© AutoClipper. Todos os direitos reservados.</p>
        </div>
        <div className="col-md-6">
          <ul className='icon-list'>
            <li>
              <FaWhatsapp />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaPhoneAlt />
            </li>
            <li>
              <FaEnvelope />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterSession;
