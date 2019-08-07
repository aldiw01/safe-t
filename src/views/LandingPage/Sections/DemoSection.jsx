import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import demoStyle from "assets/jss/material-kit-react/views/landingPageSections/demoStyle.jsx";

import browse from "assets/img/demo/browse.png";
import capture from "assets/img/demo/capture.png";
import manual from "assets/img/demo/manual.png";
import report from "assets/img/demo/report.png";
import reward from "assets/img/demo/reward.png";

// import hp1 from "assets/img/demo/hp1.png";
// import hp2 from "assets/img/demo/hp2.png";
import hp3 from "assets/img/demo/hp3.png";
import hp4 from "assets/img/demo/hp4.png";
import hp5 from "assets/img/demo/hp5.png";
import hp6 from "assets/img/demo/hp6.png";
import hp7 from "assets/img/demo/hp7.png";

class DemoSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Demo Aplikasi</h2>
            <h5 className={classes.description}>
              Untuk pengalaman lalu lintas yang lebih baik.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer justify="center" style={{ textAlign: "left" }}>
            <GridItem xs={10} sm={12} md={8}>
              <NavPills
                color="info"
                tabs={[
                  {
                    tabButton: "Browse",
                    tabIcon: browse,
                    tabContent: (
                      <GridContainer className="m-auto">
                        <GridItem xs={12} sm={12} md={7} className="m-auto">
                          <h5>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                              </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed convergence
                              without revolutionary ROI. Collaboratively
                              administrate empowered markets via plug-and-play
                              networks. Dynamically procrastinate B2C users after
                              installed base benefits.
                              </p>
                          </h5>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img src={hp3} alt="Capture feature" className="w-100" />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Capture",
                    tabIcon: capture,
                    tabContent: (
                      <GridContainer className="m-auto">
                        <GridItem xs={12} sm={12} md={7} className="m-auto">
                          <h5>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                          </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed convergence
                              without revolutionary ROI. Collaboratively
                              administrate empowered markets via plug-and-play
                              networks. Dynamically procrastinate B2C users after
                              installed base benefits.
                          </p>
                          </h5>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img src={hp4} alt="Capture feature" className="w-100" />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Report",
                    tabIcon: report,
                    tabContent: (
                      <GridContainer className="m-auto">
                        <GridItem xs={12} sm={12} md={7} className="m-auto">
                          <h5>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                          </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed convergence
                              without revolutionary ROI. Collaboratively
                              administrate empowered markets via plug-and-play
                              networks. Dynamically procrastinate B2C users after
                              installed base benefits.
                          </p>
                          </h5>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img src={hp5} alt="Capture feature" className="w-100" />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Reward",
                    tabIcon: reward,
                    tabContent: (
                      <GridContainer className="m-auto">
                        <GridItem xs={12} sm={12} md={7} className="m-auto">
                          <h5>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                          </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed convergence
                              without revolutionary ROI. Collaboratively
                              administrate empowered markets via plug-and-play
                              networks. Dynamically procrastinate B2C users after
                              installed base benefits.
                          </p>
                          </h5>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img src={hp6} alt="Capture feature" className="w-100" />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Manual",
                    tabIcon: manual,
                    tabContent: (
                      <GridContainer className="m-auto">
                        <GridItem xs={12} sm={12} md={7} className="m-auto">
                          <h5>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                          </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed convergence
                              without revolutionary ROI. Collaboratively
                              administrate empowered markets via plug-and-play
                              networks. Dynamically procrastinate B2C users after
                              installed base benefits.
                          </p>
                          </h5>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img src={hp7} alt="Capture feature" className="w-100" />
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(demoStyle)(DemoSection);
