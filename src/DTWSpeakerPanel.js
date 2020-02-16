import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBadge,
  MDBIcon
} from "mdbreact";

class DTWSpeakerPanel extends Component {
  render() {
    const { speaker } = this.props;

    const imageSrc = `/static/images/${speaker.imageUrl}`;

    const typeBadge =
      "string" === typeof speaker.talk.type ? (
        <div>
          <MDBBadge color="secondary" className="h6">
            {speaker.talk.type}
          </MDBBadge>
        </div>
      ) : (
        ""
      );
    const signupButton =
      "string" === typeof speaker.signupUrl ? (
        <div className="text-center">
          <a
            href={speaker.signupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <MDBBtn size="lg">Sign Up</MDBBtn>
          </a>
        </div>
      ) : (
        ""
      );

    const twitterHandle =
      "string" === typeof speaker.twitterHandle ? (
        <div className="text-center speaker-twitter-handle">
          {"  "}
          <MDBBadge color="info" className="h6 ml-1">
            <MDBIcon fab icon="twitter" className="mr-1" />
            <a
              href={`https://twitter.com/${speaker.twitterHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              @{speaker.twitterHandle}
            </a>
          </MDBBadge>
        </div>
      ) : (
        ""
      );

    return (
      <MDBCard>
        <img
          src={imageSrc}
          alt=""
          className="rounded-circle img mx-auto mt-5 speaker"
        />
        <MDBCardBody>
          <MDBCardTitle className="deep-purple-text">
            <b>{speaker.name}</b>
            {twitterHandle}
          </MDBCardTitle>
          <MDBCardText>
            <div className="h4">
              {speaker.talk.title} {typeBadge}
            </div>
            <div className="speaker description-container text-justify">
              {speaker.talk.description}
            </div>
            <hr />
            <div className="speaker bio-container">{speaker.bio}</div>
          </MDBCardText>
          {/* {signupButton} */}
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default DTWSpeakerPanel;
