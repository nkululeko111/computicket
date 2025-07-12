import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

import styles from './EventDetails.module.css';

export function Component({ fieldValues }) {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>Details for Event ID: {fieldValues.event_id}</h3>
      {/* Event data would be dynamically loaded */}
    </article>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="event_id" label="Event ID" required={true} />
  </ModuleFields>
);

export const meta = {
  label: 'eventDetails',
};
