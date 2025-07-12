import React from 'react';
import styles from './EventCard.module.css';

export default function EventCard({ title, date, location, imageSrc }) {
  return (
    <div className={styles.card}>
      {imageSrc && <img src={imageSrc} alt={title} className={styles.image} />}
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
