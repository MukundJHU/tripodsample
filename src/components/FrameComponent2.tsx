import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.findAPhenotypeWrapper}>
        <div className={styles.findAPhenotype}>Find a phenotype</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <input
          className={styles.imLookingFor}
          placeholder="I’m looking for..."
          type="text"
        />
        <div className={styles.search24dpFill0Wght400GradWrapper}>
          <img
            className={styles.search24dpFill0Wght400GradIcon}
            alt=""
            src="/search-24dp-fill0-wght400-grad0-opsz24-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
