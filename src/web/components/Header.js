import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  Navbar,
  NavItem,
  Collapse,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import Config from '../../constants/config';
import { SidebarNavItems } from './Sidebar';

class Header extends Component {
  static propTypes = {
    member: PropTypes.shape({
      firstName: PropTypes.string,
      email: PropTypes.string,
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    logout: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    member: {},
    match: null,
  }

  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = { isOpen: false };
  }

  onLogout = () => {
    const { logout, history } = this.props;
    logout().then(() => history.push('/login'));
  }

  toggleDropDown = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { member } = this.props;
    const { isOpen } = this.state;
    const loggedIn = !!(member && member.email);

    return (
      <header>
        <Navbar dark color="primary" expand="sm" className="fixed-top">
          <Link to="/" className="navbar-brand" style={{ color: '#FFF' }}>
            {Config.appName}
          </Link>
          <NavbarToggler onClick={this.toggleDropDown} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div className="d-block d-sm-none">
                {SidebarNavItems()}
              </div>
              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  {loggedIn ? `Hi, ${member.firstName}` : 'My Account'}
                </DropdownToggle>
                <DropdownMenu>
                  {!loggedIn
                    && (
                    <div>
                      <DropdownItem tag={Link} to="/login">
                          Login
                      </DropdownItem>
                      <DropdownItem tag={Link} to="/sign-up">
                        Sign Up
                      </DropdownItem>
                    </div>
                    )
                  }
                  {loggedIn
                    && (
                    <div>
                      <DropdownItem tag={Link} to="/update-profile">
                        Update Profile
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="button" onClick={this.onLogout}>
                        Logout
                      </DropdownItem>
                    </div>
                    )
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link className={`nav-link`} to="/cart">
                  <i className="icon-basket" />
                  {' '}
                  <span>
                    Cart
                  </span>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default withRouter(Header);
