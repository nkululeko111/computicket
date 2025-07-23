import React from 'react';
import { ModuleFields, TextField, SelectField, UrlField } from '@hubspot/cms-components/fields';
import styles from './BuyVoucher.module.css';

export const Component = ({ fieldValues }) => {
  const vouchers = [
    {
      label: fieldValues.voucher1Label,
      price: fieldValues.voucher1Price,
      value: fieldValues.voucher1Value,
    },
    {
      label: fieldValues.voucher2Label,
      price: fieldValues.voucher2Price,
      value: fieldValues.voucher2Value,
    },
  ];

  const [selectedVoucher, setSelectedVoucher] = React.useState(vouchers[0]?.value || '');
  const [mobileNumber, setMobileNumber] = React.useState('');

  const handlePurchase = () => {
    alert(`Purchasing voucher: ${selectedVoucher} for mobile: ${mobileNumber}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Digital Gift Vouchers</h1>
      <p className={styles.subtitle}>Send perfect gifts instantly to your loved ones.</p>

      <div className={styles.vouchersSection}>
        <h2>All Vouchers</h2>
        <div className={styles.vouchersList}>
          {vouchers.map((voucher, index) => (
            <div
              key={index}
              className={`${styles.voucherItem} ${selectedVoucher === voucher.value ? styles.selected : ''}`}
              onClick={() => setSelectedVoucher(voucher.value)}
            >
              <h3>{voucher.label}</h3>
              <p>From {voucher.price}</p>
            </div>
          ))}
        </div>
        <p>Showing {vouchers.length} of {vouchers.length} vouchers</p>
      </div>

      <div className={styles.howItWorks}>
        <h2>How It Works</h2>
        <ol>
          <li><strong>Choose a Voucher:</strong> Select from our range of digital vouchers in different denominations.</li>
          <li><strong>Enter Mobile Number:</strong> Provide the recipient's mobile number to send the voucher directly via SMS.</li>
          <li><strong>Instant Delivery:</strong> The voucher is sent via SMS to your recipient within 1 hour.</li>
        </ol>
      </div>

      <div className={styles.purchaseForm}>
        <h2>Send a Voucher</h2>
        <div className={styles.fieldGroup}>
          <label>Recipient Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <button className={styles.buyButton} onClick={handlePurchase}>
          Buy Now
        </button>
      </div>

      <div className={styles.helpSection}>
        <h2>Need Help With Your Purchase?</h2>
        <p>Our customer service team is ready to assist you with any questions about our digital vouchers.</p>
      </div>
    </div>
  );
};


export const meta = {
  label: 'Buy Voucher Module',
};

// Define the vouchers at the end
export const fields = (
  <ModuleFields>
    <TextField name="title" label="Title" defaultValue="Shoprite Vouchers" />
    <TextField name="subTitle" label="Subtitle" defaultValue="From R10" />
    <TextField name="voucherRange" label="Voucher Range" defaultValue="R10 - R1000" />

    {/* Vouchers list: you can add more vouchers here */}
    <TextField name="voucher1Label" label="Voucher 1 Label" defaultValue="Shoprite Vouchers" />
    <TextField name="voucher1Price" label="Voucher 1 Price" defaultValue="R10 - R1000" />
    <TextField name="voucher1Value" label="Voucher 1 Value" defaultValue="Shoprite Vouchers" />

    <TextField name="voucher2Label" label="Voucher 2 Label" defaultValue="Shoprite Group Virtual Grocery Vouchers" />
    <TextField name="voucher2Price" label="Voucher 2 Price" defaultValue="R50 - R1000" />
    <TextField name="voucher2Value" label="Voucher 2 Value" defaultValue="Shoprite Group Virtual Grocery Vouchers" />

  </ModuleFields>
);