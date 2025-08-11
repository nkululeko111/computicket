import React, { useState } from "react";
import styles from "../flightbooking.module.css"; // Adjust path if needed

const CABIN_CLASSES = [
  { value: "economy", label: "Economy", description: "Standard seating" },
  { value: "premium_economy", label: "Premium Economy", description: "Extra legroom and amenities" },
  { value: "business", label: "Business", description: "Priority services and comfort" },
  { value: "first", label: "First Class", description: "Ultimate luxury and privacy" },
];

const STOP_PREFERENCES = [
  { value: "any", label: "Show all flights", description: "Any number of stops" },
  { value: "one_stop", label: "1 stop max", description: "Direct or 1-stop flights" },
  { value: "nonstop", label: "Nonstop only", description: "Direct flights only" },
];

export default function FlightBookingTips() {
  // Trip type state
  const [tripType, setTripType] = useState("oneway");

  // Passenger counts state
  const [passengers, setPassengers] = useState({ adult: 1, child: 0, infant: 0 });
  const [showPassengerModal, setShowPassengerModal] = useState(false);

  // Cabin class dropdown
  const [cabinClass, setCabinClass] = useState(CABIN_CLASSES[0].value);
  const [showCabinDropdown, setShowCabinDropdown] = useState(false);

  // Stop preference dropdown
  const [stopPref, setStopPref] = useState(STOP_PREFERENCES[0].value);
  const [showStopDropdown, setShowStopDropdown] = useState(false);

  // Tips accordion
  const [activeTip, setActiveTip] = useState(null);

  const maxPassengers = 8;
  const totalPassengers = passengers.adult + passengers.child + passengers.infant;

  const incrementPassenger = (type) => {
    if (totalPassengers >= maxPassengers) return;
    if (type === "infant" && passengers.infant >= passengers.adult) return; // infant-adult rule
    setPassengers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrementPassenger = (type) => {
    setPassengers((prev) => {
      if (prev[type] <= 0) return prev;
      if (type === "adult" && prev.adult <= 1) return prev;
      if (type === "adult" && prev.infant > prev.adult - 1) {
        return { ...prev, adult: prev.adult - 1, infant: prev.adult - 1 };
      }
      return { ...prev, [type]: prev[type] - 1 };
    });
  };

  const passengerSummary = () => {
    const total = totalPassengers;
    return `${total} Passenger${total !== 1 ? "s" : ""} (${passengers.adult} Adult${passengers.adult !== 1 ? "s" : ""}${passengers.child ? `, ${passengers.child} Child${passengers.child !== 1 ? "ren" : ""}` : ""}${passengers.infant ? `, ${passengers.infant} Infant${passengers.infant !== 1 ? "s" : ""}` : ""})`;
  };

  const toggleTip = (index) => {
    setActiveTip(activeTip === index ? null : index);
  };

  const tipsData = [
    {
      title: "Best Time to Book Flights",
      subtitle: "Save up to 40% with smart timing",
      content: (
        <div className={styles.dropdownContent}>
          <div className={styles.tipSection}>
            <h4>Domestic Flights</h4>
            <ul>
              <li>Book 2-4 weeks in advance</li>
              <li>Tuesday afternoons = lowest prices</li>
              <li>Avoid booking on weekends</li>
            </ul>
          </div>
          <div className={styles.tipSection}>
            <h4>International Flights</h4>
            <ul>
              <li>Book 6-8 weeks ahead</li>
              <li>Mid-week departures cheaper</li>
              <li>Off-season = best deals</li>
            </ul>
          </div>
          <div className={styles.proTip}>
            <strong>Pro Tip:</strong> Compare airlines on our platform to find the best combination of price, timing, and convenience for your travel needs!
          </div>
        </div>
      ),
    },
    {
      title: "Baggage Allowance Guide",
      subtitle: "Avoid unexpected fees",
      content: (
        <div className={styles.dropdownContent}>
          <div className={styles.tipSection}>
            <h4>✈️ Computicket Advantage</h4>
            <p>All tickets purchased through us include checked baggage! No surprise fees - your 20kg checked bag is already included in the price.</p>
          </div>
          <div className={styles.tipSection}>
            <h4>Standard Allowances</h4>
            <div className={styles.allowanceGrid}>
              <div>
                <h5>Carry-on</h5>
                <p>7kg • 56x36x23cm</p>
              </div>
              <div>
                <h5>Checked Bag</h5>
                <p>20kg • Economy class</p>
                <p>✓ Included with us!</p>
              </div>
            </div>
          </div>
          <div className={styles.tipSection}>
            <h4>Prohibited Items</h4>
            <ul>
              <li>Liquids over 100ml (carry-on)</li>
              <li>Sharp objects and tools</li>
              <li>Flammable substances</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Airport Arrival Times",
      subtitle: "Never miss your flight",
      content: (
        <div className={styles.dropdownContent}>
          <div className={styles.arrivalGrid}>
            <div>
              <h4>Domestic Flights</h4>
              <p className={styles.timeHighlight}>90 min before departure</p>
            </div>
            <div>
              <h4>International</h4>
              <p className={styles.timeHighlight}>2-3 hrs before departure</p>
            </div>
          </div>
          <div className={styles.tipSection}>
            <h4>Quick Check-in Tips</h4>
            <ul>
              <li>Check-in online 24hrs before</li>
              <li>Download boarding pass to phone</li>
              <li>Use self-service kiosks</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Travel Documents",
      subtitle: "Required documentation",
      content: (
        <div className={styles.dropdownContent}>
          <div className={styles.tipSection}>
            <h4>Required Documents</h4>
            <ul>
              <li>Valid ID/Passport (check expiry)</li>
              <li>Boarding pass (digital or printed)</li>
              <li>Visa (international travel)</li>
            </ul>
          </div>
          <div className={styles.tipSection}>
            <h4>Important Reminder</h4>
            <p>Keep digital and physical copies of all documents. Check passport validity - many countries require 6+ months remaining.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Search Form */}
      <div className={styles.searchForm}>
        <h2>Find Your Perfect Flight</h2>

        <div className={styles.tripType} style={{ justifyContent: 'flex-end', width: '180px' }}>
          <button
            type="button"
            onClick={() => setTripType("oneway")}
            className={`${styles.tripButton} ${tripType === "oneway" ? styles.active : ""}`}
          >
            One Way
          </button>
          <button
            type="button"
            onClick={() => setTripType("return")}
            className={`${styles.tripButton} ${tripType === "return" ? styles.active : ""}`}
          >
            Return
          </button>
        </div>

        {/* Locations */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="departingFrom">Departing From</label>
            <input type="text" id="departingFrom" placeholder="Enter city or airport" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="travelingTo">Traveling To</label>
            <input type="text" id="travelingTo" placeholder="Enter city or airport" />
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

        {/* Passengers, Cabin Class & Stops */}
        <div className={styles.formRow} style={{ flexWrap: "wrap" }}>
          <div className={styles.passengerGroup} style={{ flex: "1 1 100%", marginBottom: "30px" }}>
            <label>Passengers</label>
            <div
              className={styles.passengerInput}
              onClick={() => setShowPassengerModal(!showPassengerModal)}
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-expanded={showPassengerModal}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowPassengerModal(!showPassengerModal);
              }}
            >
              {passengerSummary()}
            </div>
            {showPassengerModal && (
              <div className={styles.passengerModal} role="dialog" aria-modal="true" aria-label="Select Passengers">
                <div className={styles.passengerControl}>
                  <label>Adult (Age 12+)</label>
                  <div className="count">
                    <button type="button" onClick={() => decrementPassenger("adult")} aria-label="Decrease adults">-</button>
                    <span>{passengers.adult}</span>
                    <button type="button" onClick={() => incrementPassenger("adult")} aria-label="Increase adults">+</button>
                  </div>
                </div>
                <div className={styles.passengerControl}>
                  <label>Child (Age 2-11)</label>
                  <div className="count">
                    <button type="button" onClick={() => decrementPassenger("child")} aria-label="Decrease children">-</button>
                    <span>{passengers.child}</span>
                    <button type="button" onClick={() => incrementPassenger("child")} aria-label="Increase children">+</button>
                  </div>
                </div>
                <div className={styles.passengerControl}>
                  <label>Infant (Under 2, on lap)</label>
                  <div className="count">
                    <button type="button" onClick={() => decrementPassenger("infant")} aria-label="Decrease infants">-</button>
                    <span>{passengers.infant}</span>
                    <button type="button" onClick={() => incrementPassenger("infant")} aria-label="Increase infants">+</button>
                  </div>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#666", marginTop: 10 }}>
                  <p>• Each infant must be accompanied by an adult</p>
                  <p>• Children and infants cannot travel without adults</p>
                  <p>• Maximum 8 passengers per booking</p>
                </div>
                <div className={styles.passengerModalButtons}>
                  <button className={styles.applyBtn} onClick={() => setShowPassengerModal(false)}>Apply</button>
                  <button className={styles.closeBtn} onClick={() => setShowPassengerModal(false)}>Close</button>
                </div>
              </div>
            )}
          </div>

          {/* Cabin Class and Stop Preferences on same line */}
          <div className={styles.cabinStopsGroup} style={{ flex: "1 1 100%" }}>
            <div className={styles.cabinClassDropdown}>
              <label htmlFor="cabinClass">Select Cabin Class</label>
              <div
                id="cabinClass"
                className={styles.dropdownSelect}
                onClick={() => setShowCabinDropdown(!showCabinDropdown)}
                tabIndex={0}
                role="button"
                aria-haspopup="listbox"
                aria-expanded={showCabinDropdown}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setShowCabinDropdown(!showCabinDropdown);
                }}
              >
                {CABIN_CLASSES.find((c) => c.value === cabinClass)?.label}
              </div>
              {showCabinDropdown && (
                <div className={styles.dropdownOptions} role="listbox" tabIndex={-1}>
                  {CABIN_CLASSES.map(({ value, label, description }) => (
                    <div
                      key={value}
                      className={styles.dropdownOption}
                      role="option"
                      aria-selected={cabinClass === value}
                      tabIndex={0}
                      onClick={() => {
                        setCabinClass(value);
                        setShowCabinDropdown(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setCabinClass(value);
                          setShowCabinDropdown(false);
                        }
                      }}
                    >
                      <strong>{label}</strong>
                      <div style={{ fontSize: "0.8rem", color: "#666" }}>{description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.stopsDropdown}>
              <label htmlFor="stopPref">Select Stop Preference</label>
              <div
                id="stopPref"
                className={styles.dropdownSelect}
                onClick={() => setShowStopDropdown(!showStopDropdown)}
                tabIndex={0}
                role="button"
                aria-haspopup="listbox"
                aria-expanded={showStopDropdown}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setShowStopDropdown(!showStopDropdown);
                }}
              >
                {STOP_PREFERENCES.find((s) => s.value === stopPref)?.label}
              </div>
              {showStopDropdown && (
                <div className={styles.dropdownOptions} role="listbox" tabIndex={-1}>
                  {STOP_PREFERENCES.map(({ value, label, description }) => (
                    <div
                      key={value}
                      className={styles.dropdownOption}
                      role="option"
                      aria-selected={stopPref === value}
                      tabIndex={0}
                      onClick={() => {
                        setStopPref(value);
                        setShowStopDropdown(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setStopPref(value);
                          setShowStopDropdown(false);
                        }
                      }}
                    >
                      <strong>{label}</strong>
                      <div style={{ fontSize: "0.8rem", color: "#666" }}>{description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Flights Button */}
        <button className={styles.searchButton}>Search Flights</button>
      </div>

      {/* Flight Booking Tips Section */}
      <div className={styles.tipsSection}>
        <h2 className={styles.tipsHeading}>Flight Booking Tips & Guides</h2>
        <p className={styles.tipsSubheading}>Everything you need to know for a smooth travel experience</p>

        {/* Top two tips in one row */}
        <div className={styles.tipsGrid}>
          {[0, 1].map((idx) => {
            const tip = tipsData[idx];
            return (
              <div key={idx} className={styles.tipCard}>
                <div
                  className={styles.tipHeader}
                  onClick={() => toggleTip(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleTip(idx);
                  }}
                  aria-expanded={activeTip === idx}
                  aria-controls={`tip-body-${idx}`}
                  aria-describedby={`tip-subtitle-${idx}`}
                >
                  <h3>{tip.title}</h3>
                  <p id={`tip-subtitle-${idx}`}>{tip.subtitle}</p>
                  <span className={`${styles.arrow} ${activeTip === idx ? styles.up : styles.down}`}></span>
                </div>
                {activeTip === idx && (
                  <div id={`tip-body-${idx}`} className={styles.tipBody} role="region" aria-live="polite">
                    {tip.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom two tips in second row */}
        <div className={styles.tipsGrid}>
          {[2, 3].map((idx) => {
            const tip = tipsData[idx];
            return (
              <div key={idx} className={styles.tipCard}>
                <div
                  className={styles.tipHeader}
                  onClick={() => toggleTip(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleTip(idx);
                  }}
                  aria-expanded={activeTip === idx}
                  aria-controls={`tip-body-${idx}`}
                  aria-describedby={`tip-subtitle-${idx}`}
                >
                  <h3>{tip.title}</h3>
                  <p id={`tip-subtitle-${idx}`}>{tip.subtitle}</p>
                  <span className={`${styles.arrow} ${activeTip === idx ? styles.up : styles.down}`}></span>
                </div>
                {activeTip === idx && (
                  <div id={`tip-body-${idx}`} className={styles.tipBody} role="region" aria-live="polite">
                    {tip.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
