import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlightBooking.module.css';

const FlightBookingIsland = ({
  tripType = 'One Way',
  departingFrom = '',
  travelingTo = '',
  departureDate = '',
  returnDate = '',
  ctaLink = ''
}) => {
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
      <header className={styles.header}>
        <h1 className={styles.title}>The World Awaits</h1>
        <p className={styles.subtitle}>
          Flights that connect you to extraordinary experiences worldwide
        </p>
      </header>

      <section className={styles.bookingForm}>
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

        <div className={styles.inputGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="departingFrom" className={styles.inputLabel}>
              Departing From
            </label>
            <input
              id="departingFrom"
              type="text"
              className={styles.textInput}
              placeholder="City or Airport"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              aria-required="true"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="travelingTo" className={styles.inputLabel}>
              Traveling To
            </label>
            <input
              id="travelingTo"
              type="text"
              className={styles.textInput}
              placeholder="City or Airport"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              aria-required="true"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="departureDate" className={styles.inputLabel}>
              Departure Date
            </label>
            <input
              id="departureDate"
              type="date"
              className={styles.dateInput}
              value={depDate}
              onChange={(e) => setDepDate(e.target.value)}
              aria-required="true"
            />
          </div>

          {isReturn && (
            <div className={styles.inputGroup}>
              <label htmlFor="returnDate" className={styles.inputLabel}>
                Return Date
              </label>
              <input
                id="returnDate"
                type="date"
                className={styles.dateInput}
                value={retDate}
                onChange={(e) => setRetDate(e.target.value)}
                aria-required="true"
              />
            </div>
          )}
        </div>

        {ctaLink && (
          <div className={styles.ctaContainer}>
            <a href={ctaLink} className={styles.primaryButton}>
              Search Flights
              <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </section>

      <section className={styles.travelTips}>
        <h2 className={styles.sectionTitle}>Flight Booking Tips & Guides</h2>
        <div className={styles.tipsGrid}>
          <article className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Best Time to Book</h3>
            <p className={styles.tipDescription}>Save up to 40% with smart timing</p>
          </article>
          <article className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Baggage Allowance</h3>
            <p className={styles.tipDescription}>Avoid unexpected fees</p>
          </article>
          <article className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Airport Arrival</h3>
            <p className={styles.tipDescription}>Never miss your flight</p>
          </article>
          <article className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Travel Documents</h3>
            <p className={styles.tipDescription}>Required documentation</p>
          </article>
        </div>
      </section>
    </div>
  );
};

FlightBookingIsland.propTypes = {
  tripType: PropTypes.oneOf(['One Way', 'Return']),
  departingFrom: PropTypes.string,
  travelingTo: PropTypes.string,
  departureDate: PropTypes.string,
  returnDate: PropTypes.string,
  ctaLink: PropTypes.string,
};

export default FlightBookingIsland;