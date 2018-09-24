// Wrapper for all the rooms

import * as React from "react";

export default class ChatRoomsList extends React.Component <{}> {
  render() {
    const DUMMY_ROOMS: string[] = [
      'dummy room 1', 'dummy room 2', 'dummy room 3', 'dummy room 4', 'dummy room 5'
    ]
    return (
      <div>
        { DUMMY_ROOMS.map((room, i) => <div key={i}>{ room }</div>)}
      </div>
    );
  }
}