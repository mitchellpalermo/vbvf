import React from "react";
import "./css/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";
import { CompatRoute } from "react-router-dom-v5-compat";
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
import PastorSearch from "./pages/pastor-search";

// import OnlineMinistry from "./pages/online-ministry";

function App() {
  return (
    <BrowserRouter>
      <CompatRouter>
        <ScrollToTop />
        <div className="page-container">
          <GlobalNav />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/connect" component={ConnectPage} />
            {/* <Route exact path="/online-ministry" component={OnlineMinistry} /> */}

            <Route exact path="/about/faq" component={FAQ} />
            <Route exact path="/about/leadership" component={Leadership} />
            <Route exact path="/about/our-story" component={OurStory} />
            <Route exact path="/giving" component={Giving} />
            <Route exact path="/about/beliefs" component={Beliefs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/livestream" component={Livestream} />
            <Route exact path="/bible-studies" component={StudyAggregator} />
            <Route path="/bible-studies/:studyName" component={StudyPage} />
            <Route exact path="/sermon-redirect" component={SermonRedirect} />
            <Route exact path="/giving-redirect" component={GivingRedirect} />
            <Route exact path="/pastor-search" component={PastorSearch} />
            <Route
              exact
              path="/registration-redirect"
              component={RegistrationRedirect}
            />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route
              exact
              path="/terms-and-conditions"
              component={TermsConditions}
            />
            <Route
              exact
              path="/ministries/youth-ministry"
              component={YouthMinistry}
            />
            <Route
              exact
              path="/ministries/childrens-ministry"
              component={ChildrensMinistry}
            />
            <Route
              exact
              path="/childrens-content"
              component={ChildrensContentAggregator}
            />
            <Route
              exact
              path="/childrens-content/:unitId"
              component={ChildrensUnitPage}
            />
            <CompatRoute
              exact
              path="/ministries/small-groups"
              component={SmallGroups}
            />
            <CompatRoute exact path="/ministries/serve" component={Serve} />
            <CompatRoute
              exact
              path="/ministries/care-ministry"
              component={CareMinistry}
            />
            <CompatRoute exact path="/attend" component={AttendService} />
            <Route
              exact
              path="/announcement/:announcementId"
              component={SpecialAnnouncement}
            />
            <CompatRoute
              exact
              path="/announcements"
              component={WhatsHappening}
            />

            <CompatRoute component={NotFound} />
          </Switch>
          <Footer />
          <link
            href="https://fonts.googleapis.com/css?family=Vollkorn|Work+Sans&display=swap"
            rel="stylesheet"
          />
        </div>
      </CompatRouter>
    </BrowserRouter>
  );
}

export default App;
