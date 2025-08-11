import React from 'react';
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  SelectField,
  TextField,
  DateField,
  URLField
} from '@hubspot/cms-components/fields';
import FlightBookingIsland from './FlightBookingIsland.jsx';

export function Component({ fieldValues }) {
  const {
    tripType = 'One Way',
    departingFrom = '',
    travelingTo = '',
    departureDate = '',
    returnDate = '',
    cta_link = '',
    hydrateOn = 'load'
  } = fieldValues;

  return (
    <Island
      module={FlightBookingIsland}
      hydrateOn={hydrateOn}
      tripType={tripType}
      departingFrom={departingFrom}
      travelingTo={travelingTo}
      departureDate={departureDate}
      returnDate={returnDate}
      ctaLink={cta_link}
    />
  );
}

// Field definitions MUST be here (not in the Island component)
export const fields = (
  <ModuleFields>
    <SelectField
      name="tripType"
      label="Trip Type"
      defaultValue="One Way"
      options={[
        { label: 'One Way', value: 'One Way' },
        { label: 'Return', value: 'Return' }
      ]}
    />
    <TextField name="departingFrom" label="Departing From" />
    <TextField name="travelingTo" label="Traveling To" />
    <DateField name="departureDate" label="Departure Date" />
    <DateField name="returnDate" label="Return Date" />
    <URLField name="cta_link" label="CTA Link" />
  </ModuleFields>
);

export const meta = {
  label: 'Flight Booking Module'
};

export default Component;