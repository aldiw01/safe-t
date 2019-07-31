import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

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
import WorkSection from "./Sections/WorkSection.jsx";

import logo from "assets/img/logo.png";
import model from "assets/img/model.png";

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
                  Smart IoT Applications for Orderly Traffic.
                <br />
                  Safe-t is an online e-ticketing mobile app.
                  Easy to use, supported by artificial intelligence technology,
                  and can be used for everyone with legal ID card.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="#"
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-google-play" /> Google Playstore
                </Button>
              </GridItem>

              {/* <GridItem xs={12} sm={12} md={1}>
              </GridItem>
              <GridItem xs={12} sm={12} md={5}>
                <img src={model} alt="Safe-t model" className="w-100" />
              </GridItem> */}
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
