import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

class DTWJumbotron extends Component {
  render() {
    return (
      <MDBContainer className="mt-5 mb-4">
        <MDBRow>
          <MDBCol className="col-12 col-lg-4 text-center text-lg-left">
            <h1 className="h1 text-light">Detroit Tech Watch</h1>
            <h5 className="h5 brand-dark">Software Developer Conference</h5>
          </MDBCol>
          <MDBCol className="col-12 col-lg-4 text-center">
            <img src="static/images/dtw.png" className="img-fluid" alt="logo" />
          </MDBCol>
          <MDBCol className="col-12 col-lg-4 text-center text-lg-right">
            <h1 className="h1 brand-light">April 15th, 2023</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <p className="brand-light">
              We're happy to annouce that we're planning to hold the Detroit Tech Watch Conference in person in April of 2023. We're working to confirm speakers and set the schedule. The website will be updated as this happens. 
            </p>
            <p className="text-light">
              A look toward the future of software development. A one day long
              event with nationally recognized speakers, to discuss progressive
              ideas, and the importance of continuous learning in software
              development.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default DTWJumbotron;
