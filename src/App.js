import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import Summary from "./pages/Summary";
import Application from "./pages/Application";
import Section21 from "./pages/2.1";
import Section22 from "./pages/2.2";
import Section23 from "./pages/2.3";
import Section211 from "./pages/2.1.1";
import Section212 from "./pages/2.1.2";
import Section213 from "./pages/2.1.3";
import Section221 from "./pages/2.2.1";
import Section222 from "./pages/2.2.2";
import Section224 from "./pages/2.2.4";
import Section226 from "./pages/2.2.6";
import Section227 from "./pages/2.2.7";
import Section228 from "./pages/2.2.8";
import Section231 from "./pages/2.3.1";
import Section232 from "./pages/2.3.2";
import Section223 from "./pages/2.2.3";
import Section225 from "./pages/2.2.5";
import ApplicationLayout from "./components/ApplicationLayout";
import OtherMaterialsLayout from "./components/OtherMaterialsLayout";
import ExpertEvaluation from "./pages/ExpertEvaluation";
import Promotion from "./pages/Promotion";
import Materials from "./pages/Materials";
import PolicyDocuments from "./pages/PolicyDocuments";
import Questionnaire from "./pages/Questionnaire";
import EducationClassroom from "./pages/EducationClassroom";
import BaseGroup from "./pages/BaseGroup";
import ThemeActivities from "./pages/ThemeActivities";
import ManagementEvaluation from "./pages/ManagementEvaluation";
import Honors from "./pages/Honors";
import TeachingResources from "./pages/TeachingResources";
import HospitalFeedback from "./pages/HospitalFeedback";
import SocialService from "./pages/SocialService";
import NewsMedia from "./pages/NewsMedia";
import ResearchResults from "./pages/ResearchResults";
import OtherMaterials from "./pages/OtherMaterials";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/application" element={<ApplicationLayout><Application /></ApplicationLayout>} />
            <Route path="/section-2-1" element={<ApplicationLayout><Section21 /></ApplicationLayout>} />
            <Route path="/section-2-1-1" element={<ApplicationLayout><Section211 /></ApplicationLayout>} />
            <Route path="/section-2-1-2" element={<ApplicationLayout><Section212 /></ApplicationLayout>} />
            <Route path="/section-2-1-3" element={<ApplicationLayout><Section213 /></ApplicationLayout>} />
            <Route path="/section-2-2" element={<ApplicationLayout><Section22 /></ApplicationLayout>} />
            <Route path="/section-2-2-1" element={<ApplicationLayout><Section221 /></ApplicationLayout>} />
            <Route path="/section-2-2-2" element={<ApplicationLayout><Section222 /></ApplicationLayout>} />
            <Route path="/section-2-2-4" element={<ApplicationLayout><Section224 /></ApplicationLayout>} />
            <Route path="/section-2-2-6" element={<ApplicationLayout><Section226 /></ApplicationLayout>} />
            <Route path="/section-2-2-7" element={<ApplicationLayout><Section227 /></ApplicationLayout>} />
            <Route path="/section-2-2-8" element={<ApplicationLayout><Section228 /></ApplicationLayout>} />
            <Route path="/section-2-3" element={<ApplicationLayout><Section23 /></ApplicationLayout>} />
            <Route path="/section-2-3-1" element={<ApplicationLayout><Section231 /></ApplicationLayout>} />
            <Route path="/section-2-3-2" element={<ApplicationLayout><Section232 /></ApplicationLayout>} />
            {/* <Route path="/expert-evaluation" element={<ExpertEvaluation />} /> */}
            {/* <Route path="/promotion" element={<Promotion />} /> */}
            <Route path="/materials" element={<Materials />} />
            <Route path="/policy-documents" element={<PolicyDocuments />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route
              path="/education-classroom"
              element={<EducationClassroom />}
            />
            <Route path="/base-group" element={<BaseGroup />} />
            <Route path="/theme-activities" element={<ThemeActivities />} />
            <Route
              path="/management-evaluation"
              element={<ManagementEvaluation />}
            />
            <Route path="/honors" element={<Honors />} />
            <Route path="/teaching-resources" element={<TeachingResources />} />
            <Route path="/hospital-feedback" element={<HospitalFeedback />} />
            <Route path="/social-service" element={<SocialService />} />
            <Route path="/news-media" element={<NewsMedia />} />
            <Route path="/research-results" element={<ResearchResults />} />
            <Route path="/other-materials" element={<OtherMaterialsLayout><OtherMaterials /></OtherMaterialsLayout>} />
            <Route path="/other-materials-2-2-3" element={<OtherMaterialsLayout><Section223 /></OtherMaterialsLayout>} />
            <Route path="/other-materials-2-2-5" element={<OtherMaterialsLayout><Section225 /></OtherMaterialsLayout>} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
