import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";

class DTWSponsors extends Component {
  render() {
    return (
        <MDBContainer className="p-5">
          <MDBRow>
            <MDBCol>
              <h1>Sponsors</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <a href="dtw_code_of_conduct" id="code_of_conduct">&nbsp;</a>
            <MDBCol>
              <h3>Support the community</h3>
              You or your company can become a sponsor for Detroit Tech Watch 2019.

              For more info, check out becoming a sponsor.
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }
}











export default DTWSponsors;