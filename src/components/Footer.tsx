import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;

  /** Style props */
  propDebugCommit?: CSSProperties["debugCommit"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  propDebugCommit,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  return (
    <footer
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.footerChild} />
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
  );
};

export default Footer;
