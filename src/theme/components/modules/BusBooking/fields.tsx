import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <TextField
      label="Hero Heading"
      name="heroHeading"
      default="Journey Beyond"
    />
    <TextField
      label="Hero Subheading"
      name="heroSubheading"
      default="Affordable adventures await on long-distance coaches."
    />
  </ModuleFields>
);
