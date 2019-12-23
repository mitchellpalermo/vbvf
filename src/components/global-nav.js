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
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import "../css/global-nav.css";
import VBVFLogo from "../images/logos/vbvf_logo.png";

const GlobalNav = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const modalToggle = () => setModal(!modal);

  function mapsSelector() {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPad") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    ) {
      window.open(
        "http://maps.apple.com/?q=Verse+By+Verse+Fellowship"

        //maps.google.com/maps/place/Verse+By+Verse+Fellowship/@29.5490497,-98.4836892&amp;ll=&amp;destination=Verse+By+Verse+Fellowship"
      );
    } else {
      /* else use Google */
      window.open(
        "https://www.google.com/maps/dir/?api=1&destination=Verse+by+verse+fellowship"
      );
    }
  }

  return (
    <div>
      <Navbar className="menu-bar" color="light" light expand="md">
        <NavbarBrand href="/">
          <img id="menu-bar-icon" src={VBVFLogo} alt="VBVF Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={modalToggle}>
                Service Times & Directions
              </NavLink>
              <Modal isOpen={modal} toggle={modalToggle}>
                <ModalHeader toggle={modalToggle}>
                  Service Times & Directions
                </ModalHeader>
                <ModalBody>
                  <div className="service-time-modal">
                    <div>
                      <h2>Weekend Services</h2>
                      <p>Saturday - 5:30pm</p>
                      <p>Sunday - 10:30am</p>
                    </div>
                    <div>
                      <h2>Mid-Week Studies</h2>
                      <p>Tuesday - 7:00pm</p>
                      <p>Women's Bible Study Tuesday - 10:00am</p>
                    </div>
                    <div>
                      <h2>Location</h2>
                      <p>531 E Nakoma St. San Antonio, TX 78216</p>
                      <Button outline color="dark" onClick={mapsSelector}>
                        Open in Maps
                      </Button>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button outline color="dark" onClick={modalToggle}>
                    Close
                  </Button>{" "}
                </ModalFooter>
              </Modal>
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
                    href="/ministries/childrens-ministry"
                  >
                    Children's Ministry
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink
                      className="sub-menu"
                      href="/ministries/youth-ministry"
                    >
                      Youth Ministry
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="sub-menu" href="/ministries/small-groups">
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
