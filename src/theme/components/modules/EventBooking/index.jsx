import React from 'react';
import { ModuleFields, SelectField, TextField, DateField, UrlField } from '@hubspot/cms-components/fields';
import styles from './EventBooking.module.css';

export function Component({ fieldValues }) {
  const {
    event_type,
    location,
    event_date,
    cta_link,
    search_term
  } = fieldValues;

  // State for event type selection
  const [selectedType, setSelectedType] = React.useState(event_type || 'All');

  return (
    <div className={styles.container}>
      {/* Main Heading */}
      <h1 className={styles.title}>Live the Moment</h1>
      <p className={styles.subtitle}>Discover amazing live experiences happening near you</p>

      {/* Search & Filter Section */}
      <div className={styles.searchSection}>
        {/* Event Type Selection */}
        <div className={styles.typeSelection}>
          <button
            className={`${styles.typeButton} ${selectedType === 'All' ? styles.active : ''}`}
            onClick={() => setSelectedType('All')}
          >
            All Events
          </button>
          <button
            className={`${styles.typeButton} ${selectedType === 'Music' ? styles.active : ''}`}
            onClick={() => setSelectedType('Music')}
          >
            Music
          </button>
          <button
            className={`${styles.typeButton} ${selectedType === 'Festival' ? styles.active : ''}`}
            onClick={() => setSelectedType('Festival')}
          >
            Festival
          </button>
          <button
            className={`${styles.typeButton} ${selectedType === 'Family' ? styles.active : ''}`}
            onClick={() => setSelectedType('Family')}
          >
            Family
          </button>
        </div>

        {/* Search Inputs */}
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldGroup}>
            <label>Type to see available events, artists, venues...</label>
            <input
              type="text"
              placeholder="Search..."
              defaultValue={search_term}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter city or venue"
              defaultValue={location}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label>Event Date</label>
            <input
              type="date"
              defaultValue={event_date}
            />
          </div>
        </div>

        {/* Call to Action Button */}
        {cta_link && (
          <a href={cta_link} className={styles.searchButton}>
            Search Events
          </a>
        )}
      </div>

      {/* Popular Searches / Themes */}
      <div className={styles.popularSearches}>
        <h2 className={styles.sectionTitle}>What's Your Scene?</h2>
        <div className={styles.suggestionsGrid}>
          <div className={styles.suggestion}>Family Fun</div>
          <div className={styles.suggestion}>Gospel & Faith</div>
          <div className={styles.suggestion}>Lifestyle & Wellness</div>
          <div className={styles.suggestion}>Live Music</div>
          <div className={styles.suggestion}>Party</div>
          <div className={styles.suggestion}>Women's Events</div>
        </div>
      </div>

      {/* Highlighted Events */}
      <div className={styles.eventsSection}>
        <h2 className={styles.sectionTitle}>Discover Amazing Events</h2>
        <div className={styles.eventCard}>
          <h3>Pretoria Zoo Women's Day Celebration</h3>
          <p className={styles.eventMeta}>PRETORIA, GAUTENG | Women's Day | 9 AUG 2025</p>
          <p>
            Join us for a spectacular Women's Day celebration at the Pretoria Zoo featuring a live performance by the talented Sjava! This event is a perfect way to honor and celebrate the women in our lives.
          </p>
        </div>
      </div>
    </div>
  );
}



export const fields = (
  <ModuleFields>
    <UrlField name="cta_link" label="CTA Link"/>
  </ModuleFields>
);

export const meta = {
  label: 'Event Booking Module',
};