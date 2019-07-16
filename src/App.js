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
import Home from "./containers/home";
import Template from "./containers/template";

function App() {
  return (
    <Router>
      <div className="page-container">
        <MenuBar />
        <Switch>
          <Route exact path="/" component={Home} />
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
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
