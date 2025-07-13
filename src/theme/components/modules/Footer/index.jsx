import styles from './Footer.module.css';
import { ModuleFields } from '@hubspot/cms-components/fields';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTicketAlt,
} from 'react-icons/fa';

export function Component() {
  return (
    <footer className="ct-footer">
      <div className="ct-container">
        <div className="ct-footer-grid">
          <div className="ct-footer-col">
            <div className="ct-footer-logo">
              <FaTicketAlt />
              <span> Computicket</span>
            </div>
            <div className="ct-contact-info">
              <div className="ct-contact-item">
                <FaPhone />
                <span>086 191 5800</span>
              </div>
              <div className="ct-contact-item">
                <FaEnvelope />
                <span>info@computicket.com</span>
              </div>
            </div>
          </div>

          <div className="ct-footer-col">
            <h3>Visit Us</h3>
            <div className="ct-address">
              <FaMapMarkerAlt />
              <address>
                Computicket House<br />
                Greenacres Office Park<br />
                Victory Park<br />
                Johannesburg
              </address>
            </div>
          </div>
        </div>

        <div className="ct-footer-bottom">
          <div className="ct-legal-links">
            <a href="#">Legal Terms</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="ct-copyright">
            © {new Date().getFullYear()} Computicket (Pty) Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

// No editable fields needed
export const fields = <ModuleFields />;

export const meta = {
  label: 'Footer',
};
