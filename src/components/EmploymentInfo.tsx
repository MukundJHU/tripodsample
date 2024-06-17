import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./EmploymentInfo.module.css";

export type EmploymentInfoType = {
  className?: string;
  yourEmployer?: string;
  employerPlaceholder?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const EmploymentInfo: FunctionComponent<EmploymentInfoType> = ({
  className = "",
  yourEmployer,
  employerPlaceholder,
  propPadding,
  propWidth,
}) => {
  const employmentInfoStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.employmentInfo, className].join(" ")}
      style={employmentInfoStyle}
    >
      <div className={styles.yourEmployer}>{yourEmployer}</div>
      <div className={styles.jobDetailFields}>
        <div
          className={styles.jobDetailFieldsChild}
          style={rectangleDivStyle}
        />
        <input
          className={styles.employer}
          placeholder={employerPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default EmploymentInfo;
