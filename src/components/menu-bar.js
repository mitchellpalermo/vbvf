// import React, { useState } from "react";
// import "../css/menu-bar.css";
// import { Link } from "react-router-dom";
// import MenuIcon from "../images/logos/vbvf_icon.png";
// import MinistriesMenu from "./ministries-menu";
// function MenuBar() {
//   const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);

//   const [showMinistryMenu, setShowMinistryMenu] = useState(false);

//   return (
//     <div className="menu-bar">
//       <div className="full-menu">
//         <Link to="/">
//           <img src={MenuIcon} alt="VBVF Logo" />
//         </Link>
//         <ul className="menu-links">
//           <li>
//             <Link to="/service-time-directions">Service Time & Location</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <a
//               href="https://vbvf.churchcenter.com/groups/bible-studies"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Bible Studies
//             </a>
//           </li>
//           <li>
//             <MinistriesMenu />
//           </li>
//           <li>
//             <a
//               href="https://vbvf.churchcenter.com/registrations/events"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Events
//             </a>
//           </li>
//           <li>
//             <Link to="/sermon-redirect">Sermons</Link>
//           </li>
//           <li>
//             <a
//               href="https://vbvf.churchcenter.com/giving"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Give
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="mobile-menu">
//         <nav role="navigation">
//           <div className="mobile-menu-bar">
//             <Link to="/">
//               <img
//                 className="mobile-menu-icon"
//                 src={MenuIcon}
//                 alt="VBVF Logo"
//                 onClick={() => {
//                   setShowCollapsedMenu(!showCollapsedMenu);
//                 }}
//               />
//             </Link>
//             <div
//               id="menuToggle"
//               onClick={() => {
//                 setShowCollapsedMenu(!showCollapsedMenu);
//               }}
//             >
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//           <div
//             id="expanded-menu"
//             className={`${showCollapsedMenu ? "show" : "hide"}`}
//           >
//             <ul>
//               <li>
//                 <Link
//                   to="/service-time-directions"
//                   onClick={() => {
//                     setShowCollapsedMenu(!showCollapsedMenu);
//                   }}
//                 >
//                   Service Time & Location
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   onClick={() => {
//                     setShowCollapsedMenu(!showCollapsedMenu);
//                   }}
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/ministries"
//                   onClick={() => {
//                     setShowCollapsedMenu(!showCollapsedMenu);
//                   }}
//                 >
//                   Ministries
//                 </Link>
//               </li>
//               <li>
//                 <a
//                   href="https://vbvf.churchcenter.com/registrations/events"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Events
//                 </a>
//               </li>
//               <li>
//                 <Link to="/sermon-redirect">Sermons</Link>
//               </li>
//               <li>
//                 <a
//                   href="https://vbvf.churchcenter.com/giving"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Give
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default MenuBar;

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const GlobalNav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">VBVF</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/service-time-directions/">
                Service Times & Directions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ministries
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Children's Ministry</DropdownItem>
                <DropdownItem>Youth Ministry</DropdownItem>
                <DropdownItem>Small Groups</DropdownItem>
                <DropdownItem>Serving at VBVF</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://vbvf.churchcenter.com/registrations/events">
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://vbvf.churchcenter.com/giving">
                Give
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sermon-redirect">Sermons</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default GlobalNav;
