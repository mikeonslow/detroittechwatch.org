import React, {Component} from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBBtn, MDBInput, MDBFormInline, MDBIcon
} from "mdbreact";

var validator = require("email-validator");

class DTWConnect extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', isValid: false, subscribeMessage: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const subscriber = e.target.value;
    const isValid = validator.validate(subscriber);
    this.setState({value: e.target.value, isValid: isValid});
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/.netlify/functions/subscribe', {
      method: 'post',
      body: JSON.stringify({"subscriber": this.state.value})
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    });
  }

  render() {

    const {value, isValid, subscribeMessage} = this.state;


    const errorFeedback = isValid ? '' :
        <div className="invalid-feedback"><MDBIcon icon="exclamation-circle"/> Must contain a valid email
          address</div>


    console.log(this.state);

    return (
        <MDBContainer className="p-5">
          <MDBRow>
            <MDBCol size="12">
              <h1>Stay up to Date!</h1>
              <p className="text-center">Join our mailing list for the latest conference updates. Your email address
                will be kept private and we'll only update you with with messages relevant to the event.</p>
            </MDBCol>
            <MDBCol size="12" className="text-center">
              <MDBFormInline className="md-form mr-auto mb-4 justify-content-center">
                <MDBInput label="Email Address" hint="youremail@domain.com" type="email" size="lg" className="signup"
                          onChange={this.handleChange} value={value}>
                </MDBInput>
                <MDBBtn color="secondary" size="md" disabled={!isValid} className="mt-0" onClick={this.handleSubmit}>sign
                  up <MDBIcon far icon="comments"/></MDBBtn>
                {errorFeedback}
              </MDBFormInline>
            </MDBCol>
            <MDBCol size="12">
              <p className="text-center">Or, follow us on
                <a href="https://twitter.com/dettechwatch" target="_blank" rel="noopener noreferrer">Twitter</a>, <a
                    href="https://www.facebook.com/DetroitTechWatch/" target="_blank"
                    rel="noopener noreferrer">Facebook</a> or <a
                    href="https://www.instagram.com/detroittechwatch/" target="_blank"
                    rel="noopener noreferrer">Instagram</a> to stay up to date with event information
              </p>
              <a href="#dtw_speakers" id="speakers"> </a>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }
}


export default DTWConnect;