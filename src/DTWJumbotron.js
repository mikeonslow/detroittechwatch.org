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
            <h1 className="h1 text-warning">Cancelled for 2020</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <p className="text-warning">
              With the current state of COVID-19 and social distancing, we've decided to cancel the event (this year). We will continue to host our monthly meetups virtually, so keep an eye on our meetup page: <a href="https://www.meetup.com/Detroit-Tech-Watch/">https://www.meetup.com/Detroit-Tech-Watch/</a> for updates. 
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
