import React, {Component} from 'react';
import {MDBCol, MDBCard, MDBCardBody, MDBIcon} from "mdbreact";

class DTWOrganizerPanel extends Component {
  render() {
    const {name, imageUrl, twitterHandle, githubHandle} = this.props;


    var githubLink = "";

    if(githubHandle.length) {
      githubLink =
      <span><br/>
        <MDBIcon fab icon="github" className="black-text mr-1"/>
          <a href={`https://github.com/${githubHandle}`} target="_blank" rel="noopener noreferrer">@{githubHandle}</a>
      </span>
    }

    return (
            <MDBCol size="md-12 lg-4">
              <MDBCard testimonial className="text-center mt-4">
                <img
                    src={`/static/images/${imageUrl}`}
                    alt=""
                    className="rounded-circle img mx-auto mt-5 organizer"
                />
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-4 text-secondary">{name}</h4>
                  <hr/>
                  <p className="dark-grey-text mt-4">
                    <MDBIcon fab icon="twitter" className="blue-text mr-1"/>
                    <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noopener noreferrer">@{twitterHandle}</a>
                    {githubLink}
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
    );
  }
}


export default DTWOrganizerPanel;