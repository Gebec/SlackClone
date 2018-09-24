// Input where user types messages

import * as React from "react";

export default class SendMessageInput extends React.Component <{}> {
  render() {
    return (
      <div id="message-form" className="inline-wrapper border-grey flex radius-base p-all-m">
        <div className="border-grey--right">
          +
        </div>
        <input id="message-text" type="text" className="f-grow"></input>
        <div>
          <span>@</span>
          <span>#</span>
        </div>
      </div>
    );
  }
}