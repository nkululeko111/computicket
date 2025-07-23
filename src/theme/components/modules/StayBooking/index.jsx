import React, { useState } from 'react';
import { ModuleFields, ImageField, TextField, UrlField } from '@hubspot/cms-components/fields';
import styles from './StayBooking.module.css';

export const Component = ({ fields }) => {
  const {
    background_image,
    destination,
    check_in,
    check_out,
    cta_link,
  } = fields || {};

  return (
    <div className={styles.container}>
      {/* Background Image */}
      {background_image && (
        <img src={background_image} alt="Background" className={styles.backgroundImage} />
      )}

      {/* Main Heading */}
      <h2 className={styles.title}>Find Your Perfect Stay</h2>

      {/* Destination */}
      <div className={styles.fieldGroup}>
        <label htmlFor="destination">Where would you like to go?</label>
        <input
          type="text"
          id="destination"
          name="destination"
          defaultValue={destination}
          placeholder="Enter a destination"
        />
      </div>

      {/* Check-in & Check-out */}
      <div className={styles.fieldGroup}>
        <label>Check-in & Check-out</label>
        <div className={styles.dateFields}>
          <input
            type="date"
            name="check_in"
            defaultValue={check_in}
            aria-label="Check-in date"
          />
          <input
            type="date"
            name="check_out"
            defaultValue={check_out}
            aria-label="Check-out date"
          />
        </div>
      </div>

      {/* Call to Action Button */}
      {cta_link && (
        <a href={cta_link} className={styles.ctaButton}>
          Book Now
        </a>
      )}
    </div>
  );
};

export const meta = {
  label: 'Stay Booking Module',
};

// Define the fields at the end
export const fields = (
  <ModuleFields>
    <ImageField name="background_image" label="Background Image" />
    <TextField name="destination" label="Destination" />
    <TextField name="check_in" label="Check-in Date" />
    <TextField name="check_out" label="Check-out Date" />
    <UrlField name="cta_link" label="CTA Link" />
  </ModuleFields>
);