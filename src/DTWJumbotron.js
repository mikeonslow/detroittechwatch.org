import React, {Component} from 'react';
import {MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol} from "mdbreact";

class DTWJumbotron extends Component {
    render() {
        return (
            <MDBContainer className="mt-5 text-center">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron>
                            <p><img src="http://i65.tinypic.com/210gewy.png"
                                    className="dtw-logo" alt="logo"/></p>
                            <h1 className="h1 display-5">Welcome to Detroit Tech Watch</h1>
                            <p className="lead">
                                From the folks who brought you DetroitDevDay, a new conference to look toward the future
                                of software development.
                                A day long event with nationally recognized speakers to discuss cutting edge ideas in
                                software development and new programming languages!
                            </p>
                            <hr className="my-2"/>
                            <p className="lead">
                                <a href="https://www.eventbrite.com/preview?eid=58444259353" target="_blank"><MDBBtn rounded outline color="primary" size="lg">Buy Tickets</MDBBtn></a>
                            </p>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        );
    }
}

export default DTWJumbotron;