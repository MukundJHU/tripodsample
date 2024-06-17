import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./Phenotype.module.css";

export type PhenotypeType = {
  className?: string;
};

const Phenotype: FunctionComponent<PhenotypeType> = ({ className = "" }) => {
  const [actionsDateTimePickerValue, setActionsDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={[styles.phenotype, className].join(" ")}>
        <div className={styles.title}>
          <div className={styles.name}>
            <div className={styles.phenotypeDetails}>Phenotype details</div>
            <h1 className={styles.lungCancer}>Lung Cancer</h1>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsChild} />
            <button className={styles.lab}>
              <div className={styles.labChild} />
              <div className={styles.research}>
                <img
                  className={styles.labResearch24dpFill0Wght40Icon}
                  alt=""
                  src="/lab-research-24dp-fill0-wght400-grad0-opsz24-1-1.svg"
                />
              </div>
              <a className={styles.general}>General</a>
            </button>
            <div className={styles.code}>
              <div className={styles.searchBox}>
                <div className={styles.inputBox}>
                  <div className={styles.codeInput}>
                    <div className={styles.codeIcon}>
                      <img
                        className={styles.code24dpFill0Wght400Grad0Icon}
                        loading="lazy"
                        alt=""
                        src="/code-24dp-fill0-wght400-grad0-opsz24-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.codeListSearch}>Code List Search</div>
                </div>
              </div>
              <div className={styles.separator} />
            </div>
            <div className={styles.evidence}>
              <div className={styles.sources}>
                <div className={styles.dataTypes}>
                  <div className={styles.dataIcons}>
                    <div className={styles.pair}>
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
              <div className={styles.separator1} />
              <div className={styles.sources1}>
                <div className={styles.frameParent}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.dataObject24dpFill0Wght400Wrapper}>
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
        <div className={styles.schedule}>
          <div className={styles.background} />
          <div className={styles.actions1}>
            <DateTimePicker
              value={actionsDateTimePickerValue}
              onChange={(newValue: any) => {
                setActionsDateTimePickerValue(newValue);
              }}
              sx={{
                fieldset: {
                  borderColor: "transparent",
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                },
                "&:hover": {
                  fieldset: { borderColor: "transparent" },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
                "& input::placeholder": { textColor: "#5c5f62", fontSize: 16 },
                input: {
                  color: "#5c5f62",
                  fontSize: 16,
                  textAlign: "justified",
                  fontWeight: "400",
                },
                "& .MuiInputBase-root": {
                  height: 24,
                  gap: "8px",
                  flexDirection: { flexDirection: "row" },
                },
              }}
              slotProps={{
                textField: {
                  size: "medium",
                  fullWidth: false,
                  required: false,
                  autoFocus: false,
                  error: false,
                  color: "primary",
                  placeholder: "Jan 1, 2022",
                },
                openPickerIcon: {
                  component: () => (
                    <img
                      width="24px"
                      height="24px"
                      src="/schedule-24dp-fill0-wght400-grad0-opsz24-1.svg"
                    />
                  ),
                },
              }}
              label="173 Codes"
            />
          </div>
          <div className={styles.table}>
            <div className={styles.header}>
              <div className={styles.columns}>
                <div className={styles.names}>
                  <div className={styles.pair1}>
                    <b className={styles.phenotypeName}>Phenotype Name</b>
                    <b className={styles.phenotypeId}>Phenotype ID</b>
                    <b className={styles.sourcePhenotypeId}>
                      Source Phenotype ID
                    </b>
                  </div>
                  <div className={styles.pair2}>
                    <b className={styles.lungCancer1}>Lung cancer</b>
                    <div className={styles.c9e00Da34488dA6cf5e9d24a73}>
                      088c9e00-da34-488d-a6cf-5e9d24a73181
                    </div>
                    <div className={styles.div}>4311499000</div>
                  </div>
                </div>
              </div>
              <div className={styles.downloads}>
                <div className={styles.types}>
                  <b className={styles.download}>Download</b>
                  <b className={styles.codelists}>Codelists</b>
                </div>
                <div className={styles.types1}>
                  <div className={styles.jsonXmlContainer}>
                    <p className={styles.jsonXmlYaml}>
                      <span className={styles.json}>JSON</span>
                      {` | `}
                      <span className={styles.xml}>XML</span>
                      {` | `}
                      <span className={styles.yaml}>YAML</span>
                    </p>
                  </div>
                  <div className={styles.csvTsvContainer}>
                    <span className={styles.csv}>CSV</span>
                    {` | `}
                    <span className={styles.tsv}>TSV</span>
                    {` | `}
                    <span className={styles.json1}>JSON</span>
                    {` | `}
                    <span className={styles.xml1}>XML</span>
                    {` | `}
                    <span className={styles.yaml1}>YAML</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.information}>
              <div className={styles.source}>
                <div className={styles.data}>
                  <div className={styles.title1}>
                    <b className={styles.dataSources}>Data Sources</b>
                    <b className={styles.codingSystems}>Coding Systems</b>
                  </div>
                  <b className={styles.description}>
                    <p className={styles.description1}>Description</p>
                  </b>
                </div>
              </div>
              <div className={styles.coding}>
                <div className={styles.system}>
                  <div className={styles.type}>
                    <div className={styles.ohdsi}>OHDSI</div>
                  </div>
                  <div className={styles.standards}>
                    <div className={styles.names1}>
                      <div className={styles.icd10}>ICD-10</div>
                    </div>
                    <div className={styles.names2}>
                      <div className={styles.icd9}>ICD-9</div>
                    </div>
                    <div className={styles.names3}>
                      <div className={styles.icdO3}>ICD-O-3</div>
                    </div>
                  </div>
                </div>
                <div className={styles.aCancerThat}>
                  A cancer that begins in the lungs and is the leading cause of
                  cancer death in both men and women. There are two main types:
                  small cell lung cancer and non-small cell lung
                  cancer.Presentation: May not have symptoms, but includes -
                  cough that does not go away, chest pain, trouble breathing,
                  wheezing, blood in sputum, hoarseness, fatigue, appetite loss
                  Assessment: Physical exam, CXR or chest CT, lung biopsy,
                  sputum cytology, pulmonary functions tests (PFTs), ABGs; for
                  NSCLC will do molecular testing (EGFR, many others) and PD-L1
                  protein (proteins on tumor cells)Plan: Surgery, chemo,
                  radiation, immunotherapy, laser therapy, smoking cessation
                  Prognosis: Poor because tend not to find the disease until it
                  is at an advanced stage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Phenotype;
