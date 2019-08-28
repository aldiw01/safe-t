import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

import videoSafet from "assets/img/video-safe-t.mp4";

class AboutProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Mengenal Safe-T lebih jauh</h2>
            <h5 className={classes.description}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem md={8} >
            <div className="video-safet">
              <video controls width="520" height="320">
                <source src={videoSafet} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <iframe src="" type="video/mp4" width="520" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
              {/* <iframe width="520" height="320" src="https://www.youtube.com/embed/kTqwzjzQo54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(AboutProductSection);
