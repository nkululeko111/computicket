import React, { useState } from "react";
import styles from "../busbooking.module.css";
import NeedHelpImage from "../../../../assets/images/image.png";

const PASSENGER_TYPES = [
  { key: "adult", label: "Adult", description: "12 years and older" },
  { key: "senior", label: "Senior", description: "Older than 60 years" },
  { key: "child", label: "Child", description: "Younger than 12 years" },
  { key: "student", label: "Student", description: "Valid student card is required" },
  { key: "sapsandf", label: "SAPSANDF", description: "SAPSANDF identification is required" },
];

export default function BusBookingIsland() {
  // Slide state (0,1,2)
  const [slideIndex, setSlideIndex] = useState(0);

  // Trip type: oneway or return
  const [tripType, setTripType] = useState("oneway");

  // Passengers counts
  const [passengers, setPassengers] = useState({
    adult: 1,
    senior: 0,
    child: 0,
    student: 0,
    sapsandf: 0,
  });
  const maxPassengers = 8;

  // Passenger modal open
  const [showPassengerModal, setShowPassengerModal] = useState(false);

  // Helpers for slide navigation
  const nextSlide = () => setSlideIndex((idx) => (idx + 1) % 3);
  const prevSlide = () => setSlideIndex((idx) => (idx + 2) % 3); // +2 mod 3 is -1

  // Passenger counts
  const totalPassengers = Object.values(passengers).reduce((a, b) => a + b, 0);

  const incrementPassenger = (key) => {
    if (totalPassengers >= maxPassengers) return;
    setPassengers((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const decrementPassenger = (key) => {
    setPassengers((prev) => {
      if (prev[key] === 0) return prev;
      if (key === "adult" && prev.adult === 1) return prev; // always at least 1 adult
      return { ...prev, [key]: prev[key] - 1 };
    });
  };

  return (
    <div>
      {/* Booking Modal */}
      <div className={styles.bookingModal}>
        <h2>Find Your Perfect Bus</h2>
        {/* Trip type toggle */}
        <div className={styles.tripType}>
          <button
            type="button"
            className={`${styles.tripButton} ${tripType === "oneway" ? styles.active : ""}`}
            onClick={() => setTripType("oneway")}
          >
            One Way
          </button>
          <button
            type="button"
            className={`${styles.tripButton} ${tripType === "return" ? styles.active : ""}`}
            onClick={() => setTripType("return")}
          >
            Return
          </button>
        </div>

        {/* Locations */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="departingFrom">Departing From</label>
            <input type="text" id="departingFrom" placeholder="Enter city or terminal" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="travelingTo">Traveling To</label>
            <input type="text" id="travelingTo" placeholder="Enter city or terminal" />
          </div>
        </div>

        {/* Dates */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="departureDate">Departure Date</label>
            <input type="date" id="departureDate" />
          </div>
          <div className={`${styles.formGroup} ${tripType === "oneway" ? styles.hideReturn : ""}`}>
            <label htmlFor="returnDate">Return Date</label>
            <input type="date" id="returnDate" disabled={tripType === "oneway"} />
          </div>
        </div>

        {/* Passengers */}
        <div className={styles.formRow}>
          <div className={styles.passengerGroup}>
            <label>Select Passengers</label>
            <div
              className={styles.passengerInput}
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-expanded={showPassengerModal}
              onClick={() => setShowPassengerModal(!showPassengerModal)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowPassengerModal(!showPassengerModal);
              }}
            >
              {Object.entries(passengers).map(([key, val]) => {
                if (val > 0) {
                  const pt = PASSENGER_TYPES.find((pt) => pt.key === key);
                  return `${val} ${pt.label}${val > 1 ? "s" : ""} `;
                }
                return null;
              })}
            </div>

            {showPassengerModal && (
              <div
                className={styles.passengerModal}
                role="dialog"
                aria-modal="true"
                aria-label="Select Passengers"
              >
                {PASSENGER_TYPES.map(({ key, label, description }) => (
                  <div key={key} className={styles.passengerControl}>
                    <label>
                      {label}
                      <br />
                      <small>{description}</small>
                    </label>
                    <div className="count">
                      <button
                        type="button"
                        onClick={() => decrementPassenger(key)}
                        aria-label={`Decrease ${label}`}
                      >
                        -
                      </button>
                      <span>{passengers[key]}</span>
                      <button
                        type="button"
                        onClick={() => incrementPassenger(key)}
                        aria-label={`Increase ${label}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                <div className={styles.passengerModalButtons}>
                  <button
                    className={styles.applyBtn}
                    onClick={() => setShowPassengerModal(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Button */}
        <button className={styles.searchButton}>Search Buses</button>
      </div>

      {/* Slideshow */}
      <div className={styles.slideshow}>
        <button className={styles.slideNavBtn} onClick={prevSlide} aria-label="Previous Slide">
          &#10094;
        </button>
        <div className={styles.slidesWrapper}>
          {slideIndex === 0 && (
            <div className={styles.slide} style={{ backgroundColor: "#111" }}>
              <img src={NeedHelpImage} alt="Need Help" className={styles.centerImage} />
              <div className={styles.slideTextContainer}>
                <h3>Need Help?</h3>
                <p>
                  Visit Our <span className={styles.inStoreHighlight}>IN-STORE</span> Team
                </p>
                <p>
                  Get personal assistance from our trained staff at any Shoprite Money Market store.
                </p>
                <p className={styles.slideSubtext}>
                  Bus tickets, flight bookings, and expert advice - all in one place.
                </p>
              </div>
            </div>
          )}
          {slideIndex === 1 && (
            <div className={styles.slide} style={{ backgroundColor: "#222" }}>
              <h2 className={styles.slideTitle}>
                BOOK WITH <span className={styles.confidenceRed}>CONFIDENCE</span>
              </h2>
              <p>
                Your booking experience designed with trust, transparency, and peace of mind
              </p>
              <div className={styles.cardsRow}>
                <div className={styles.infoCard}>
                  <h4>No Hidden Fees</h4>
                  <p>What you see is what you pay - guaranteed transparent pricing with no surprise charges</p>
                </div>
                <div className={styles.infoCard}>
                  <h4>Best Prices</h4>
                  <p>Same low prices online and in-store - no markup for convenience, just honest pricing</p>
                </div>
                <div className={styles.infoCard}>
                  <h4>Trusted & Secure</h4>
                  <p>Premium partners and secure payment systems for complete peace of mind with every booking</p>
                </div>
              </div>
            </div>
          )}
          {slideIndex === 2 && (
            <div className={styles.slide} style={{ backgroundColor: "#111" }}>
              <h2 className={styles.slideTitle}>
                BOOKING IS <span className={styles.easyRed}>EASY</span>
              </h2>
              <div className={styles.stepCards}>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>1</div>
                  <h4>Choose Destination</h4>
                  <p>Select your departure and arrival cities with your preferred travel dates</p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>2</div>
                  <h4>Pick Your Ticket</h4>
                  <p>Compare prices and choose the perfect ticket option that suits your budget</p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>3</div>
                  <h4>Add Details</h4>
                  <p>Enter passenger information quickly and securely in our streamlined form</p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>4</div>
                  <h4>Pay & Done</h4>
                  <p>Secure payment and instant ticket delivery straight to your email inbox</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className={styles.slideNavBtn} onClick={nextSlide} aria-label="Next Slide">
          &#10095;
        </button>
      </div>
    </div>
  );
}
