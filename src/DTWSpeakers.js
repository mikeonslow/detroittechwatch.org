import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import DTWSpeakerPanel from "./DTWSpeakerPanel";

const speakers = [
  // {
  //   name: "Carol Nichols",
  //   twitterHandle: "carols10cents",
  //   bio: (
  //     <span>
  //       Carol is the co-author of The Rust Programming Language book and a
  //       member of the Rust core team. She's a co-founder of the world's first
  //       Rust-focused consultancy, Integer 32. She enjoys connecting folks by
  //       running the Rust Belt Rust Conference. Carol hails from Pittsburgh, PA
  //       and her favorite hockey player is Bryan Rust.
  //     </span>
  //   ),
  //   imageUrl: "/speakers/caroln.jpg"
  // },
  // {
  //   name: "Grant Maki",
  //   twitterHandle: "itsmegrantmaki",
  //   bio:
  //     "Grant Maki is a software engineer at Ford Motor Company, where he has been working for about 2 years. He was a lawyer briefly, but not anymore. Nothing in his talk constitutes legal advice.",
  //   imageUrl: "/speakers/grant-maki.jpg"
  // },
  // {
  //   name: "Jamie Jennings",
  //   twitterHandle: "jamietheriveter",
  //   bio:
  //     "Jamie earned her Ph.D. in Computer Science from Cornell University, and has held positions in academia and industry. As a Senior Technical Staff Member in IBM, she created international technical standards that remain in wide use by the mobile phone industry today. She has also been chief architect for several IBM products. Today, she is back in academia, on the faculty of the Computer Science Department at North Carolina State University. In her spare time she plays ice hockey and writes compilers.",
  //   imageUrl: "/speakers/jamiej.jpg"
  // }
];

class DTWSpeakers extends Component {
  render() {
    const speakersList = speakers.map((speaker, i) => (
      <MDBCol
        sm="12"
        md="6"
        key={i}
        className="mb-5 d-flex align-items-stretch"
      >
        <DTWSpeakerPanel speaker={speaker} key={i} />
      </MDBCol>
    ));

    return (
      <MDBContainer className="p-5">
        <MDBRow>
          <MDBCol>
            <h1 className="text-light">Speakers</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <h1 className="">&nbsp;</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          {speakersList}
          <MDBCol sm="12" md="6" className="mb-5 d-flex align-items-stretch">
            <MDBCard>
              <img
                src="/static/images/speakers/speaker.jpg"
                alt="Speaker"
                className="rounded-circle img mx-auto mt-5 speaker"
              />
              <MDBCardBody>
                <MDBCardTitle className="deep-purple-text">
                  <b> Call For Proposals - Open soon!</b>
                </MDBCardTitle>
                <MDBCardText>
                  If you've got an idea for a talk, we'd love to hear from you.
                  Our CFP will be open soon.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <a href="#2019" id="2019">
          {" "}
        </a>
      </MDBContainer>
    );
  }
}

export default DTWSpeakers;
