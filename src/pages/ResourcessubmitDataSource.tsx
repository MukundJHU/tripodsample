import { FunctionComponent } from "react";
import Header from "../components/Header";
import PrivacyNotice from "../components/PrivacyNotice";
import FullNameInput from "../components/FullNameInput";
import EmploymentInfo from "../components/EmploymentInfo";
import Footer from "../components/Footer";
import styles from "./ResourcessubmitDataSource.module.css";

const ResourcessubmitDataSource: FunctionComponent = () => {
  return (
    <div className={styles.resourcessubmitDataSource}>
      <div className={styles.labelCodingSystemsContainer}>
        <p className={styles.labelCodingSystems}>label: coding systems</p>
        <p className={styles.dataSourcesHyperlink}>data sources: hyperlink</p>
        <p
          className={styles.isItPossible}
        >{`is it possible to get the keywords? `}</p>
        <p className={styles.howCanI}>how can i design the category section?</p>
      </div>
      <main className={styles.content}>
        <Header />
        <section className={styles.submission}>
          <div className={styles.submissionForm}>
            <div className={styles.submitTitle}>
              <h2 className={styles.submitDataSource}>Submit Data Source</h2>
            </div>
            <div className={styles.formSteps}>
              <div className={styles.stepTitles}>
                <div className={styles.stepSeparator} />
                <div className={styles.submitterInformation}>
                  Submitter Information
                </div>
                <div className={styles.phenotypeBasicInformation}>
                  Phenotype Basic Information
                </div>
                <div className={styles.demographics}>Demographics</div>
                <div className={styles.publications}>Publications</div>
                <div className={styles.authors}>Authors</div>
                <div className={styles.institutions}>Institutions</div>
                <div className={styles.categories}>Categories</div>
                <div className={styles.codeList}>Code List</div>
                <div className={styles.otherInformation}>Other Information</div>
                <div className={styles.progressIndicator}>
                  <div className={styles.progressIndicatorChild} />
                  <div className={styles.indicatorCircles} />
                  <div className={styles.indicatorCircles1} />
                  <div className={styles.indicatorCircles2} />
                  <div className={styles.indicatorCircles3} />
                  <div className={styles.indicatorCircles4} />
                  <div className={styles.indicatorCircles5} />
                  <div className={styles.indicatorCircles6} />
                  <div className={styles.indicatorCircles7} />
                  <div className={styles.indicatorCircles8} />
                </div>
              </div>
              <form className={styles.privacy}>
                <div className={styles.privacyContent}>
                  <PrivacyNotice />
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.submitterInfo}>
                      <div className={styles.submitterInformation1}>
                        Submitter Information
                      </div>
                      <i className={styles.weWillNot}>
                        We will not publish your name or contact information;
                        however, we ask that you use your professional e-mail
                        address and contact information, not personal, as this
                        will expedite the review process.
                      </i>
                    </div>
                    <FullNameInput
                      yourFullName="Your Full Name "
                      fullNamePlaceholder="Full Name"
                    />
                    <div className={styles.employmentFields}>
                      <div className={styles.yourEmail}>
                        <span className={styles.yourEmail1}>Your Email </span>
                        <span className={styles.span}>*</span>
                      </div>
                      <div className={styles.emailField}>
                        <div className={styles.emailInput}>
                          <div className={styles.emailInputChild} />
                          <input
                            className={styles.email}
                            placeholder="Email"
                            type="text"
                          />
                        </div>
                      </div>
                      <EmploymentInfo
                        yourEmployer="Your Employer"
                        employerPlaceholder="Employer"
                        propPadding="0px 0px var(--padding-8xs)"
                        propWidth="996px"
                      />
                      <EmploymentInfo
                        yourEmployer="Your Department"
                        employerPlaceholder="Department"
                        propPadding="0px 0px var(--padding-8xs)"
                        propWidth="996px"
                      />
                      <EmploymentInfo
                        yourEmployer="Your Job Title"
                        employerPlaceholder="Job Title"
                        propPadding="unset"
                        propWidth="996px"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.dataSourceFields}>
                  <div className={styles.dataSourceFieldsChild} />
                  <div className={styles.dataSourceTitle}>
                    <div className={styles.dataSource}>Data Source</div>
                  </div>
                  <EmploymentInfo
                    yourEmployer="Data Source"
                    employerPlaceholder="Data Source"
                    propPadding="unset"
                    propWidth="936px"
                  />
                  <EmploymentInfo
                    yourEmployer="Data Source Homepage URL"
                    employerPlaceholder="URL"
                    propPadding="unset"
                    propWidth="936px"
                  />
                  <EmploymentInfo
                    yourEmployer="Data Source API URL"
                    employerPlaceholder="API URL"
                    propPadding="unset"
                    propWidth="936px"
                  />
                </div>
                <button className={styles.submitButton}>
                  <div className={styles.submitDataSource1}>
                    Submit Data Source
                  </div>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer propDebugCommit="unset" />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.copyrightClinicalNlpLab}>
          © Copyright Clinical NLP Lab. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default ResourcessubmitDataSource;
