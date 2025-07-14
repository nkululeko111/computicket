import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

import styles from './EventList.module.css';
import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    id: 'event',
    title: 'Comedy Night – Cape Town',
    description: 'Laugh out loud with top SA comedians.',
    image: '../../assets/images/event-comedy.jpg',
    link: '/events/comedy-night',
  },
  {
    id: 'bus',
    title: 'Intercape to Durban',
    description: 'Comfortable, reliable bus service.',
    image: '../../assets/images/bus-trip.jpg',
    link: '/buses/durban',
  },
  {
    id: 'plane',
    title: 'Flight to Joburg',
    description: 'Fastest way across SA.',
    image: '../../assets/images/plane-trip.jpg',
    link: '/flights/joburg',
  },
  {
    id: 'stay',
    title: 'Stay in Umhlanga',
    description: 'Ocean-view hotels and luxury suites.',
    image: '../../assets/images/voucher-bet.jpg',
    link: '/stay/umhlanga',
  },
  {
    id: 'voucher',
    title: 'Gift Voucher R500',
    description: 'Give the gift of events and travel.',
    image: '../../assets/images/voucher-bet.jpg',
    link: '/vouchers',
  },
];

export function Component({ fieldValues }) {
  const [index, setIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
       console.log('Applying transform:', transformValue);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{fieldValues.title}</h2>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={slideRef}>
          {slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <h3 className={styles.slideTitle}>{slide.title}</h3>
                <p className={styles.description}>{slide.description}</p>
                <a href={slide.link} className={styles.button}>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="event_source" label="Data Source" default="dummy" />
  </ModuleFields>
);

export const meta = {
  label: 'eventList',
};
