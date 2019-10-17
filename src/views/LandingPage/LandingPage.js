import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import { Link } from "react-router-dom";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// import { Button } from 'reactstrap';

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import DemoSection from "./Sections/DemoSection";
import GuideSection from "./Sections/GuideSection";
import AboutProductSection from "./Sections/AboutProductSection";
import TimelineSection from "./Sections/TimelineSection";
import AboutUsSection from "./Sections/AboutUsSection";
import SponsorsSection from "./Sections/SponsorsSection";

import bgImage from "assets/img/bg.png";
import logo from "assets/img/logo.png";

const dashboardRoutes = ["home"];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={logo}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container} id="home">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Safe-t</h1>
                <h4>
                  <q>Lets be smart people for your safety and others</q>
                  <br />
                  Smart application untuk ketertiban lalu lintas berbasis artificial intelligence.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://play.google.com/store/apps/details?id=com.imv.www.safe_t"
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-google-play" /> Google Playstore
                </Button>
                <br />
                <Button
                  color="warning"
                  size="lg"
                  href="/violation"
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Link to="/violation"> </Link> */}
                  <i className="fab fa-car-crash" /> Violation Data
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)} style={{ backgroundImage: "url('" + bgImage + "')" }}>
          <div className={classes.container} style={{ color: "initial" }}>
            <ProductSection />
            <GuideSection />
            <DemoSection />
            <AboutProductSection />
            <TimelineSection />
            <TeamSection />
            <AboutUsSection />
          </div>
          <SponsorsSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
