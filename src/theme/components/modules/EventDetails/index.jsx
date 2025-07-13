import styles from './EventDetails.module.css';

export function Component() {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>Event Details</h3>
      {/* You can hardcode or layout the structure here */}
      <p>More info about the selected event will go here.</p>
    </article>
  );
}

export const meta = {
  label: 'eventDetails',
};
