import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const MinistriesMenu = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Ministries</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Children's Ministry</DropdownItem>
        <DropdownItem>Youth Ministry</DropdownItem>
        <DropdownItem>Small Groups</DropdownItem>
        <DropdownItem>Youth Ministry</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};
export default MinistriesMenu;
