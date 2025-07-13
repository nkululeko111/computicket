import styles from './HomeBanner.module.css';

export function Component() {
  return (
    <header
      className={styles.banner}
      style={{ backgroundImage: `url('/_hcms/theme/assets/images/events.jpg')` }}
    >
      <h1 className={styles.headline}>Discover Events Near You</h1>
      <a href="/events" className={styles.ctaButton}>Browse Events</a>
    </header>
  );
}

export const meta = {
  label: 'Home Banner',
};
