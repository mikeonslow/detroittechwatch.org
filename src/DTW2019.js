import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBCardText,
  MDBCardTitle,
  MDBBtn,
  MDBCardImage
} from "mdbreact";
import DTWImagePanel from "./DTWImagePanel";

const imageUrlBase = "/static/images/2019/";
const images = [
  {
    src: "1.jpg",
    baseUrl: imageUrlBase,
    alt: ""
  },
  {
    baseUrl: imageUrlBase,
    src: "2.jpg",
    alt: ""
  },
  {
    baseUrl: imageUrlBase,
    src: "3.jpg",
    alt: ""
  },
  {
    baseUrl: imageUrlBase,
    src: "4.jpg",
    alt: ""
  },
  {
    baseUrl: imageUrlBase,
    src: "5.jpg",
    alt: ""
  },
  {
    baseUrl: imageUrlBase,
    src: "6.jpg",
    alt: ""
  },
  {
    baseUrl: imageUrlBase,
    src: "7.jpg",
    alt: ""
  }
];

class DTW2019 extends Component {
  render() {
    const imageList = images.map((image, i) => (
      <MDBCol
        sm="12"
        md="6"
        key={i}
        className="mb-5 d-flex align-items-stretch"
      >
        <DTWImagePanel image={image} key={i} />
      </MDBCol>
    ));

    return (
      <MDBContainer className="p-5">
        <MDBRow>
          <MDBCol className="text-dark">
            <h1 class="h1">Last Year's Event</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <h1 className="">&nbsp;</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>2019 Event Site</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn
                  color="secondary"
                  href="https://2019.detroittechwatch.org"
                >
                  Visit Page
                </MDBBtn>
              </MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="static/images/2019/1.jpg"
                waves
              />
            </MDBCard>
          </MDBCol>
          <MDBCol sm="12" md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>2019 Talk Videos</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn
                  color="secondary"
                  href="https://www.youtube.com/channel/UCksVT6CzhWBRWpRdi_dT4_A"
                >
                  Visit Page
                </MDBBtn>
              </MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="static/images/2019/videos.jpg"
                waves
              />
            </MDBCard>
          </MDBCol>
          <MDBCol sm="12" md="6">
            <h1 className="">&nbsp;</h1>
          </MDBCol>
        </MDBRow>
        <a href="#dtw_code_of_conduct" id="code_of_conduct">
          &nbsp;
        </a>
      </MDBContainer>
    );
  }
}

export default DTW2019;
