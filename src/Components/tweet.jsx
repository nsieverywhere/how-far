import React from "react";
import Styled from "styled-components";

const Tweetcard = Styled.div`
    background-color: white;
    min-height: 8rem;
    width: 94%;
    margin: auto;
    border: 1px solid gray;
    border-radius: 10px;
`;
function Tweet() {
  return (
    <div>
      <Tweetcard>
          
      </Tweetcard>
    </div>
  );
}

export default Tweet;
