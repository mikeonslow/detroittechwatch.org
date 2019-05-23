import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from "mdbreact";
import DTWSponsorPanel from "./DTWSponsorPanel";

const packages = [
  {
    "color": "green darken-2",
    "level": "Coffee Mug",
    "cost": "Cost of coffee mugs",
    "perks": [
      "Your company's logo and name printed on each coffee mug, along with the event logo",
      "Mention on website",
      "Mention on all e-mails sent from the conference"
    ]
  },
  {
    "color": "yellow darken-3",
    "level": "Gold",
    "cost": "$1,000",
    "perks": [
      "Banner in the main room of the event",
      "Mention on website",
      "Mention on social media, frequent call outs and thank you",
      "Mention on all e-mails sent from the conference"
    ]
  },
  {
    "color": "grey",
    "level": "Platinum",
    "cost": "$2,000",
    "perks": [
      "Booth at Event",
      "Banner in the main room of the event",
      "Mention on website",
      "Mention on social media, frequent call outs and thank you",
      "Mention on all e-mails sent from the conference",
      "10 tickets for you to share with your employees or community"
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
              <hr/>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-2 text-center">
            <MDBCol size="12" className="mb-4 sponsor-logos">
              <h2>Platinum</h2>
              <a href="https://riis.com/" target="_blank" rel="noopener noreferrer"><img src="static/images/sponsor/riis_sq.png" className="no-border" title="Thanks to our platinum sponsor - riis" alt="Thanks to our platinum sponsor - riis" /></a>
              <a href="https://www.aboutamazon.com/" target="_blank" rel="noopener noreferrer"><img src="static/images/sponsor/amazon_detroit_sq.png" className="no-border" title="Thanks to our platinum sponsor - Amazon Detroit" alt="Thanks to our platinum sponsor - Amazon Detroit" /></a>
            </MDBCol>
            <MDBCol size="12" className="mb-4 sponsor-logos">
              <h2>Gold</h2>
              <a href={`mailto:info@detroittechwatch.org?subject=Gold level sponsor request`}><MDBBtn>Become
                a Gold Sponsor</MDBBtn></a>
            </MDBCol>
            <MDBCol size="12" className="mb-4 sponsor-logos">
              <h2>Lanyard Sponsor</h2>
              <a href="https://www.redventures.com/" target="_blank" rel="noopener noreferrer"><img src="static/images/sponsor/red_ventures_sq.png" title="Thanks to our lanyard sponsor - Red Ventures" alt="Thanks to our lanyard sponsor - Red Ventures"></img></a>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-5">
            <MDBCol>
              <h2>Support the community</h2>
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