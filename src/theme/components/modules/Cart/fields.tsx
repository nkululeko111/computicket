import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <TextField
      label="Default Cart Message"
      name="defaultCartMessage"
      default="Your cart is empty"
    />
  </ModuleFields>
);
