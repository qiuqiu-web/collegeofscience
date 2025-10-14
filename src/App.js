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
            <Route path="/application" element={<Application />} />
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
            <Route path="/other-materials" element={<OtherMaterials />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
