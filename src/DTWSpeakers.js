import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon} from "mdbreact";

class DTWSpeakers extends Component {
  render() {

    const speakerImgStyle = {
      WebkitFilter: `grayscale(1)`,
      filter: `grayscale(1)`
    };
    
    return (
        <MDBContainer className="p-5 section dark">
          <MDBRow>
            <MDBCol>
              <h1 className="">Speakers</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <h1 className="">&nbsp;</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow className={`grey lighten-4 text-black p-1`}>
            <MDBCol sm="12" md="4">
              <img
                  src="/static/images/speaker.jpg"
                  alt=""
                  className="rounded-circle img mx-auto mt-5"
                  style={speakerImgStyle}
              />
              <h4 className="font-weight-bold mb-4">You?</h4>
              <p className="dark-grey-text mt-4">
                <a href="https://www.papercall.io/dtw" target="_blank" rel="noopener noreferrer"><MDBBtn size="lg" color="info">Submit a
                  Proposal <MDBIcon far icon="paper-plane"/></MDBBtn></a>
              </p>
            </MDBCol>
            <MDBCol  sm="12" md="8" className="text-left justify-content-center align-self-center">
              <p>In addition to the speakers we've lined up, we're actively looking for speakers for the
                Detroit Tech
                Watch for 2019.</p>
              <h5>What you can expect</h5>
              <ul>
                <li>Slot times will be roughly 30 minutes</li>
                <li>For speakers that are not local, we'll provide an allowance for travel and lodging</li>
              </ul>
              <h5>What we're looking for</h5>

                <ul>
                  <li>Generally we're looking for talks related to newer technologies that you're using at
                    work to solve
                    real world problems
                  </li>
                  <li>Talks and ideas that inspire the community</li>
                  <li>Talks that you are enthusiastic and excited about!</li>
                </ul>
            </MDBCol>
          </MDBRow>
          <a href="schedule" id="schedule"> </a>
        </MDBContainer>

    );
  }
}


export default DTWSpeakers;