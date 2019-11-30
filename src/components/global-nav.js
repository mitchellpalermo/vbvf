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

import "../css/global-nav.css";
import MenuIcon from "../images/logos/vbvf_icon.png";

const GlobalNav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="menu-bar" color="light" light expand="md">
        <NavbarBrand href="/">
          <img id="menu-bar-icon" src={MenuIcon} alt="VBVF Logo" />
        </NavbarBrand>
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
                <DropdownItem>
                  <NavLink
                    className="sub-menu"
                    href="/ministries/childrens-ministry/childrens-ministry"
                  >
                    Children's Ministry
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink
                      className="sub-menu"
                      href="/ministries/youth-ministry/youth-ministry"
                    >
                      Youth Ministry
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="sub-menu"
                    href="/ministries/small-groups/small-groups"
                  >
                    Small Groups
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="sub-menu" href="/ministries/serve">
                    Serving at VBVF
                  </NavLink>
                </DropdownItem>
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
