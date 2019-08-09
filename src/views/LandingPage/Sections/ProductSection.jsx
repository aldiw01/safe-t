import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import ArtificialIntelligence from "assets/img/ArtificialIntelligenceFilled";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import OCR from "assets/img/OCR";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

import hp1 from "assets/img/demo/hp1.png";
import hp2 from "assets/img/demo/hp2.png";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Apa itu Safe-t?</h2>
            <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            {/* <img src={model} alt="Safe-t model" className="w-100" /> */}
            <img src={hp1} alt="Safe-t model 1" className="w-50 px-2" />
            <img src={hp2} alt="Safe-t model 2" className="w-50 px-2" />
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Artificial Intelligence"
                description="Aplikasi ini dilengkapi dengan kecerdasan buatan untuk deteksi plat nomor secara otomatis."
                icon={ArtificialIntelligence}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Pengguna Terverifikasi"
                description="Akun pengguna harus sesuai dengan identitas KTP sehingga keamanan lebih terjamin."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Optical Character Recognition"
                description="Dilengkapi dengan teknologi OCR yang mampu megubah gambar menjadi text."
                icon={OCR}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
