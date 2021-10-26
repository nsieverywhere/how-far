import React, { useState } from "react";
import Styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Contain = Styled.div`
    text-align: center;
    margin: 1.5rem;
`;

function Entry(props) {
  const [entry, SetEntry] = useState("");
  const [placeholder, SetPlaceholder] = useState(
    "Tell the world what's going on..."
  );

  function saveitem(e) {
    e.preventDefault();
    if (!entry) {
      SetPlaceholder("Enter a tweet");
    } else {
      props.onTweet(entry);
      SetEntry("");
    }
  }
  return (
    <Contain>
      <form onSubmit={saveitem}>
        <TextField
          sx={{ width: "25rem", "margin-right": "1rem" }}
          type="text"
          onChange={(e) => {
            SetEntry(e.target.value);
          }}
          value={entry}
          placeholder={placeholder}
        />
        <Button type="submit" variant="contained">
          Tweet
        </Button>
      </form>
    </Contain>
  );
}

export default Entry;
