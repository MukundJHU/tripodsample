import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerChild} />
      <div className={styles.comply1Parent}>
        <div className={styles.comply1} />
        <img
          className={styles.complyLogo1}
          loading="lazy"
          alt=""
          src="/comply-logo-1@2x.png"
        />
      </div>
      <div className={styles.headerInner}>
        <div className={styles.frameParent}>
          <div className={styles.aboutWrapper}>
            <a className={styles.about}>About</a>
          </div>
          <div className={styles.phenotypeWrapper}>
            <a className={styles.phenotype}>Phenotype</a>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.resourcesParent}>
              <a className={styles.resources}>Resources</a>
              <div className={styles.arrowDropDown24dpFill0WghWrapper}>
                <img
                  className={styles.arrowDropDown24dpFill0WghIcon}
                  alt=""
                  src="/arrow-drop-down-24dp-fill0-wght400-grad0-opsz24-2-11.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.contactUsWrapper}>
            <a className={styles.contactUs}>Contact Us</a>
          </div>
          <img
            className={styles.search24dpFill0Wght400GradIcon}
            loading="lazy"
            alt=""
            src="/search-24dp-fill0-wght400-grad0-opsz24-2.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
