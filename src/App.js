import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuBar from "./components/menu-bar";
import Footer from "./components/footer";
import ServiceTimeDirections from "./containers/service-time-directions";
import About from "./containers/about";
import Ministries from "./containers/ministries";
import SermonRedirect from "./containers/sermon-redirect";
import PrivacyPolicy from "./components/privacy-policy";
import TermsConditions from "./components/terms-conditions";
import NotFound from "./containers/notfound";
import Template from "./containers/template";
import Beliefs from "./components/beliefs";
import OurStory from "./components/our-story";
import Leadership from "./components/leadership";
import FAQ from "./components/faq";

function App() {
  return (
    <Router>
      <div className="page-container">
        <MenuBar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route
            exact
            path="/service-time-directions"
            component={ServiceTimeDirections}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/ministries" component={Ministries} />
          <Route exact path="/sermon-redirect" component={SermonRedirect} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route
            exact
            path="/terms-and-conditions"
            component={TermsConditions}
          />
          <Route exact path="/about/our-story" component={OurStory} />
          <Route exact path="/about/beliefs" component={Beliefs} />
          <Route exact path="/about/leadership" component={Leadership} />
          <Route exact path="/about/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
