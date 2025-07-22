import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import Collapsible from "react-collapsible";
import Slider from "react-slick";

import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);
  });

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
    <Layout>
      <SEO title="Home" />
      <div className="home-page">
        <Container className="hero-section transparent-hero container flexed">
          <Row>
            <Col className="content-container column centered-text">
              <h1 className="teal-text">Fractional CDO & Product Design Leadership</h1>
<p className="white-text subtext">
  Helping founders bring clarity, momentum, and polish to digital products.
</p>
<div className="cta-buttons margin-top-20">
  <a href="https://calendly.com/YOUR-CALENDLY-LINK" className="btn btn-primary margin-right">Book a Call</a>
  <a href="#how-i-work" className="btn btn-outline-light">See How I Work</a>
</div>
            </Col>
          </Row>
        </Container>
<Container className="about-logan margin-top-100" id="about">
  <Row>
    <Col md={{ span: 8, offset: 2 }} className="centered-text">
      <h5 className="uppercase">About Logan</h5>
      <p>
        I’m Logan McCoy — a Fractional Chief Design Officer and Principal Product Designer with 15+ years of experience helping early-stage teams turn ideas into launch-ready digital products.
      </p>
      <p>
        Through a blend of product strategy, UX leadership, and creative synthesis, I help teams move quickly without losing clarity.
      </p>
      <p>
        I’ve led design systems, user flows, and full product builds across AI, healthcare, fintech, and consumer tech — from 0 to 7,000+ users and beyond.
      </p>
      <p>
        When I’m not designing, I’m probably playing chess, crafting espresso, or tending to my (too many) houseplants.
      </p>
      <a href="mailto:logan@synthdigital.com" className="btn btn-outline-light margin-top-20">Let’s Talk →</a>
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
                <figcaption>EquinEdge (multiplatform UI/UX)</figcaption>
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
                We evolve existing brands, empower established brands, and
                create new brands. We accomplish this through compelling visual
                design and storytelling that expresses the unique spirit of your
                brand, enriching the lives of both businesses and consumers.
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
                <figcaption>Varo Money (branding, web design)</figcaption>
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
                <figcaption>Tu Vida (consumer mobile)</figcaption>
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
          <Row className="margin-top-160 margin-top-mobile-0 margin-bottom-200 flexed">
            <Col className="left">
              <h2>
                Enterprise experience
                <br /> at consumer-grade
              </h2>
              <p>
                We transform legacy enterprise apps into consumer-grade
                experiences, increasing efficiency, productivity and morale.{" "}
              </p>
              <p>
                The implementation of elegant and effective human-centric design
                is at the forefront of our design ethos, for both consumer and
                enterprise applications.
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
                  Callahan Roach (branding, web, mobile app)
                </figcaption>
              </figure>
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document.querySelector(".dashboard").classList.add("animate");
            }}
          />
        </Container>
<Container className="fractional-cdo-services margin-top-100" id="how-i-work">
  <Row>
    <Col className="centered-text">
      <h5 className="uppercase">Fractional CDO Services</h5>
      <p>Flexible packages for founders and product teams at any stage.</p>
    </Col>
  </Row>
  <Row className="margin-top-40">
    <Col>
      <table className="table service-tiers">
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
            <td>Advisory</td>
            <td>$2,500/mo</td>
            <td>~6–8 hrs/mo</td>
            <td>Strategy, UX review, monthly check-ins</td>
          </tr>
          <tr>
            <td>Strategic Partner</td>
            <td>$5,000/mo</td>
            <td>~12–15 hrs/mo</td>
            <td>Direction, branding, dev collaboration</td>
          </tr>
          <tr>
            <td>Fractional CDO</td>
            <td>$8–10k/mo</td>
            <td>~20–30 hrs/mo</td>
            <td>UX/UI execution, design systems, MVP oversight</td>
          </tr>
        </tbody>
      </table>
      <p className="margin-top-20">
        Not sure where to start? Try a 1–2 week Design Strategy Sprint for $2,500.
      </p>
      <div className="cta-buttons margin-top-20">
        <a href="mailto:logan@synthdigital.com" className="btn btn-outline-light margin-right">Let’s Talk</a>
        <a href="/pricing" className="btn btn-outline-light">See Detailed Pricing</a>
      </div>
    </Col>
  </Row>
</Container>

        <Container className="core-services" id="services">
          <Row className="margin-top-60">
            <Col className="centered-text">
              <h5 className="uppercase">Core Services</h5>
            </Col>
          </Row>
          <Row className="margin-top-75 margin-bottom-125 flex-col-mobile">
            <Col className="service">
              <h3>Strategy</h3>
              <ul>
                <li>UI/UX Auditing</li>
                <li>Research</li>
                <li>Brand & Product Strategy</li>
                <li>UX Consulting</li>
                <li>Testing</li>
              </ul>
            </Col>
            <Col className="service">
              <h3>Design</h3>
              <ul>
                <li>Mobile Apps</li>
                <li>Websites</li>
                <li>Branding</li>
                <li>UI/UX Design</li>
                <li>Prototyping & Testing</li>
              </ul>
            </Col>
            <Col className="service">
              <h3>Development</h3>
              <ul>
                <li>Rapid prototyping</li>
                <li>HTML/CSS/JS</li>
                <li>React/Angular</li>
                <li>iOS/Android native apps</li>
                <li>Backend Integrations</li>
              </ul>
            </Col>
            <Col className="service">
              <h3>Content</h3>
              <ul>
                <li>Copywriting</li>
                <li>Iconography</li>
                <li>Video</li>
                <li>Animation</li>
                <li>Infographics</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container className="our-process" id="process">
          <Row className="margin-top-60 margin-bottom-100">
            <Col>
              <h5 className="uppercase margin-bottom-50">our process</h5>

              <p>
                While every project is unique, and our models adaptive and
                collaborative, every digital product design partnership goes
                through these three core phases:
              </p>

              <div className="step-one">
                <Collapsible
                  className="hide-on-mobile"
                  trigger="I. Research & Discovery"
                >
                  <p>
                    At the outset of the project we consolidate all available
                    documentation and we schedule UX workshops with key
                    stakeholders and relevant teams to explore different ideas
                    and plans. From here UX designers will engage with current
                    or potential customers if possible to understand their
                    desires, expectations, affinities, problems and pain points,
                    as well as employ various techniques of market research,
                    both qualitative and quantitative.
                  </p>

                  <p>
                    At times, brands are reluctant towards conducting prior
                    research as it demands time and resources, but the failure
                    to do so will assuredly cost in the long run. Without
                    appropriate research the true scope of customer needs cannot
                    be assessed and determined. Research and discovery is the
                    very foundation and impetus with which UI/UX design
                    decisions are driven. Instead of relying on intuitions and
                    gambles, it’s best to take a practical approach, and walk
                    the extra mile to serve both the brand and customer better.
                  </p>
                </Collapsible>
                <Collapsible className="show-mobile" trigger="Research">
                  <p>
                    At the outset of the project we consolidate all available
                    documentation and we schedule UX workshops with key
                    stakeholders and relevant teams to explore different ideas
                    and plans. From here UX designers will engage with current
                    or potential customers if possible to understand their
                    desires, expectations, affinities, problems and pain points,
                    as well as employ various techniques of market research,
                    both qualitative and quantitative.
                  </p>

                  <p>
                    At times, brands are reluctant towards conducting prior
                    research as it demands time and resources, but the failure
                    to do so will assuredly cost in the long run. Without
                    appropriate research the true scope of customer needs cannot
                    be assessed and determined. Research and discovery is the
                    very foundation and impetus with which UI/UX design
                    decisions are driven. Instead of relying on intuitions and
                    gambles, it’s best to take a practical approach, and walk
                    the extra mile to serve both the brand and customer better.
                  </p>
                </Collapsible>
                <Collapsible
                  className="hide-on-mobile"
                  trigger="II. Digital Strategy & Concepting"
                >
                  <p>
                    With the research and discovery results we synthesize a
                    robust digital strategy, which in turn pilots the entire
                    design process. The digital strategy begins by exploring
                    different concepts and fine tuning key variables that will
                    define a strong strategic vertical. From here, we begin
                    concepting core elements such as information architecture
                    and overall UI direction. We finish off this phase by
                    presenting stakeholders with our concept for validation and
                    approval.
                  </p>
                </Collapsible>
                <Collapsible className="show-mobile" trigger="Digital Strategy">
                  <p>
                    With the research and discovery results we synthesize a
                    robust digital strategy, which in turn pilots the entire
                    design process. The digital strategy begins by exploring
                    different concepts and fine tuning key variables that will
                    define a strong strategic vertical. From here, we begin
                    concepting core elements such as information architecture
                    and overall UI direction. We finish off this phase by
                    presenting stakeholders with our concept for validation and
                    approval.
                  </p>
                </Collapsible>
                <Collapsible
                  trigger="III. UI/UX Design"
                  className="hide-on-mobile"
                >
                  <p>
                    We kickoff this phase by hitting the ground running with our
                    freshly minted digital strategy and design concept. Various
                    activities are performed including wireframing, user flow
                    mapping, UI design, and prototyping. We utilize a
                    streamlined process of tools such as Zeplin to hand off our
                    assets to developers. A comprehensive brand style guide,
                    which includes component libraries, guidelines and user
                    maps, is also developed at this stage.
                  </p>
                </Collapsible>
                <Collapsible trigger="UI/UX Design" className="show-mobile">
                  <p>
                    We kickoff this phase by hitting the ground running with our
                    freshly minted digital strategy and design concept. Various
                    activities are performed including wireframing, user flow
                    mapping, UI design, and prototyping. We utilize a
                    streamlined process of tools such as Zeplin to hand off our
                    assets to developers. A comprehensive brand style guide,
                    which includes component libraries, guidelines and user
                    maps, is also developed at this stage.
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
                    “Working with Synth was very easy. They immediately
                    understood our business requirements, translated them into
                    specs, and got the work done quickly. I would definitely
                    work with them again!”
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
                    “I’ve worked with multiple design agencies, but none like
                    Synth. Their work exceeds expectations.”
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
                    “Logan at Synth is a designer with a motivation to solve
                    complex challenges. He came to the table as a thought
                    partner rather than just a doer that blindly follows orders.
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
      </div>
    </Layout>
  );
};

export default IndexPage;
