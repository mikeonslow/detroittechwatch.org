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
            <h1 className="h1 brand-light">June 27th, 2020</h1>
            {/* <h6 className="h6 brand-light">
              TechTown Detroit, 440 Burroughs Street, Detroit, MI 48202{" "}
              <a
                href="https://goo.gl/maps/itPsnYY7zBG2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info"
              >
                <MDBIcon icon="map-marked" />
              </a>
            </h6> */}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <p className="text-light">
              For the second year, we're hosting the Detroit Tech Watch
              conference.
            </p>
            <p className="text-light">
              A look toward the future of software development. A one day long
              event with nationally recognized speakers, to discuss progressive
              ideas, and the importance of continuous learning in software
              development.
            </p>
          </MDBCol>
        </MDBRow>
        {/* <MDBRow>
          <MDBCol>
            <MDBBtn
              outline
              color="primary"
              size="lg"
              id="eventbrite-widget-modal-trigger-58444259353"
            >
              Purchase Tickets
              <MDBIcon icon="ticket-alt" className="ml-2" />
            </MDBBtn>
          </MDBCol>
        </MDBRow> */}
      </MDBContainer>
    );
  }
}

export default DTWJumbotron;
