import React, {Component} from 'react';
import {MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon} from "mdbreact";

class DTWJumbotron extends Component {
    render() {
        return (
            <MDBContainer className="mt-5 mb-4">
                <MDBRow>
                    <MDBCol className="col-12 col-lg-4 text-center text-lg-left">
                        <h1 className="h1 text-light">Detroit Tech Watch</h1>
                        <h5 className="h5 brand-dark">Software Developer Conference</h5>
                    </MDBCol>
                    <MDBCol className="col-12 col-lg-4 text-center">
                        <img src="http://i65.tinypic.com/210gewy.png"
                             className="img-fluid" alt="logo"/>
                    </MDBCol>
                    <MDBCol className="col-12 col-lg-4 text-center text-lg-right">
                        <h1 className="h1 brand-light">June 29th, 2019</h1>
                        <h6 className="h6 brand-light">TechTown Detroit, 440 Burroughs Street, Detroit, MI 48202 <a
                            href="https://goo.gl/maps/itPsnYY7zBG2" target="_blank" className="text-info"><MDBIcon icon="map-marked" /></a></h6>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <p className="text-light">
                            From the folks who brought you DetroitDevDay, a new conference to look toward the future
                            of software development.
                            A day long event with nationally recognized speakers to discuss cutting edge ideas in
                            software development and new programming languages!
                        </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBBtn outline color="primary"
                                size="lg"
                                id="eventbrite-widget-modal-trigger-58444259353">Purchase Tickets<MDBIcon icon="ticket-alt" className="ml-2" /></MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default DTWJumbotron;