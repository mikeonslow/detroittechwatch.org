import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DTWFixedNavbar from "./DTWFixedNavbar";
import DTWJumbotron from "./DTWJumbotron";
import DTWConnect from "./DTWConnect";
import DTWSpeakers from "./DTWSpeakers";
import DTWFooter from "./DTWFooter";
import DTWCodeofConduct from "./DTWCodeofConduct";
import DTWOrganizers from "./DTWOrganizers";
import DTWSponsors from "./DTWSponsors";
import DTWSchedule from "./DTWSchedule";
import DTWGettingThere from "./DTWGettingThere";
import DTWKeynote from "./DTWKeynote";
import DTW2019 from "./DTW2019";

import "./App.css";
//testing deploy

const headerStyle = {
  backgroundImage: 'url("static/images/dtw2020bg.png")',
  backgroundRepeat: "repeat",
  overflow: "hidden"
};

class App extends Component {
  render() {
    return (
      <Router>
        <MDBContainer fluid className="text-center mt-5">
          <a href="about" id="about">
            &nbsp;
          </a>
          <MDBRow>
            <MDBCol>
              <Route path="/" component={DTWFixedNavbar} />
            </MDBCol>
          </MDBRow>
          <MDBRow style={headerStyle}>
            <MDBCol>
              <DTWJumbotron />
            </MDBCol>
          </MDBRow>
          <MDBRow className="section lightest">
            <MDBCol>
              <DTWConnect />
            </MDBCol>
          </MDBRow>
          <MDBRow className="section dark-blue">
            <MDBCol>
              <DTWKeynote />
            </MDBCol>
          </MDBRow>
          <MDBRow className="section blue">
            <MDBCol>
              <DTWSpeakers />
            </MDBCol>
          </MDBRow>
          <MDBRow className="section lightest">
            <MDBCol>
              <DTW2019 />
            </MDBCol>
          </MDBRow>
          {/* <MDBRow className="section dark-blue">
              <MDBCol>
                &nbsp;
              </MDBCol>
            </MDBRow>
            <MDBRow className="section light">
              <MDBCol>
                <DTWSchedule/>
              </MDBCol>
            </MDBRow> */}
          {/* <MDBRow className="section lightest">
              <MDBCol>
                <DTWSponsors/>
              </MDBCol>
            </MDBRow> */}
          {/* <MDBRow className="section dark">
              <MDBCol>
                <DTWGettingThere/>
              </MDBCol>
            </MDBRow> */}
          <MDBRow className="section light">
            <MDBCol>&nbsp;</MDBCol>
          </MDBRow>
          <MDBRow className="section light">
            <MDBCol>
              <DTWCodeofConduct />
            </MDBCol>
          </MDBRow>
          <MDBRow className="section dark">
            <MDBCol>
              <DTWOrganizers />
            </MDBCol>
          </MDBRow>
          <MDBRow className="section mono">
            <MDBCol>
              <DTWFooter />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Router>
    );
  }
}

export default App;
