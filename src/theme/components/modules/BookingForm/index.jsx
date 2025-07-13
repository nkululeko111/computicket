import styles from './BookingForm.module.css';

export function Component() {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Book your spot now!</h2>
      {/* Static input fields or messages can go here */}
      <button type="submit" className={styles.button}>Book Now</button>
    </form>
  );
}

export const meta = {
  label: 'bookingForm',
};
