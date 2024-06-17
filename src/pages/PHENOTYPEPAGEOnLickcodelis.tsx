import { FunctionComponent } from "react";
import Header from "../components/Header";
import CodeSystem from "../components/CodeSystem";
import Footer from "../components/Footer";
import styles from "./PHENOTYPEPAGEOnLickcodelis.module.css";

const PHENOTYPEPAGEOnLickcodelis: FunctionComponent = () => {
  return (
    <div className={styles.phenotypePageOnLickcodelis}>
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
        <section className={styles.contentInner}>
          <div className={styles.phenotypeHeaderParent}>
            <div className={styles.phenotypeHeader}>
              <div className={styles.phenotypeTitle}>
                <div className={styles.phenotypeDetails}>Phenotype details</div>
                <h1 className={styles.lungCancer}>Lung Cancer</h1>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameWrapper}>
                  <div className={styles.labResearchIconParent}>
                    <div className={styles.labResearchIcon}>
                      <img
                        className={styles.labResearch24dpFill0Wght40Icon}
                        loading="lazy"
                        alt=""
                        src="/lab-research-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                      />
                    </div>
                    <div className={styles.general}>General</div>
                  </div>
                </div>
                <div className={styles.codeListSearchFieldWrapper}>
                  <div className={styles.codeListSearchField}>
                    <div className={styles.codeListSearchFieldChild} />
                    <div className={styles.codeSearchInput}>
                      <div className={styles.codeIcon}>
                        <div className={styles.codeSearch}>
                          <img
                            className={styles.code24dpFill0Wght400Grad0Icon}
                            loading="lazy"
                            alt=""
                            src="/code-24dp-fill0-wght400-grad0-opsz24-11.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.codeListSearch}>
                        Code List Search
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.evidenceTypesParent}>
                  <div className={styles.evidenceTypes}>
                    <div className={styles.evidenceOptions}>
                      <div className={styles.evidenceIcons}>
                        <div className={styles.dataTypeIcons}>
                          <img
                            className={styles.info24dpFill0Wght400Grad0Icon}
                            loading="lazy"
                            alt=""
                            src="/info-24dp-fill0-wght400-grad0-opsz24-1.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.supportedEvidences}>
                        Supported Evidences
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameItem} />
                  <div className={styles.evidenceTypes1}>
                    <div className={styles.frameParent}>
                      <div className={styles.frameContainer}>
                        <div
                          className={styles.dataObject24dpFill0Wght400Wrapper}
                        >
                          <img
                            className={styles.dataObject24dpFill0Wght400Icon}
                            loading="lazy"
                            alt=""
                            src="/data-object-24dp-fill0-wght400-grad0-opsz24-1.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.omopSql}>OMOP SQL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.codeListContainer}>
              <div className={styles.codeListBackground} />
              <div className={styles.divider} />
              <div className={styles.codeSearchFieldWrapper}>
                <div className={styles.codeSearchField}>
                  <div className={styles.codeInput}>
                    <div className={styles.searchInput}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameInner} />
                        <div className={styles.searchCode}>Search code</div>
                        <div className={styles.searchClearButton}>
                          <div className={styles.clearIcon}>
                            <div className={styles.clearButton} />
                            <img
                              className={styles.close24dpFill0Wght400Grad0Icon}
                              loading="lazy"
                              alt=""
                              src="/close-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <button className={styles.rectangleContainer}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.searchIconContainer}>
                          <img
                            className={styles.search24dpFill0Wght400GradIcon}
                            alt=""
                            src="/search-24dp-fill0-wght400-grad0-opsz24-12.svg"
                          />
                        </div>
                        <div className={styles.apply}>Apply</div>
                      </button>
                    </div>
                    <div className={styles.showDropdownWrapper}>
                      <div className={styles.showDropdown}>
                        <div className={styles.showWrapper}>
                          <div className={styles.show}>Show:</div>
                        </div>
                        <div className={styles.dropdownContainer}>
                          <div className={styles.dropdownContainerChild} />
                          <div className={styles.entries}>10</div>
                          <img
                            className={styles.unfoldMore24dpFill0Wght400Icon}
                            alt=""
                            src="/unfold-more-24dp-fill0-wght400-grad0-opsz24-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.codeListTable}>
                    <div className={styles.codeListTableChild} />
                    <div className={styles.codingInformation}>
                      <div className={styles.codingDetails}>
                        <div className={styles.codingHeader}>
                          <div className={styles.code}>Code</div>
                          <div className={styles.descriptionWrapper}>
                            <div className={styles.description}>
                              Description
                            </div>
                          </div>
                          <div className={styles.codingSystem}>
                            Coding System
                          </div>
                        </div>
                      </div>
                      <CodeSystem />
                    </div>
                    <div className={styles.tableRows}>
                      <div className={styles.rowTypes}>
                        <div className={styles.j17811}>J178.11</div>
                        <div className={styles.rowContent}>
                          <div className={styles.polypOfDuodenum}>
                            Polyp of duodenum
                          </div>
                        </div>
                        <div className={styles.readV2}>Read-V2</div>
                      </div>
                    </div>
                    <div className={styles.tableRows1}>
                      <div className={styles.tableRowsChild} />
                      <div className={styles.j17800}>J178.00</div>
                      <div className={styles.combinedTerms}>
                        <div className={styles.duodenalPolyp}>
                          Duodenal polyp
                        </div>
                      </div>
                      <div className={styles.readV21}>Read-V2</div>
                    </div>
                    <div className={styles.tableRows2}>
                      <div className={styles.j17711Parent}>
                        <div className={styles.j17711}>J177.11</div>
                        <div className={styles.polypOfStomachWrapper}>
                          <div className={styles.polypOfStomach}>
                            Polyp of stomach
                          </div>
                        </div>
                        <div className={styles.readV22}>Read-V2</div>
                      </div>
                    </div>
                    <CodeSystem />
                    <div className={styles.tableRows3}>
                      <div className={styles.j17811Parent}>
                        <div className={styles.j178111}>J178.11</div>
                        <div className={styles.polypOfDuodenumWrapper}>
                          <div className={styles.polypOfDuodenum1}>
                            Polyp of duodenum
                          </div>
                        </div>
                        <div className={styles.readV23}>Read-V2</div>
                      </div>
                    </div>
                    <div className={styles.tableRows4}>
                      <div className={styles.tableRowsItem} />
                      <div className={styles.j178001}>J178.00</div>
                      <div className={styles.duodenalPolypWrapper}>
                        <div className={styles.duodenalPolyp1}>
                          Duodenal polyp
                        </div>
                      </div>
                      <div className={styles.readV24}>Read-V2</div>
                    </div>
                    <div className={styles.tableRows5}>
                      <div className={styles.j17711Group}>
                        <div className={styles.j177111}>J177.11</div>
                        <div className={styles.polypOfStomachContainer}>
                          <div className={styles.polypOfStomach1}>
                            Polyp of stomach
                          </div>
                        </div>
                        <div className={styles.readV25}>Read-V2</div>
                      </div>
                    </div>
                    <CodeSystem />
                    <div className={styles.tableRows6}>
                      <div className={styles.j17811Group}>
                        <div className={styles.j178112}>J178.11</div>
                        <div className={styles.polypOfDuodenumContainer}>
                          <div className={styles.polypOfDuodenum2}>
                            Polyp of duodenum
                          </div>
                        </div>
                        <div className={styles.readV26}>Read-V2</div>
                      </div>
                    </div>
                    <div className={styles.tableRows7}>
                      <div className={styles.tableRowsInner} />
                      <div className={styles.j178002}>J178.00</div>
                      <div className={styles.duodenalPolypContainer}>
                        <div className={styles.duodenalPolyp2}>
                          Duodenal polyp
                        </div>
                      </div>
                      <div className={styles.readV27}>Read-V2</div>
                    </div>
                    <div className={styles.tableRows8}>
                      <div className={styles.j17711Container}>
                        <div className={styles.j177112}>J177.11</div>
                        <div className={styles.polypOfStomachFrame}>
                          <div className={styles.polypOfStomach2}>
                            Polyp of stomach
                          </div>
                        </div>
                        <div className={styles.readV28}>Read-V2</div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default PHENOTYPEPAGEOnLickcodelis;
