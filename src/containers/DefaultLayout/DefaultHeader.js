import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/logo.png'
import sygnet from '../../assets/img/mascot.png'
import AuthService from '../../server/AuthService'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const user = this.Auth.getProfile().name;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, height: 40, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, height: 40, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          {this.Auth.getProfile().user_type === "Admin" ?
            <NavItem className="px-3">
              <Link to="/users" className="nav-link">Users</Link>
            </NavItem> : ""
          }
          {/* <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Settings</NavLink>
          </NavItem> */}
        </Nav>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <i className="icon-bell"></i><Badge pill color="danger">5</Badge>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Tickets</strong></DropdownItem>
              <DropdownItem><i className="icon-notebook"></i> Active<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="icon-check"></i> Closed<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem><i className="icon-check"></i> Archived<Badge color="dark">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Users</strong></DropdownItem>
              <DropdownItem><i className="icon-user-following"></i> Active<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="icon-hourglass"></i> Pending<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem><i className="icon-user-following"></i> Registered<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="icon-user-following"></i> Inactive<Badge color="dark">42</Badge></DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
          <NavItem className="px-3 border-right border-secondary">
            <NavLink to="/profile" className="nav-link text-capitalize">{user}</NavLink>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <Link to="/profile">
                <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              </Link>
              {/* <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem> */}
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
