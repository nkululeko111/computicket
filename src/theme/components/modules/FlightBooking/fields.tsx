import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <TextField
      label="Hero Heading"
      name="heroHeading"
      default="The World Awaits"
    />
    <TextField
      label="Hero Subheading"
      name="heroSubheading"
      default="Flights that connect you to extraordinary experiences worldwide"
    />
  </ModuleFields>
);