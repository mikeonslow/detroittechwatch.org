import React, {Component} from 'react';
import {MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DTWFixedNavbar from './DTWFixedNavbar'
import DTWJumbotron from './DTWJumbotron'
import DTWConnect from './DTWConnect'
import DTWSpeakers from './DTWSpeakers'
import DTWFooter from './DTWFooter'
import DTWCodeOfConduct from "./DTWCodeofConduct";
import DTWOrganizers from "./DTWOrganizers";
import './App.css';
import DTWSponsors from "./DTWSponsors";
import DTWSchedule from "./DTWSchedule";
class App extends Component {
    render() {
        return (
            <Router>
                <MDBContainer fluid className="text-center mt-5">
                    <a href="about" id="about">&nbsp;</a>
                    <MDBRow>
                        <MDBCol>
                            <Route path="/" component={DTWFixedNavbar}/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <DTWJumbotron/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section lightest">
                        <MDBCol>
                            <DTWConnect/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section lightest">
                        <MDBCol>
                            &nbsp;
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section dark">
                        <MDBCol>
                            <DTWSpeakers/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section dark">
                        <MDBCol>
                            &nbsp;
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section light">
                        <MDBCol>
                            <DTWSchedule/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section lightest">
                        <MDBCol>
                            <DTWSponsors/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section lightest">
                        <MDBCol>
                            &nbsp;
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section light">
                        <MDBCol>
                            <DTWCodeOfConduct/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section dark">
                        <MDBCol>
                            <DTWOrganizers/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="section mono">
                        <MDBCol>
                            <DTWFooter/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Router>
        );
    }
}

export default App;