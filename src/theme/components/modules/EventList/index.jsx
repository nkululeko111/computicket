import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

import styles from './EventList.module.css';


export function Component({ fieldValues }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{fieldValues.title}</h2>
      {/* Normally you'd map dynamic data like events here */}
      <p className={styles.description}>Event list goes here (from {fieldValues.event_source})</p>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Section Title"
      default="Upcoming Events"
    />
    <TextField
      name="event_source"
      label="Data Source"
      default="hubdb"
    />
  </ModuleFields>
);

export const meta = {
  label: 'eventList',
};
