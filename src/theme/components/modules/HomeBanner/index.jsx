import {
  ModuleFields,
  ImageField,
  TextField,
  UrlField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  return (
    <header style={{ backgroundImage: `url(${fieldValues.background_image?.src})` }}>
      <h1>{fieldValues.headline}</h1>
      <a href={fieldValues.cta_link}>{fieldValues.cta_button}</a>
    </header>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField name="background_image" label="Background Image" />
    <TextField
      name="headline"
      label="Headline"
      default="Discover Events Near You"
    />
    <TextField name="cta_button" label="CTA Label" default="Browse Events" />
    <UrlField name="cta_link" label="CTA Link" />
  </ModuleFields>
);

export const meta = {
  label: 'HomeBanner',
};
