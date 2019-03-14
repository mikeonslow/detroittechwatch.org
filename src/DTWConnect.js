import React, {Component} from 'react';
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput, MDBFormInline, MDBIcon} from "mdbreact";

class DTWConnect extends Component {
    render() {
        return (
            <MDBContainer className="p-5">
                <MDBRow>
                    <MDBCol>
                        <h1>Stay in Touch</h1>
                        <p className="text-center">Join our mailing list for the latest conference updates. Your email address
                            will be kept private and we'll only update you with with messages relevant to the event.</p>
                    </MDBCol>
                    <MDBCol size="12" className="text-center">
                        <MDBFormInline className="md-form mr-auto mb-4 justify-content-center">
                            <MDBInput label="Email Address" hint="youremail@domain.com" type="email" size="lg"/>
                            <MDBBtn color="secondary" size="md">sign up <MDBIcon far icon="comments"/></MDBBtn>
                        </MDBFormInline>
                        <a href="dtw_speakers" id="speakers"></a>
                    </MDBCol>
                    <MDBCol>
                        <p className="text-center">Or, follow us on
                            <a href="https://twitter.com/dettechwatch" target="_blank">Twitter</a>, <a
                                href="https://www.facebook.com/DetroitTechWatch/" target="_blank">Facebook</a> or <a
                                href="https://www.instagram.com/detroittechwatch/" target="_blank">Instagram</a>
                        </p>

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