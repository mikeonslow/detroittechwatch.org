import React, {Component} from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn} from "mdbreact";

class DTWSponsorPanel extends Component {
  render() {
    const {color, level, cost, perks} = this.props;

    const listPerks = perks.map((perk) =>
        <span><hr/>
          {perk}</span>
    );

    return (
        <MDBCard className={`w-100`}>
          <MDBCardHeader color={color}>{level} Sponsor</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>{cost}</MDBCardTitle>
            <MDBCardText>
              <h6>What you Get</h6>
              {listPerks}
            </MDBCardText>
            <a href={`mailto:info@detroittechwatch.org?subject=${level} level sponsor request`}><MDBBtn>Become
              a {level} Sponsor</MDBBtn></a>
          </MDBCardBody>
        </MDBCard>
    )
  }
}

export default DTWSponsorPanel;