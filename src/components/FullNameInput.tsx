import { FunctionComponent } from "react";
import styles from "./FullNameInput.module.css";

export type FullNameInputType = {
  className?: string;
  yourFullName?: string;
  fullNamePlaceholder?: string;
};

const FullNameInput: FunctionComponent<FullNameInputType> = ({
  className = "",
  yourFullName,
  fullNamePlaceholder,
}) => {
  return (
    <div className={[styles.fullNameInput, className].join(" ")}>
      <div className={styles.yourFullNameContainer}>
        <span>{yourFullName}</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.fullNameField}>
        <div className={styles.fullNameFieldChild} />
        <input
          className={styles.fullName}
          placeholder={fullNamePlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default FullNameInput;
