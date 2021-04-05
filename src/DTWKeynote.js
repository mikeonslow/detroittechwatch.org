import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import DTWSpeakerPanel from "./DTWSpeakerPanel";

const keynote = {
  name: "TBD",
  // bio: (
  //   <div>
  //     Bruce Tate is a kayaker, climber, programmer and father of two from
  //     Chattanooga, Tennessee. A serial entrepreneur, he has helped start three
  //     companies, and served as CTO for the recently acquired{" "}
  //     <a
  //       href="https://icanmakeitbetter.com"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       icanmakeitbetter.com
  //     </a>
  //     . The international speaker and bestselling author of more than a dozen
  //     books is active in the Elixir community as a speaker, author, editor and
  //     conference organizer. His love for teaching and computer languages led him
  //     to found Groxio in 2018, career rocket fuel for curious coders. They
  //     provide education for developers wanting to rapidly improve programming
  //     skills through video, courses, and conferences.
  //   </div>
  // ),
  // twitterHandle: "redrapids",
     imageUrl: "speakers/speaker.jpg",
  // talk: {
  //   title: (
  //     <span>
  //       <h3>
  //         Be Curious: Improve your Programming Career through Learning Languages{" "}
  //       </h3>
  //       {/* <h5>Improve your Programming Career through Learning Languages</h5> */}
  //     </span>
  //   ),
  //   description: (
  //     <div>
  //       <p>
  //         Developer careers are getting increasingly competitive, and the stress
  //         markers for coders are climbing. There's a secret drug that helps with
  //         both of these pain points. Curiosity. You *can* improve your career by
  //         learning languages, even the ones you never learn professionally. We
  //         developers are what we eat, or more specifically, what our brain eats.
  //       </p>
  //       <p>
  //         This keynote will show explicit examples from programming languages
  //         that teach important concepts. We'll look at a few important
  //         programming concepts in languages most of us will never touch
  //         commercially. Then, we'll look at how specific lessons might improve
  //         programs written in Java, .NET, or JavaScript.
  //       </p>
  //     </div>
  //   )
  // },
  // signupUrl: "https://forms.gle/7RRrrpEoMf61tMpF9"
};

class DTWKeynote extends Component {
  render() {
    return (
      <MDBContainer className="p-5">
        <MDBRow>
          <MDBCol className="text-light">
            <h1 class="h1">Keynote</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <h1 className="">&nbsp;</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12" key="1" className="mb-5">
            <DTWSpeakerPanel speaker={keynote} key="1" />
          </MDBCol>
          <a href="#speakers" id="speakers">
            &nbsp;
          </a>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default DTWKeynote;
