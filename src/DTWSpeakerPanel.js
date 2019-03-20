import React, {Component} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from "mdbreact";

class DTWSpeakerPanel extends Component {
  render() {
    const {speaker} = this.props;

    const imageSrc = `/static/images/${speaker.imageUrl}`;

    return (
        <MDBCard>
          <img
            src={imageSrc}
            alt=""
            className="rounded-circle img mx-auto mt-5"
          />
          <MDBCardBody>
            <MDBCardTitle className="deep-purple-text">{speaker.name}</MDBCardTitle>
            <MDBCardText>
              <p className="h4">{speaker.talk.title}</p>
              <p>{speaker.bio}</p>
              <hr/>
              <p>{speaker.talk.description}</p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
    )
  }
}

export default DTWSpeakerPanel;