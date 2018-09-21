//some dummy data to be displayed
//will render part of the main flex

import * as React from "react";

interface MessageInterface {
  name: string,
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
          <div className="pn-m-l">
            <span className="bold">
              { this.props.name }
            </span>
            <span className="s-s">
              Time
            </span>
          </div>
          <div>{ this.props.text }</div>
        </div>
      </div>
    );
  }
}