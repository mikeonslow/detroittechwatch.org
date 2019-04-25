import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import DTWOrganizerPanel from "./DTWOrganizerPanel";


const organizers =
  [
      {"name": "Onorio Catenacci", "imageUrl": "onorio.jpg", "twitterHandle": "OldDutchCap", "githubHandle": ""},
      {"name": "Mike Onslow", "imageUrl": "mike.jpg", "twitterHandle": "mike_onslow", "githubHandle": ""},
      {"name": "Rebecca Farr", "imageUrl": "rebecca.jpg", "twitterHandle": "BB8becca", "githubHandle": ""},
      {"name": "Kristina Rudolph", "imageUrl": "kristi.jpg", "twitterHandle": "UXUIKris", "githubHandle": ""}
  ];


class DTWOrganizers extends Component {
  render() {
    const organizerList = organizers.map((organizer, i) =>
        <DTWOrganizerPanel
            name={organizer.name}
            imageUrl={organizer.imageUrl}
            twitterHandle={organizer.twitterHandle}
            githubHandle={organizer.githubHandle}
            key={i}
        />
    );

    return (
        <MDBContainer className="p-5">
          <MDBRow className="mb-5">
            <MDBCol>
              <h1>Organizers</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {organizerList}
          </MDBRow>
        </MDBContainer>
    );
  }
}


export default DTWOrganizers;