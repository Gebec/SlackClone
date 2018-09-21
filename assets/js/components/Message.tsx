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
      <div>
        <div className="name">{ this.props.name }</div>
        <div className="text">{ this.props.text }</div>
      </div>
    );
  }
}