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
    axios.get(localStorage.getItem('serverAPI') + '/ticket/list/1')
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

  mapToAlphaGrid = () => {

    return this.state.data.sort((a, b) => a.id - b.id)
      .reduce((menu, item) => {
        if (menu[item.id.charAt(0)]) {
          // Add to existing menu item
          menu[item.id.charAt(0)].push(item)
        } else {
          // Create new menu item
          menu[item.id.charAt(0)] = [item];
        }
        return menu;
      }, {});

  };

  renderAll = () => {
    const menuItems = this.mapToAlphaGrid();
    console.log("mappping _result: " + menuItems);
    return Object.keys(menuItems).map(key => {
      const items = menuItems[key];
      return ( 
        <div>
            {items.map(item => {
              return (
                <GridContainer className="justify-content-center">
                  <GridItem xs={12} sm={12} md={3}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                        <img src={team1} alt="..." className={imageClasses} />
                      </GridItem>
                      <h5 className={classes.cardTitle}>
                        coba{item.reporter_id}
                        <br />
                        <small className={classes.smallTitle}>Founder</small>
                      </h5>
                    </Card>
                  </GridItem>
                </GridContainer>
              )
            })} 
        </div>
      )
    });
  };
  
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Perkenalkan Tim Kami</h2>
        <div>
          {
            this.renderAll()
          }
        </div>
      </div >
    );
  }
}

export default withStyles(teamStyle)(ViolationSection);
