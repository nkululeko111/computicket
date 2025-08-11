import { useState, useEffect } from 'react';
import styles from '../cart.module.css';

export default function CartIcon({ defaultCartMessage = "Your cart is empty 🛒" }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: '🚌 Bus to Cape Town', qty: 2, price: 450 },
    { id: 2, name: '✈️ Flight to Joburg', qty: 1, price: 1200 },
    { id: 3, name: '🎤 Jazz Festival', qty: 3, price: 350 },
    { id: 4, name: '🏨 Seaside Hotel', qty: 1, price: 1800 },
    { id: 5, name: '🎁 R500 Gift Card', qty: 1, price: 500 },
  ]);

  const [showFullCart, setShowFullCart] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalItems = cartItems.reduce((a, c) => a + c.qty, 0);
  const displayedItems = showFullCart ? cartItems : cartItems.slice(0, 3);

  // Bounce animation when items change
  useEffect(() => {
    if (totalItems > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <div className={styles.cartWrapper}>
      <button
        className={`${styles.cartButton} ${isAnimating ? styles.bounce : ''}`}
        aria-label="View cart"
        onClick={() => setShowFullCart(!showFullCart)}
      >
        <svg
          className={styles.cartIcon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {totalItems > 0 && (
          <span className={styles.cartCount}>{totalItems}</span>
        )}
      </button>

      <div className={`${styles.cartDropdown} ${showFullCart ? styles.open : ''}`}>
        <div className={styles.cartHeader}>
          <h3>Your Adventure Cart 🚀</h3>
          <button 
            className={styles.closeButton}
            onClick={() => setShowFullCart(false)}
          >
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>{defaultCartMessage}</p>
            <button className={styles.shopButton}>Start Exploring</button>
          </div>
        ) : (
          <>
            <ul className={styles.cartItems}>
              {displayedItems.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <span className={styles.itemEmoji}>{item.name.split(' ')[0]}</span>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemName}>{item.name.split(' ').slice(1).join(' ')}</span>
                    <span className={styles.itemPrice}>R{item.price * item.qty}</span>
                  </div>
                  <div className={styles.itemQty}>×{item.qty}</div>
                </li>
              ))}
            </ul>

            {!showFullCart && cartItems.length > 3 && (
              <button
                className={styles.viewMoreButton}
                onClick={() => setShowFullCart(true)}
              >
                +{cartItems.length - 3} more adventures
              </button>
            )}

            <div className={styles.cartFooter}>
              <div className={styles.total}>
                <span>Total:</span>
                <span>R{cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0)}</span>
              </div>
              <button className={styles.checkoutButton}>Checkout Now</button>
            </div>
          </>
        )}
      </div>

      {showFullCart && (
        <div
          className={styles.overlay}
          onClick={() => setShowFullCart(false)}
        />
      )}
    </div>
  );
}