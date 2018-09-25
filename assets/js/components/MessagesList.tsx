// Wrapper for all the messages

import * as React from "react";
import Message from "./Message";

interface MessageInterface{
  senderId: string,
  text: string
}

const MessageList: React.SFC<{messages: MessageInterface[]}> = (props) => {

  const emptyList = (
    <div>
      Be the first to post in this room
    </div>
  );

  return (
    <div className="flex flex--col jc-end h-full scroll">
      { props.messages.length > 0 ? (
        props.messages.map((message, i) => <Message username={message.senderId} text={message.text} key={i}></Message>)
      ) : (
        emptyList
      )}
    </div>
  );
}

export default MessageList;