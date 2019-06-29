import React, { Component } from 'react'
import '../css/menu-bar.css';
import menu_icon from '../menu_icon.png';


export default class MenuBar extends Component {
    render() {
        return (
          <div className="menu-bar">
            <img src={menu_icon} alt="VBVF Logo" />
            <div className="menu-links">
              <a>Service Time and Directions</a>

              <a>About</a>

              <a>Ministries</a>

              <a>Events</a>

              <a>Sermons</a>

              <a>Give</a>
            </div>
          </div>
        );
    }
}
