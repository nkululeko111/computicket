import React from 'react';
import { ModuleFields, ImageField, TextField, UrlField } from '@hubspot/cms-components/fields';
import styles from './PerfectExperience.module.css';

export const Component = () => {
  return (
    <section className={styles.section}>
      <div className={styles['heading-center']}>
        <h2 className={styles['h2-center']}>Build Your Perfect Experience</h2>
        <h4 className={styles['h4-center']}>
          Pick what you need, discover what you want. From solo bookings to full experiences - every trip is better when it's tailored to you.
        </h4>
      </div>

      {/* First Experience Section */}
      <div className={styles['experience-section']}>
        <h3 className={styles['h3-bold-margin']}>Turn up the soul with Anthony Hamilton, Joe Thomas, Sjava, Vusi Nova and Zonke</h3>
        <h4 className={styles['h4-margin']}>Create your ultimate soul music experience - flights, hotels and tickets</h4>

        <div className={styles['card-grid']}>
          {/* Flight Card */}
          <div className={styles.card}>
            <div className={styles['card-image']} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)` }}>
              <div className={styles['price-tag']}>From R2,854 return p.p.</div>
            </div>
            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>FLY FROM CAPE TOWN</h4>
              <p className={styles['card-location']}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                CPT → JNB → CPT
              </p>
              <p className={styles['card-description']}>
                Direct flights from Cape Town to Johannesburg for the Anthony Hamilton concert. Choose from multiple departure times with flexible booking options and competitive prices.
              </p>
            </div>
          </div>

          {/* Hotel Card */}
          <div className={styles.card}>
            <div className={styles['card-image']} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)` }}>
              <div className={styles['price-tag']}>From R509 per night</div>
            </div>
            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>STAY NEARBY</h4>
              <p className={styles['card-location']}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Johannesburg, ZA
              </p>
              <p className={styles['card-description']}>
                Stay close to the Anthony Hamilton concert venue. Premium hotels within 15 minutes of the show location.
              </p>
            </div>
          </div>

          {/* Event Card */}
          <div className={styles.card}>
            <div className={styles['card-image']} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)` }}>
              <div className={styles['price-tag']}>From R750</div>
            </div>
            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>EVENT TICKETS</h4>
              <p className={styles['card-location']}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Wanderers Cricket Stadium, GP
              </p>
              <p className={styles['card-description']}>
                Women's Day Celebration with Anthony Hamilton, Joe Thomas, Zonke, Sjava & Vusi Nova. From timeless ballads to modern soul hits, these five musical giants bring vocal excellence, storytelling brilliance, and South African soul that promises a night to remember.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Experience Section */}
      <div className={styles['experience-section']}>
        <h3 className={styles['h3-bold-margin']}>Fall in love with Kenny Lattimore at Sun City</h3>
        <h4 className={styles['h4-margin']}>Put together your perfect romantic weekend - flights, hotels and tickets</h4>

        <div className={styles['card-grid']}>
          {/* Hotel Card */}
          <div className={styles.card}>
            <div className={styles['card-image']} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80)` }}>
              <div className={styles['price-tag']}>From R882 per night</div>
            </div>
            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Sleep close to the magic</h4>
              <p className={styles['card-location']}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Sun City, NW
              </p>
              <p className={styles['card-description']}>
                Rest easy knowing you're just minutes from the Kenny Lattimore concert. Choose from luxury hotels with pools, spas and stunning views.
              </p>
            </div>
          </div>

          {/* Event Card */}
          <div className={styles.card}>
            <div className={styles['card-image']} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)` }}>
              <div className={styles['price-tag']}>From R799</div>
            </div>
            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Kenny Latimore and Glen Jones</h4>
              <p className={styles['card-location']}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Sun City Superbowl, NW
              </p>
              <p className={styles['card-description']}>
                Rusty Rocks All for Women is thrilled to announce Kenny Lattimore live on stage at the Sun City Superbowl! Get ready to be taken on a musical journey with your favourite singalong songs. This is more than just a concert, it is an experience you don't want to miss.
              </p>
            </div>
          </div>

          {/* Flight Card */}
          <div className={styles.card}>
            <div className={styles['card-image']} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)` }}>
              <div className={styles['price-tag']}>From R1,554 return p.p.</div>
            </div>
            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Get There from Durban</h4>
              <p className={styles['card-location']}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                DBN → JNB → DBN
              </p>
              <p className={styles['card-description']}>
                Direct flights from Durban to Johannesburg, then a short trip to Sun City. Book your return flights now and start your soul journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const fields = (
  <ModuleFields>
    <ImageField name="background_image" label="Background Image" />
    <UrlField name="cta_link" label="CTA Link" />
  </ModuleFields>
);

export const meta = {
  label: 'Perfect Experience',
};