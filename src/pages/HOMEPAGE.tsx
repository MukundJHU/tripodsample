import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./HOMEPAGE.module.css";

const HOMEPAGE: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepageChild} />
      <Header />
      <section className={styles.frameParent}>
        <div className={styles.adobestock4831892141Parent}>
          <div className={styles.adobestock4831892141} />
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.advancingStandardsBasedSargParent}>
            <h1 className={styles.advancingStandardsBasedSargContainer}>
              <p className={styles.advancingStandardsBasedSarg}>
                Advancing Standards-based Sarge-Scale
              </p>
              <p className={styles.observationalClinicalStudies}>
                Observational Clinical Studies
              </p>
            </h1>
            <div className={styles.complyProvidesComputablePheWrapper}>
              <div className={styles.complyProvidesComputableContainer}>
                <p className={styles.complyProvidesComputable}>
                  ComPLy provides computable phenotype definitions for
                  describing patients with diverse disease statuses, drug
                  exposures, treatment responses, and more. Precise phenotype
                  definitions contribute to consistent cohort identification
                  from electronic health record systems, enhance research
                  reproducibility, and enable potential collaboration of
                  multicenter clinical studies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent2 />
      </section>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default HOMEPAGE;
