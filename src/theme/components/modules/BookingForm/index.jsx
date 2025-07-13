import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';
import styles from './BookingForm.module.css';

export function Component({ fieldValues }) {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Book for Event ID: {fieldValues.event_id}</h2>
      {/* Form inputs go here */}
      <button type="submit" className={styles.button}>{fieldValues.submit_button_label}</button>
    </form>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="event_id" label="Event ID" />
    <TextField
      name="submit_button_label"
      label="Submit Button Text"
      default="Book Now"
    />
  </ModuleFields>
);

export const meta = {
  label: 'bookingForm',
};
