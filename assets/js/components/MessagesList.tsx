// Wrapper for all the messages

import * as React from "react";
import Message from "./Message";

export default class MessageList extends React.Component <{}> {
  render() {
    const DUMMY_MESSAGES = [
      {
        name: 'Author 1',
        text: 'Text message 1'
      },
      {
        name: 'Author 2',
        text: 'Text message 2'
      },
      {
        name: 'Author 3',
        text: 'Text message 3'
      },
      {
        name: 'Author 4',
        text: 'Text message 4'
      },
    ];

    return (
      <div>
        {DUMMY_MESSAGES.map((message, i) => <Message name={message.name} text={message.text} key={i}></Message>)}
      </div>
    );
  }
}