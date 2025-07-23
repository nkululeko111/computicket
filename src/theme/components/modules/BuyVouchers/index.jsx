import React from 'react';
import { ModuleFields, TextField, SelectField, UrlField, ImageField } from '@hubspot/cms-components/fields';
import styles from './BuyVoucher.module.css';

export const Component = ({ fieldValues }) => {
  const vouchers = [
    {
      label: fieldValues.voucher1Label || "Shoprite Vouchers",
      price: fieldValues.voucher1Price || "From R10",
      range: fieldValues.voucher1Range || "R10 - R1000",
      value: fieldValues.voucher1Value || "shoprite",
      delivery: fieldValues.voucher1Delivery || "Instant delivery",
      image: fieldValues.voucher1Image
    },
    {
      label: fieldValues.voucher2Label || "Shoprite Group Virtual Grocery Vouchers",
      price: fieldValues.voucher2Price || "From R50.00",
      range: fieldValues.voucher2Range || "R50 - R1000",
      value: fieldValues.voucher2Value || "shoprite-group",
      delivery: fieldValues.voucher2Delivery || "Instant delivery",
      image: fieldValues.voucher2Image
    },
  ];

  const [selectedVoucher, setSelectedVoucher] = React.useState(vouchers[0]?.value || '');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);

  const handlePurchase = () => {
    alert(`Purchasing ${quantity} ${selectedVoucher} voucher(s) for mobile: ${mobileNumber}`);
  };

  const selectedVoucherData = vouchers.find(v => v.value === selectedVoucher);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero} style={{ backgroundImage: `url(${fieldValues.heroBackgroundImage})` }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{fieldValues.title || "Digital Gift Vouchers"}</h1>
          <p className={styles.subtitle}>{fieldValues.subTitle || "Send perfect gifts instantly to your loved ones."}</p>
        </div>
      </div>

      {/* Vouchers Section */}
      <div className={styles.vouchersSection}>
        <div className={styles.sectionHeader}>
          <h2>All Vouchers</h2>
          <p>Showing {vouchers.length} of {vouchers.length} vouchers</p>
        </div>
        
        <div className={styles.vouchersList}>
          {vouchers.map((voucher, index) => (
            <div
              key={index}
              className={`${styles.voucherCard} ${selectedVoucher === voucher.value ? styles.selected : ''}`}
              onClick={() => setSelectedVoucher(voucher.value)}
            >
              {voucher.image && (
                <div className={styles.voucherImage}>
                  <img src={voucher.image} alt={voucher.label} />
                </div>
              )}
              <div className={styles.voucherDetails}>
                <h3>{voucher.label}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{voucher.price}</span>
                  <span className={styles.delivery}>{voucher.delivery}</span>
                </div>
                <p className={styles.range}>{voucher.range}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Purchase Section */}
      <div className={styles.purchaseContainer}>
        <div className={styles.purchaseForm}>
          <h2>Send a Voucher</h2>
          
          {selectedVoucherData && (
            <div className={styles.selectedVoucher}>
              <h3>{selectedVoucherData.label}</h3>
              <p>{selectedVoucherData.range}</p>
            </div>
          )}
          
          <div className={styles.fieldGroup}>
            <label>Recipient Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className={styles.inputField}
            />
          </div>
          
          <div className={styles.fieldGroup}>
            <label>Quantity</label>
            <select 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className={styles.selectField}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          
          <button className={styles.buyButton} onClick={handlePurchase}>
            Buy Now
          </button>
          
          <div className={styles.securityBadges}>
            <img src={fieldValues.securityBadge1} alt="Secure Payment" />
            <img src={fieldValues.securityBadge2} alt="SSL Certified" />
          </div>
        </div>
        
        <div className={styles.howItWorks}>
          <h2>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Choose a Voucher</h3>
                <p>Select from our range of digital vouchers in different denominations.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Enter Mobile Number</h3>
                <p>Simply provide the recipient's mobile number to send the voucher directly via SMS.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Instant Delivery</h3>
                <p>The voucher is sent via SMS to your recipient within 1 hour.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className={styles.helpSection}>
        <div className={styles.helpContent}>
          <h2>Need Help With Your Purchase?</h2>
          <p>Our customer service team is ready to assist you with any questions about our digital vouchers.</p>
          <button className={styles.helpButton}>Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export const meta = {
  label: 'Computicket Voucher Module',
};

export const fields = (
  <ModuleFields>
    {/* Hero Section Fields */}
    <TextField name="title" label="Title" defaultValue="Digital Gift Vouchers" />
    <TextField name="subTitle" label="Subtitle" defaultValue="Send perfect gifts instantly to your loved ones." />
    <ImageField name="heroBackgroundImage" label="Hero Background Image" default="/default-hero-bg.jpg" />
    
    {/* Voucher Fields */}
    <TextField name="voucher1Label" label="Voucher 1 Label" defaultValue="Shoprite Vouchers" />
    <TextField name="voucher1Price" label="Voucher 1 Price" defaultValue="From R10" />
    <TextField name="voucher1Range" label="Voucher 1 Range" defaultValue="R10 - R1000" />
    <TextField name="voucher1Value" label="Voucher 1 Value" defaultValue="shoprite" />
    <TextField name="voucher1Delivery" label="Voucher 1 Delivery" defaultValue="Instant delivery" />
    <ImageField name="voucher1Image" label="Voucher 1 Image" default="/default-voucher1.jpg" />
    
    <TextField name="voucher2Label" label="Voucher 2 Label" defaultValue="Shoprite Group Virtual Grocery Vouchers" />
    <TextField name="voucher2Price" label="Voucher 2 Price" defaultValue="From R50.00" />
    <TextField name="voucher2Range" label="Voucher 2 Range" defaultValue="R50 - R1000" />
    <TextField name="voucher2Value" label="Voucher 2 Value" defaultValue="shoprite-group" />
    <TextField name="voucher2Delivery" label="Voucher 2 Delivery" defaultValue="Instant delivery" />
    <ImageField name="voucher2Image" label="Voucher 2 Image" default="/default-voucher2.jpg" />
    
    {/* Security Badges */}
    <ImageField name="securityBadge1" label="Security Badge 1" default="/secure-payment.png" />
    <ImageField name="securityBadge2" label="Security Badge 2" default="/ssl-certified.png" />
  </ModuleFields>
);