// Wrapper for all the messages

import * as React from "react";
import Message from "./Message";

interface MessageInterface{
  senderId: string,
  text: string
}

const MessageList: React.SFC<{messages: MessageInterface[]}> = (props) => {
  return (
    <div className="flex flex--col jc-end h-full scroll">
      { props.messages.map((message, i) => <Message username={message.senderId} text={message.text} key={i}></Message>)}
    </div>
  );
}

export default MessageList;