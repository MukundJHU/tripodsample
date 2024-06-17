import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./Header1.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerChild} />
      <div className={styles.complyLogo}>
        <div className={styles.comply1} />
        <img
          className={styles.complyLogo1}
          loading="lazy"
          alt=""
          src="/comply-logo-1@2x.png"
        />
      </div>
      <div className={styles.navigation}>
        <div className={styles.links}>
          <div className={styles.linkItems}>
            <a className={styles.about}>About</a>
          </div>
          <div className={styles.linkItems1}>
            <a className={styles.phenotype}>Phenotype</a>
          </div>
          <div className={styles.search}>
            <FormControl
              className={styles.input}
              variant="standard"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "110px",
                height: "25px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "25px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "25px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "25px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "25px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
          </div>
          <div className={styles.linkItems2}>
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
  );
};

export default Header;
