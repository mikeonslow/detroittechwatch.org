import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class DTWFooter extends Component {
  render() {
    return (
      <MDBContainer className="text-center text-light p-2">
        <MDBRow>
          <MDBCol>
            <div>Copyright 2021 - Detroit Tech Watch</div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default DTWFooter;
