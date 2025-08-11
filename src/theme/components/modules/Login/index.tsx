import { Island } from "@hubspot/cms-components";
import MyButton from "./Island/index.js?island";

import styles from "./Island.module.css";

export const Component = ({ fieldValues, hublParameters = {} }) => {
  const { defaultCount = 45 } = fieldValues;

  return (
    <div className="sampleReactModuleWrapper">
      <div className={styles["sample-react-module"]}>
        <Island module={MyButton} defaultCount={defaultCount} />
      </div>
    </div>
  );
};

export { fields } from "./fields.js";


export const meta = {
 "label": "Login",
 "css_assets": [],
 "external_js": [],
 "global": true,
 "help_text": "",
 "content_types": [
  "ANY"
 ],
 "js_assets": [],
 "other_assets": [],
 "smart_type": "NOT_SMART",
 "tags": [],
 "is_available_for_new_content": true
}