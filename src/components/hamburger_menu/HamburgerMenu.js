import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import "./HamburgerMenu.scss";

export default class Burger extends React.Component {
  constructor(props) {
    super(props);
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const { isActive } = this.props;

    return (
      <Menu right className="navbar-burger" isOpen={isActive}>
        <div>
          <Link
            id="about"
            className="menu-item"
            to="/#what-we-do"
            onClick={() => {
              this.props.toggleButton();
            }}
          >
            About
          </Link>
          <Link
            className="menu-item"
            to="/#services"
            onClick={() => {
              this.props.toggleButton();
            }}
          >
            Services
          </Link>
          <Link
            className="menu-item"
            to="/#process"
            onClick={() => {
              this.props.toggleButton();
            }}
          >
            Process
          </Link>
        </div>
        <div className="right-items">
          <Link className="menu-item" to="/portfolio">
            Work
          </Link>
          <Link
            className="menu-item"
            to="/#contact"
            onClick={() => {
              this.props.toggleButton();
            }}
          >
            Contact
          </Link>
        </div>
        {/* <Link id="portfolio" className="menu-item" to="/Blog">
          Blog
        </Link> */}
        <div></div>
      </Menu>
    );
  }
}
