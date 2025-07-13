import styles from './Header.module.css';
import { ModuleFields } from '@hubspot/cms-components/fields';
import logo from '../../../assets/computicket-logo.png';
import { FaUser, FaShoppingBag, FaBars } from 'react-icons/fa';

export function Component() {
  return (
    <header className="ct-header">
      <div className="ct-container">
        <div className="ct-header-content">
          <a href="/" className="ct-logo">
            <img src={logo} alt="Computicket Logo" className="ct-logo-img" />
          </a>
          <nav className="ct-main-nav">
            <a href="/vouchers"><FaShoppingBag /></a>
            <a href="/stay"><FaUser /> Login</a>
          </nav>
          <button className="ct-mobile-menu" id="mobileMenuBtn">
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}

// No editable fields needed
export const fields = <ModuleFields />;

export const meta = {
  label: 'Header',
};
