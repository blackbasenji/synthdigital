import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import { lazyload } from "react-lazyload";

import data from "../../data/portfolio-data.json";
import "./PortfolioImageGrid.scss";

const PortfolioImageGrid = ({ active }) => {
  const [currentlyDisplaying, setCurrentlyDisplaying] = useState(active);

  useEffect(() => {
    setCurrentlyDisplaying(active);
    changeShownImages(active);
  });

  const changeShownImages = (active) => {
    const appImages = document.querySelectorAll(".apps-container img");
    const appContainer = document.querySelector(".apps-container");
    const appTitle = document.getElementById("apps");

    const logoImages = document.querySelectorAll(".logos img");
    const logoContainer = document.querySelector(".logos");
    const logosTitle = document.getElementById("logos");

    const iconImages = document.querySelectorAll(".icons-section img");
    const iconsContainer = document.querySelector(".icons-section");
    const iconsTitle = document.getElementById("icons");

    const websiteImages = document.querySelectorAll(".website-container img");
    const websiteContainer = document.querySelector(".website-container");
    const websiteTitle = document.getElementById("website");

    const allImages = document.querySelectorAll(".portfolio-grid img");
    const allContainers = document.querySelectorAll(".img-container");
    const allTitles = document.querySelectorAll(".category-title");
    hideAll();
    setTimeout(() => {
      if (active === "all") {
        allImages.forEach((img) => {
          img.classList.remove("hidden");
        });
        allContainers.forEach((title) => {
          title.classList.remove("hidden");
        });
        allTitles.forEach((title) => {
          title.classList.remove("hidden");
        });
      } else if (active === "apps") {
        appImages.forEach((img) => {
          img.classList.remove("hidden");
        });
        appContainer.classList.remove("hidden");
        appTitle.classList.remove("hidden");
      } else if (active === "logos") {
        logoImages.forEach((img) => {
          img.classList.remove("hidden");
        });
        logoContainer.classList.remove("hidden");
        logosTitle.classList.remove("hidden");
      } else if (active === "icons") {
        iconImages.forEach((img) => {
          img.classList.remove("hidden");
        });
        iconsContainer.classList.remove("hidden");
        iconsTitle.classList.remove("hidden");
      } else if (active === "websites") {
        websiteImages.forEach((img) => {
          img.classList.remove("hidden");
        });
        websiteContainer.classList.remove("hidden");
        websiteTitle.classList.remove("hidden");
      }
    }, 500);
  };

  const hideAll = () => {
    const allImages = document.querySelectorAll(".portfolio-grid img");
    const allContainers = document.querySelectorAll(".img-container");
    const allTitles = document.querySelectorAll(".category-title");

    allImages.forEach((img) => {
      img.classList.add("hidden");
    });
    allContainers.forEach((container) => {
      container.classList.add("hidden");
    });
    allTitles.forEach((title) => {
      title.classList.add("hidden");
    });
  };

  const options = {
    settings: {
      disableWheelControls: true,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  return (
    <Container className="portfolio-grid">
      <SRLWrapper options={options}>
        <h5 id="apps" className="category-title">
          Apps UI/UX
        </h5>
        <div className="apps-container img-container">
          {data.map((img, index) => {
            if (img.category === "app") {
              return (
                <img
                  src={
                    require("../../images/portfolio-images" + img.url).default
                  }
                  alt={img.altText}
                  class={img.category}
                />
              );
            }
          })}
        </div>
        <h5 className="margin-top-50 category-title" id="logos">
          Identity
        </h5>
        <div className="logos img-container">
          {data.map((img, index) => {
            if (img.category === "logo") {
              return (
                <img
                  src={
                    require("../../images/portfolio-images" + img.url).default
                  }
                  alt={img.altText}
                  class={img.category}
                />
              );
            }
          })}
        </div>
        <h5 className="margin-top-50 category-title" id="icons">
          Iconography
        </h5>
        <div className="icons-section img-container">
          {data.map((img, index) => {
            if (img.category === "icons") {
              return (
                <img
                  src={
                    require("../../images/portfolio-images" + img.url).default
                  }
                  alt={img.altText}
                  class={img.category}
                />
              );
            }
          })}
        </div>
        <h5 className="margin-top-50 category-title" id="website">
          Websites
        </h5>
        <div className="website-container img-container">
          {data.map((img, index) => {
            if (img.category === "website") {
              return (
                <img
                  src={
                    require("../../images/portfolio-images" + img.url).default
                  }
                  alt={img.altText}
                  class={img.category}
                />
              );
            }
          })}
        </div>
      </SRLWrapper>
    </Container>
  );
};

export default PortfolioImageGrid;
