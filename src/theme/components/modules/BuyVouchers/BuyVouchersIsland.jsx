import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuyVoucher.module.css';

export default function BuyVouchersIsland({
  title = 'Digital Gift Vouchers',
  subTitle = 'Send perfect gifts instantly to your loved ones.',
  heroBackgroundImage = '',
  voucher1Label = 'Shoprite Vouchers',
  voucher1Price = 'From R10',
  voucher1Range = 'R10 - R1000',
  voucher1Value = 'shoprite',
  voucher1Delivery = 'Instant delivery',
  voucher1Image = '',
  voucher2Label = 'Shoprite Group Virtual Grocery Vouchers',
  voucher2Price = 'From R50.00',
  voucher2Range = 'R50 - R1000',
  voucher2Value = 'shoprite-group',
  voucher2Delivery = 'Instant delivery',
  voucher2Image = '',
  securityBadge1 = '',
  securityBadge2 = '',
}) {
  const vouchers = [
    {
      label: voucher1Label,
      price: voucher1Price,
      range: voucher1Range,
      value: voucher1Value,
      delivery: voucher1Delivery,
      image: voucher1Image,
    },
    {
      label: voucher2Label,
      price: voucher2Price,
      range: voucher2Range,
      value: voucher2Value,
      delivery: voucher2Delivery,
      image: voucher2Image,
    },
  ];

  const [selectedVoucher, setSelectedVoucher] = React.useState(vouchers[0]?.value || '');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);

  const handlePurchase = () => {
    alert(
      `Purchasing ${quantity} ${selectedVoucher} voucher(s) for mobile: ${mobileNumber}`
    );
  };

  const selectedVoucherData = vouchers.find((v) => v.value === selectedVoucher);

  return (
    <div className={styles.container}>
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subTitle}</p>
        </div>
      </div>

      <div className={styles.vouchersSection}>
        <div className={styles.sectionHeader}>
          <h2>All Vouchers</h2>
          <p>
            Showing {vouchers.length} of {vouchers.length} vouchers
          </p>
        </div>
        <div className={styles.vouchersList}>
          {vouchers.map((voucher, index) => (
            <div
              key={index}
              className={`${styles.voucherCard} ${
                selectedVoucher === voucher.value ? styles.selected : ''
              }`}
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
            <label htmlFor="mobileNumber">Recipient Mobile Number</label>
            <input
              id="mobileNumber"
              type="tel"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="quantitySelect">Quantity</label>
            <select
              id="quantitySelect"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              className={styles.selectField}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <button className={styles.buyButton} onClick={handlePurchase}>
            Buy Now
          </button>
          <div className={styles.securityBadges}>
            {securityBadge1 && <img src={securityBadge1} alt="Secure Payment" />}
            {securityBadge2 && <img src={securityBadge2} alt="SSL Certified" />}
          </div>
        </div>

        <div className={styles.howItWorks}>
          <h2>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Choose a Voucher</h3>
                <p>
                  Select from our range of digital vouchers in different denominations.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Enter Mobile Number</h3>
                <p>
                  Simply provide the recipient's mobile number to send the voucher
                  directly via SMS.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Instant Delivery</h3>
                <p>
                  The voucher is sent via SMS to your recipient within 1 hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.helpSection}>
        <div className={styles.helpContent}>
          <h2>Need Help With Your Purchase?</h2>
          <p>
            Our customer service team is ready to assist you with any questions
            about our digital vouchers.
          </p>
          <button className={styles.helpButton}>Contact Support</button>
        </div>
      </div>
    </div>
  );
}

BuyVouchersIsland.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  heroBackgroundImage: PropTypes.string,
  voucher1Label: PropTypes.string,
  voucher1Price: PropTypes.string,
  voucher1Range: PropTypes.string,
  voucher1Value: PropTypes.string,
  voucher1Delivery: PropTypes.string,
  voucher1Image: PropTypes.string,
  voucher2Label: PropTypes.string,
  voucher2Price: PropTypes.string,
  voucher2Range: PropTypes.string,
  voucher2Value: PropTypes.string,
  voucher2Delivery: PropTypes.string,
  voucher2Image: PropTypes.string,
  securityBadge1: PropTypes.string,
  securityBadge2: PropTypes.string,
};
