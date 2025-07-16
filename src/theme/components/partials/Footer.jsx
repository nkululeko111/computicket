import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Column 1: Logo & Contact Info */}
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <i className="fas fa-ticket-alt"></i>
              <span> Computicket</span>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <i className="fas fa-phone"></i>
                <span>086 191 5800</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <span>info@computicket.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Address */}
          <div className={styles.footerCol}>
            <h3>Visit Us</h3>
            <div className={styles.address}>
              <i className="fas fa-map-marker-alt"></i>
              <address>
                Computicket House<br />
                Greenacres Office Park<br />
                Victory Park<br />
                Johannesburg
              </address>
            </div>
          </div>
        </div>

        {/* Footer bottom row */}
        <div className={styles.footerBottom}>
          <div className={styles.legalLinks}>
            <a href="#">Legal Terms</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Accessibility</a>
          </div>
          <div className={styles.copyright}>
            © 2025 Computicket (Pty) Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

export const meta = {
  label: 'Footer',
};
