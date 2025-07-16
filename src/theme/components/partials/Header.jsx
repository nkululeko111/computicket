import { useEffect } from 'react';
import styles from './HeadnFooter.module.css';

function Header() {
  useEffect(() => {
    const onScroll = () => {
      const mainHeader = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 70) {
        mainHeader?.classList.add(styles.showNav);
      } else {
        mainHeader?.classList.remove(styles.showNav);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className={styles.miniHeader}>
        <div className={styles.blackOverlay}>Computicket</div>
      </div>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <a href="/" className={styles.logo}>
              <img
                src="../../assets/computicket-logo.png"
                alt="Computicket Logo"
                className={styles.logoImg}
              />
            </a>

            <nav className={`${styles.mainNav} ${styles.hiddenNav}`}>
              <a href="/home-page.hubl.html"><i className="fas fa-home"></i> Home</a>
              <a href="/event"><i className="fas fa-calendar-alt"></i> Events</a>
              <a href="/booking"><i className="fas fa-bus"></i> Buses</a>
              <a href="/booking"><i className="fas fa-plane"></i> Flights</a>
              <a href="/vouchers"><i className="fas fa-gift"></i> Vouchers</a>
              <a href="/stay"><i className="fas fa-bed"></i> Stay</a>
            </nav>

            <nav className={styles.mainNav}>
              <a href="/vouchers"><i className="fa fa-shopping-bag"></i></a>
              <a href="/stay"><i className="fas fa-user"></i> Login</a>
            </nav>

            <button className={styles.mobileMenu} id="mobileMenuBtn">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

export const meta = {
  label: 'Header',
};
