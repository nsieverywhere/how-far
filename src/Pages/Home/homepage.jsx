import React, { useState } from "react";
import Entry from "Components/entry";
import Styled from "styled-components";
import Tweet from "Components/tweet";

const Mainfeed = Styled.div`
    background-color: #f7f7f7;
    margin: 1rem auto;
    width: 40%;
    min-height: 120px;
    padding: 0.3rem 0 2rem 0;
    
`;

function Homepage() {
  const [tweet, SetTweet] = useState([]);

  const onTweet = function (entry) {
    SetTweet([...tweet, entry]);
    console.log(tweet);
  };

  return (
    <Mainfeed>
      <Entry onTweet={onTweet} />
      <Tweet />
    </Mainfeed>
  );
}

export default Homepage;
