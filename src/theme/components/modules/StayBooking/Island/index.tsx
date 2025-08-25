import React, { useState } from "react";
import styles from "../stay-booking.module.css"; 

export default function StayBooking() {
  // Location state
  const [location, setLocation] = useState("");
  
  // Search radius state
  const [radius, setRadius] = useState(10);
  
  // Date states
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  // Guest modal state
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const [showGuestModal, setShowGuestModal] = useState(false);

  const maxGuests = 9;
  const totalGuests = guests.adults + guests.children;

  const incrementGuest = (type) => {
    if (totalGuests >= maxGuests) return;
    setGuests((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrementGuest = (type) => {
    setGuests((prev) => {
      if (prev[type] <= 0) return prev;
      if (type === "adults" && prev.adults <= 1) return prev;
      return { ...prev, [type]: prev[type] - 1 };
    });
  };

  const guestSummary = () => {
    return `${totalGuests} Guest${totalGuests !== 1 ? "s" : ""} (${guests.adults} Adult${guests.adults !== 1 ? "s" : ""}${guests.children ? `, ${guests.children} Child${guests.children !== 1 ? "ren" : ""}` : ""})`;
  };

  return (
    <div className={styles.stayBookingContainer}>
      {/* Search Form */}
      <div className={styles.searchForm}>
        <h2>Find Your Perfect Stay</h2>

        {/* Location Input */}
        <div className={styles.formGroup}>
          <label htmlFor="destination">Where would you like to go?</label>
          <input 
            type="text" 
            id="destination" 
            placeholder="Enter destination"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Search Radius */}
        <div className={styles.formGroup}>
          <label htmlFor="searchRadius">Search Radius: {radius} km</label>
          <div className={styles.rangeContainer}>
            <input
              type="range"
              id="searchRadius"
              min="1"
              max="100"
              value={radius}
              onChange={(e) => setRadius(parseInt(e.target.value))}
              className={styles.rangeSlider}
            />
            <div className={styles.rangeLabels}>
              <span>1 km</span>
              <span>100 km</span>
            </div>
          </div>
        </div>

        {/* Check-in/Check-out Dates */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="checkInDate">Check-in</label>
            <input 
              type="date" 
              id="checkInDate" 
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              placeholder="Select date"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="checkOutDate">Check-out</label>
            <input 
              type="date" 
              id="checkOutDate" 
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              placeholder="Select date"
            />
          </div>
        </div>

        {/* Guests */}
        <div className={styles.formGroup}>
          <label>Guests</label>
          <div
            className={styles.guestInput}
            onClick={() => setShowGuestModal(!showGuestModal)}
            tabIndex={0}
            role="button"
            aria-haspopup="dialog"
            aria-expanded={showGuestModal}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setShowGuestModal(!showGuestModal);
            }}
          >
            {guestSummary()}
          </div>
          {showGuestModal && (
            <div className={styles.guestModal} role="dialog" aria-modal="true" aria-label="Select Guests">
              <h3>Select Guests (Max 9 total)</h3>
              
              <div className={styles.guestControl}>
                <div>
                  <h4>Adults</h4>
                  <p>Ages 13 or above</p>
                </div>
                <div className={styles.countControl}>
                  <button 
                    type="button" 
                    onClick={() => decrementGuest("adults")} 
                    aria-label="Decrease adults"
                    disabled={guests.adults <= 1}
                  >-</button>
                  <span>{guests.adults}</span>
                  <button 
                    type="button" 
                    onClick={() => incrementGuest("adults")} 
                    aria-label="Increase adults"
                    disabled={totalGuests >= maxGuests}
                  >+</button>
                </div>
              </div>
              
              <div className={styles.guestControl}>
                <div>
                  <h4>Children</h4>
                  <p>Ages 0-12</p>
                </div>
                <div className={styles.countControl}>
                  <button 
                    type="button" 
                    onClick={() => decrementGuest("children")} 
                    aria-label="Decrease children"
                    disabled={guests.children <= 0}
                  >-</button>
                  <span>{guests.children}</span>
                  <button 
                    type="button" 
                    onClick={() => incrementGuest("children")} 
                    aria-label="Increase children"
                    disabled={totalGuests >= maxGuests}
                  >+</button>
                </div>
              </div>
              
              <div className={styles.guestTotal}>
                Total guests: {totalGuests} / 9
              </div>
              
              <div className={styles.guestModalButtons}>
                <button 
                  className={styles.applyBtn} 
                  onClick={() => setShowGuestModal(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Accommodation Button */}
        <button className={styles.searchButton}>Search Accommodation</button>
      </div>
    </div>
  );
}