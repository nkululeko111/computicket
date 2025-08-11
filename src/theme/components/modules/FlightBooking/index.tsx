import { Island } from "@hubspot/cms-components";
import FlightBookingTips from "./Island/index.jsx?island";
import styles from "./flightbooking.module.css";

export const Component = ({ fieldValues }) => {
  return (
    <div className={styles.flightBookingModule}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{fieldValues.heroHeading || "The World Awaits"}</h1>
          <p>{fieldValues.heroSubheading || "Flights that connect you to extraordinary experiences worldwide"}</p>
        </div>
      </div>
      
      {/* Flight Search Section */}
      <div className={styles.searchSection}>
        <div className={styles.searchForm}>
          <h2>Find Your Perfect Flight</h2>
          
          <div className={styles.tripType}>
            <button className={`${styles.tripButton} ${styles.active}`}>
              One Way
            </button>
            <button className={styles.tripButton}>
              Return
            </button>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Departing From</label>
              <input type="text" placeholder="Enter city or airport" />
            </div>
            <div className={styles.formGroup}>
              <label>Traveling To</label>
              <input type="text" placeholder="Enter city or airport" />
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Departure Date</label>
              <input type="date" />
            </div>
            <div className={styles.formGroup}>
              <label>Return Date</label>
              <input type="date" />
            </div>
          </div>
          
          <button className={styles.searchButton}>Search Flights</button>
        </div>
      </div>
      
      {/* Tips Section */}
      <div className={styles.tipsSection}>
        <h2 className={styles.tipsHeading}>Flight Booking Tips & Guides</h2>
        <p className={styles.tipsSubheading}>Everything you need to know for a smooth travel experience</p>
        
        <Island module={FlightBookingTips} />
      </div>
    </div>
  );
};

export { fields } from "./fields.js";

export const meta = {
  "label": "Flight Booking Module",
  "css_assets": [],
  "external_js": [],
  "global": true,
  "help_text": "A flight booking module with search form and travel tips",
  "content_types": ["ANY"],
  "js_assets": [],
  "other_assets": [],
  "smart_type": "NOT_SMART",
  "tags": ["flight", "booking", "travel"],
  "is_available_for_new_content": true
};