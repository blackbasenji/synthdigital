import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimpleReactLightbox from "simple-react-lightbox";
import PortfolioImageGrid from "../components/PortfolioImageGrid/PortfolioImageGrid";
import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";

import "../styles/portfolio.scss";

const Portfolio = () => {
  const [activeImgs, setActiveImgs] = useState("all");

  useEffect(() => {});

  const updateActiveImages = item => {
    setActiveImgs(item);
  };

  return (
    <Layout>
      <SEO title="Our Work" />
      <div className="portfolio">
        <Container className="hero-section transparent-hero container flexed">
          <Row>
            <Col className="content-container column centered-text">
              <h1 className="teal-text">Work</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="categories">
                <button onClick={() => updateActiveImages("all")}>All</button>
                <button onClick={() => updateActiveImages("apps")}>
                  App UI/UX
                </button>
                <button onClick={() => updateActiveImages("logos")}>
                  Identity
                </button>
                <button onClick={() => updateActiveImages("icons")}>
                  Iconography
                </button>
                <button onClick={() => updateActiveImages("websites")}>
                  Website
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <SimpleReactLightbox>
          <PortfolioImageGrid active={activeImgs} />
        </SimpleReactLightbox>
      </div>
    </Layout>
  );
};

export default Portfolio;
