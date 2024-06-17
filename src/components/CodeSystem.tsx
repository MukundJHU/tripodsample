import { FunctionComponent } from "react";
import styles from "./CodeSystem.module.css";

export type CodeSystemType = {
  className?: string;
};

const CodeSystem: FunctionComponent<CodeSystemType> = ({ className = "" }) => {
  return (
    <div className={[styles.codeSystem, className].join(" ")}>
      <div className={styles.codeSystemChild} />
      <div className={styles.codeValue}>
        <div className={styles.k317}>K31.7</div>
      </div>
      <div className={styles.polypOfStomach}>Polyp of stomach and duodenum</div>
      <div className={styles.icd10}>ICD-10</div>
    </div>
  );
};

export default CodeSystem;
