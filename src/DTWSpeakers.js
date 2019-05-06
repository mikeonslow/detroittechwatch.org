import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import DTWSpeakerPanel from './DTWSpeakerPanel'


const speakers = [
  {
    "name": "Brian McKeiver",
    'bio': 'Brian McKeiver is Co-Owner & Solutions Architect at BizStream, a software development company in Allendale, MI. He has over 17 years of experience leading his company that employs 30+ developers and technologists. In addition to his expertise in web development, integration, and digital marketing, Brian is active with the tech community via his blog at Mcbeev.com. He is one of only 3 people in the US with the title of Kentico MVP. When Brian isn’t working, he spends time with his wife and 3 daughters and is an avid sports geek.',
    'imageUrl': 'brianm.jpg',
    "talk": {
      'title': 'Do Not Build a Website with Last Decade’s Tech',
      'description':
          <div>
            <p>It’s 2019, promise me you will stop implementing large monolithic applications that take forever to load and even longer to develop on. The future of the web is JavaScript, APIs, and Markup; known as the JAMstack. See how GatsbyJS, Headless CMS, and GraphQL are the next decade’s tech instead.</p>
            <p>Sites that take forever and a day to render a web page have horrible consequences to your users and your goals, and don’t just take my word for it. A recent study by Akamai shows that every 100-millisecond delay in website load time can hurt conversion rates by 7%. That’s because the tech we have been using was architected long ago.</p>
            <p>Join my session and I’ll show you how to leverage a Microservice Architecture, the best Static Site Generator out there, Headless CMS, and Microsoft Azure to deliver a static website that can be deployed easily on dozens of services. You will be able to forget about the last decade’s tech problems of complicated deploys, server maintenance, and scaling fears.</p>
          </div>
    }
  },
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
    "name": "Serdar (Sedo) Dogruyol",
    'bio': <div>
      <p>I’m Serdar Dogruyol a.k.a Sedo. A Senior Software Engineer working remotely for RainforestQA. I’m also a core member of the Crystal programming language team and the creator of the Kemal web framework.</p>

      <p>My current main interests are Crystal (programming language), Self Development and Keynesian economics.</p>

      <p>I’m Open Source by default and you can check my Github for more.</p>
    </div>,
    'imageUrl': 'serdar.jpg',
    "talk": {
      'title': 'Crystal: A language for humans and computers',
      'description': <div>“Have you ever dreamed of a programming language as beautiful as Ruby and fast as C?”

        To be honest, I’ve always dreamed of something like that and wondered why it didn’t exist. Then I found Crystal and my dream became true.

        Crystal combines native execution speed with Ruby-inspired syntax, so you will feel right at home. In this talk, I’ll show you the power of Crystal as a modern language, combined with the power of types, a smart compiler and an easy to use concurrency model.
      </div>
    }
  },
  {
    "name": "Jamie Jennings",
    'bio':
        <div>
          <p>Jamie earned her Ph.D. in Computer Science from Cornell University, and has held positions in academia and industry. As a Senior Technical Staff Member in IBM, she created international technical standards that remain in wide use by the mobile phone industry today. She has also been chief architect for several IBM products. Today, she is back in academia, on the faculty of the Computer Science Department at North Carolina State University. In her spare time she plays ice hockey and writes compilers.</p>
        </div>,
    'imageUrl': 'jamiej.jpg',
    "talk": {
      'title': 'Replacing 50 Year Old Regex Technology with Rosie Pattern Language',
      'description':
          <div>
            <p>Regular expressions are everywhere. But they don’t scale in several important ways:</p>
            <ul>
              <li>Performance: Almost every implementation uses exponential backtracking, which can stall mining of big data, where input format anomalies are likely.</li>
              <li>Large collections of regex: Building collections of regex is fraught, because they don’t compose well. And too few libraries support naming patterns for re-use, especially across different programming languages.</li>
              <li>Perhaps most importantly, regex don’t scale to teams of people, because they are famously hard to read, understand, and maintain.</li>
            </ul>
            <p>The Rosie Pattern Language (RPL) addresses all of these scale challenges: big data is processed in predictable (usually linear) time in the input size; packages of composable patterns are easily shared; and it has a readable syntax, with named patterns, flexible whitespace, and comments, like a programming language.</p>
          </div>
    }
  },
  {
    "name": "Matthew LaForest",
    'bio':
        <div>
          <p>Always avoiding the fads to explore the systems that felt “right” to him. Matt has developed a passion for developing maintainable quality software that delivers what his customers really need (even if they don’t know what that is). He jumped on the React bandwagon pretty early, and is passionate about helping that community develop better practices to help them develop quality maintainable software.</p>
          <p>In his spare time, which with two toddlers is basically non-existent, Matt like to explore what is next, after JS and/or React, and doing projects around his house, like attempting to finish a basement despite no knowledge of construction or carpentry.</p>
        </div>,
    'imageUrl': 'matthewl.jpg',
    "talk": {
      'title': 'The Phoenix Rises: Using Phoenix LiveView for Realtime apps with no Javascript',
      'description':
          <div>
            <p>The web has been steadily moving towards richer client side experiences for a long time now. A lot of people point to GMail as the beginning of the single page app phenomenon, and it has only grown since then. Your users expect a rich interface from your application now, and you need to deliver it.</p>
            <p>But the migration to SPAs hasn’t been without its problems. Fundamentally, SPAs are actually two applications: a client side application that runs in your users browser, and the server side application that it communicates with it. Since you have now fundamentally built a distributed app you have added a whole slew of new problems into your world. How do you keep the business rules in sync between the systems? Have all of the error cases been accounted for? How do we manage releases between these separate, but tightly coupled applications?</p>
            <p>What if your server side application could provide a rich clientside experience without the Javascript? Introducing Phoenix LiveView a way to have your cake and eat it too.</p>
          </div>
    }
  },
  {
    "name": "Peter Piekarczyk",
    'bio': 'Peter Piekarczyk is the co-founder of Draftbit: a tool that allows anyone to build native apps visually with almost no learning curve. Draftbit is built with ReasonML and has allowed his team to move quickly and effortlessly. Peter loves to cycle, drink coffee and make music. He’s a huge fan of learning how to do new things. Peter was born in Chicago and speaks fluent Polish.',
    'imageUrl': 'peterp.jpg',
    "talk": {
      'title': 'How ReasonML Will Make You 10x The ReactJS Developer',
      'description':
      <div>
        <p>ReasonML is a new language and way to build not just websites powered by ReactJS, but powers a whole new ecosystem of utilization. Electron apps, CLIs, VM-based servers and any application JavaScript currently has can be improved using ReasonML. Build native CLI tools that are fast. Build native MacOS apps that don’t have to require all of Chrome and a 100mb min bundle size. Run your ReasonML apps on bare metal!</p>
        <p>The power that comes with ReasonML will change the way we write our JavaScript apps today. I’m excited to share with you what the future looks like!</p>
      </div>
    }
  },
  {
    "name": "Michael Torres",
    'bio':
        <div>
          <p>Mike is a senior software engineer at StockX where he helps provide experiences for over a million users on their Android app. He has a passion for functional programming, software correctness, and mechanical keyboards.</p>
        </div>,
    'imageUrl': 'michaelt.jpg',
    "talk": {
      'title': 'Generating Your Assumptions',
      'description':
          <div>
            <p>Tests are critical for verifying that we’re building the software we want; however, a good test suite is hard to achieve. Setting up scenarios is boring, repetitive, and time consuming. Not to mention we have to think of all these edge cases before our users exploit them.</p>
            <p>Property-based testing introduces developers to a new way of thinking about testing. We can create thousands of clever tests with just a small amount of code. We can then spend our time and effort effectively to help make sure the assumptions of our software hold true.</p>
          </div>
    }
  },
  {
    "name": "Matthew D. Groves",
    'bio': 'Matthew D. Groves is a guy who loves to code. It doesn’t matter if it’s C#, jQuery, or PHP: he’ll submit pull requests for anything. He has been coding ever since he wrote a QuickBASIC point-of-sale app for his parent’s pizza shop back in the 90s. He currently works as a Developer Advocate for Couchbase. His free time is spent with his family, watching the Reds, and getting involved in the developer community. He is the author of AOP in .NET (published by Manning), and is also a Microsoft MVP.',
    'imageUrl': 'matthewg.jpg',
    "talk": {
      'title': 'Introduction to SQL++ for Big Data: Same Language, More Power',
      'description':
      <div>
        <p>The most popular databases in the world all speak SQL, and almost 60% of Stack Overflow members use SQL. SQL is the query language that dominates when it comes to interacting with data. Data has changed since the 1970s; it’s no longer just stored in flat tables, but as rich, hierarchical object structures like JSON. SQL isn’t dead though, it just needed to evolve a little bit. In this session, you’ll learn about the next iteration of SQL: SQL++. Born from a UCSD research project, SQL++ is backwards-compatible and can work with heterogeneous data, with or without schemas and indexing. It is still the readable, declarative, highly composable language that you’re used to, but with extra super-powers. This session will focus on the enhancements that SQL++ brings, will show some of the databases that are already implementing it (including Couchbase, AsterixDB, Drill), and guidance on why and when to use it. You will enter with SQL skills and leave with big data skills.</p>
      </div>
    }
  },
  {
    "name": "Jared M. Smith",
    'bio':
    <div>
      <p>Jared M. Smith is a developer with 10+ years of experience collaborating, designing, and developing reliable software. With a background in healthcare and web development using a myriad of tools to solve problems for people, now he is writing Elm and Python full-time in transportation and logistics. He is contagiously enthusiastic about software development and a lover of languages, both natural and programming.</p>
      <p>Currently based out of Evansville, IN, he loves to play pool, practice yoga, and travel with his spouse and 3-year-old son.</p>
    </div>,
    'imageUrl': 'jared.jpg',
    "talk": {
      'title': 'Make reliable web apps without JS fatigue',
      'description':
      <div>
        <p>Do you ever get tired of writing unit tests for ridiculous edge cases? Are you stuck on an old AngularJS app and need to modernize it, unsure how to move forward? Are you an FP lover looking for something more cohesive than lodash/fp and Ramda? Do you have a need for high-reliability in your project’s domain? Maybe the barrage of JS frameworks & libraries, ES features, TypeScript features, and package security issues are wearing you down.</p>
        <p>Well, look no further! I will introduce you to Elm, a fun way to build reliable web apps. We will look at common issues with reliability in popular frameworks and explore some of the ways Elm prevents them. Along the way, we’ll see how Elm reduces JS fatigue and makes happier developers. At the end, I will show how you can easily introduce Elm into an existing Angular or React app.</p>
      </div>
    }
  },
  {
    "name": "Leo Dion",
    'bio':
    <div>
      Leo Dion runs BrightDigit, a company in Lansing, Michigan which specializes in software development
       in the Apple space: iOS, macOS, and watchOS as well as <a href="https://www.meetup.com/Lansing-Marketing-Hackers/" target="_blank" rel="noopener noreferrer">marketing integration</a>. 
       He has almost 10 years of experience developing in iOS and has been blogging about Swift since day 1. He lives his wife Betsy and 5 kids and currently run two podcasts: 
       <a href="https://www.empowerapps.show/subscribe" target="_blank" rel="noopener noreferrer">empowerapps.show on Apple and Business</a>,
       and <a href="https://okproductive.com/subscribe" target="_blank" rel="noopener noreferrer">okproductive.com, a productivity podcast for non-perfectionists</a>.
    </div>,
    'imageUrl': 'leo.jpg',
    "talk": {
      'type': 'workshop',
      'title': 'How to Get Started with Swift in 2019',
      'description':
      <div>
        <p>With Swift 5 and ABI stability, Swift has matured into a language ready for new adopters. In this talk, Leo gives an introduction to Swift development as well as its journey.</p>
        <p>This session will cover the basics of the syntax and how it is similar. This session will explain some differences such as Optionals, Enumerations, and Error Handling. We then build our first iOS Application with navigation, tabs, and a table view.</p>
        <p>By building the application, we can get into some of the patterns and practices in iOS development including Delegation, Protocol-Oriented Programming, and Functional Programming. Lastly, we’ll get into the basics of Apple Watch development and how can carry our skills to the watch.</p>
        <p>If you are interested in getting started with Swift and developing for the Apple Watch, you’ll want to check this workshop out.</p>
      </div>
    }
  },
  {
    "name": "Mike Onslow",
    'bio':
    <div>
      <p>Mike Onslow is a Principal Software Engineer at Clarity Voice. He has a passion for solving problems through the use of technology and sharing his knowledge with others. Over the past couple of years, Mike has found a technology stack that he truly loves in Elm and Elixir.</p>
    </div>,
    'imageUrl': 'mike.jpg',
    "talk": {
      'type': 'workshop',
      'title': 'Building an interactive app from scratch in Elm',
      'description':
      <div>
        <p>Elm is a functional programming language for front-end web development. Elm has been gaining popularity as it aims to solve many of the main pain points of the modern JavaScript developer.</p>
        <p>In this workshop, participants will build a small Elm app from the ground up. We'll start with basic syntax, explain how "The Elm Architecture" guides us as we develop our app and walk through Data Modelling and working with JSON APIs</p>          
        <p>We assume prior knowledge only of JavaScript or another imperative or object-oriented language.</p>
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