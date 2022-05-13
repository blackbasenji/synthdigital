import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import "./HamburgerMenu.scss";

export default class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  showSettings(event) {
    event.preventDefault();
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  render() {
    return (
      <Menu
        right
        className="navbar-burger"
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <div>
          <Link
            id="about"
            className="menu-item"
            to="/#what-we-do"
            onClick={() => {
              this.closeMenu();
              this.props.toggleButton();
            }}
          >
            About
          </Link>
          <Link
            className="menu-item"
            to="/#services"
            onClick={() => {
              this.closeMenu();
              this.props.toggleButton();
            }}
          >
            Services
          </Link>
          <Link
            className="menu-item"
            to="/#process"
            onClick={() => {
              this.closeMenu();
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
              this.closeMenu();
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
