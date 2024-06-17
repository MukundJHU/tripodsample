import { FunctionComponent } from "react";
import styles from "./PHENOTYPEPAGE.module.css";

const PHENOTYPEPAGE: FunctionComponent = () => {
  return (
    <div className={styles.phenotypePage}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.logoHeader}>
          <div className={styles.comply1} />
          <img
            className={styles.complyLogo1}
            loading="lazy"
            alt=""
            src="/comply-logo-1@2x.png"
          />
        </div>
        <div className={styles.aboutSearch}>
          <div className={styles.aboutSearchLinks}>
            <div className={styles.aboutWrapper}>
              <a className={styles.about}>About</a>
            </div>
            <div className={styles.phenotypeWrapper}>
              <a className={styles.phenotype}>Phenotype</a>
            </div>
            <div className={styles.resourcesDropdown}>
              <div className={styles.resources}>
                <a className={styles.resources1}>Resources</a>
                <div className={styles.dropdown}>
                  <img
                    className={styles.arrowDropDown24dpFill0WghIcon}
                    alt=""
                    src="/arrow-drop-down-24dp-fill0-wght400-grad0-opsz24-2-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.contactUsWrapper}>
              <a className={styles.contactUs}>Contact Us</a>
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
      <main className={styles.searchBar}>
        <section className={styles.searchInputs}>
          <div className={styles.searchTermInput}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <input
                className={styles.termInput}
                placeholder="Search term"
                type="text"
              />
              <button className={styles.searchButton}>
                <div className={styles.searchButtonChild} />
                <img
                  className={styles.search24dpFill0Wght400GradIcon1}
                  alt=""
                  src="/search-24dp-fill0-wght400-grad0-opsz24-1.svg"
                />
                <div className={styles.search}>Search</div>
              </button>
            </div>
          </div>
          <div className={styles.filters}>
            <div className={styles.filtersDropdown}>
              <div className={styles.applyFilters}>
                <div className={styles.applyFiltersChild} />
                <div className={styles.applyFiltersWrapper}>
                  <div className={styles.applyFilters1}>Apply Filters</div>
                </div>
                <div className={styles.filtersContent}>
                  <div className={styles.savedFilters}>
                    <div className={styles.savedFiltersChild} />
                    <div className={styles.filterSelect}>
                      <img
                        className={styles.filterList24dpFill0Wght400Icon}
                        alt=""
                        src="/filter-list-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                      />
                      <div className={styles.selectSavedFilter}>
                        Select saved filter
                      </div>
                    </div>
                    <img
                      className={styles.keyboardArrowDown24dpFill0Icon}
                      alt=""
                      src="/keyboard-arrow-down-24dp-fill0-wght400-grad0-opsz24-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.conditionCategory}>
                  <div className={styles.conditionSelect}>
                    <div className={styles.condition}>
                      <div className={styles.category}>
                        <div className={styles.categoryInput}>
                          <img
                            className={styles.conditions24dpFill0Wght400Icon}
                            loading="lazy"
                            alt=""
                            src="/conditions-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                          />
                        </div>
                        <div className={styles.conditionCategory1}>
                          Condition Category
                        </div>
                      </div>
                      <div className={styles.keyboardArrowDown24dpFill0Wrapper}>
                        <img
                          className={styles.keyboardArrowDown24dpFill0Icon1}
                          alt=""
                          src="/keyboard-arrow-down-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.conditionsList}>
                      <div className={styles.conditionItems}>
                        <input
                          className={styles.conditionItem}
                          type="checkbox"
                        />
                        <div className={styles.behaviorsAndMentalContainer}>
                          <span>
                            <span>Behaviors and Mental Disorders</span>
                            <span className={styles.span}>{` `}</span>
                            <span className={styles.span1}>(120)</span>
                          </span>
                        </div>
                      </div>
                      <div className={styles.conditionItems1}>
                        <input className={styles.frameInput} type="checkbox" />
                        <div className={styles.bloodAndLymphContainer}>
                          <span>
                            <span>Blood and Lymph Conditions</span>
                            <span className={styles.span2}>{` `}</span>
                            <span className={styles.span3}>(80)</span>
                          </span>
                        </div>
                      </div>
                      <div className={styles.conditionItems2}>
                        <input className={styles.frameInput1} type="checkbox" />
                        <div
                          className={styles.digestiveSystemDiseasesContainer}
                        >
                          <span>
                            <span>{`Digestive System Diseases `}</span>
                            <span className={styles.span4}>(43)</span>
                          </span>
                        </div>
                      </div>
                      <div className={styles.conditionItems3}>
                        <input className={styles.frameInput2} type="checkbox" />
                        <div
                          className={styles.diseasesAndAbnormalitiesContainer}
                        >
                          <span>
                            <span>
                              Diseases and Abnormalities at or Before Birth
                            </span>
                            <span className={styles.span5}>{` `}</span>
                            <span className={styles.span6}>(32)</span>
                          </span>
                        </div>
                      </div>
                      <div className={styles.conditionItems4}>
                        <input className={styles.frameInput3} type="checkbox" />
                        <div className={styles.skinAndConnectiveContainer}>
                          <span>
                            <span>{`Skin and Connective Tissue Diseases `}</span>
                            <span className={styles.span7}>(47)</span>
                          </span>
                        </div>
                      </div>
                      <div className={styles.conditionItems5}>
                        <input className={styles.frameInput4} type="checkbox" />
                        <div className={styles.woundsAndInjuriesContainer}>
                          <span>
                            <span>Wounds and Injuries</span>
                            <span className={styles.span8}>{` `}</span>
                            <span className={styles.span9}>(520)</span>
                          </span>
                        </div>
                      </div>
                      <div className={styles.conditionItems6}>
                        <div className={styles.frameParent}>
                          <input
                            className={styles.frameInput5}
                            type="checkbox"
                          />
                          <div
                            className={styles.occupationalDiseases4237Container}
                          >
                            <span>
                              <span>{`Occupational Diseases `}</span>
                              <span className={styles.span10}>(4237)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.conditionItems7}>
                        <div className={styles.frameGroup}>
                          <input
                            className={styles.frameInput6}
                            type="checkbox"
                          />
                          <div className={styles.mouthAndToothContainer}>
                            <span>
                              <span>Mouth and Tooth Diseases</span>
                              <span className={styles.span11}>{` `}</span>
                              <span className={styles.span12}>(525)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.coding}>
                  <div className={styles.codingDropdown}>
                    <div className={styles.codingSystem}>
                      <div className={styles.systemSelect}>
                        <div className={styles.system}>
                          <img
                            className={styles.deployedCode24dpFill0Wght4Icon}
                            loading="lazy"
                            alt=""
                            src="/deployed-code-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                          />
                        </div>
                        <div className={styles.codingSystem1}>
                          Coding System
                        </div>
                      </div>
                      <div
                        className={styles.keyboardArrowDown24dpFill0Container}
                      >
                        <img
                          className={styles.keyboardArrowDown24dpFill0Icon2}
                          alt=""
                          src="/keyboard-arrow-down-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.codingOptions}>
                      <div className={styles.systemItems}>
                        <div className={styles.systemItem}>
                          <input className={styles.icons} type="checkbox" />
                          <div className={styles.atc525}>
                            <span>
                              <span>ATC</span>
                              <span className={styles.span13}>{` `}</span>
                              <span className={styles.span14}>(525)</span>
                            </span>
                          </div>
                        </div>
                        <div className={styles.systemItem1}>
                          <input
                            className={styles.frameInput7}
                            type="checkbox"
                          />
                          <div className={styles.ccs525}>
                            <span>
                              <span>CCS</span>
                              <span className={styles.span15}>{` `}</span>
                              <span className={styles.span16}>(525)</span>
                            </span>
                          </div>
                        </div>
                        <div className={styles.systemItem2}>
                          <input
                            className={styles.frameInput8}
                            type="checkbox"
                          />
                          <div className={styles.cpt525}>
                            <span>
                              <span>CPT</span>
                              <span className={styles.span17}>{` `}</span>
                              <span className={styles.span18}>(525)</span>
                            </span>
                          </div>
                        </div>
                        <div className={styles.systemItem3}>
                          <input
                            className={styles.frameInput9}
                            type="checkbox"
                          />
                          <div className={styles.idc10525}>
                            <span>
                              <span>IDC-10</span>
                              <span className={styles.span19}>{` `}</span>
                              <span className={styles.span20}>(525)</span>
                            </span>
                          </div>
                        </div>
                        <div className={styles.systemItem4}>
                          <input
                            className={styles.frameInput10}
                            type="checkbox"
                          />
                          <div className={styles.idc10Am525}>
                            <span>
                              <span>IDC-10-AM</span>
                              <span className={styles.span21}>{` `}</span>
                              <span className={styles.span22}>(525)</span>
                            </span>
                          </div>
                        </div>
                        <div className={styles.systemItem5}>
                          <input
                            className={styles.frameInput11}
                            type="checkbox"
                          />
                          <div className={styles.idc10Ca525}>
                            <span>
                              <span>IDC-10-CA</span>
                              <span className={styles.span23}>{` `}</span>
                              <span className={styles.span24}>(525)</span>
                            </span>
                          </div>
                        </div>
                        <div className={styles.systemItem6}>
                          <input
                            className={styles.frameInput12}
                            type="checkbox"
                          />
                          <div className={styles.idc10Cm525}>
                            <span>
                              <span>IDC-10-CM</span>
                              <span className={styles.span25}>{` `}</span>
                              <span className={styles.span26}>(525)</span>
                            </span>
                          </div>
                        </div>
                        <div className={styles.systemItem7}>
                          <input
                            className={styles.frameInput13}
                            type="checkbox"
                          />
                          <div className={styles.idc10Gm525}>
                            <span>
                              <span>IDC-10-GM</span>
                              <span className={styles.span27}>{` `}</span>
                              <span className={styles.span28}>(525)</span>
                            </span>
                          </div>
                        </div>
                        <div className={styles.systemItem8}>
                          <input
                            className={styles.frameInput14}
                            type="checkbox"
                          />
                          <div className={styles.idc10Cps525}>
                            <span>
                              <span>IDC-10-CPS</span>
                              <span className={styles.span29}>{` `}</span>
                              <span className={styles.span30}>(525)</span>
                            </span>
                          </div>
                        </div>
                        <div className={styles.systemItem9}>
                          <input
                            className={styles.frameInput15}
                            type="checkbox"
                          />
                          <div className={styles.idc11525}>
                            <span>
                              <span>IDC-11</span>
                              <span className={styles.span31}>{` `}</span>
                              <span className={styles.span32}>(525)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.datasource}>
                      <div className={styles.datasourceDropdown}>
                        <div className={styles.datasourceSelect}>
                          <div className={styles.source}>
                            <img
                              className={styles.database24dpFill0Wght400GrIcon}
                              alt=""
                              src="/database-24dp-fill0-wght400-grad0-opsz24-2-1.svg"
                            />
                          </div>
                          <div className={styles.dataSource}>Data Source</div>
                        </div>
                        <div className={styles.keyboardArrowDown24dpFill0Frame}>
                          <img
                            className={styles.keyboardArrowDown24dpFill0Icon3}
                            alt=""
                            src="/keyboard-arrow-down-24dp-fill0-wght400-grad0-opsz24-1-3.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.saveCancel}>
                  <div className={styles.saveCancelChild} />
                  <div className={styles.saveCancelButtons}>
                    <div className={styles.save}>
                      <div className={styles.saveFilterWrapper}>
                        <div className={styles.saveFilter}>Save filter</div>
                      </div>
                      <div className={styles.cancelApply}>
                        <button className={styles.cancelWrapper}>
                          <div className={styles.cancel}>Cancel</div>
                        </button>
                        <button className={styles.applyFiltersContainer}>
                          <div className={styles.applyFilters2}>
                            Apply filters
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.resultsParent}>
              <div className={styles.results}>Results</div>
              <div className={styles.resultsInfo}>
                <div className={styles.resultsHeader}>
                  <div className={styles.resultCount}>
                    <div className={styles.found1234Results}>
                      Found 1,234 result(s)
                    </div>
                  </div>
                  <div className={styles.sortSettings}>
                    <div className={styles.sort}>
                      <div className={styles.sortDropdown}>
                        <img
                          className={styles.swapVert24dpFill0Wght400GIcon}
                          loading="lazy"
                          alt=""
                          src="/swap-vert-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                        />
                      </div>
                      <div className={styles.sortByWrapper}>
                        <div className={styles.sortBy}>Sort by:</div>
                      </div>
                      <div className={styles.relevanceSelect}>
                        <div className={styles.relevanceSelectChild} />
                        <div className={styles.relevance}>Relevance</div>
                        <img
                          className={styles.keyboardArrowDown24dpFill0Icon4}
                          alt=""
                          src="/keyboard-arrow-down-24dp-fill0-wght400-grad0-opsz24-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.resultsPerPage}>
                      <div className={styles.pageSelect}>
                        <div className={styles.perPage}>
                          <img
                            className={styles.settings24dpFill0Wght400GrIcon}
                            loading="lazy"
                            alt=""
                            src="/settings-24dp-fill0-wght400-grad0-opsz24-1.svg"
                          />
                          <div className={styles.resultPerPage}>
                            Result per page:
                          </div>
                        </div>
                      </div>
                      <div className={styles.resultsPerPageDropdown}>
                        <div className={styles.resultsPerPageDropdownChild} />
                        <div className={styles.resultsPageValue}>20</div>
                        <img
                          className={styles.keyboardArrowDown24dpFill0Icon5}
                          alt=""
                          src="/keyboard-arrow-down-24dp-fill0-wght400-grad0-opsz24-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.searchResult}>
                  <div className={styles.searchResultChild} />
                  <div className={styles.searchResultDetails}>
                    <div className={styles.resultHeaders}>
                      <div className={styles.resultHeadersChild} />
                      <div className={styles.lungCancer}>Lung cancer</div>
                      <div className={styles.resultSources}>
                        <div className={styles.resultSourceName}>
                          <div className={styles.sourceOhdsi}>
                            Source: OHDSI
                          </div>
                        </div>
                        <div className={styles.resultOmopIds}>
                          <div className={styles.omopId12345}>
                            OMOP ID: 12345
                          </div>
                        </div>
                        <div className={styles.resultIcdCodes}>
                          <b className={styles.icd10}>ICD-10</b>
                        </div>
                        <div className={styles.resultIcdCodesDuplicate}>
                          <b className={styles.icd9}>ICD-9</b>
                        </div>
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.... Learn More
                      </div>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <div className={styles.lungCancer1}>Lung cancer</div>
                      <div className={styles.frameContainer}>
                        <div className={styles.sourceOhdsiWrapper}>
                          <div className={styles.sourceOhdsi1}>
                            Source: OHDSI
                          </div>
                        </div>
                        <div className={styles.omopId12345Wrapper}>
                          <div className={styles.omopId123451}>
                            OMOP ID: 12345
                          </div>
                        </div>
                        <div className={styles.icd10Wrapper}>
                          <b className={styles.icd101}>ICD-10</b>
                        </div>
                        <div className={styles.icd9Wrapper}>
                          <b className={styles.icd91}>ICD-9</b>
                        </div>
                      </div>
                      <div className={styles.loremIpsumDolor1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.... Learn More
                      </div>
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.lungCancer2}>Lung cancer</div>
                      <div className={styles.frameDiv}>
                        <div className={styles.sourceOhdsiContainer}>
                          <div className={styles.sourceOhdsi2}>
                            Source: OHDSI
                          </div>
                        </div>
                        <div className={styles.omopId12345Container}>
                          <div className={styles.omopId123452}>
                            OMOP ID: 12345
                          </div>
                        </div>
                        <div className={styles.icd10Container}>
                          <b className={styles.icd102}>ICD-10</b>
                        </div>
                        <div className={styles.icd9Container}>
                          <b className={styles.icd92}>ICD-9</b>
                        </div>
                      </div>
                      <div className={styles.loremIpsumDolor2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.... Learn More
                      </div>
                    </div>
                    <div className={styles.groupDiv}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.lungCancer3}>Lung cancer</div>
                      <div className={styles.frameParent1}>
                        <div className={styles.sourceOhdsiFrame}>
                          <div className={styles.sourceOhdsi3}>
                            Source: OHDSI
                          </div>
                        </div>
                        <div className={styles.omopId12345Frame}>
                          <div className={styles.omopId123453}>
                            OMOP ID: 12345
                          </div>
                        </div>
                        <div className={styles.icd10Frame}>
                          <b className={styles.icd103}>ICD-10</b>
                        </div>
                        <div className={styles.icd9Frame}>
                          <b className={styles.icd93}>ICD-9</b>
                        </div>
                      </div>
                      <div className={styles.loremIpsumDolor3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.... Learn More
                      </div>
                    </div>
                    <img
                      className={styles.group431}
                      loading="lazy"
                      alt=""
                      src="/group-43-1@2x.png"
                    />
                  </div>
                  <div className={styles.resultSeparator}>
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.lineIcon}
                        alt=""
                        src="/line-1.svg"
                      />
                      <img
                        className={styles.frameChild1}
                        alt=""
                        src="/line-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pagination}>
                <div className={styles.paginationControls}>
                  <div className={styles.previousPageWrapper}>
                    <div className={styles.previousPage}>
                      <img
                        className={styles.doubleArrow24dpFill0Wght40Icon}
                        loading="lazy"
                        alt=""
                        src="/double-arrow-24dp-fill0-wght400-grad0-opsz24-2.svg"
                      />
                      <img
                        className={styles.chevronRight24dpFill0Wght4Icon}
                        loading="lazy"
                        alt=""
                        src="/chevron-right-24dp-fill0-wght400-grad0-opsz24-2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.pageInformation}>
                    <div className={styles.pageLabel}>
                      <div className={styles.page}>Page</div>
                    </div>
                    <div className={styles.currentPageNumber}>
                      <div className={styles.currentPageValue}>
                        <div className={styles.currentPageValueChild} />
                        <div className={styles.pageNumber}>12</div>
                      </div>
                    </div>
                    <div className={styles.pageLabel1}>
                      <div className={styles.of1234}>of 1,234</div>
                    </div>
                  </div>
                  <div className={styles.paginationControlsInner}>
                    <div className={styles.chevronRight24dpFill0Wght4Parent}>
                      <img
                        className={styles.chevronRight24dpFill0Wght4Icon1}
                        loading="lazy"
                        alt=""
                        src="/chevron-right-24dp-fill0-wght400-grad0-opsz24-1.svg"
                      />
                      <img
                        className={styles.doubleArrow24dpFill0Wght40Icon1}
                        loading="lazy"
                        alt=""
                        src="/double-arrow-24dp-fill0-wght400-grad0-opsz24-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.footerContentParent}>
        <footer className={styles.footerContent}>
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
        </footer>
        <div className={styles.footer}>
          <div className={styles.footerChild} />
          <div className={styles.copyrightClinicalNlpLab}>
            © Copyright Clinical NLP Lab. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default PHENOTYPEPAGE;
