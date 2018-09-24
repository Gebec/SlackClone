//some dummy data to be displayed
//will render part of the main flex

import * as React from "react";

interface MessageInterface {
  username: string,
  text: string,
}
export default class Message extends React.Component <MessageInterface, {}> {
  render() {
    return (
      <div className="message flex flex--row">
        <div className="message__image">
          Image
        </div>
        <div className="f-grow">
          <div className="p-next-m-l">
            <span className="bold">
              { this.props.username }
            </span>
            <span className="s-s">
              Time and space
            </span>
          </div>
          <div>{ this.props.text }</div>
        </div>
      </div>
    );
  }
}
