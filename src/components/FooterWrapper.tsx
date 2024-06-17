import { FunctionComponent } from "react";
import Footer from "./Footer";
import styles from "./FooterWrapper.module.css";

export type FooterWrapperType = {
  className?: string;
};

const FooterWrapper: FunctionComponent<FooterWrapperType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.footerWrapper, className].join(" ")}>
      <Footer propDebugCommit="unset" />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.copyrightClinicalNlpLab}>
          © Copyright Clinical NLP Lab. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default FooterWrapper;
