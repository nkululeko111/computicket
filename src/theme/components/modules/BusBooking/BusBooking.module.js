import React from 'react';
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  SelectField,
  TextField,
  DateField,
  UrlField,
} from '@hubspot/cms-components/fields';
import BusBookingIsland from './BusBookingIsland.jsx?island';

export function Component({ fieldValues }) {
  const {
    tripType = 'One Way',
    departingFrom = 'City A',
    travelingTo = 'City B',
    departureDate = '',
    returnDate = '',
    helpLink = '',
    ctaLink = '',
    hydrateOn = 'load',
    islandIdPrefix = '',
  } = fieldValues;

  const islandId = `${islandIdPrefix}bus-booking`;

  return (
    <Island
      id={islandId}
      module={BusBookingIsland}
      hydrateOn={hydrateOn}
      tripType={tripType}
      departingFrom={departingFrom}
      travelingTo={travelingTo}
      departureDate={departureDate}
      returnDate={tripType === 'Return' ? returnDate : ''}
      helpLink={helpLink}
      ctaLink={ctaLink}
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
    <TextField name="departingFrom" label="Departing From" defaultValue="City A" />
    <TextField name="travelingTo" label="Traveling To" defaultValue="City B" />
    <DateField name="departureDate" label="Departure Date" defaultValue="" />
    <DateField name="returnDate" label="Return Date" defaultValue="" />
    <UrlField name="ctaLink" label="Call-to-Action Link" />
    <UrlField name="helpLink" label="Help Store Link" />
  </ModuleFields>
);

export const meta = {
  label: 'Bus Booking Module',
};