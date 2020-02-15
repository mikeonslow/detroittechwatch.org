import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

var validator = require("email-validator");

const validationSuccessMessage = "You're good to go!";
const validationErrorMessage = "Must be a valid email address";

class DTWConnect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      validation: "Initial",
      subscribeMessage: "",
      remoteData: "NotAsked"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubscriberFormSuccess = this.handleSubscriberFormSuccess.bind(
      this
    );
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(e) {
    const subscriber = e.target.value;
    const validation = validator.validate(subscriber) ? "Valid" : "Invalid";
    const subscriberMessage =
      validation === "Valid"
        ? validationSuccessMessage
        : validationErrorMessage;
    this.setState({
      value: e.target.value,
      validation: validation,
      subscribeMessage: subscriberMessage
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ remoteData: "Loading" });
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", this.handleSubscriberFormSuccess);
    xhr.open("POST", ".netlify/functions/subscribe");
    xhr.send(JSON.stringify({ subscriber: this.state.value }));
  }

  handleSubscriberFormSuccess(data) {
    const { status, response } = data.srcElement;

    var responseData = JSON.parse(response);

    const remoteData = status === 200 ? "Success" : "Failure";
    const validation = status === 200 ? "Valid" : "Invalid";

    this.setState({
      remoteData: remoteData,
      validation: validation,
      subscribeMessage: responseData.message
    });

    setTimeout(this.resetForm, 5000);
  }

  resetForm() {
    this.setState({
      value: "",
      remoteData: "NotAsked",
      validation: "Initial",
      subscribeMessage: ""
    });
  }

  render() {
    const { value, validation, subscribeMessage } = this.state;

    var validationFeedback = "";

    switch (validation) {
      case "Invalid":
        validationFeedback = (
          <div className="text-danger text-left">
            <MDBIcon icon="exclamation-circle" /> {subscribeMessage}
          </div>
        );
        break;
      case "Valid":
        validationFeedback = (
          <div className="text-success text-left">
            <MDBIcon icon="check" /> {subscribeMessage}
          </div>
        );
        break;
      default:
        validationFeedback = "";
    }

    var savingFeedback = (
      <div className="progress" style={{ width: "100%" }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "100%" }}
        />
      </div>
    );

    var feedBack = "";
    var formDisabled = false;

    switch (this.state.remoteData) {
      case "Loading":
        feedBack = savingFeedback;
        formDisabled = true;
        break;
      case "Success":
      case "Failure":
        feedBack = validationFeedback;
        formDisabled = true;
        break;
      default:
        feedBack = validationFeedback;
        formDisabled = false;
    }

    console.log(this.state);

    return (
      <MDBContainer className="p-5">
        <MDBRow>
          <MDBCol size="12">
            <h1>Stay up to Date!</h1>
            {/* <p className="text-center">Join our mailing list for the latest conference updates. Your email address
                will be kept private and we'll only update you with with messages relevant to the event.</p> */}
          </MDBCol>
          {/* <MDBCol size="12" className="text-center">
              <MDBFormInline className="md-form mr-auto mb-4 justify-content-center" onSubmit={this.handleSubmit}>
                <MDBInput label="Email Address" hint="youremail@domain.com" type="email" size="md" className="signup"
                          onChange={this.handleChange} value={value} spellCheck="false" disabled={formDisabled}>
                  {feedBack}
                </MDBInput>
                <MDBBtn color="secondary" size="md" disabled={validation === "Invalid" || validation === "Initial"}
                        className="align-self-start mt-md-4" onClick={this.handleSubmit}>sign
                  up <MDBIcon far icon="comments"/></MDBBtn>
              </MDBFormInline>
            </MDBCol> */}
          <MDBCol size="12">
            <p className="text-center">
              Follow us on
              <a
                href="https://twitter.com/dettechwatch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              ,{" "}
              <a
                href="https://www.facebook.com/DetroitTechWatch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{" "}
              or{" "}
              <a
                href="https://www.instagram.com/detroittechwatch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              to stay up to date with event information
            </p>
            <a href="#dtw_speakers" id="speakers">
              {" "}
            </a>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default DTWConnect;
