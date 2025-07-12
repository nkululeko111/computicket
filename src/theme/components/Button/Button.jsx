import React from 'react';
import styles from './Button.module.css';

export default function Button({ label, onClick, type = 'button' }) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
}
