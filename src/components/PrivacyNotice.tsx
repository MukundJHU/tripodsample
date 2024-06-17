import { FunctionComponent } from "react";
import styles from "./PrivacyNotice.module.css";

export type PrivacyNoticeType = {
  className?: string;
};

const PrivacyNotice: FunctionComponent<PrivacyNoticeType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.privacyNotice, className].join(" ")}>
      <div className={styles.privacyNoticeChild} />
      <div className={styles.warningIcon}>
        <img
          className={styles.warning24dpFill0Wght400GraIcon}
          loading="lazy"
          alt=""
          src="/warning-24dp-fill0-wght400-grad0-opsz24-2.svg"
        />
      </div>
      <div className={styles.privacyStatement}>
        <div className={styles.noPrivateData}>No Private Data!</div>
        <div className={styles.doNotSubmitAny}>
          Do not submit any data on this form of a non-public nature. All
          submissions are reviewed by our staff but this site is not a
          HIPAA-compliant environment and protected data must not be submitted.
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice;
