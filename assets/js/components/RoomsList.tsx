// Wrapper for all the rooms

import * as React from "react";

interface roomsInterface {
  name: string,
  id: number
}
export default class ChatRoomsList extends React.Component <{rooms: roomsInterface[]}> {
  render() {
    return (
      <div>
        <h3>Your rooms</h3>
        <ul>
          { this.props.rooms.map((room) => <li key={ room.id }>{ room.name }</li>)}
        </ul>
      </div>
    );
  }
}