// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ServiceTimeDirections from "../containers/service-time-directions";
// import About from "../containers/about";
// import Ministries from "../containers/ministries";
// import SermonRedirect from "../containers/sermon-redirect";
// // import NotFound from "../containers/notfound";
// import App from "../App";
// import Template from "../containers/template";
// import TermsConditions from "./terms-conditions";
// import PrivacyPolicy from "./privacy-policy";

// export default class Routing extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <div className="page-container">
//             <Template>
//               <Switch>
//                 <Route exact path="/" component={App} />
//                 <Route
//                   path="/service-time-directions"
//                   component={ServiceTimeDirections}
//                 />
//                 <Route path="/about" component={About} />
//                 <Route path="/ministries" component={Ministries} />
//                 <Route path="/sermon-redirect" component={SermonRedirect} />
//                 <Route path="/privacy-policy" component={PrivacyPolicy} />
//                 <Route
//                   path="/terms-and-conditions"
//                   component={TermsConditions}
//                 />
//                 <Route component={NotFound} />
//               </Switch>
//             </Template>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }
