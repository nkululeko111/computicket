import React from 'react';
import PropTypes from 'prop-types';
import styles from './BusBooking.module.css';

export default function BusBookingIsland({
  tripType = 'One Way',
  departingFrom = '',
  travelingTo = '',
  departureDate = '',
  returnDate = '',
  ctaLink = '',
  helpLink = '',
}) {
  const [isReturn, setIsReturn] = React.useState(tripType === 'Return');
  const [from, setFrom] = React.useState(departingFrom);
  const [to, setTo] = React.useState(travelingTo);
  const [depDate, setDepDate] = React.useState(departureDate);
  const [retDate, setRetDate] = React.useState(returnDate);

  React.useEffect(() => {
    setIsReturn(tripType === 'Return');
  }, [tripType]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Journey Beyond</h1>
      <p className={styles.subtitle}>Affordable adventures await on long-distance coaches</p>

      <div className={styles.formSection}>
        <div className={styles.tripTypeToggle} role="group" aria-label="Trip type">
          <button
            type="button"
            aria-pressed={!isReturn}
            className={`${styles.toggleButton} ${!isReturn ? styles.active : ''}`}
            onClick={() => setIsReturn(false)}
          >
            One Way
          </button>
          <button
            type="button"
            aria-pressed={isReturn}
            className={`${styles.toggleButton} ${isReturn ? styles.active : ''}`}
            onClick={() => setIsReturn(true)}
          >
            Return
          </button>
        </div>

        <div className={styles.fieldsContainer}>
          <div className={styles.fieldGroup}>
            <label htmlFor="departingFrom">Departing From</label>
            <input
              id="departingFrom"
              type="text"
              placeholder="Enter city or bus stop"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="travelingTo">Traveling To</label>
            <input
              id="travelingTo"
              type="text"
              placeholder="Enter city or bus stop"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="departureDate">Departure Date</label>
            <input
              id="departureDate"
              type="date"
              value={depDate}
              onChange={(e) => setDepDate(e.target.value)}
            />
          </div>

          {isReturn && (
            <div className={styles.fieldGroup}>
              <label htmlFor="returnDate">Return Date</label>
              <input
                id="returnDate"
                type="date"
                value={retDate}
                onChange={(e) => setRetDate(e.target.value)}
              />
            </div>
          )}
        </div>

        {ctaLink && (
          <a href={ctaLink} className={styles.searchButton}>
            Find Your Perfect Bus
          </a>
        )}
      </div>

      <div className={styles.helpSection}>
        <h2 className={styles.helpTitle}>Need Help?</h2>
        <p>Visit Our IN-STORE Team</p>
        <p>
          Get personal assistance from our trained staff at any Shoprite Money Market store. Bus tickets,
          flight bookings, and expert advice - all in one place.
        </p>
        {helpLink && (
          <a href={helpLink} className={styles.helpLink}>
            Find a Store
          </a>
        )}
      </div>
    </div>
  );
}

BusBookingIsland.propTypes = {
  tripType: PropTypes.oneOf(['One Way', 'Return']),
  departingFrom: PropTypes.string,
  travelingTo: PropTypes.string,
  departureDate: PropTypes.string,
  returnDate: PropTypes.string,
  ctaLink: PropTypes.string,
  helpLink: PropTypes.string,
};

