import { FunctionComponent } from "react";
import Header from "../components/Header";
import PrivacyNotice from "../components/PrivacyNotice";
import FullNameInput from "../components/FullNameInput";
import EmploymentInfo from "../components/EmploymentInfo";
import DemographicLabels from "../components/DemographicLabels";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./ResourcessubmitPhenotype.module.css";

const ResourcessubmitPhenotype: FunctionComponent = () => {
  return (
    <div className={styles.resourcessubmitPhenotype}>
      <div className={styles.labelCodingSystemsContainer}>
        <p className={styles.labelCodingSystems}>label: coding systems</p>
        <p className={styles.dataSourcesHyperlink}>data sources: hyperlink</p>
        <p
          className={styles.isItPossible}
        >{`is it possible to get the keywords? `}</p>
        <p className={styles.howCanI}>how can i design the category section?</p>
      </div>
      <main className={styles.headerParent}>
        <Header />
        <section className={styles.content}>
          <div className={styles.submission}>
            <div className={styles.phenotypeSubmission}>
              <h2 className={styles.submitPhenotype}>Submit Phenotype</h2>
            </div>
            <div className={styles.submissionForm}>
              <div className={styles.submissionFormInner}>
                <div className={styles.submitterInformationParent}>
                  <div className={styles.submitterInformation}>
                    Submitter Information
                  </div>
                  <div className={styles.phenotypeBasicInformation}>
                    Phenotype Basic Information
                  </div>
                  <div className={styles.codeList}>Code List</div>
                  <div className={styles.otherInformation}>
                    Other Information
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                    <div className={styles.publicationDetails}>
                      <div className={styles.demographics}>Demographics</div>
                      <div className={styles.publications}>Publications</div>
                      <div className={styles.authors}>Authors</div>
                      <div className={styles.institutions}>Institutions</div>
                      <div className={styles.categories}>Categories</div>
                    </div>
                    <div className={styles.progressDots}>
                      <div className={styles.dotSequence} />
                      <div className={styles.dotSequence1} />
                      <div className={styles.dotSequence2} />
                      <div className={styles.dotSequence3} />
                      <div className={styles.dotSequence4} />
                      <div className={styles.dotSequence5} />
                      <div className={styles.dotSequence6} />
                      <div className={styles.dotSequence7} />
                      <div className={styles.dotSequence8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contributionParent}>
                <div className={styles.contribution}>
                  <div className={styles.contributeToThe}>
                    Contribute to the advancement of biomedical and clinical
                    research by sharing your phenotype definitions. Clear and
                    well-defined phenotypes, submitted in a standardized manner,
                    enhance the reproducibility of research findings.
                  </div>
                  <PrivacyNotice />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameInner} />
                    <div className={styles.infoHeader}>
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
                    <div className={styles.employerDetails}>
                      <div className={styles.yourEmail}>
                        <span>Your Email </span>
                        <span className={styles.span}>*</span>
                      </div>
                      <div className={styles.emailField}>
                        <div className={styles.emailLabel}>
                          <div className={styles.emailLabelChild} />
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
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.phenotypeInfoTitle}>
                      <div className={styles.phenotypeBasicInformation1}>
                        Phenotype Basic Information
                      </div>
                    </div>
                    <FullNameInput
                      yourFullName="Phenotype Name "
                      fullNamePlaceholder="Phenotype Name"
                    />
                    <EmploymentInfo
                      yourEmployer="Phenotype Description"
                      employerPlaceholder="Phenotype Description"
                      propPadding="unset"
                      propWidth="996px"
                    />
                    <FullNameInput
                      yourFullName="Phenotype Type "
                      fullNamePlaceholder="Disease or Syndrome"
                    />
                  </div>
                </div>
                <div className={styles.demographicOptionsWrapper}>
                  <div className={styles.demographicOptions}>
                    <div className={styles.demographicOptionsChild} />
                    <div className={styles.demographicsTitle}>
                      <div className={styles.demographics1}>Demographics</div>
                    </div>
                    <DemographicLabels
                      ageGroup="Age Group"
                      selectAgeGroup="Select Age Group"
                    />
                    <EmploymentInfo
                      yourEmployer="Race"
                      employerPlaceholder="Race"
                      propPadding="unset"
                      propWidth="996px"
                    />
                    <EmploymentInfo
                      yourEmployer="Gender"
                      employerPlaceholder="Gender"
                      propPadding="unset"
                      propWidth="996px"
                    />
                    <DemographicLabels
                      ageGroup="Ethnicity"
                      selectAgeGroup="Select Ethnicity"
                      propWidth="996px"
                    />
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameChild1} />
                    <div className={styles.publications1}>Publications</div>
                    <div className={styles.publicationInstructions}>
                      <i className={styles.pleaseWriteEach}>
                        Please write each publication on a separate line using a
                        consistent citation format.
                      </i>
                    </div>
                    <textarea
                      className={styles.publicationTitle}
                      placeholder="Publications"
                      rows={11}
                      cols={50}
                    />
                  </div>
                </div>
                <FrameComponent
                  authors="Authors"
                  pleaseWriteEachAuthorOnAS="Please write each author on a separate line."
                  frame7Placeholder="Authors"
                />
                <FrameComponent
                  authors="Institutions"
                  pleaseWriteEachAuthorOnAS="Please write each institution on a separate line."
                  frame7Placeholder="Institutions"
                />
                <div className={styles.frameWrapper1}>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild2} />
                    <div className={styles.categories1}>Categories</div>
                    <div className={styles.addCategoryButton}>
                      <div className={styles.addCategory}>Add Category</div>
                      <div className={styles.selectCategoryDropdown}>
                        <div className={styles.selectCategoryDropdownChild} />
                        <div className={styles.selectCategory}>
                          Select Category
                        </div>
                      </div>
                      <button className={styles.addCategoryInput}>
                        <div className={styles.addCategory1}>Add Category</div>
                      </button>
                    </div>
                    <div className={styles.categoryListContainer}>
                      <div className={styles.categoryList}>Category List</div>
                      <textarea
                        className={styles.categoryListTitle}
                        placeholder="Categories"
                        rows={8}
                        cols={50}
                      />
                      <div className={styles.editCategory}>
                        <div className={styles.editOption}>
                          <div className={styles.editDirectly}>
                            Edit Directly
                          </div>
                        </div>
                        <div className={styles.recommendation}>
                          <div className={styles.notRecommended}>
                            (Not recommended)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.codeListContainerWrapper}>
                  <div className={styles.codeListContainer}>
                    <div className={styles.codeListContainerChild} />
                    <div className={styles.codeListHeader}>
                      <div className={styles.codeList1}>Code List</div>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.frameChild3} />
                        <DemographicLabels
                          ageGroup="Coding System"
                          selectAgeGroup="Select Coding System"
                          propWidth="936px"
                        />
                        <EmploymentInfo
                          yourEmployer="Code"
                          employerPlaceholder="Code"
                          propPadding="unset"
                          propWidth="936px"
                        />
                        <EmploymentInfo
                          yourEmployer="Code Description"
                          employerPlaceholder="Code Description"
                          propPadding="0px 0px var(--padding-5xs)"
                          propWidth="936px"
                        />
                        <div className={styles.addCodeButtonContainer}>
                          <div className={styles.addCode}>Add Code</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.codeListDisplayContainer}>
                      <div className={styles.codeList2}>Code List</div>
                      <textarea
                        className={styles.codeListContent}
                        placeholder="Code List"
                        rows={8}
                        cols={50}
                      />
                    </div>
                    <div className={styles.editCodeListContainer}>
                      <div className={styles.editCodeListDirectlyContai}>
                        <div className={styles.editDirectly1}>
                          Edit Directly
                        </div>
                      </div>
                      <div className={styles.notRecommendedContainer}>
                        <div className={styles.notRecommended1}>
                          (Not recommended)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild4} />
                  <div className={styles.otherInformationContainer}>
                    <div className={styles.otherInformationAbout}>
                      Other Information about this phenotype definition
                    </div>
                    <div className={styles.comments}>Comments</div>
                  </div>
                  <textarea
                    className={styles.commentsInputContainer}
                    placeholder="Comments"
                    rows={11}
                    cols={50}
                  />
                </div>
                <button className={styles.submitButtonContainer}>
                  <div className={styles.submitPhenotype1}>
                    Submit Phenotype
                  </div>
                </button>
              </div>
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

export default ResourcessubmitPhenotype;
