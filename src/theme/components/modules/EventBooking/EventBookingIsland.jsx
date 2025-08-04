import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventBooking.module.css';

export default function EventBookingIsland({
  event_type = 'All',
  location = '',
  event_date = '',
  search_term = '',
  cta_link = '',
}) {
  const [selectedType, setSelectedType] = React.useState(event_type);
  const [searchTerm, setSearchTerm] = React.useState(search_term);
  const [loc, setLoc] = React.useState(location);
  const [date, setDate] = React.useState(event_date);

  React.useEffect(() => {
    setSelectedType(event_type);
  }, [event_type]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Live the Moment</h1>
      <p className={styles.subtitle}>
        Discover amazing live experiences happening near you
      </p>

      <div className={styles.searchSection}>
        <div className={styles.typeSelection}>
          {['All', 'Music', 'Festival', 'Family'].map((type) => (
            <button
              key={type}
              type="button"
              className={`${styles.typeButton} ${
                selectedType === type ? styles.active : ''
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type === 'All' ? 'All Events' : type}
            </button>
          ))}
        </div>

        <div className={styles.fieldsContainer}>
          <div className={styles.fieldGroup}>
            <label htmlFor="searchInput">
              Type to see available events, artists, venues...
            </label>
            <input
              id="searchInput"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="locationInput">Location</label>
            <input
              id="locationInput"
              type="text"
              placeholder="Enter city or venue"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="eventDate">Event Date</label>
            <input
              id="eventDate"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {cta_link && (
          <a href={cta_link} className={styles.searchButton}>
            Search Events
          </a>
        )}
      </div>

      <div className={styles.popularSearches}>
        <h2 className={styles.sectionTitle}>What's Your Scene?</h2>
        <div className={styles.suggestionsGrid}>
          <div className={styles.suggestion}>Family Fun</div>
          <div className={styles.suggestion}>Gospel &amp; Faith</div>
          <div className={styles.suggestion}>Lifestyle &amp; Wellness</div>
          <div className={styles.suggestion}>Live Music</div>
          <div className={styles.suggestion}>Party</div>
          <div className={styles.suggestion}>Women's Events</div>
        </div>
      </div>

      <div className={styles.eventsSection}>
        <h2 className={styles.sectionTitle}>Discover Amazing Events</h2>
        <div className={styles.eventCard}>
          <h3>Pretoria Zoo Women's Day Celebration</h3>
          <p className={styles.eventMeta}>
            PRETORIA, GAUTENG | Women's Day | 9 AUG 2025
          </p>
          <p>
            Join us for a spectacular Women's Day celebration at the Pretoria Zoo
            featuring a live performance by the talented Sjava! This event is a
            perfect way to honor and celebrate the women in our lives.
          </p>
        </div>
      </div>
    </div>
  );
}

EventBookingIsland.propTypes = {
  event_type: PropTypes.string,
  location: PropTypes.string,
  event_date: PropTypes.string,
  search_term: PropTypes.string,
  cta_link: PropTypes.string,
};
