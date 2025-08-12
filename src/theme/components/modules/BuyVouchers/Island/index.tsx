import React, { useState } from "react";
import styles from "../buyVoucher.module.css";

import ait2Img from "../../../../assets/air1.png";
import ait3Img from "../../../../assets/air2.png";

import buy10 from "../../../../assets/buy10.png";
import buy20 from "../../../../assets/buy20.png";   
import buy30 from "../../../../assets/buy30.jpg";

const vouchers = [
  {
    title: "Shoprite Vouchers",
    priceRange: "R10 - R1000",
    delivery: "Instant delivery",
    imgUrl: ait3Img,
  },
  {
    title: "Shoprite Group Virtual Grocery Vouchers",
    priceRange: "R50 - R1000",
    delivery: "Instant delivery",
    imgUrl: ait2Img,
  },
];

const howItWorksSteps = [
  {
    number: 1,
    title: "Choose a Voucher",
    description:
      "Select from our range of digital vouchers in different denominations.",
  },
  {
    number: 2,
    title: "Enter Mobile Number",
    description:
      "Simply provide the recipient's mobile number to send the voucher directly via SMS.",
  },
  {
    number: 3,
    title: "Instant Delivery",
    description:
      "The voucher is sent via SMS to your recipient within 1 hour.",
  },
];

export default function BuyVoucherComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  // const openModal = (voucher) => {
  //   setSelectedVoucher(voucher);
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  //   setSelectedVoucher(null);
  // };
  const [voucherCounts, setVoucherCounts] = useState({
    50: 0,
    100: 0,
    250: 0,
    500: 0,
    1000: 0,
  });

  const openModal = (voucher) => {
    setSelectedVoucher(voucher);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVoucher(null);
    setVoucherCounts({ 50: 0, 100: 0, 250: 0, 500: 0, 1000: 0 }); 
  };

  // Increment voucher count, max 49
  const incrementCount = (amount) => {
    setVoucherCounts((prev) => {
      if (prev[amount] < 49) {
        return { ...prev, [amount]: prev[amount] + 1 };
      }
      return prev;
    });
  };

  // Decrement voucher count, min 0
  const decrementCount = (amount) => {
    setVoucherCounts((prev) => {
      if (prev[amount] > 0) {
        return { ...prev, [amount]: prev[amount] - 1 };
      }
      return prev;
    });
  };

  // Compute total vouchers and price
  const totalVouchers = Object.values(voucherCounts).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(voucherCounts).reduce(
    (sum, [amount, count]) => sum + amount * count,
    0
  );



  return (
    <div className={styles.buyVoucherModule}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h2>Digital Gift Vouchers</h2>
          <p>Send perfect gifts instantly to your loved ones</p>
        </div>
      </section>

      {/* Voucher Modal */}
      <section className={styles.voucherModal}>
        <div className={styles.voucherHeader}>
          <h2>All Vouchers</h2>
          <p>Showing {vouchers.length} of {vouchers.length} vouchers</p>
        </div>
        <div className={styles.voucherCards}>
          {vouchers.map(({ title, priceRange, delivery, imgUrl }, i) => (
            <div key={i} className={styles.voucherCard}>
              <div className={styles.voucherCardImageWrapper}>
                <img src={imgUrl} alt={title} />
                <div className={styles.priceBadge}>From {priceRange.split(" - ")[0]}</div>
              </div>

              <div className={styles.voucherDetails}>
                <div className={styles.voucherTitle}>{title}</div>
                <div className={styles.voucherRange}>{priceRange}</div>
              </div>

              <div className={styles.voucherBottomRow}>
                <div>{delivery}</div>
                <button
                  className={styles.detailsBtn}
                  onClick={() => openModal({ title, priceRange, delivery, imgUrl })}
                >
                  Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          {howItWorksSteps.map(({ number, title, description }) => (
            <div key={number} className={styles.stepCard}>
              <div className={styles.stepNumber}>{number}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className={styles.supportSection}>
        <h2>Need Help With Your Purchase?</h2>
        <p>
          Our customer service team is ready to assist you with any questions
          about our digital vouchers.
        </p>
        <button className={styles.contactBtn}>Contact Support</button>
      </section>

      {/* Full Page Modal */}
      {modalOpen && (
        <div className={styles.fullPageModal}>
          <div className={styles.modalContentLarge}>
            <button className={styles.closeModalBtn} onClick={closeModal}>
              &times;
            </button>

             <div className={styles.modalColumns}>
               {/* COLUMN 1 */}
               <div className={styles.modalColumnLeft}>
                 <img src={buy20} alt="Buy 20" className={styles.modalImageTop} />
                 <img src={buy10} alt="Buy 10" className={styles.modalImageBelow} />

                <div className={styles.infoText}>
                   <p>
                     Now you can send Food Vouchers directly to someone's phone via SMS! It's the perfect way to help someone in need or to say thank you.
                   </p>
                   <h3>IMPORTANT</h3>
                   <p>
                     The virtual vouchers can be redeemed immediately once received - no delays.<br />
                     Please make sure that you enter your recipient's cellular details correctly as once the voucher has been sent it cannot be recalled.<br />
                     The virtual voucher will be sent directly to your recipient from our system, please let them know that they will be receiving the voucher so that they don't think it's spam.
                   </p>

                   <h4>ORDERING IN BULK?</h4>

                   {/* Red Card 1 */}
                   <div className={styles.redCard}>
                     <img src={buy20} alt="Virtual Vouchers" className={styles.redCardImage} />
                     <p>
                       "Click here to order <br />
                       50 or more VIRTUAL CARDS"
                     </p>
                   </div>

                   {/* Red Card 2 */}
                   <div className={styles.redCard}>
                     <img src={buy10} alt="Physical Vouchers" className={styles.redCardImage} />
                     <p>
                       "Click here to order <br />
                       50 or more PHYSICAL CARDS"
                     </p>
                   </div>

                   <h4>VIRTUAL VOUCHERS TERMS AND CONDITIONS</h4>
                   <p>
                     Use this virtual voucher at any Checkers, Shoprite or Usave store nationwide.
                   </p>

                   <h5>How it works:</h5>
                   <ul>
                     <li>This virtual voucher can only be used in-store and cannot be used online.</li>
                     <li>This is a virtual voucher that will be sent via SMS to your recipient's cellphone within 1 hour of placing your order.</li>
                     <li>The SMS should be kept until the voucher has been redeemed.</li>
                     <li>Vouchers can be redeemed only once.</li>
                     <li>Vouchers cannot be redeemed at Usave mobile stores, MediRite Pharmacies or at Money Market counters.</li>
                     <li>No change will be given if the value of the purchase is less than the value of the voucher.</li>
                     <li>If not fully used in one transaction, the remaining value will be loaded onto a gift card in store.</li>
                     <li>Vouchers cannot be exchanged for cash.</li>
                   <li>Lost or stolen vouchers will not be reimbursed.</li>
                     <li>Vouchers are valid for 3 years from date of purchase.</li>
                   </ul>
                 </div>
               </div>

               {/* COLUMN 2 */}
               <div className={styles.modalColumnRight}>
                 <img src={buy30} alt="Buy 30" className={styles.modalImageTop} />

                 <h2 className={styles.nonRefundableHeading}>*** Vouchers are non refundable ***</h2>
                 <section className={styles.selectVouchersSection}>
                   <h3>Select Vouchers</h3>

                   {[50, 100, 250, 500, 1000].map((amount) => (
                     <div key={amount} className={styles.voucherSelectRow}>
                       <div className={styles.voucherAmount}>R {amount}</div>
                       <div className={styles.maxPerOrder}>Max: 49 per order</div>
                       <div className={styles.voucherCounter}>
                         <button
                           className={styles.counterBtn}
                           onClick={() => decrementCount(amount)}
                           aria-label={`Decrease R${amount} voucher count`}
                         >
                           −
                         </button>
                         <div className={styles.counterValue}>{voucherCounts[amount]}</div>
                        <button
                          className={styles.counterBtn}
                          onClick={() => incrementCount(amount)}
                          aria-label={`Increase R${amount} voucher count`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </div>

           {/* MODAL FOOTER */}
           <footer className={styles.modalFooter}>
             <div className={styles.totalInfo}>
               Total ({totalVouchers} voucher{totalVouchers !== 1 ? "s" : ""}) — R {totalPrice.toLocaleString()}
             </div>
             <button className={styles.continueBtn} disabled={totalVouchers === 0}>
               Continue to Recipients
             </button>
           </footer>
         </div>
       </div>
     )}
   </div>
  );
 } 







  