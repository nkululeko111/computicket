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
      {/* Flight Search & Tips - fully rendered inside Island */}
      <div className={styles.searchSection}>
        <Island module={FlightBookingTips} />
      </div>
    </div>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Flight Booking Module",
  css_assets: [],
  external_js: [],
  global: true,
  help_text: "A flight booking module with search form and travel tips",
  content_types: ["ANY"],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: ["flight", "booking", "travel"],
  is_available_for_new_content: true,
};
