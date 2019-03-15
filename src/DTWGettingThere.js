import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";

class DTWGettingThere extends Component {
  render() {
    return (
        <MDBContainer className="p-5">
          <MDBRow>
            <MDBCol>
              <h1 className="">Location</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="text-center align-content-center">
              <div className="map-container">
                <iframe title={`map`}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.9450804210987!2d-83.07518438454356!3d42.36500967918653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d2993e289773%3A0x2ac7a95cf39d0f85!2sTechTown+Detroit!5e0!3m2!1sen!2sus!4v1552627853568"
                        frameBorder="0" height="450" style={{border: 0, width: `60vw`}} allowFullScreen></iframe>
              </div>
            </MDBCol>
          </MDBRow>
          <a href="dtw_code_of_conduct" id="code_of_conduct">&nbsp;</a>
        </MDBContainer>

    );
  }
}


export default DTWGettingThere;