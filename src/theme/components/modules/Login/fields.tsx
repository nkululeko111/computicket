import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <TextField
      label="Heading"
      name="heading"
      default="Welcome to Our Site!"
    />
  </ModuleFields>
);
