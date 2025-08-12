import { Island } from "@hubspot/cms-components";
import BusBookingIsland from "./Island/index.jsx?island";

import styles from "./busbooking.module.css";

export const Component = ({ fieldValues, hublParameters = {} }) => {
  return (
    <div className={styles.busBookingModule}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{fieldValues.heroHeading || "Journey Beyond"}</h1>
          <p>{fieldValues.heroSubheading || "Affordable adventures await on long-distance coaches."}</p>
        </div>
      </div>

      {/* Bus Booking Island: slideshow, booking modal */}
      <div className={styles.bookingSection}>
        <Island module={BusBookingIsland} />
      </div>
    </div>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Bus Booking Module",
  css_assets: [],
  external_js: [],
  global: true,
  help_text: "Bus booking module with slideshow and search form",
  content_types: ["ANY"],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: ["bus", "booking", "travel"],
  is_available_for_new_content: true,
};
