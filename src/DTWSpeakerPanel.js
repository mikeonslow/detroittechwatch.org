import React, {Component} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
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
            className="rounded-circle img mx-auto mt-5 speaker"
          />
          <MDBCardBody>
            <MDBCardTitle className="deep-purple-text"><b>{speaker.name}</b></MDBCardTitle>
            <MDBCardText>
              <div className="h4">{speaker.talk.title}</div>
              <div>{speaker.bio}</div>
              <hr/>
              <div>{speaker.talk.description}</div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
    )
  }
}

export default DTWSpeakerPanel;