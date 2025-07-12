import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  return (
    <form>
      <h2>Book for Event ID: {fieldValues.event_id}</h2>
      {/* Form inputs go here */}
      <button type="submit">{fieldValues.submit_button_label}</button>
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
