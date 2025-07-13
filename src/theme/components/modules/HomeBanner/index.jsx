import styles from './HomeBanner.module.css';
import { ModuleFields } from '@hubspot/cms-components/fields';

export function Component() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What experience are you looking for?</h2>
        <div className={styles.experienceGrid}>
          <a href="/event" className={styles.option} style={{ backgroundImage: `url(${require('../../../assets/images/events.jpg')})` }}>
            <button className={styles.button}>Events</button>
          </a>
          <a href="/booking" className={styles.option} style={{ backgroundImage: `url(${require('../../../assets/images/buses.jpg')})` }}>
            <button className={styles.button}>Buses</button>
          </a>
          <a href="/booking" className={styles.option} style={{ backgroundImage: `url(${require('../../../assets/images/plane.jpg')})` }}>
            <button className={styles.button}>Flights</button>
          </a>
          <a href="/vouchers" className={styles.option} style={{ backgroundImage: `url(${require('../../../assets/images/voucher.jpg')})` }}>
            <button className={styles.button}>Vouchers</button>
          </a>
          <a href="/stay" className={styles.option} style={{ backgroundImage: `url(${require('../../../assets/images/hotel.jpg')})` }}>
            <button className={styles.button}>Stay</button>
          </a>
        </div>
      </div>
    </section>
  );
}


export const fields = <ModuleFields />;

export const meta = {
  label: 'Home Banner',
};
