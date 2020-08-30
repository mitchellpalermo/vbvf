import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import ConnectPage from "./containers/connect-page";

import StudyAggregator from "./containers/study-aggregator";
import SermonRedirect from "./containers/sermon-redirect";
import GivingRedirect from "./containers/giving-redirect";
import PrivacyPolicy from "./components/privacy-policy";
import TermsConditions from "./components/terms-conditions";
import NotFound from "./containers/notfound";
import Home from "./containers/home";
import GlobalNav from "./components/global-nav";
import ChildrensMinistry from "./components/ministries/childrens-ministry";
import YouthMinistry from "./components/ministries/youth-ministry";
import SmallGroups from "./components/ministries/small-groups";
import Serve from "./components/ministries/serve";
import Contact from "./containers/contact";
import ScrollToTop from "./components/scroll-to-top";
import StudyPage from "./components/study-page";
import Livestream from "./containers/livestream";
import CoronaVirus from "./containers/corona-virus";
import FAQ from "./components/faq";
import OurStory from "./components/our-story";
import Beliefs from "./components/beliefs";
import Leadership from "./components/leadership";
import Giving from "./containers/giving";
import ChildrensUnitPage from "./components/childrens-unit-page";
import ChildrensContentAggregator from "./containers/childrens-content-aggregator";
import WhatsHappening from "./containers/whats-happening";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-container">
        <GlobalNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/connect" component={ConnectPage} />
          {/* <Route exact path="/news" component={WhatsHappening} /> */}
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
          <Route
            exact
            path="/ministries/small-groups"
            component={SmallGroups}
          />
          <Route exact path="/ministries/serve" component={Serve} />
          <Route exact path="/corona-virus" component={CoronaVirus} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <link
          href="https://fonts.googleapis.com/css?family=Vollkorn|Work+Sans&display=swap"
          rel="stylesheet"
        />
      </div>
    </Router>
  );
}

export default App;
