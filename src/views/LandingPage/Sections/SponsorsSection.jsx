import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

import logo1 from "assets/img/sponsors/telu.png";
import logo2 from "assets/img/sponsors/ristekdikti.png";
import logo3 from "assets/img/sponsors/imv.png";
import logo4 from "assets/img/sponsors/cppbt.png";
import logo5 from "assets/img/sponsors/dishub.png";
import logo6 from "assets/img/sponsors/polantas.png";
import logo7 from "assets/img/sponsors/adwitech.png";

class SponsorsSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = "w-100";
    const gridClass = "m-auto px-4 py-2";
    return (
      <div className={classes.section + " bg-gray"}>
        <GridContainer justify="center">
          <GridItem sm={10} md={8}>
            <h2 className={classes.title + " text-white"}>Didukung oleh</h2>
            <GridContainer justify="center">
              <GridItem sm={4} md={4} className={gridClass}>
                <img src={logo1} alt="telu" className={imageClasses} />
              </GridItem>
              <GridItem sm={3} md={3} className={gridClass}>
                <img src={logo2} alt="ristekdikti" className={imageClasses} />
              </GridItem>
              <GridItem sm={4} md={4} className={gridClass}>
                <img src={logo3} alt="imv" className={imageClasses} />
              </GridItem>
              <GridItem sm={3} md={3} className={gridClass}>
                <img src={logo4} alt="cppbt" className={imageClasses} />
              </GridItem>
              <GridItem sm={3} md={3} className={gridClass}>
                <img src={logo5} alt="dishub" className={imageClasses} />
              </GridItem>
              <GridItem sm={3} md={3} className={gridClass}>
                <img src={logo6} alt="polantas" className={imageClasses} />
              </GridItem>
              <GridItem sm={3} md={3} className={gridClass}>
                <img src={logo7} alt="adwitech" className={imageClasses} />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(SponsorsSection);
