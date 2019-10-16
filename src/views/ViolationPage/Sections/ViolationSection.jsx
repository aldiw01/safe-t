import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import axios from 'axios';

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/risa.jpg";
import team2 from "assets/img/faces/suryo.jpg";
import team3 from "assets/img/faces/aldi.jpg";
import team4 from "assets/img/faces/anky.jpg";
import team5 from "assets/img/faces/fakhri.jpg";
import team6 from "assets/img/faces/vivian.jpg";
import team7 from "assets/img/faces/yusuf.jpg";

class ViolationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      view: false,
      loader: false,
      fileImage: '',
      data: [{
        id: '',
        reporter_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
        violance_address: '',
        created: '',
        updated: '',
      }],
      focus: {
        id: '',
        reporter_id: '',
        vehicle_id: '',
        violation_type: '',
        detail: '',
        incident_date: '',
        documentation: '',
        violance_address: '',
        created: '',
        updated: '',
      },
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(localStorage.getItem('serverAPI') + '/ticket/status/1')
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        this.setState({
          data: [{
            id: '',
            reporter_id: '',
            vehicle_id: '',
            violation_type: '',
            detail: '',
            incident_date: '',
            documentation: '',
            violance_address: '',
            created: '',
            updated: '',
          }]
        })
        console.log(error);
      });
  }

  toggleView = id => {
    if (id !== this.state.id) {
      axios.get(localStorage.getItem('serverAPI') + '/history/ticket/' + this.state.data[id].id)
        .then(res => {
          this.setState({ history: res.data });
        })
        .catch(error => {
          this.setState({
            history: [{
              id: '',
              ticket_id: '',
              from_name: '',
              info: '',
              message: '',
              status: '',
              violance_address: '',
              created: '',
              updated: '',
            }]
          });
        });
    }

    this.setState({
      id: id,
      view: !this.state.view,
      focus: this.state.data[id]
    });
  }

  render() {
    var viewStyle = {
      overflowWrap: 'break-word'
    }

    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    const data = {
      columns: [
        {
          label: 'ID',
          field: 'id',
          sort: 'asc'
        },
        {
          label: 'Reporter ID',
          field: 'reporter_id',
          sort: 'asc'
        },
        {
          label: 'No Kendaraan',
          field: 'vehicle_id',
          sort: 'asc'
        },
        {
          label: 'Jenis Pelanggaran',
          field: 'violation_type',
          sort: 'asc'
        },
        {
          label: 'Detail',
          field: 'detail',
          sort: 'asc'
        },
        {
          label: 'Tanggal',
          field: 'incident_date',
          sort: 'asc'
        },
        {
          label: 'Actions',
          field: 'actions',
          sort: 'asc'
        }
      ],
      rows: this.state.data
    }

    var rows = [];
    let toggleView = this.toggleView;
    data.rows.forEach(function (items, i) {
      if (items.id) {
        rows.push({
          id: items.id,
          reporter_id: items.reporter_id,
          vehicle_id: items.vehicle_id,
          violation_type: items.violation_type,
          detail: items.detail,
          incident_date: items.incident_date,
        });
      }
    });
    const dataFix = {
      columns: data.columns,
      rows: rows
    }

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Perkenalkan Tim Kami</h2>
        <div>
          <GridContainer className="justify-content-center">
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h5 className={classes.cardTitle}>
                  {this.state.data.reporter_id}
                  <br />
                  <small className={classes.smallTitle}>Founder</small>
                </h5>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Twitter"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Instagram"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Facebook"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h5 className={classes.cardTitle}>
                  Suryo Adhi Wibowo
                  <br />
                  <small className={classes.smallTitle}>Co-Founder</small>
                </h5>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Twitter"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="LinkedIn"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h5 className={classes.cardTitle}>
                  Aldi Wiranata
                  <br />
                  <small className={classes.smallTitle}>Web Developer</small>
                </h5>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Mail"
                    href="mailto:aldiw01@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fas fa-at"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/aldiw01/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img src={team4} alt="..." className={imageClasses} />
                </GridItem>
                <h5 className={classes.cardTitle}>
                  Anky Aditya P
                  <br />
                  <small className={classes.smallTitle}>AI/ML Engineer</small>
                </h5>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Twitter"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Instagram"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Facebook"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img src={team5} alt="..." className={imageClasses} />
                </GridItem>
                <h5 className={classes.cardTitle}>
                  M Fakhri Putra S
                  <br />
                  <small className={classes.smallTitle}>Android Developer</small>
                </h5>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Twitter"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Instagram"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Facebook"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img src={team6} alt="..." className={imageClasses} />
                </GridItem>
                <h5 className={classes.cardTitle}>
                  Vivian Alfionita S
                  <br />
                  <small className={classes.smallTitle}>Designer</small>
                </h5>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Twitter"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Instagram"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Facebook"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img src={team7} alt="..." className={imageClasses} />
                </GridItem>
                <h5 className={classes.cardTitle}>
                  Akhmad Yusuf Nasirudin
                  <br />
                  <small className={classes.smallTitle}>AI/ML Engineer</small>
                </h5>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Twitter"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Instagram"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    title="Facebook"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div >
    );
  }
}

export default withStyles(teamStyle)(ViolationSection);
