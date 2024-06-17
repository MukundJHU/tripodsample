import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.genetics24dpFill0Wght400GrParent}>
              <img
                className={styles.genetics24dpFill0Wght400GrIcon}
                loading="lazy"
                alt=""
                src="/genetics-24dp-fill0-wght400-grad0-opsz24-1.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.wrapper}>
                    <div className={styles.div}>3,489</div>
                  </div>
                  <div className={styles.phenotypes}>Phenotypes</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.deployedCode24dpFill0Wght4Parent}>
            <img
              className={styles.deployedCode24dpFill0Wght4Icon}
              loading="lazy"
              alt=""
              src="/deployed-code-24dp-fill0-wght400-grad0-opsz24-1.svg"
            />
            <div className={styles.frameParent1}>
              <div className={styles.container}>
                <div className={styles.div1}>46</div>
              </div>
              <div className={styles.codingSystems}>Coding Systems</div>
            </div>
          </div>
          <div className={styles.database24dpFill0Wght400GrParent}>
            <img
              className={styles.database24dpFill0Wght400GrIcon}
              loading="lazy"
              alt=""
              src="/database-24dp-fill0-wght400-grad0-opsz24-1.svg"
            />
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent2}>
                <div className={styles.frame}>
                  <div className={styles.div2}>4</div>
                </div>
                <div className={styles.dataSources}>Data Sources</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-5.svg"
            />
            <div className={styles.loremIpsumDolorContainer}>
              <p className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat... Learn More
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
