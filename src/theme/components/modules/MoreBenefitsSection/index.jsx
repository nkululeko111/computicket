import React from 'react';
import { ModuleFields, ImageField, TextField, UrlField } from '@hubspot/cms-components/fields';
import styles from './MoreBenefitsSection.module.css';
import eventImg from '../../../assets/images/partner-events.png'; 


export const Component = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h2 className={styles.headline}>
            More affordable than you think, with benefits that deliver more
          </h2>
          <h3 className={styles.subtext}>
            Nationwide reach meets competitive pricing
          </h3>
          <a className={styles.ctaButton} href="/partner">
            FIND OUT MORE...
          </a>
        </div>
        <div className={styles.imageWrapper}>
          <img src={eventImg} alt="Event Partner" />
        </div>
      </div>

      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <h4>Competitive Rates</h4>
          <p>Surprisingly affordable pricing with options to suit your event size.</p>
        </div>
        <div className={styles.card}>
          <h4>Nationwide Network</h4>
          <p>South Africa's best ticketing network, reaching every corner.</p>
        </div>
        <div className={styles.card}>
          <h4>Physical & Digital</h4>
          <p>Retail outlets plus online sales. Maximum reach for your event.</p>
        </div>
        <div className={styles.card}>
          <h4>Proven Results</h4>
          <p>Join thousands of successful events selling more tickets faster.</p>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField name="background_image" label="Background Image" />
    <UrlField name="cta_link" label="CTA Link" />
  </ModuleFields>
);

export const meta = {
  label: 'moreBenefits',
};