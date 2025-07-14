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
  const intervalRef = useRef(null);

  const totalSlides = slides.length;

  const goToSlide = (i) => {
    console.log(`[Manual] Navigating to slide ${i}`);
    setIndex(i);
  };

  const goNext = () => {
    setIndex((prev) => {
      const next = (prev + 1) % totalSlides;
      console.log(`[Auto] Moving from slide ${prev} → ${next}`);
      return next;
    });
  };

  const goPrev = () => {
    setIndex((prev) => {
      const next = (prev - 1 + totalSlides) % totalSlides;
      console.log(`[Manual] Moving from slide ${prev} → ${next}`);
      return next;
    });
  };

  useEffect(() => {
    console.log('[Init] Starting auto-slide interval');
    intervalRef.current = setInterval(goNext, 3000);
    return () => {
      console.log('[Cleanup] Clearing interval');
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      const transformValue = `translateX(-${index * 100}%)`;
      slideRef.current.style.transform = transformValue;
      console.log(`[Transform] Applied: ${transformValue}`);
    }
  }, [index]);

  const handleManualNav = (action) => {
    console.log('[Manual Nav] Pausing auto-slide and performing action...');
    clearInterval(intervalRef.current);
    action();
    intervalRef.current = setInterval(goNext, 3000);
  };

  return (
    <section className={styles.container}>
      <div className={styles.sliderWrapper}>
        {/* Slider */}
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

        {/* Arrows */}
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => handleManualNav(goPrev)}
        >
          ‹
        </button>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={() => handleManualNav(goNext)}
        >
          ›
        </button>

        {/* Dots */}
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ''}`}
              onClick={() => handleManualNav(() => goToSlide(i))}
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
