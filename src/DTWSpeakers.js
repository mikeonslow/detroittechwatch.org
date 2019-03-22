import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon} from "mdbreact";
import DTWSpeakerPanel from './DTWSpeakerPanel'


const speakers = [
  {
    "name": "Don Ward",
    'bio':
        <div>
          <div>Don Ward currently helps lead the Detroit and Windsor Google Developers Groups. An avid technologist, he
            enjoys hosting software developer events as well as networking within the local
            software development community.</div>
          <div>During the day, Don works at Quicken Loans in downtown Detroit.</div>
        </div>,
    'imageUrl': 'don-ward.jpg',
    "talk": {
      'title': 'From the ground up - developing a mobile app using Flutter',
      'description':
          <div>
            <div>Flutter is Google’s cross-platform mobile platform for crafting high-quality native interfaces on iOS and
              Android in record time.
              Flutter works with existing code, is used by developers and organizations around the world, and is free
              and open source.</div>

            <div>Together we will start with an empty Flutter project and build it up step by step into a usable app.
              Along the way, you will pick up some of the fundamentals of Flutter development
              as well as the fundamentals of the Dart language. This intro will equip you with enough of a base to start
              building your own mobile apps in record time!</div></div>
    }
  },
  {
    "name": "Josh Horwitz",
    'bio': 'Josh is a software engineer at Ambyint creating web and cloud native applications focused on delivering industrial autonomy to its customers. ' +
    'With experience in industries ranging from farming to finance, Josh was drawn to the promises of Pony and the problems that it solved.',
    'imageUrl': 'josh-horowitz.jpg',
    "talk": {
      'title': 'Time to Pony Up!: A Tour of Pony',
      'description': 'Join Josh on a tour through Pony, which will allow you to write fast, safe, efficient and highly concurrent programs.'
    }
  },
  {
    "name": "You?",
    'bio': 'In addition to the speakers we\'ve lined up, we\'re actively looking for speakers for the Detroit Tech Watch for 2019.',
    'imageUrl': 'speaker.jpg',
    "talk": {
      'title': <MDBIcon icon="ellipsis-h"/>,
      'description': <div>
        <a href="https://www.papercall.io/dtw" target="_blank" rel="noopener noreferrer"><MDBBtn size="lg" color="info">Submit
          a Proposal <MDBIcon far icon="paper-plane"/></MDBBtn></a>
      </div>
    }
  },
];

class DTWSpeakers extends Component {
  render() {

    const speakersList = speakers.map((speaker, i) =>
        <MDBCol sm="12" md="6" key={i} className="mb-5 d-flex align-items-stretch">
          <DTWSpeakerPanel speaker={speaker} key={i}/>
        </MDBCol>
    );

    return (
        <MDBContainer className="p-5">
          <MDBRow>
            <MDBCol>
              <h1 className="">Speakers</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <h1 className="">&nbsp;</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {speakersList}
          </MDBRow>
          <a href="#schedule" id="schedule"> </a>
        </MDBContainer>

    );
  }
}


export default DTWSpeakers;