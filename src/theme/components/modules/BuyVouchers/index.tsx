import { Island } from "@hubspot/cms-components";
import BuyVoucherComponent from "./Island/index.js?island"; 
import styles from "./buyVoucher.module.css";  // your styles

export const Component = ({ fieldValues, hublParameters = {} }) => {
  const { heroHeading = "Digital Gift Vouchers" } = fieldValues;

  return (
    <div className="buyVoucherModuleWrapper">
      <div className={styles.buyVoucherModule}>
        {/* You can pass any CMS-configured fields as props */}
        <Island module={BuyVoucherComponent} heroHeading={heroHeading} />
      </div>
    </div>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "BuyVouchers",
  css_assets: [],
  external_js: [],
  global: true,
  help_text: "Module for buying digital gift vouchers similar to Computicket",
  content_types: ["ANY"],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: ["voucher", "buy", "gift"],
  is_available_for_new_content: true,
};
