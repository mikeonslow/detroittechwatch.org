import React, {Component} from 'react';
import {MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import DTWFixedNavbar from './DTWFixedNavbar'
import DTWJumbotron from './DTWJumbotron'
import DTWFooter from './DTWFooter'

import './App.css';

class App extends Component {
    render() {
        return (
            <MDBContainer className="mt-5 text-center">
                <MDBRow>
                    <MDBCol>
                        <DTWFixedNavbar/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <DTWJumbotron/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <DTWFooter/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        );
    }
}

export default App;