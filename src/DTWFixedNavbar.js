import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBIcon
} from "mdbreact";

import { HashLink as Link } from "react-router-hash-link";

class DTWFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    // const bgMonoDark = { backgroundColor: "#3B64AF" };
    const bgMonoDark = { backgroundColor: "#1caadd" };
    // const container = {height: 1300};
    return (
      <header>
        <MDBNavbar style={bgMonoDark} dark expand="md" scrolling fixed="top">
          <MDBNavbarBrand href="/">
            <img
              src="static/images/dtw_sm.png"
              className="dtw-logo-white"
              alt="Detroit Tech Watch Logo"
            />
            <strong>Detroit Tech Watch 2020</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.onClick} />
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <Link to="#about" className="nav-link">
                  About
                </Link>
              </MDBNavItem>
              {/* <MDBNavItem>
                  <Link to="#speakers" className="nav-link">Speakers</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="#schedule" className="nav-link">Schedule</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="#" id="eventbrite-widget-modal-trigger-58444259353" className="nav-link">Purchase
                    Tickets</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="#sponsors" className="nav-link">Sponsors</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="#location" className="nav-link">Location</Link>
                </MDBNavItem> */}
              <MDBNavItem>
                <Link to="#code_of_conduct" className="nav-link mr-0">
                  Code of Conduct
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <a
                  href="https://www.facebook.com/DetroitTechWatch/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a
                  href="https://twitter.com/dettechwatch"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon fab icon="twitter" />
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a
                  href="https://www.instagram.com/detroittechwatch"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon fab icon="instagram" />
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}

export default DTWFixedNavbar;
