import React from 'react';
import { ModuleFields, SelectField, TextField, DateField, UrlField } from '@hubspot/cms-components/fields';
import styles from './FlightBooking.module.css';


export const Component = ({ fields }) => {

  const {
    tripType,
    departingFrom,
    travelingTo,
    departureDate,
    ctaLink,
  } = fields || {};

  // State to toggle trip type (One Way / Return)
  const [isReturn, setIsReturn] = React.useState(tripType === 'Return');

  return (
    <div className={styles.container}>
      {/* Main Heading */}
      <h1 className={styles.title}>The World Awaits</h1>
      <p className={styles.subtitle}>Flights that connect you to extraordinary experiences worldwide</p>

      {/* Flight Search Form */}
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
              placeholder="Enter city or airport"
              defaultValue={departingFrom}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label>Traveling To</label>
            <input
              type="text"
              placeholder="Enter city or airport"
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
        {ctaLink && (
          <a href={ctaLink} className={styles.searchButton}>
            Find Your Perfect Flight
          </a>
        )}
      </div>

      {/* Flight Booking Tips & Guides */}
      <div className={styles.guidesSection}>
        <h2 className={styles.guidesTitle}>Flight Booking Tips & Guides</h2>
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <h3>Best Time to Book Flights</h3>
            <p>Save up to 40% with smart timing</p>
          </div>
          <div className={styles.tipCard}>
            <h3>Baggage Allowance Guide</h3>
            <p>Avoid unexpected fees</p>
          </div>
          <div className={styles.tipCard}>
            <h3>Airport Arrival Times</h3>
            <p>Never miss your flight</p>
          </div>
          <div className={styles.tipCard}>
            <h3>Travel Documents</h3>
            <p>Required documentation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const meta = {
  label: 'Flight Booking Module',
};

// Define the fields at the end
export const fields = (
  <ModuleFields>
    <UrlField name="cta_link" label="CTA Link"/>
  </ModuleFields>
);
