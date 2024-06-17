import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.complyLogo6x2}
          loading="lazy"
          alt=""
          src="/comply-logo-6x-2@2x.png"
        />
        <div className={styles.complyIsSupportedContainer}>
          <p className={styles.complyIsSupportedByTheNat}>
            ComPLy is supported by the National Institutes of Health through the
            Grant 
            <a
              className={styles.r01ag073435}
              href="https://reporter.nih.gov/project-details/10642888"
              target="_blank"
            >
              <span className={styles.r01ag0734351}>R01AG073435</span>
            </a>
          </p>
        </div>
      </footer>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.copyrightClinicalNlpLab}>
          © Copyright Clinical NLP Lab. All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
