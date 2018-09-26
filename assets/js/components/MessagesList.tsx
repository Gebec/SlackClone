// Wrapper for all the messages

import * as React from "react";
import * as ReactDOM from "react-dom";
import Message from "./Message";

interface MessageInterface{
  senderId: string,
  text: string
}

class MessageList extends React.Component <{messages: MessageInterface[]}>  {

  shouldScrollToBottom: boolean;

  componentWillUpdate() {
    const node = (ReactDOM.findDOMNode(this) as HTMLInputElement);
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 200 >= node.scrollHeight;
  }


  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = (ReactDOM.findDOMNode(this) as HTMLInputElement);
      node.scrollTop = node.scrollHeight;
    }
  }

  emptyList = (
    <div>
      Be the first to post in this room
    </div>
  );

  render() {
    return (
      <div className="flex flex--col jc-end h-full scroll">
        { this.props.messages.length > 0 ? (
          this.props.messages.map((message, i) => <Message username={message.senderId} text={message.text} key={i}></Message>)
        ) : (
          this.emptyList
        )}
      </div>
    )
      };
}

export default MessageList;