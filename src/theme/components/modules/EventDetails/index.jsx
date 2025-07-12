import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  return (
    <article>
      <h3>Details for Event ID: {fieldValues.event_id}</h3>
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
