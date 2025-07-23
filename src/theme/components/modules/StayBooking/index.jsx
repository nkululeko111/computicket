import React, { useState } from 'react';
import {
  ModuleFields,
  ImageField,
  TextField,
  UrlField,
} from '@hubspot/cms-components/fields';
import styles from './StayBooking.module.css';

export const Component = ({ fields }) => {
  const { background_image } = fields || {};

  const [showGuestModal, setShowGuestModal] = useState(false);
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [radius, setRadius] = useState(6);
  const [destinationInput, setDestinationInput] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const totalGuests = adultCount + childCount;

  const toggleGuestModal = () => setShowGuestModal(!showGuestModal);

  // Replace with images from another source like Pexels or Pixabay
  const destinationImages = {
    'cape-town': 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
    'kruger-park': 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg',
    'drakensburg': 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    'rome': 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    'phuket': 'https://images.pexels.com/photos/462353/pexels-photo-462353.jpeg',
    'porto': 'https://images.pexels.com/photos/33972/pexels-photo.jpg',
  };

  // Property images from another source
  const propertyImages = {
    'lavender-manor': 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
    'harbour-house': 'https://images.pexels.com/photos/116296/pexels-photo-116296.jpeg',
    'marine': 'https://images.pexels.com/photos/290132/pexels-photo-290132.jpeg',
  };

  // Sample groups data
  const groups = [
    {
      heading: 'Hermanus, Western Cape',
      subtitle: 'Cozy Stays, Crashing Waves, and Whale Wonders Await.',
      keyword: 'hermanus',
      properties: [
        {
          name: 'Lavender Manor Guest Lodge',
          price: 'R 3,377',
          tags: ['Beach views', 'Terrace Breakfasts'],
          description:
            '…boasts panoramic views of Grotto Beach and offers guests great whale‑watching opportunities. Overlooking Walker Bay, Lavender Manor radiates a warm and sophisticated atmosphere.',
        },
        {
          name: 'Harbour House Hotel',
          price: 'R 5,592',
          tags: ['Pool', 'Restaurant', 'Garden & Terrace'],
          description:
            'Set in Hermanus, 27 km from Mt Hebron Nature Reserve, Harbour House Hotel - Manor House offers accommodation with an outdoor swimming pool, free private parking, a garden and a terrace.',
        },
        {
          name: 'The Marine',
          price: 'R 1,500',
          tags: ['Bay View', 'Scenic Walks', 'Spa'],
          description:
            'Overlooking the wide sweep of Walker Bay—The Marine has all the hallmarks of an amazing coastal retreat...',
        },
      ],
    },
    {
      heading: 'Edinburgh, Scotland',
      subtitle: 'Stay in the Heart of the Fringe.',
      keyword: 'edinburgh',
      properties: [
        {
          name: 'Holiday Inn Express',
          price: 'R 3,804',
          tags: ['Buffet Breakfast', '30 Min from Edinburgh'],
          description:
            'Just off the main motorway network. Easily accessible from Queen Margaret train station. The hotel is only 30 minutes from Edinburgh.',
        },
        {
          name: 'Britannia Hotel Edinburgh',
          price: 'R 6,760',
          tags: ['Convenient location'],
          description:
            'Situated on the banks of the Waters of Leith in the West end of Edinburgh City Centre...',
        },
        {
          name: 'Motel One Edinburgh‑Royal',
          price: 'R 9,933',
          tags: ['Central Location', 'Easy Walk to attractions'],
          description:
            'Situated in the centre of Edinburgh, the Motel One Edinburgh‑Royal is 5 minutes walk away from the train station...',
        },
      ],
    },
    {
      heading: 'Knysna, Garden Route',
      subtitle: 'Misty Mornings, Forest Trails, and Lagoon Views.',
      keyword: 'knysna',
      properties: [
        {
          name: 'Knysna Log Inn Hotel',
          price: 'R 1,584',
          tags: ['Beautiful woodwork', 'Train memorabilia'],
          description:
            'The spectacular lobby with its yellowwood trunks and amazing 3 m stained glass windows brings a calm and relaxing ambience...',
        },
        {
          name: 'Protea Hotel by Marriott Knysna Quays',
          price: 'R 1,888',
          tags: ['Lagoon views', 'Stylishly decorated rooms', 'Restaurant'],
          description:
            'With an outdoor pool facing the Indian Ocean, Protea Hotel Knysna has spectacular views of the Knysna Lagoon...',
        },
        {
          name: 'Amanzi Island Boutique Hotel',
          price: 'R 2,296',
          tags: ['Panoramic views', 'Balconies or patios'],
          description:
            'At the tip of Leisure Island and overlooking the Knysna Lagoon, this hotel has an outdoor pool and terrace...',
        },
      ],
    },
    {
      heading: 'Kyoto, Japan',
      subtitle: 'Where Every Stay Feels Centuries Deep.',
      keyword: 'kyoto',
      properties: [
        {
          name: 'Hotel Resol Trinity Kyoto',
          price: 'R 1,370',
          tags: ['Spa', 'Restaurant', 'Gion Shijo Station nearby'],
          description:
            'Featuring a garden, a restaurant as well as a bar, Hotel Resol Trinity Kyoto is located in the centre of Kyoto...',
        },
        {
          name: 'The Royal Park Hotel Kyoto Sanjo',
          price: 'R 1,575',
          tags: ['Restaurant', 'Nearby to Kyoto Imperial Palace'],
          description:
            'The Royal Park Hotel Kyoto Sanjo features stylish modern accommodations with free wired internet access...',
        },
        {
          name: 'Piece Hostel Sanjo',
          price: 'R 754',
          tags: ['Restaurant', 'Air conditioning'],
          description:
            'Piece Hostel Sanjo offers private and dormitory rooms in the heart of Kyoto...',
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Background Image */}
      <div className={styles.hero}>
        {background_image ? (
          <img src={background_image} alt="Stay background" className={styles.heroImage} />
        ) : (
          <div className={styles.heroPlaceholder}> {/* placeholder if no image */} </div>
        )}
        {/* Hero Overlay with a different background image */}
        <div
          className={styles.heroOverlay}
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/375294/pexels-photo-375294.jpeg)', // New overlay background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2>Find Your Perfect Stay</h2>
          <h3>
            Discover extraordinary accommodations across the world's most stunning destinations
          </h3>
        </div>
      </div>

      {/* Booking Modal */}
      <div className={styles.bookingModal}>
        <h2>Find Your Perfect Stay</h2>

        {/* Destination Input */}
        <div className={styles.fieldGroup}>
          <label>Where would you like to go?</label>
          <input
            type="text"
            placeholder="Enter your destination"
            value={destinationInput}
            onChange={(e) => setDestinationInput(e.target.value)}
          />
        </div>

        {/* Search Radius Slider */}
        <div className={styles.fieldGroup}>
          <label>Search Radius: {radius} km</label>
          <input
            type="range"
            min="1"
            max="50"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </div>

        {/* Date Pickers */}
        <div className={styles.dateFields}>
          <div>
            <label>Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            <label>Check-out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>

        {/* Guests Selector */}
        <div className={styles.fieldGroup}>
          <label>Guests</label>
          <button className={styles.guestsButton} onClick={toggleGuestModal}>
            {totalGuests} Guests
          </button>

          {showGuestModal && (
            <div className={styles.guestModal}>
              <h4>Select Guests (Max 9 total)</h4>
              {/* Adults */}
              <div className={styles.guestRow}>
                <span>Adults (13+)</span>
                <div className={styles.counter}>
                  <button
                    onClick={() => setAdultCount(Math.max(0, adultCount - 1))}
                  >
                    -
                  </button>
                  <span>{adultCount}</span>
                  <button
                    onClick={() =>
                      setAdultCount(Math.min(9 - childCount, adultCount + 1))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Children */}
              <div className={styles.guestRow}>
                <span>Children (0-12)</span>
                <div className={styles.counter}>
                  <button
                    onClick={() => setChildCount(Math.max(0, childCount - 1))}
                  >
                    -
                  </button>
                  <span>{childCount}</span>
                  <button
                    onClick={() =>
                      setChildCount(Math.min(9 - adultCount, childCount + 1))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Total guests */}
              <p>Total guests: {totalGuests} / 9</p>
              {/* Apply button */}
              <button
                className={styles.applyButton}
                onClick={() => setShowGuestModal(false)}
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button className={styles.searchButton}>Search Accommodation</button>
      </div>

      {/* Popular Destinations */}
      <section className={styles.section}>
        <h2 className={styles.centeredTitle}>Popular Destinations</h2>
        <p className={styles.centeredSubtitle}>Explore our most sought-after locations</p>
        <div className={styles.cardGrid}>
          {Object.entries(destinationImages).map(([key, imgUrl]) => (
            <div key={key} className={styles.destinationCard}>
              <div
                className={styles.cardImage}
                style={{
                  backgroundImage: `url(${imgUrl})`,
                }}
              />
              <div className={styles.cardContent}>
                <h4>
                  {key
                    .split('-')
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' ')}
                </h4>
                <p>From R{Math.floor(Math.random() * 1000 + 150)} </p>
                <p>{Math.floor(Math.random() * 100 + 10)} properties</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties Header */}
      <section className={styles.section}>
        <h2 className={styles.featuredHeading}>Featured Properties</h2>
        <p className={styles.featuredSubtitle}>
          Hand-picked stays for your next adventure
        </p>
      </section>

      {/* Featured Properties Group */}
      {groups.map((grp, idx) => (
        <section key={idx} className={styles.section}>
          <h2 className={styles.alignLeft}>{grp.heading}</h2>
          <p className={styles.alignLeftSubtitle}>{grp.subtitle}</p>
          <div className={styles.propertyGrid}>
            {grp.properties.map((prop, i2) => (
              <div key={i2} className={styles.propertyCard}>
                <div
                  className={styles.propertyImage}
                  style={{
                    backgroundImage: `url(${propertyImages[prop.name.toLowerCase().replace(/\s+/g, '-')]} || 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg')`,
                  }}
                >
                  <div className={styles.propertyBadge}>
                    <span>★ 4.5</span>
                    <span>From {prop.price}</span>
                  </div>
                </div>
                <div className={styles.propertyInfo}>
                  <h4>{prop.name}</h4>
                  <p>{grp.heading}</p>
                  <p>{prop.tags.join(', ')}</p>
                  <p>{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export const fields = (
  <ModuleFields>
    <ImageField name="background_image" label="Background Image" />
    <TextField name="destination" label="Destination" />
    <TextField name="check_in" label="Check-in Date" />
    <TextField name="check_out" label="Check-out Date" />
    <UrlField name="cta_link" label="CTA Link" />
  </ModuleFields>
);

export const meta = {
  label: 'Stay Booking Module',
};