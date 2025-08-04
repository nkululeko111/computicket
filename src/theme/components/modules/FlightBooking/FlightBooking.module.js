// src/theme/components/modules/FlightBookingModule/index.jsx
import React from 'react'; // required for JSX in fields
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  SelectField,
  TextField,
  DateField,
  UrlField,
} from '@hubspot/cms-components/fields';
import FlightBookingIsland from './FlightBooking.jsx?island';
import styles from './FlightBooking.module.css';

export function Component({ fieldValues }) {
  const {
    tripType = 'One Way',
    departingFrom = '',
    travelingTo = '',
    departureDate = '',
    returnDate = '',
    cta_link = '',
    hydrateOn = 'load',
    islandIdPrefix = '',
  } = fieldValues;

  const islandId = `${islandIdPrefix}flight-booking`;

  return (
    <Island
      id={islandId}
      module={FlightBookingIsland}
      hydrateOn={hydrateOn}
      tripType={tripType}
      departingFrom={departingFrom}
      travelingTo={travelingTo}
      departureDate={departureDate}
      returnDate={tripType === 'Return' ? returnDate : ''}
      ctaLink={cta_link}
    />
  );
}

export const fields = (
  <ModuleFields>
    <SelectField
      name="tripType"
      label="Trip Type"
      defaultValue="One Way"
      options={[
        { label: 'One Way', value: 'One Way' },
        { label: 'Return', value: 'Return' },
      ]}
    />
    <TextField name="departingFrom" label="Departing From" defaultValue="" />
    <TextField name="travelingTo" label="Traveling To" defaultValue="" />
    <DateField name="departureDate" label="Departure Date" defaultValue="" />
    <DateField name="returnDate" label="Return Date" defaultValue="" />
    <UrlField name="cta_link" label="CTA Link" />
  </ModuleFields>
);

export const meta = {
  label: 'Flight Booking Module',
};
