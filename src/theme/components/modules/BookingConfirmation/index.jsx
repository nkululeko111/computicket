import styles from './BookingConfirmation.module.css';

export function Component() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Thank you for booking with Computicket!</h2>
    </div>
  );
}

export const meta = {
  label: 'bookingConfirmation',
};
