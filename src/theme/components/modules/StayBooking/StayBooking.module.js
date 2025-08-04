import React from 'react'; 
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  ImageField,
  TextField,
  UrlField,
} from '@hubspot/cms-components/fields';
import PropTypes from 'prop-types';
import StayBookingIsland from './StayBooking.jsx?island';
import styles from './StayBooking.module.css';

export function Component({ fieldValues }) {
  const {
    background_image = '',
    destination = '',
    check_in = '',
    check_out = '',
    cta_link = '',
    hydrateOn = 'load',
    islandIdPrefix = '',
  } = fieldValues;

  const islandId = `${islandIdPrefix}stay-booking`;

  return (
    <Island
      id={islandId}
      module={StayBookingIsland}
      hydrateOn={hydrateOn}
      background_image={background_image}
      destination={destination}
      check_in={check_in}
      check_out={check_out}
      cta_link={cta_link}
    />
  );
}

export const fields = (
  <ModuleFields>
    <ImageField name="background_image" label="Background Image" />
    <TextField name="destination" label="Destination" defaultValue="" />
    <TextField name="check_in" label="Check-in Date" defaultValue="" />
    <TextField name="check_out" label="Check-out Date" defaultValue="" />
    <UrlField name="cta_link" label="CTA Link" />
  </ModuleFields>
);

export const meta = {
  label: 'Stay Booking Module',
};
