import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBIcon
} from "mdbreact";

class DTWSponsorPanel extends Component {
  render() {
    const { color, level, cost, perks } = this.props;

    const listPerks = perks.map((perk, i) => (
      <span className="perk-item" key={i}>
        {perk}
      </span>
    ));

    return (
      <MDBCard className={`w-100`}>
        <MDBCardHeader color={color}>
          <MDBIcon icon="award" /> {level} Sponsor
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{cost}</MDBCardTitle>
          <MDBCardText>
            <span className="h5">What you Get</span>
            <br />
            <br />
            {listPerks}
          </MDBCardText>
          {/*<a href={`mailto:info@detroittechwatch.org?subject=${level} level sponsor request`}><MDBBtn>Become*/}
          {/*a {level} Sponsor</MDBBtn></a>*/}
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default DTWSponsorPanel;
