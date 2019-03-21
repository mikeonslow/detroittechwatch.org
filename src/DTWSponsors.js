import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import DTWSponsorPanel from "./DTWSponsorPanel";

const packages = [
  {
    "color": "green darken-2",
    "level": "Lanyard",
    "cost": "Cost of lanyards & badges",
    "perks": [
      "Your company's logo and name printed on each lanyard and badge",
      "Mention on website",
      "Mention on all e-mails sent from the conference"
    ]
  },
  {
    "color": "yellow darken-3",
    "level": "Gold",
    "cost": "$1,000",
    "perks": [
      "Mention on website",
      "Mention on all e-mails sent from the conference"
    ]
  },
  {
    "color": "grey",
    "level": "Platinum",
    "cost": "$2,000",
    "perks": [
      "Booth at Event",
      "Mention on website",
      "Mention on all e-mails sent from the conference"
    ]
  },
];

class DTWSponsors extends Component {
  render() {
    const listItems = packages.map((item, i) =>
        <MDBCol className={`d-flex align-items-stretch`} sm="12" md="4" key={i}>
          <DTWSponsorPanel color={item.color} level={item.level} cost={item.cost} perks={item.perks}/>
        </MDBCol>
    );

    return (
        <MDBContainer className="p-5">
          <MDBRow>
            <MDBCol>
              <h1>Sponsors</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <h3>Support the community</h3>
              <p>You or your company can become a sponsor for Detroit Tech Watch 2019.</p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {listItems}
          </MDBRow>
          <a href="#location" id="location">&nbsp;</a>
        </MDBContainer>
    );
  }
}


export default DTWSponsors;