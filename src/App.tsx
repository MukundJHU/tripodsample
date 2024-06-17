import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HOMEPAGE from "./pages/HOMEPAGE";
import PHENOTYPEPAGE from "./pages/PHENOTYPEPAGE";
import ABOUTPAGE from "./pages/ABOUTPAGE";
import ContactUs from "./pages/ContactUs";
import PHENOTYPEPAGEOnLickgeneral from "./pages/PHENOTYPEPAGEOnLickgeneral";
import ResourcesapiReference from "./pages/ResourcesapiReference";
import ResourcessubmitPhenotype from "./pages/ResourcessubmitPhenotype";
import ResourcessubmitDataSource from "./pages/ResourcessubmitDataSource";
import PHENOTYPEPAGEOnLickcodelis from "./pages/PHENOTYPEPAGEOnLickcodelis";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/phenotype-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-page":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/phenotype-pageon-lickgeneral":
        title = "";
        metaDescription = "";
        break;
      case "/resourcesapi-reference":
        title = "";
        metaDescription = "";
        break;
      case "/resourcessubmit-phenotype":
        title = "";
        metaDescription = "";
        break;
      case "/resourcessubmit-data-source":
        title = "";
        metaDescription = "";
        break;
      case "/phenotype-pageon-lickcodelist":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HOMEPAGE />} />
      <Route path="/phenotype-page" element={<PHENOTYPEPAGE />} />
      <Route path="/about-page" element={<ABOUTPAGE />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route
        path="/phenotype-pageon-lickgeneral"
        element={<PHENOTYPEPAGEOnLickgeneral />}
      />
      <Route
        path="/resourcesapi-reference"
        element={<ResourcesapiReference />}
      />
      <Route
        path="/resourcessubmit-phenotype"
        element={<ResourcessubmitPhenotype />}
      />
      <Route
        path="/resourcessubmit-data-source"
        element={<ResourcessubmitDataSource />}
      />
      <Route
        path="/phenotype-pageon-lickcodelist"
        element={<PHENOTYPEPAGEOnLickcodelis />}
      />
    </Routes>
  );
}
export default App;
