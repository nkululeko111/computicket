import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <TextField
      label="Hero Heading"
      name="heroHeading"
      default="Digital Gift Vouchers"
      helpText="Heading text shown in the hero section"
    />
  </ModuleFields>
);
