import React, {Component} from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBadge
} from "mdbreact";

class DTWSpeakerPanel extends Component {
  render() {
    const {speaker} = this.props;

    const imageSrc = `/static/images/${speaker.imageUrl}`;

    const typeBadge = "string" === typeof speaker.talk.type ? <div><MDBBadge color="info" className="h6">{speaker.talk.type}</MDBBadge></div> : "";
    const signupButton = "string" === typeof speaker.signupUrl ?<div className="text-center"><MDBBtn size="lg"><a href={speaker.signupUrl} target="_blank" rel="noopener noreferrer" className="text-white">Sign Up</a></MDBBtn></div> : "";

    return (
        <MDBCard>
          <img
            src={imageSrc}
            alt=""
            className="rounded-circle img mx-auto mt-5 speaker"
          />
          <MDBCardBody>
            <MDBCardTitle className="deep-purple-text"><b>{speaker.name}</b></MDBCardTitle>
            <MDBCardText>
              <div className="h4">{speaker.talk.title} {typeBadge}</div>
              <div className="speaker description-container text-justify">{speaker.talk.description}</div>
              <hr/>
              <div className="speaker bio-container">{speaker.bio}</div>
            </MDBCardText>
            {signupButton}
          </MDBCardBody>
        </MDBCard>
    )
  }
}

export default DTWSpeakerPanel;