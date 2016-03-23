// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import fetch from 'isomorphic-fetch';
import GraphiQL from 'graphiql';

require('graphiql/graphiql.css')
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#F8C92D"
});

function graphQLFetcher(graphQLParams) {
  return fetch('http://192.168.220.48:1910/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              GraphQL
            </Heading>
            <Heading size={4} textColor="white" caps>
              Data everywhere
            </Heading>
          </Slide>

          <Slide>
            <Image src="https://avatars3.githubusercontent.com/u/5370212?v=3&u=188bd3551812b7aaec2ba323855d563a73766664&s=200" style={{borderRadius: '50%'}} />
            <Heading size={1} textColor="white">
              Simon Nord
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1}>
              Links
            </Heading>
            <List>
              <ListItem><Link target="_blank" href="https://github.com/graphql/graphql-js">
                Reference Implementation
              </Link></ListItem>
              <ListItem><Link target="_blank" href="https://github.com/graphql/graphiql">
                Interactive GraphiQL
              </Link></ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1}>
              REST
            </Heading>
            <Appear>
              <p>
                /users
              </p>
            </Appear>
            <Appear>
              <p>
                /user/[id]/friends
              </p>
            </Appear>
            <Appear>
              <p>
                /usersWithFriends
              </p>
            </Appear>
            <Appear>
              <p>
                /usersWithFriendsExceptSameFriend
              </p>
            </Appear>
          </Slide>

          <Slide>
            <CodePane
              lang="js"
              source={require("raw!../assets/userData.example")}
              margin="20px auto"
            />

          </Slide>

          <Slide>
            <div style={{height: window.innerHeight * 0.8, textAlign: 'left',fontSize: 50}}>
              <GraphiQL fetcher={graphQLFetcher} />
            </div>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
