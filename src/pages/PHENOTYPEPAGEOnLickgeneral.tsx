import { FunctionComponent } from "react";
import Header from "../components/Header";
import Phenotype from "../components/Phenotype";
import Footer from "../components/Footer";
import styles from "./PHENOTYPEPAGEOnLickgeneral.module.css";

const PHENOTYPEPAGEOnLickgeneral: FunctionComponent = () => {
  return (
    <div className={styles.phenotypePageOnLickgeneral}>
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
        <section className={styles.details}>
          <Phenotype />
        </section>
      </main>
      <Footer />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.copyrightClinicalNlpLab}>
          © Copyright Clinical NLP Lab. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default PHENOTYPEPAGEOnLickgeneral;
