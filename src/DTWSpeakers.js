import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon} from "mdbreact";
import DTWSpeakerPanel from './DTWSpeakerPanel'


const speakers = [
  {
    "name": "Grant Maki",
    'bio': 'Grant Maki is a software engineer at Ford Motor Company, where he has been working with Elm for just over a year. ' +
    'He was a lawyer briefly, but not anymore. Nothing in this talk constitutes legal advice.',
    'imageUrl': 'grant-maki.jpg',
    "talk": {
      'title': 'Facilitating Technology Change Through Cultural Change',
      'description': 'When we discuss how to help teams adopt new technologies or paradigms like Elm of Functional Programming, we often focus on a technical glide path. Not enough attention is given to building a team culture that is open to experimenting with new technologies and adopting them if the experiments go well. This talk will explore strategies and tactics to build such a culture through the lens of my team\'s experiences at Ford Motor Company. Building such a culture has produced a number of pleasant side effects, including allowing our team to adopt Elm for all of our front-end development.'
    }
  },
  {
    "name": "Don Ward",
    'bio': 'Director of Engineering at Quicken Loans, Certified SAFe Professional, Local Software Community Leader in Detroit',
    'imageUrl': 'don-ward.jpg',
    "talk": {
      'title': 'Mobile Development with Flutter',
      'description': <p>...</p>
    }
  },
  {
    "name": "Josh Horowitz",
    'bio': 'Josh is a software engineer at Ambyint where he works on creating the self driving car of oil wells.\n With experience in industries ranging from farming to finance, Josh was drawn to the promises of Pony and the problems it solved.',
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
      'title': "...",
      'description': <div>
        <a href="https://www.papercall.io/dtw" target="_blank" rel="noopener noreferrer"><MDBBtn size="lg"
                                                                                                 color="info">Submit
          a
          Proposal <MDBIcon far icon="paper-plane"/></MDBBtn></a>
      </div>
    }
  },
];

class DTWSpeakers extends Component {
  render() {

    const speakerImgStyle = {
      WebkitFilter: `grayscale(1)`,
      filter: `grayscale(1)`
    };

    const speakersList = speakers.map((speaker, i) =>
      <MDBCol sm="12" md="6" key={i} className="mb-5 d-flex align-items-stretch">
        <DTWSpeakerPanel speaker={speaker} key={i}/>
      </MDBCol>
    );

    return (
      <MDBContainer className="p-5 section dark">
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
        <a href="schedule" id="schedule"> </a>
      </MDBContainer>

    );
  }
}


export default DTWSpeakers;