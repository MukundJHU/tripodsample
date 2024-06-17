import { FunctionComponent } from "react";
import Header from "../components/Header";
import GroupComponent from "../components/GroupComponent";
import FooterWrapper from "../components/FooterWrapper";
import styles from "./ResourcesapiReference.module.css";

const ResourcesapiReference: FunctionComponent = () => {
  return (
    <div className={styles.resourcesapiReference}>
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
        <section className={styles.apiReference}>
          <div className={styles.apiDescriptionParent}>
            <div className={styles.apiDescription}>
              <h2 className={styles.apiReference1}>API Reference</h2>
              <div className={styles.complyApiResponsesContainer}>
                <p className={styles.complyApiResponsesIncludeO}>
                  <span className={styles.complyApiResponses}>
                    ComPLy API responses include one of two data types: the
                    phenotype response (see LinkML schema on the bottom of this
                    page), and the codelist. The phenotype should be requested
                    by phenotype unique ID, which is a UUID, and must match the
                    expected format of the API. Although the code list is part
                    of the phenotype JSON, it is also possible to request the
                    code list in isolation (including in CSV format) using the
                    same UUID as the associated phenotype.
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span className={styles.blankLine1}>&nbsp;</span>
                </p>
                <p className={styles.apiResponseSchemaDefinition}>
                  <span className={styles.apiResponseSchema}>
                    API response schema definitions are available here: 
                  </span>
                  <a
                    className={styles.linkmlyaml}
                    href="https://phenotypelibrary.org/schemas/phenotype.yaml"
                    target="_blank"
                  >
                    <span className={styles.linkmlyaml1}>
                      <span className={styles.linkmlyaml2}>LinkML/YAML</span>
                    </span>
                  </a>
                  <span className={styles.span}> | </span>
                  <a
                    className={styles.rdfshex}
                    href="https://phenotypelibrary.org/schemas/phenotype.shex"
                    target="_blank"
                  >
                    <span className={styles.rdfshex1}>
                      <span className={styles.rdfshex2}>RDF/ShEx</span>
                    </span>
                  </a>
                  <span className={styles.span1}> | </span>
                  <a
                    className={styles.rdfshacl}
                    href="https://phenotypelibrary.org/schemas/phenotype.shacl.ttl"
                    target="_blank"
                  >
                    <span className={styles.rdfshacl1}>
                      <span className={styles.rdfshacl2}>RDF/SHACL</span>
                    </span>
                  </a>
                  <span className={styles.span2}> | </span>
                  <a
                    className={styles.jsonSchema}
                    href="https://phenotypelibrary.org/schemas/phenotype.schema.json"
                    target="_blank"
                  >
                    <span className={styles.jsonSchema1}>
                      <span className={styles.jsonSchema2}>JSON Schema</span>
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
          </div>
        </section>
      </main>
      <FooterWrapper />
    </div>
  );
};

export default ResourcesapiReference;
