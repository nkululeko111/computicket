import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  return (
    <section>
      <h2>{fieldValues.title}</h2>
      {/* Normally you'd map dynamic data like events here */}
      <p>Event list goes here (from {fieldValues.event_source})</p>
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
