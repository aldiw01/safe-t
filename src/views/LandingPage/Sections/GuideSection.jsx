import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

import logo from "assets/img/user_manual.png";

class AboutUsSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = "w-100 px-5";
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={12}>
            <h2 className={classes.title}>Apa saja yang dapat dilakukan dengan Safe-T</h2>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <img src={logo} alt="imv" className={imageClasses + " p-2"} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6} className="m-auto">
                <h5 className={classes.description + " text-left"}>
                  <strong>Safe-T</strong>adalah aplikasi yang dapat membantu Anda dalam mengawasi ketertiban lalu lintas.<br /><br />
                  <strong>Safe-T</strong>memiliki fitur verifikasi data menggunakan kartu identitas berupa KTP user yang akan diverifikasi langsung oleh admin.<br /><br />
                  Cara penggunaan <strong>Safe-T</strong> yaitu user hanya perlu memotret pelat nomor pelanggar yang kemudian akan dideteksi menggunakan fitur <strong>OCR.</strong> 
                  Jika pelat nomor sudah dikenali maka user hanya perlu melaporkan pelanggaran yang telah dilakukan.<br /><br />
                  Anda akan mendapatkan <strong>poin</strong> setelah anda berhasil melaporkan pelanggaran lalu lintas tersebut.
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
