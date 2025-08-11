import { Island } from "@hubspot/cms-components";
import CartIcon from "./Island/index.jsx?island";
import styles from "./cart.module.css";

export const Component = ({ fieldValues, hublParameters = {} }) => {
  const { defaultCartMessage } = fieldValues;

  return (
    <div className={styles.cartWrapperOuter}>
      <Island module={CartIcon} defaultCartMessage={defaultCartMessage} />
    </div>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Cart Icon",
  global: true,
  is_available_for_new_content: true,
};
