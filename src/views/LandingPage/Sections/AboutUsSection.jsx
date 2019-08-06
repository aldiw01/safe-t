import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

import logo from "assets/img/imv_cube.png";

class AboutUsSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = "w-100 px-5";
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={12}>
            <h2 className={classes.title}>Laboratorium IMV</h2>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <img src={logo} alt="imv" className={imageClasses} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6} className="m-auto">
                <h5 className={classes.description + " text-left"}>
                  <strong>Laboratorium Image Processing and Vision</strong> (IMV) adalah salah satu Laboratorium
                  di Fakultas Teknik Elektro yang mendalami bidang ilmu pengolahan citra.<br /><br />
                  IMV dibawahi oleh <strong>Kelompok Keahlian Pemrosesan Sinyal Informasi (KK PSI) Universitas Telkom</strong>.
                  IMV dibina oleh Bapak <strong>Suryo Adhi Wibowo, Ph.D.</strong><br /><br />
                  Tujuan IMV untuk mengembangkan pemahaman mahasiswa/I dalam bidang pengolahan
                  citra dan juga menjalin hubungan dengan berbagai pihak untuk menunjang kemajuan riset.<br />
                </h5>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(AboutUsSection);
