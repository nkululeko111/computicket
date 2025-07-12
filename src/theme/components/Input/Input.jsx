import React from 'react';
import styles from './Input.module.css';

export default function Input({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <div className={styles.inputGroup}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
