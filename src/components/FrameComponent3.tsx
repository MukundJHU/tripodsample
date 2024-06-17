import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponentType = {
  className?: string;
  authors?: string;
  pleaseWriteEachAuthorOnAS?: string;
  frame7Placeholder?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  authors,
  pleaseWriteEachAuthorOnAS,
  frame7Placeholder,
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.authorsParent}>
          <div className={styles.authors}>{authors}</div>
          <i className={styles.pleaseWriteEach}>{pleaseWriteEachAuthorOnAS}</i>
        </div>
        <textarea
          className={styles.frameItem}
          placeholder={frame7Placeholder}
          rows={11}
          cols={50}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
