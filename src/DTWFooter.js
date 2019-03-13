import React, {Component} from 'react';
import {MDBContainerFluid, MDBRow, MDBCol} from "mdbreact";

class DTWFooter extends Component {
    render() {
        return (
            <div className="dtw-footer text-center fixed-bottom">
                <MDBRow>
                    <MDBCol>
                         <div>Copyright 2019 - Detroit Tech Watch</div>
                    </MDBCol>
                </MDBRow>
            </div>

        );
    }
}

export default DTWFooter;