import React from 'react'; 
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  SelectField,
  TextField,
  DateField,
  UrlField,
} from '@hubspot/cms-components/fields';
import EventBookingIsland from './EventBooking.jsx?island';
import styles from './EventBooking.module.css';

export function Component({ fieldValues }) {
  const {
    event_type = 'All',
    location = '',
    event_date = '',
    search_term = '',
    cta_link = '',
    hydrateOn = 'load',
    islandIdPrefix = '',
  } = fieldValues;

  const islandId = `${islandIdPrefix}event-booking`;

  return (
    <Island
      id={islandId}
      module={EventBookingIsland}
      hydrateOn={hydrateOn}
      event_type={event_type}
      location={location}
      event_date={event_date}
      search_term={search_term}
      cta_link={cta_link}
    />
  );
}

export const fields = (
  <ModuleFields>
    <SelectField
      name="event_type"
      label="Event Type"
      defaultValue="All"
      options={[
        { label: 'All', value: 'All' },
        { label: 'Music', value: 'Music' },
        { label: 'Festival', value: 'Festival' },
        { label: 'Family', value: 'Family' },
      ]}
    />
    <TextField name="search_term" label="Search Term" defaultValue="" />
    <TextField name="location" label="Location" defaultValue="" />
    <DateField name="event_date" label="Event Date" defaultValue="" />
    <UrlField name="cta_link" label="CTA Link" />
  </ModuleFields>
);

export const meta = {
  label: 'Event Booking Module',
};
