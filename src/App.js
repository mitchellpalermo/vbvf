import React from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import ConnectPage from "./pages/connect-page";

import StudyAggregator from "./pages/study-aggregator";
import SermonRedirect from "./pages/sermon-redirect";
import RegistrationRedirect from "./pages/registration-redirect";
import GivingRedirect from "./pages/giving-redirect";
import PrivacyPolicy from "./components/privacy-policy";
import TermsConditions from "./components/terms-conditions";
import NotFound from "./pages/notfound";
import Home from "./pages/home";
import GlobalNav from "./components/global-nav";
import ChildrensMinistry from "./pages/childrens-ministry";
import YouthMinistry from "./pages/youth-ministry";
import SmallGroups from "./pages/small-groups";
import Serve from "./pages/serve";
import Contact from "./pages/contact";
import ScrollToTop from "./components/scroll-to-top";
import StudyPage from "./pages/study-page";
import Livestream from "./pages/livestream";
import AttendService from "./pages/attend-service";
import FAQ from "./components/faq";
import OurStory from "./components/our-story";
import Beliefs from "./components/beliefs";
import Leadership from "./components/leadership";
import Giving from "./pages/giving";
import ChildrensUnitPage from "./components/childrens-unit-page";
import ChildrensContentAggregator from "./pages/childrens-content-aggregator";
import SpecialAnnouncement from "./pages/specialAnnouncement";
import CareMinistry from "./pages/care-ministry";
import WhatsHappening from "./pages/whats-happening";

// import OnlineMinistry from "./pages/online-ministry";

function App() {
  return (
    <div className="page-container">
      <ScrollToTop />
      <GlobalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/about/faq" element={<FAQ />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/about/beliefs" element={<Beliefs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/livestream" element={<Livestream />} />
        <Route path="bible-studies" element={<StudyAggregator />} />
        <Route path="bible-studies/:studyName" element={<StudyPage />} />

        <Route path="/sermon-redirect" element={<SermonRedirect />} />
        <Route path="/giving-redirect" element={<GivingRedirect />} />

        <Route
          path="/registration-redirect"
          element={<RegistrationRedirect />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/ministries/youth-ministry" element={<YouthMinistry />} />
        <Route
          path="/ministries/childrens-ministry"
          element={<ChildrensMinistry />}
        />
        <Route
          path="childrens-content"
          element={<ChildrensContentAggregator />}
        />
        <Route
          path="childrens-content/:unitId"
          element={<ChildrensUnitPage />}
        />
        <Route path="/ministries/small-groups" element={<SmallGroups />} />
        <Route path="/ministries/serve" element={<Serve />} />
        <Route path="/ministries/care-ministry" element={<CareMinistry />} />
        <Route path="/attend" element={<AttendService />} />
        <Route
          path="/announcement/:announcementId"
          element={<SpecialAnnouncement />}
        />
        <Route path="/announcements" element={<WhatsHappening />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <link
        href="https://fonts.googleapis.com/css?family=Vollkorn|Work+Sans&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}

export default App;
