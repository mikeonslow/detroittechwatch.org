import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon} from "mdbreact";


class DTWOrganizers extends Component {
  render() {
    return (
        <MDBContainer className="p-5">
          <MDBRow className="mb-5">
            <MDBCol>
              <h1>Organizers</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <MDBCard testimonial className="text-center">
                <img
                    src="/static/images/onorio.jpeg"
                    alt=""
                    className="rounded-circle img mx-auto mt-5"
                />
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-4 text-secondary">Onorio Catenacci</h4>
                  <hr/>
                  <p className="dark-grey-text mt-4">
                    <MDBIcon fab icon="github" className="text-black mr-1"/>
                    <a href="https://github.com/OnorioCatenacci" target="_blank"
                       rel="noopener noreferrer">@OnorioCatenacci</a>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard testimonial className="text-center">
                <img
                    src="/static/images/mike.jpg"
                    alt=""
                    className="rounded-circle img mx-auto mt-5"
                />
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-4 text-secondary">Mike Onslow</h4>
                  <hr/>
                  <p className="dark-grey-text mt-4">
                    <MDBIcon fab icon="github" className="text-black mr-1"/>
                    <a href="https://github.com/mikeonslow" target="_blank" rel="noopener noreferrer">@mikeonslow</a>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }
}


export default DTWOrganizers;