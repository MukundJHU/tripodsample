import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DemographicLabels.module.css";

export type DemographicLabelsType = {
  className?: string;
  ageGroup?: string;
  selectAgeGroup?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const DemographicLabels: FunctionComponent<DemographicLabelsType> = ({
  className = "",
  ageGroup,
  selectAgeGroup,
  propWidth,
}) => {
  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.demographicLabels, className].join(" ")}>
      <div className={styles.ageGroup}>{ageGroup}</div>
      <div className={styles.demographicDropdowns}>
        <div
          className={styles.demographicDropdownsChild}
          style={rectangleDiv1Style}
        />
        <div className={styles.selectAgeGroup}>{selectAgeGroup}</div>
      </div>
    </div>
  );
};

export default DemographicLabels;
