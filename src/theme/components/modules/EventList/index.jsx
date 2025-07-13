import styles from './EventList.module.css';

export function Component() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Upcoming Events</h2>
      <p className={styles.description}>Event list will be displayed here.</p>
    </section>
  );
}

export const meta = {
  label: 'eventList',
};
