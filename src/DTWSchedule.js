import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBadge} from "mdbreact";

class DTWSchedule extends Component {
  render() {
    return (
        <MDBContainer className="p-5">
          <MDBRow>
            <MDBCol>
              <h1 className="">Schedule</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-3 text-left">
            <MDBCol>
              <MDBTable>
                <MDBTableHead color="secondary-color" textWhite>
                  <tr>
                    <th>Activity/Talk</th>
                    <th>Speaker</th>
                    <th>Start</th>
                    <th>End</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td className="yellow lighten-5">Registration and morning refreshments</td>
                    <td className="yellow lighten-5">n/a</td>
                    <td className="yellow lighten-5">8:30am</td>
                    <td className="yellow lighten-5">9:00am</td>
                  </tr>
                  <tr>
                    <td>Opening Annoucements and Speaker Introduction</td>
                    <td>Organizers</td>
                    <td>9:00am</td>
                    <td>9:10am</td>
                  </tr>
                  <tr>
                    <td>Do Not Build a Website with Last Decade’s Tech</td>
                    <td>Brian McKeiver</td>
                    <td>9:10am</td>
                    <td>9:45am</td>
                  </tr>
                  <tr>
                    <td>From the Ground Up - Developing a Mobile App using Flutter</td>
                    <td>Don Ward</td>
                    <td>9:50am</td>
                    <td>10:25am</td>
                  </tr>
                  <tr>
                    <td className="yellow lighten-5">Break</td>
                    <td className="yellow lighten-5">n/a</td>
                    <td className="yellow lighten-5">10:25am</td>
                    <td className="yellow lighten-5">10:40am</td>
                  </tr>
                  <tr>
                    <td>The Phoenix Rises: Using Phoenix LiveView for Realtime apps with no Javascript</td>
                    <td>Matthew LaForest</td>
                    <td>10:40am</td>
                    <td>11:15am</td>
                  </tr>
                  <tr>
                    <td>Make reliable web apps without JS fatigue</td>
                    <td>Jared M. Smith</td>
                    <td>11:10am</td>
                    <td>11:45am</td>
                  </tr>
                  <tr>
                    <td className="yellow lighten-5">Lunch and Swag Pickup</td>
                    <td className="yellow lighten-5">n/a</td>
                    <td className="yellow lighten-5">11:45am</td>
                    <td className="yellow lighten-5">12:45pm</td>
                  </tr>
                  <tr>
                    <td>Getting started with Swift and Apple Watch development <MDBBadge color="secondary">Workshop</MDBBadge></td>
                    <td>Leo Dion</td>
                    <td>12:45pm</td>
                    <td>2:45pm</td>
                  </tr>
                  <tr>
                    <td>Building an interactive app from scratch in Elm <MDBBadge color="secondary">Workshop</MDBBadge></td>
                    <td>Mike Onslow</td>
                    <td>12:45pm</td>
                    <td>2:45pm</td>
                  </tr>
                  <tr>
                    <td>How ReasonML Will Make You 10x The ReactJS Developer</td>
                    <td>Peter Piekarczyk</td>
                    <td>12:50pm</td>
                    <td>1:25pm</td>
                  </tr>
                  <tr>
                    <td>Introduction to SQL++ for Big Data: Same Language, More Power</td>
                    <td>Matthew D. Groves</td>
                    <td>1:30pm</td>
                    <td>2:05pm</td>
                  </tr>
                  <tr>
                    <td className="yellow lighten-5">Break</td>
                    <td className="yellow lighten-5">n/a</td>
                    <td className="yellow lighten-5">2:05pm</td>
                    <td className="yellow lighten-5">2:20pm</td>
                  </tr>
                  <tr>
                    <td>Time to Pony Up!: A Tour of Pony</td>
                    <td>Josh Horwitz</td>
                    <td>2:20pm</td>
                    <td>2:55pm</td>
                  </tr>
                  <tr>
                    <td>Crystal: A language for humans and computers</td>
                    <td>Serdar (Sedo) Dogruyol</td>
                    <td>3:00pm</td>
                    <td>3:35pm</td>
                  </tr>
                  <tr>
                    <td className="yellow lighten-5">Break</td>
                    <td className="yellow lighten-5">n/a</td>
                    <td className="yellow lighten-5">3:35pm</td>
                    <td className="yellow lighten-5">3:50pm</td>
                  </tr>
                  <tr>
                    <td>Replacing 50 Year Old Regex Technology with Rosie Pattern Language</td>
                    <td>Jamie Jennings</td>
                    <td>3:50pm</td>
                    <td>4:25pm</td>
                  </tr>
                  <tr>
                    <td>Generating Your Assumptions</td>
                    <td>Michael Torres</td>
                    <td>4:30pm</td>
                    <td>5:00pm</td>
                  </tr>
                  <tr>
                    <td className="yellow lighten-5">Closing Ceremonies</td>
                    <td className="yellow lighten-5">n/a</td>
                    <td className="yellow lighten-5">5:00pm</td>
                    <td className="yellow lighten-5">5:30pm</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
              <a href="#sponsors" id="sponsors">&nbsp;</a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

    );
  }
}


export default DTWSchedule;