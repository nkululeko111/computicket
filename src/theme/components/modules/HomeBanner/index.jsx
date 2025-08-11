import React from 'react';
import {
  ModuleFields,
  ImageField,
  TextField,
  UrlField,
} from '@hubspot/cms-components/fields';
import styles from './HomeBanner.module.css';

export function Component({ fieldValues }) {
  return (
    <section className={styles.wrapper}>
      <header
        className={styles.header}
        style={{
          backgroundImage: `url(${fieldValues.background_image?.src})`,
        }}
      >
        <h1 className={styles.headline}>{fieldValues.headline}</h1>
        <a className={styles.cta} href={fieldValues.cta_link}>
          {fieldValues.cta_button}
        </a>
      </header>

      {/* Hidden Mauritius Section */}
      <div className={styles.mauritiusSection}>
        <h2 className={styles.subheading}>Discover Hidden Mauritius</h2>
        <h3 className={styles.subsubheading}>
          Skip the crowds and explore authentic island gems
        </h3>

        <div className={styles.cardGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <img
              src={fieldValues.ile_aux_aigrettes_image?.src}
              alt="Île aux Aigrettes"
              className={styles.cardImg}
            />
            <div className={styles.cardOverlay}>
              <a
                href="https://maps.google.com/?q=Île+aux+Aigrettes"
                className={styles.cardBtn}
              >
                <i className="fa fa-map-marker-alt" /> Île aux Aigrettes
              </a>
              <p className={styles.cardDesc}>
                Pristine nature reserve with rare endemic species
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <img
              src={fieldValues.chamarel_hotel_image?.src}
              alt="Chamarel Village"
              className={styles.cardImg}
            />
            <div className={styles.cardOverlay}>
              <a
                href="https://maps.google.com/?q=Chamarel+Village"
                className={styles.cardBtn}
              >
                <i className="fa fa-map-marker-alt" /> Chamarel Village
              </a>
              <p className={styles.cardDesc}>
                Seven-colored earth and hidden rum distilleries
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <img
              src={fieldValues.trou_aux_cerfs_image?.src}
              alt="Trou aux Cerfs"
              className={styles.cardImg}
            />
            <div className={styles.cardOverlay}>
              <a
                href="https://maps.google.com/?q=Trou+aux+Cerfs"
                className={styles.cardBtn}
              >
                <i className="fa fa-map-marker-alt" /> Trou aux Cerfs
              </a>
              <p className={styles.cardDesc}>
                Dormant volcanic crater with panoramic views
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField name="background_image" label="Background Image" />
    <ImageField name="ile_aux_aigrettes_image" label="Île aux Aigrettes Image" />
    <ImageField name="chamarel_hotel_image" label="Chamarel Hotel Image" />
    <ImageField name="trou_aux_cerfs_image" label="Trou aux Cerfs Image" />
    <TextField name="headline" label="Headline" />
    <TextField name="cta_button" label="CTA Button Text" />
    <UrlField name="cta_link" label="CTA Link" />
  </ModuleFields>
);

export const meta = {
  label: 'Home Banner',
};
