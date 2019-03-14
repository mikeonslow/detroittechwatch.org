import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody} from "mdbreact";

class DTWSchedule extends Component {
    render() {
        return (
            <MDBContainer className="p-5">
                <MDBRow>
                    <MDBCol>
                        <h1 className="">Schedule</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-3">
                    <MDBCol>
                        <MDBTable>
                            <MDBTableHead color="secondary-color" textWhite>
                                <tr>
                                    <th>Activity/Talk</th>
                                    <th>Start</th>
                                    <th>End</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>Registration and morning refreshments</td>
                                    <td>8:30am</td>
                                    <td>9:00am</td>
                                </tr>
                                <tr>
                                    <td>Opening Keynote</td>
                                    <td>9:00am</td>
                                    <td>9:30am</td>
                                </tr>
                                <tr>
                                    <td>Talks (TBA)</td>
                                    <td>9:45am</td>
                                    <td>12:00pm</td>
                                </tr>
                                <tr>
                                    <td>Lunch and Swag Pickup</td>
                                    <td>12:00pm</td>
                                    <td>12:45pm</td>
                                </tr>
                                <tr>
                                    <td>Talks (TBA)</td>
                                    <td>1:00pm</td>
                                    <td>4:30pm</td>
                                </tr>
                                <tr>
                                    <td>Lightning Talks</td>
                                    <td>4:35pm</td>
                                    <td>5:00pm</td>
                                </tr>
                                <tr>
                                    <td>Closing Ceremonies</td>
                                    <td>5:00pm</td>
                                    <td>5:30pm</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                        <a href="sponsors" id="sponsors">&nbsp;</a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        );
    }
}


export default DTWSchedule;