import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import ConnectPage from "./containers/connect-page";
import About from "./containers/about";
import StudyAggregator from "./containers/study-aggregator";
import SermonRedirect from "./containers/sermon-redirect";
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-container">
        <GlobalNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/connect" component={ConnectPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/bible-studies" component={StudyAggregator} />
          <Route path="/study" render={(props) => <StudyPage {...props} />} />
          <Route exact path="/sermon-redirect" component={SermonRedirect} />
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
            path="/ministries/small-groups"
            component={SmallGroups}
          />
          <Route exact path="/ministries/serve" component={Serve} />
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
