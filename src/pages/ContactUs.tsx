import { FunctionComponent } from "react";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactUs}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.comply1Parent}>
          <div className={styles.comply1} />
          <img
            className={styles.complyLogo1}
            loading="lazy"
            alt=""
            src="/comply-logo-1@2x.png"
          />
        </div>
        <div className={styles.headerInner}>
          <div className={styles.navigationLinksParent}>
            <div className={styles.navigationLinks}>
              <a className={styles.about}>About</a>
            </div>
            <div className={styles.navigationLinks1}>
              <a className={styles.phenotype}>Phenotype</a>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.resourcesParent}>
                <a className={styles.resources}>Resources</a>
                <div className={styles.arrowDropDown24dpFill0WghWrapper}>
                  <img
                    className={styles.arrowDropDown24dpFill0WghIcon}
                    alt=""
                    src="/arrow-drop-down-24dp-fill0-wght400-grad0-opsz24-2-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.navigationLinks2}>
              <a className={styles.contactUs1}>Contact Us</a>
            </div>
            <img
              className={styles.search24dpFill0Wght400GradIcon}
              loading="lazy"
              alt=""
              src="/search-24dp-fill0-wght400-grad0-opsz24-2.svg"
            />
          </div>
        </div>
      </header>
      <main className={styles.adobestock7855139301Parent}>
        <img
          className={styles.adobestock7855139301Icon}
          alt=""
          src="/adobestock-785513930-1@2x.png"
        />
        <div className={styles.frameChild} />
      </main>
      <div className={styles.contactUsInner}>
        <div className={styles.frameParent}>
          <div className={styles.resourcesWrapper}>
            <h1 className={styles.resources1}>Resources</h1>
          </div>
          <div className={styles.aPILinkRowsParent}>
            <div className={styles.aPILinkRows}>
              <div className={styles.aPILinkRowsChild} />
              <div className={styles.aPILinkColumns}>
                <div className={styles.aPILinkItems}>
                  <div className={styles.geneticsDatabaseAPI}>
                    <div className={styles.databaseIconParent}>
                      <div className={styles.databaseIcon}>
                        <img
                          className={styles.api24dpFill0Wght400Grad0OIcon}
                          alt=""
                          src="/api-24dp-fill0-wght400-grad0-opsz24-11.svg"
                        />
                      </div>
                      <div className={styles.apiReference}>API Reference</div>
                    </div>
                    <div className={styles.chevronRight24dpFill0Wght4Wrapper}>
                      <img
                        className={styles.chevronRight24dpFill0Wght4Icon}
                        alt=""
                        src="/chevron-right-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.submitPhenotypeRow} />
              </div>
              <div className={styles.descriptionRows}>
                <div className={styles.complyApiResponses}>
                  ComPLy API responses include one of two data types: the
                  phenotype response, and the codelist. The phenotype should be
                  requested by phenotype unique ID, which is a UUID, and must
                  match the expected format of the API. Although the code list
                  is part of the phenotype JSON, it is also possible to request
                  the code list in isolation (including in CSV format) using the
                  same UUID as the associated phenotype.
                </div>
              </div>
            </div>
            <div className={styles.aPILinkRows1}>
              <div className={styles.aPILinkRowsItem} />
              <div className={styles.frameGroup}>
                <div className={styles.genetics24dpFill0Wght400GrWrapper}>
                  <img
                    className={styles.genetics24dpFill0Wght400GrIcon}
                    loading="lazy"
                    alt=""
                    src="/genetics-24dp-fill0-wght400-grad0-opsz24-11.svg"
                  />
                </div>
                <div className={styles.submitPhenotype}>Submit Phenotype</div>
                <div className={styles.chevronRight24dpFill0Wght4Container}>
                  <img
                    className={styles.chevronRight24dpFill0Wght4Icon1}
                    loading="lazy"
                    alt=""
                    src="/chevron-right-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                  />
                </div>
              </div>
              <div className={styles.contributeToTheAdvancementWrapper}>
                <div className={styles.contributeToThe}>
                  Contribute to the advancement of biomedical and clinical
                  research by sharing your phenotype definitions. Clear and
                  well-defined phenotypes, submitted in a standardized manner,
                  enhance the reproducibility of research findings.
                </div>
              </div>
            </div>
            <div className={styles.aPILinkRows2}>
              <div className={styles.aPILinkRowsInner} />
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.database24dpFill0Wght400GrParent}>
                      <img
                        className={styles.database24dpFill0Wght400GrIcon}
                        loading="lazy"
                        alt=""
                        src="/database-24dp-fill0-wght400-grad0-opsz24-11.svg"
                      />
                      <div className={styles.submitDataSourceWrapper}>
                        <div className={styles.submitDataSource}>
                          Submit Data Source
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.chevronRight24dpFill0Wght4Icon2}
                      loading="lazy"
                      alt=""
                      src="/chevron-right-24dp-fill0-wght400-grad0-opsz24-1-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContentParent}>
        <div className={styles.footerContent}>
          <div className={styles.footerContentChild} />
          <img
            className={styles.complyLogo6x2}
            loading="lazy"
            alt=""
            src="/comply-logo-6x-2@2x.png"
          />
          <div className={styles.complyIsSupportedContainer}>
            <p className={styles.complyIsSupportedByTheNat}>
              ComPLy is supported by the National Institutes of Health through
              the Grant 
              <a
                className={styles.r01ag073435}
                href="https://reporter.nih.gov/project-details/10642888"
                target="_blank"
              >
                <span className={styles.r01ag0734351}>R01AG073435</span>
              </a>
            </p>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerChild} />
          <div className={styles.copyrightClinicalNlpLab}>
            © Copyright Clinical NLP Lab. All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
