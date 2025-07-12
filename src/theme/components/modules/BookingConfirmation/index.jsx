import {
  ModuleFields,
  TextField,
  BooleanField,
} from '@hubspot/cms-components/fields';

import styles from './BookingConfirmation.module.css';


export function Component({ fieldValues }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{fieldValues.thank_you_message}</h2>
      {fieldValues.show_download_button && (
        <a href="#" className={styles.button}>
          Download Ticket
        </a>
      )}
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="thank_you_message"
      label="Thank You Message"
      default="Thank you for booking with Computicket!"
    />
    <BooleanField
      name="show_download_button"
      label="Show Download Ticket Button"
      default={true}
    />
  </ModuleFields>
);

export const meta = {
  label: 'bookingConfirmation',
};
