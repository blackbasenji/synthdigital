import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import Collapsible from "react-collapsible";
import Slider from "react-slick";

import PricingModal from '../components/PricingModal';
import '../components/PricingModal.css';
import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);
  });

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
  };

  if (isMobile) {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  }

  return (
    <div className="home-page">
      <Layout>
        <SEO title="Home" />
        <div>
        <Container className="hero-section transparent-hero container flexed">
          <Row>
            <Col className="content-container column centered-text">
              <h1 className="teal-text">
                Product design leadership<br />
                <span className="no-wrap">for startups &amp; founders</span>
              </h1>
              <p className="white-text subtext hero-lead-text">
                Fractional Chief Design Officer blending strategy, UX, and systems thinking to launch meaningful digital products.
              </p>
      <div className="hero-buttons">
        <a href="https://calendly.com/YOUR-CALENDLY-LINK" className="btn coral-btn">Book a Call</a>
        <a href="#process" className="btn underline-link">See How I Work</a>
      </div>
            </Col>
          </Row>
        </Container>
        <Container className="logos-section">
          <Row className="align-vertical">
            <div>
              <img
                src={require("../svgs/varo-bank-logo-1.svg").default}
                alt="Varo Logo"
                className="logo one height-34-mobile"
              />
            </div>
            <div>
              <img
                src={require("../svgs/group-17.svg").default}
                alt="Equinedge Logo"
                className="logo two hide-on-mobile"
              />
              <img
                src={require("../svgs/group-225.svg").default}
                alt="UM Logo"
                className="logo five show-mobile height-34-mobile"
              />
            </div>
            <div>
              <img
                src={require("../svgs/group-5.svg").default}
                alt="CR Logo"
                className="logo three  hide-on-mobile height-63-mobile"
              />
              <img
                src={require("../svgs/group.svg").default}
                alt="Hospital Integration Logo"
                className="logo four show-mobile"
              />
            </div>
            <div>
              <img
                src={require("../svgs/group.svg").default}
                alt="Hospital Integration Logo"
                className="logo four hide-on-mobile"
              />
              <img
                src={require("../svgs/group-5.svg").default}
                alt="CR Logo"
                className="logo three height-63-mobile show-mobile"
              />
            </div>
            <div>
              <img
                src={require("../svgs/group-225.svg").default}
                alt="UM Logo"
                className="logo five hide-on-mobile"
              />
              <img
                src={require("../svgs/lion-cut.svg").default}
                alt="Equinedge Logo"
                className="logo two show-mobile height-60"
              />
            </div>
            <div>
              <img
                src={require("../svgs/group-7.svg").default}
                alt="TU Logo"
                className="logo six"
              />
            </div>
          </Row>
          <Waypoint
            onEnter={() => {
              document.querySelector(".logos-section").classList.add("animate");
            }}
          />
        </Container>
<Container className="about-logan margin-top-100" id="about">
  <Row>
    <Col md={{ span: 8, offset: 2 }} className="centered-text">
      <h5 className="uppercase">About Logan</h5>
      <p>
        I’m Logan McCoy — a Principal Product Designer and strategic partner to early-stage teams. I often step into a Fractional CDO role to help founders launch products with clarity and speed.
      </p>
      <p>
  For over a decade, I’ve worked closely with startups and founders — helping turn scrappy ideas into scalable, user-loved products.
</p>
      <p>
        Through a blend of product strategy, UX leadership, and creative synthesis, I help teams move quickly without losing clarity.<br />
        <span className="no-wrap">A fast, cohesive product experience...</span>
      </p>
      <p>
        I’ve led design systems, user flows, and full product builds across AI, healthcare, fintech, and consumer tech — from 0 to 7,000+ users and beyond.
      </p>
      <p>
        When I’m not designing, I’m probably playing chess, crafting espresso, or tending to my (too many) houseplants.
      </p>
      <a href="mailto:logan@synthdigital.com" className="btn coral-btn homepage-cta-btn margin-top-20">Let’s Talk →</a>
    </Col>
  </Row>
</Container>

        <Container className="our-focus" id="what-we-do">
          <Row>
            <Col className="centered-text">
              <h5 className="margin-top-100">What I Help Build</h5>
            </Col>
          </Row>
          <Row className="margin-top-125 flexed">
            <Col className="left">
              <h2>
                Digital experiences
                <br /> that deliver clarity & momentum
              </h2>
    <p>
      Every startup needs strong execution and clear direction. I step in as a strategic partner — not just to design, but to align product, UX, and brand into one cohesive vision. From early-stage concepts to mature platforms, these projects show how clarity and creative leadership can drive real momentum.
    </p>
            </Col>

            <Col className="right">
              <figure className="phone-img">
                <img
                  src={
                    require("../images/screen-shot-2020-10-08-at-4-16-35-pm.png")
                      .default
                  }
                  srcSet={`${
                    require("../images/screen-shot-2020-10-08-at-4-16-35-pm.png")
                      .default
                  } 300w, ${
                    require("../images/screen-shot-2020-10-08-at-4-16-35-pm@2x.png")
                      .default
                  } 768w, ${
                    require("../images/screen-shot-2020-10-08-at-4-16-35-pm@3x.png")
                      .default
                  } 1280w`}
                  alt="mobile-app"
                />
                <figcaption>EquinEdge (cross-platform product design, UI/UX)</figcaption>
              </figure>
            </Col>
            <Waypoint
              onEnter={() => {
                document.querySelector(".phone-img").classList.add("animate");
              }}
            />
          </Row>

          <Row className="margin-top-50">
            <Col className="right-align left">
              <figure className="dog-logo">
                <img
                  src={
                    require("../images/screen-shot-2020-10-09-at-12-32-02-pm.png")
                      .default
                  }
                  srcSet={`${
                    require("../images/screen-shot-2020-10-09-at-12-32-02-pm.png")
                      .default
                  } 300w, ${
                    require("../images/screen-shot-2020-10-09-at-12-32-02-pm.png")
                      .default
                  } 768w, ${
                    require("../images/screen-shot-2020-10-09-at-12-32-02-pm@3x.png")
                      .default
                  } 1280w`}
                  alt="dog logo"
                />
                <figcaption className="left-align">
                  GoBone (brand/identity)
                </figcaption>
              </figure>
            </Col>

            <Col className="margin-top-140 right">
              <h2>
                Branding that engages
                <br /> and empowers
              </h2>
              <p>
                I evolve existing brands, empower established ones, and create new identities. I do this through compelling visual design and storytelling that captures the unique spirit of your brand, enriching the lives of both businesses and their customers.
              </p>
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document.querySelector(".dog-logo").classList.add("animate");
            }}
          />
          <Row className="margin-top-110">
            <Col className="left">
              <figure className="website-design margin-bottom-mobile-0 hide-on-mobile">
                <img
                  src={
                    require("../images/screen-shot-2020-10-22-at-3-45-29-pm.png")
                      .default
                  }
                  srcSet={`${
                    require("../images/screen-shot-2020-10-22-at-3-45-29-pm.png")
                      .default
                  } 300w, ${
                    require("../images/screen-shot-2020-10-22-at-3-45-29-pm@2x.png")
                      .default
                  } 768w, ${
                    require("../images/screen-shot-2020-10-22-at-3-45-29-pm@3x.png")
                      .default
                  } 1280w`}
                  alt="website design"
                />
                <figcaption>Varo Money (brand identity, responsive web design, UX/UI)</figcaption>
              </figure>
            </Col>
            <Col className="margin-top-160 right">
              <figure className="custom-icon hide-on-mobile">
                <img
                  src={require("../images/group-2.png").default}
                  srcSet={`${require("../images/group-2.png").default} 300w, ${
                    require("../images/group-2@2x.png").default
                  } 768w, ${require("../images/group-2@3x.png").default} 1280w`}
                  alt="custom icon"
                />
                <figcaption>Tu Vida (consumer mobile, UX/UI, workshops)</figcaption>
              </figure>
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".website-design")
                .classList.add("animate");
            }}
          />
          <Waypoint
            onEnter={() => {
              document.querySelector(".custom-icon").classList.add("animate");
            }}
          />
          <Row className="margin-top-160 margin-top-mobile-0 margin-bottom-100 flexed">
            <Col className="left">
              <h2>
                Enterprise experience
                <br /> at consumer-grade
              </h2>
              <p>
                I transform legacy enterprise apps into consumer-grade experiences, increasing efficiency, productivity, and morale.
              </p>
              <p>
                Human-centric design is at the core of my approach—elegant, effective, and tailored for both consumer and enterprise applications.
              </p>
            </Col>
            <Col className="right">
              <figure className="dashboard margin-top-75">
                <img
                  src={
                    require("../images/screen-shot-2020-10-22-at-3-50-01-pm.png")
                      .default
                  }
                  srcSet={`${
                    require("../images/screen-shot-2020-10-22-at-3-50-01-pm.png")
                      .default
                  } 300w, ${
                    require("../images/screen-shot-2020-10-22-at-3-50-01-pm@2x.png")
                      .default
                  } 768w, ${
                    require("../images/screen-shot-2020-10-22-at-3-50-01-pm@3x.png")
                      .default
                  } 1280w`}
                  alt="Dashboard"
                />
                <figcaption>
                  Callahan Roach (branding, web, UX/UI mobile app)
                </figcaption>
              </figure>
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document.querySelector(".dashboard").classList.add("animate");
            }}
          />
          {/* Case Study Archive Callout: moved below the flexed row */}
          <div className="row margin-top-60 margin-bottom-100 center-text">
            <p>
              <span className="no-wrap-text">Want to dive deeper into the UX and product design behind my work?</span><br />
              I keep an current and curated case study archive at <a href="https://loganmccoy.design" target="_blank">loganmccoy.design</a>.
            </p>
            <a href="https://loganmccoy.design" className="btn coral-btn">See More Case Studies →</a>
          </div>
        </Container>
<Container className="fractional-cdo-services margin-top-100" id="how-i-work">
  <Row>
    <Col className="centered-text">
      <h3 className="fractional-cdo-h3 margin-bottom-25">Fractional CDO Services</h3>
      <p>Flexible packages for founders and product teams at any stage.</p>
    </Col>
  </Row>
  <Row className="margin-top-0">
    <Col>
      <div className="cdo-table-wrapper">
        <table className="table service-tiers cdo-pricing-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Rate</th>
              <th>Time</th>
              <th>What's Included</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Tier"><strong>Advisory</strong></td>
              <td data-label="Rate">$2,500/mo</td>
              <td data-label="Time">~6–8 hrs/mo</td>
              <td data-label="What's Included">Strategy, UX review, monthly check-ins</td>
            </tr>
            <tr>
              <td data-label="Tier"><strong>Strategic Partner</strong></td>
              <td data-label="Rate">$5,000/mo</td>
              <td data-label="Time">~12–15 hrs/mo</td>
              <td data-label="What's Included">Direction, branding, dev collaboration</td>
            </tr>
            <tr>
              <td data-label="Tier"><strong>Fractional CDO</strong></td>
              <td data-label="Rate">$8–10k/mo</td>
              <td data-label="Time">~20–30 hrs/mo</td>
              <td data-label="What's Included">UX/UI execution, design systems, MVP oversight</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="margin-top-40 margin-bottom-30 about-logan-typography centered-text">
        <strong>Not sure where to start?</strong> Book a 1–2 week Design Strategy Sprint for $2,000 — a fast,<br /> focused way to align on vision, uncover quick wins, and build product momentum.
      </p>
      <div className="pricing-buttons">
        <a href="mailto:logan@synthdigital.com" className="btn coral-btn">Let’s Talk</a>
        <a href="#" className="btn underline-link" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
  See More Detailed Pricing
</a>
      </div>
      <PricingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </Col>
  </Row>
</Container>

        <Container className="core-services" id="services">
          <Row className="margin-top-60">
            <Col className="centered-text">
              <h5 className="uppercase">Core Services</h5>
            </Col>
          </Row>
          <Row className="margin-top-75 margin-bottom-50 flex-col-mobile">
            <Col className="service">
              <h3>Strategy & UX Leadership</h3>
              <ul>
                <li>UX Roadmapping & Prioritization</li>
                <li>GTM Alignment & Feature Planning</li>
                <li>Design Org & Process Advising</li>
                <li>Research Synthesis & Opportunity Mapping</li>
              </ul>
            </Col>
            <Col className="service">
              <h3>Systems & Experience Design</h3>
              <ul>
                <li>End-to-End UX for MVPs & 0→1 Products</li>
                <li>Design System Architecture & Governance</li>
                <li>Multi-platform UX (Mobile, Web, Dashboard)</li>
                <li>Rapid Prototyping & Concept Testing</li>
              </ul>
            </Col>
            <Col className="service">
              <h3>Brand Identity & Positioning</h3>
              <ul>
                <li>Visual Identity & Brand Systems</li>
                <li>Product-Market Fit Messaging</li>
                <li>UI Consistency & Brand-Product Harmony</li>
              </ul>
            </Col>
            <Col className="service">
              <h3>Team Leadership & Delivery</h3>
              <ul>
                <li>Cross-functional Design Leadership</li>
                <li>Design Hiring & Mentorship</li>
                <li>Stakeholder Communication & Buy-in</li>
                <li>Dev Handoff & QA Partnership</li>
              </ul>
            </Col>
          </Row>
          <Row className="centered-text margin-bottom-125">
            <Col>
              <h3 className="also-capable-subhead margin-top-40">Supporting Expertise</h3>
              <ul className="also-capable-of-list ">
                <li>UI Design & Interaction Patterns</li>
                <li>Webflow & Front-end Prototypes</li>
                <li>Motion, Icons, and Microcopy</li>
                <li>Vendor & Dev Collaboration</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container className="our-process" id="process">
          <Row className="margin-top-60 margin-bottom-100">
            <Col>
              <h5 className="uppercase margin-bottom-50">my process</h5>

              <p style={{ padding: "0 20px" }}>
                While every project is unique and my approach is adaptive and
                collaborative, each digital product design engagement moves
                through these phases:
              </p>

              <div className="step-one">
                <Collapsible
                  className="hide-on-mobile"
                  trigger={<h4><span className="phase-label">1  </span> Strategic Kickoff</h4>}
                >
                  <p>
                    Start with a strategic download to align on vision, goals, and constraints. I absorb context fast and help clarify the path ahead; so I can steer the work with confidence from day one.
                  </p>
                </Collapsible>
                <Collapsible
                  className="show-mobile"
                  trigger={<h4><span className="phase-label">1  </span> Strategic Kickoff</h4>}
                >
                  <p>
                    Start with a strategic download to align on vision, goals, and constraints. I absorb context fast and help clarify the path ahead; so I can steer the work with confidence from day one.
                  </p>
                </Collapsible>
                <Collapsible
                  className="hide-on-mobile"
                  trigger={<h4><span className="phase-label">2  </span> Research & Insight Mapping</h4>}
                >
                  <p>
                    Whether it's reviewing existing research or uncovering new insights, I synthesize what matters. The focus is turning data into opportunities; and flagging risks before they become blockers.
                  </p>
                </Collapsible>
                <Collapsible
                  className="show-mobile"
                  trigger={<h4><span className="phase-label">2  </span> Research & Insight Mapping</h4>}
                >
                  <p>
                    Whether it's reviewing existing research or uncovering new insights, I synthesize what matters. The focus is turning data into opportunities; and flagging risks before they become blockers.
                  </p>
                </Collapsible>
                <Collapsible
                  className="hide-on-mobile"
                  trigger={<h4><span className="phase-label">3  </span> Design & Direction</h4>}
                >
                  <p>
                    From early frameworks to final UI, I design with clarity and scale in mind. I lead product direction, manage systems, and work alongside engineering to keep things moving without bottlenecks.
                  </p>
                </Collapsible>
                <Collapsible
                  className="show-mobile"
                  trigger={<h4><span className="phase-label">3  </span> Design & Direction</h4>}
                >
                  <p>
                    From early frameworks to final UI, I design with clarity and scale in mind. I lead product direction, manage systems, and work alongside engineering to keep things moving without bottlenecks.
                  </p>
                </Collapsible>
                <Collapsible
                  className="hide-on-mobile"
                  trigger={<h4><span className="phase-label">4  </span> Refinement & Launch Readiness</h4>}
                >
                  <p>
                    Once the direction is clear, I polish the experience, validate with users or stakeholders, and ensure the product is ready for release. I also equip teams with what they need to evolve the work post-launch.
                  </p>
                </Collapsible>
                <Collapsible
                  className="show-mobile"
                  trigger={<h4><span className="phase-label">4  </span> Refinement & Launch Readiness</h4>}
                >
                  <p>
                    Once the direction is clear, I polish the experience, validate with users or stakeholders, and ensure the product is ready for release. I also equip teams with what they need to evolve the work post-launch.
                  </p>
                </Collapsible>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="testimonies" id="clients">
          <Row className="centered-text margin-top-50">
            <Col>
              <h5 className="margin-bottom-50">CLIENTS</h5>
            </Col>
          </Row>
          <div className="margin-bottom-100">
            <Slider {...settings}>
              <div>
                <div className="testimoni">
                  <p>
                    “Working with Logan was very easy. He immediately
                    understood my business requirements, translated them into
                    specs, and got the work done quickly. I would definitely
                    work with him again!”
                  </p>
                  <cite>
                    <span className="no-break">
                      Roger Van Duinen, Co-Founder
                    </span>
                    <br /> Varo Money
                  </cite>
                </div>
              </div>
              <div>
                <div className="testimoni">
                  <p>
                    “I’ve worked with multiple designers and agencies, but none like
                    Logan. His work exceeds expectations.”
                  </p>
                  <cite>
                    Jeffrey Scott Smith, Founder
                    <br /> Hospital Integration Inc.
                  </cite>
                </div>
              </div>
              <div>
                <div className="testimoni">
                  <p>
                    “Logan is a designer with a motivation to solve
                    complex challenges. He came to the table as a thought
                    partner rather than just a doer who blindly follows orders.
                    He brought not just excellent multi-platform UX design, but
                    all-around great ideas.”
                  </p>
                  <cite>
                    Scott McKeever, Founder & CEO
                    <br /> EquinEdge
                  </cite>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
