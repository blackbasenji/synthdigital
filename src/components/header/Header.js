import PropTypes from "prop-types";
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import BurgerAnimation from "../BurgerAnimation/BurgerAnimation";
import Burger from "../hamburger_menu/HamburgerMenu";

const Header = ({ siteTitle, opaque, headerVersion }) => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (!opaque) {
        if (window.scrollY === 0) {
          document.querySelector("header").classList.remove("end-transparency");
        } else {
          document.querySelector("header").classList.add("end-transparency");
        }
      }
    });

    document
      .querySelector(".bm-burger-button button")
      .setAttribute("id", "burger-btn");
  });

  const [isActive, setIsActive] = useState(false);

  const setClass = (state) => {
    if (typeof window === "undefined" || !window.document) {
      return;
    } else {
      if (state && document.querySelector(".opening")) {
        document.querySelector(".opening").classList.add("open");
        document.querySelector(".first-logo").classList.add("open");
      } else if (document.querySelector(".opening")) {
        document.querySelector(".opening").classList.remove("open");
        document.querySelector(".first-logo").classList.remove("open");
      }
    }
  };

  const toggleButton = useCallback(() => {
    document.getElementById("burger-btn").click();
    setIsActive((prevState) => !prevState);
  }, []);

  setClass(isActive);

  return (
    <header
      className={`fixed ${opaque ? "end-transparency" : ""}`}
      style={{
        fontFamily: "Poppins",
        textTransform: "uppercase",
      }}
    >
      <Helmet>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2KEWZFWKWP"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-2KEWZFWKWP')`}
        </script>
      </Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/wzs4klt.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
      />
      <nav className="mainHeader navbar" role="navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              className="logo first-logo"
              src={require("../../svgs/logo.svg").default}
              alt="Synth Digital Logo white"
            />
            <img
              className="logo second-logo"
              src={require("../../svgs/group-12.svg").default}
              alt="Synth Digital Favicon"
            />
          </Link>
          <BurgerAnimation isActive={isActive} toggleButton={toggleButton} />
          <Burger isActive={isActive} toggleButton={toggleButton} />
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
