import React from 'react';
import { ModuleFields, SelectField, TextField, DateField, UrlField } from '@hubspot/cms-components/fields';
import styles from './BusBooking.module.css';

export function Component({ fieldValues }) {
  const {
    tripType,
    departingFrom,
    travelingTo,
    departureDate,
    helpLink,
  } = fields;

  // State to toggle trip type (One Way / Return)
  const [isReturn, setIsReturn] = React.useState(tripType === 'Return');

  return (
    <div className={styles.container}>
      {/* Main Heading */}
      <h1 className={styles.title}>Journey Beyond</h1>
      <p className={styles.subtitle}>Affordable adventures await on long-distance coaches</p>

      {/* Bus Search Form */}
      <div className={styles.formSection}>
        {/* Trip Type Toggle */}
        <div className={styles.tripTypeToggle}>
          <button
            className={`${styles.toggleButton} ${!isReturn ? styles.active : ''}`}
            onClick={() => setIsReturn(false)}
          >
            One Way
          </button>
          <button
            className={`${styles.toggleButton} ${isReturn ? styles.active : ''}`}
            onClick={() => setIsReturn(true)}
          >
            Return
          </button>
        </div>

        {/* Form Fields */}
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldGroup}>
            <label>Departing From</label>
            <input
              type="text"
              placeholder="Enter city or bus stop"
              defaultValue={departingFrom}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label>Traveling To</label>
            <input
              type="text"
              placeholder="Enter city or bus stop"
              defaultValue={travelingTo}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label>Departure Date</label>
            <input
              type="date"
              defaultValue={departureDate}
            />
          </div>

          {isReturn && (
            <div className={styles.fieldGroup}>
              <label>Return Date</label>
              <input
                type="date"
                defaultValue={fields.returnDate}
              />
            </div>
          )}
        </div>

        {/* Call to Action Button */}
        {fields.ctaLink && (
          <a href={fields.ctaLink} className={styles.searchButton}>
            Find Your Perfect Bus
          </a>
        )}
      </div>

      {/* Need Help Section */}
      <div className={styles.helpSection}>
        <h2 className={styles.helpTitle}>Need Help?</h2>
        <p>Visit Our IN-STORE Team</p>
        <p>
          Get personal assistance from our trained staff at any Shoprite Money Market store. Bus tickets, flight bookings, and expert advice - all in one place.
        </p>
        {helpLink && (
          <a href={helpLink} className={styles.helpLink}>Find a Store</a>
        )}
      </div>
    </div>
  );
};

export const meta = {
  label: 'Bus Booking Module',
};

// Define the fields at the end
export const fields = (
  <ModuleFields>
    <TextField name="tripType" label="Trip Type" defaultValue="One Way" />
    <TextField name="departingFrom" label="Departing From" defaultValue="City A" />
    <TextField name="travelingTo" label="Traveling To" defaultValue="City B" />
    <DateField name="departureDate" label="Departure Date" defaultValue="2023-09-01" />
    <UrlField name="helpLink" label="Help Store Link" />
  </ModuleFields>
);