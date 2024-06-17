import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.getApiv1phenotypesuu}>
        <span className={styles.get}>GET </span>
        <span>    /api/v1/phenotypes/〈UUID〉 </span>
      </div>
      <div className={styles.uuidIdentifiersParent}>
        <div className={styles.uuidIdentifiers}>
          <div className={styles.uuid}>{`UUID `}</div>
          <div className={styles.phenotypeUniqueIdentifier}>
            phenotype unique identifier (UUID)
          </div>
        </div>
        <div className={styles.returnsParent}>
          <a className={styles.returns}>Returns</a>
          <div className={styles.thePhenotypeWith}>
            the phenotype with requested UUID, in JSON format
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
